import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experience) */
export type Experience = Entry & _Node & {
  __typename?: 'Experience';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  entriesCollection?: Maybe<ExperienceEntriesCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ExperienceLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experience) */
export type ExperienceEntriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceEntriesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceEntryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experience) */
export type ExperienceInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExperienceCollection = {
  __typename?: 'ExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExperienceEntriesCollection = {
  __typename?: 'ExperienceEntriesCollection';
  items: Array<Maybe<ExperienceEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ExperienceEntriesCollectionOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntry = Entry & _Node & {
  __typename?: 'ExperienceEntry';
  _id: Scalars['ID']['output'];
  company?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  endDate?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ExperienceEntryLinkingCollections>;
  location?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<ExperienceEntryOverview>;
  position?: Maybe<Scalars['String']['output']>;
  stack?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  startDate?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryCompanyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryOverviewArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryStackArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/experienceEntry) */
export type ExperienceEntryUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceEntryCollection = {
  __typename?: 'ExperienceEntryCollection';
  items: Array<Maybe<ExperienceEntry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExperienceEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceEntryFilter>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  endDate_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate_not?: InputMaybe<Scalars['String']['input']>;
  endDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  overview_contains?: InputMaybe<Scalars['String']['input']>;
  overview_exists?: InputMaybe<Scalars['Boolean']['input']>;
  overview_not_contains?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_exists?: InputMaybe<Scalars['Boolean']['input']>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  startDate_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate_not?: InputMaybe<Scalars['String']['input']>;
  startDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExperienceEntryLinkingCollections = {
  __typename?: 'ExperienceEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  experienceCollection?: Maybe<ExperienceCollection>;
};


export type ExperienceEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ExperienceEntryLinkingCollectionsExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceEntryLinkingCollectionsExperienceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExperienceEntryLinkingCollectionsExperienceCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ExperienceEntryOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ExperienceEntryOverview = {
  __typename?: 'ExperienceEntryOverview';
  json: Scalars['JSON']['output'];
  links: ExperienceEntryOverviewLinks;
};

export type ExperienceEntryOverviewAssets = {
  __typename?: 'ExperienceEntryOverviewAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExperienceEntryOverviewEntries = {
  __typename?: 'ExperienceEntryOverviewEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExperienceEntryOverviewLinks = {
  __typename?: 'ExperienceEntryOverviewLinks';
  assets: ExperienceEntryOverviewAssets;
  entries: ExperienceEntryOverviewEntries;
  resources: ExperienceEntryOverviewResources;
};

export type ExperienceEntryOverviewResources = {
  __typename?: 'ExperienceEntryOverviewResources';
  block: Array<ExperienceEntryOverviewResourcesBlock>;
  hyperlink: Array<ExperienceEntryOverviewResourcesHyperlink>;
  inline: Array<ExperienceEntryOverviewResourcesInline>;
};

export type ExperienceEntryOverviewResourcesBlock = ResourceLink & {
  __typename?: 'ExperienceEntryOverviewResourcesBlock';
  sys: ResourceSys;
};

export type ExperienceEntryOverviewResourcesHyperlink = ResourceLink & {
  __typename?: 'ExperienceEntryOverviewResourcesHyperlink';
  sys: ResourceSys;
};

export type ExperienceEntryOverviewResourcesInline = ResourceLink & {
  __typename?: 'ExperienceEntryOverviewResourcesInline';
  sys: ResourceSys;
};

export type ExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  entries?: InputMaybe<CfExperienceEntryNestedFilter>;
  entriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExperienceOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/hero) */
export type Hero = Entry & _Node & {
  __typename?: 'Hero';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<HeroDescription>;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  summary?: Maybe<HeroSummary>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/hero) */
export type HeroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/hero) */
export type HeroSkillsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/hero) */
export type HeroSummaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/lbiziv4un3dy/content_types/hero) */
export type HeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroDescription = {
  __typename?: 'HeroDescription';
  json: Scalars['JSON']['output'];
  links: HeroDescriptionLinks;
};

export type HeroDescriptionAssets = {
  __typename?: 'HeroDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroDescriptionEntries = {
  __typename?: 'HeroDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroDescriptionLinks = {
  __typename?: 'HeroDescriptionLinks';
  assets: HeroDescriptionAssets;
  entries: HeroDescriptionEntries;
  resources: HeroDescriptionResources;
};

export type HeroDescriptionResources = {
  __typename?: 'HeroDescriptionResources';
  block: Array<HeroDescriptionResourcesBlock>;
  hyperlink: Array<HeroDescriptionResourcesHyperlink>;
  inline: Array<HeroDescriptionResourcesInline>;
};

export type HeroDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type HeroDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type HeroDescriptionResourcesInline = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesInline';
  sys: ResourceSys;
};

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  skills_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_exists?: InputMaybe<Scalars['Boolean']['input']>;
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  summary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroSummary = {
  __typename?: 'HeroSummary';
  json: Scalars['JSON']['output'];
  links: HeroSummaryLinks;
};

export type HeroSummaryAssets = {
  __typename?: 'HeroSummaryAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroSummaryEntries = {
  __typename?: 'HeroSummaryEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroSummaryLinks = {
  __typename?: 'HeroSummaryLinks';
  assets: HeroSummaryAssets;
  entries: HeroSummaryEntries;
  resources: HeroSummaryResources;
};

export type HeroSummaryResources = {
  __typename?: 'HeroSummaryResources';
  block: Array<HeroSummaryResourcesBlock>;
  hyperlink: Array<HeroSummaryResourcesHyperlink>;
  inline: Array<HeroSummaryResourcesInline>;
};

export type HeroSummaryResourcesBlock = ResourceLink & {
  __typename?: 'HeroSummaryResourcesBlock';
  sys: ResourceSys;
};

export type HeroSummaryResourcesHyperlink = ResourceLink & {
  __typename?: 'HeroSummaryResourcesHyperlink';
  sys: ResourceSys;
};

export type HeroSummaryResourcesInline = ResourceLink & {
  __typename?: 'HeroSummaryResourcesInline';
  sys: ResourceSys;
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experience?: Maybe<Experience>;
  experienceCollection?: Maybe<ExperienceCollection>;
  experienceEntry?: Maybe<ExperienceEntry>;
  experienceEntryCollection?: Maybe<ExperienceEntryCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceFilter>;
};


export type QueryExperienceEntryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExperienceEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceEntryFilter>;
};


export type QueryHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfExperienceEntryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfExperienceEntryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfExperienceEntryNestedFilter>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  endDate_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate_not?: InputMaybe<Scalars['String']['input']>;
  endDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  overview_contains?: InputMaybe<Scalars['String']['input']>;
  overview_exists?: InputMaybe<Scalars['Boolean']['input']>;
  overview_not_contains?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_exists?: InputMaybe<Scalars['Boolean']['input']>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stack_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  startDate_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startDate_not?: InputMaybe<Scalars['String']['input']>;
  startDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', hero?: { __typename?: 'Hero', title?: string | null, skills?: Array<string | null> | null, description?: { __typename?: 'HeroDescription', json: any } | null, summary?: { __typename?: 'HeroSummary', json: any } | null } | null, experience?: { __typename?: 'Experience', entriesCollection?: { __typename?: 'ExperienceEntriesCollection', items: Array<{ __typename?: 'ExperienceEntry', position?: string | null, company?: string | null, url?: string | null, startDate?: string | null, endDate?: string | null, location?: string | null, type?: string | null, stack?: Array<string | null> | null, overview?: { __typename?: 'ExperienceEntryOverview', json: any } | null } | null> } | null } | null };


export const HomepageDocument = gql`
    query Homepage {
  hero(id: "4mE3nWVOpzyArUndqNBpbb") {
    title
    description {
      json
    }
    skills
    summary {
      json
    }
  }
  experience(id: "79zsasaFLMpNoO5ujz5a1K") {
    entriesCollection(limit: 10) {
      items {
        position
        company
        url
        startDate
        endDate
        location
        type
        overview {
          json
        }
        stack
      }
    }
  }
}
    `;

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageQuery(baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
      }
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
        }
export function useHomepageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
        }
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageSuspenseQueryHookResult = ReturnType<typeof useHomepageSuspenseQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;