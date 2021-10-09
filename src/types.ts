// Taking directly from vscode source code

interface IRawGalleryExtensionFile {
    readonly assetType: string;
    readonly source: string;
}

interface IRawGalleryExtensionProperty {
    readonly key: string;
    readonly value: string;
}

export interface IRawGalleryExtensionVersion {
    readonly version: string;
    readonly lastUpdated: string;
    readonly assetUri: string;
    readonly fallbackAssetUri: string;
    readonly files: IRawGalleryExtensionFile[];
    readonly properties?: IRawGalleryExtensionProperty[];
    readonly targetPlatform?: string;
}

interface IRawGalleryExtensionStatistics {
    readonly statisticName: string;
    readonly value: number;
}

interface IRawGalleryExtension {
    readonly extensionId: string;
    readonly extensionName: string;
    readonly displayName: string;
    readonly shortDescription: string;
    readonly publisher: {
        displayName: string;
        publisherId: string;
        publisherName: string;
    };
    readonly versions: IRawGalleryExtensionVersion[];
    readonly statistics: IRawGalleryExtensionStatistics[];
    readonly tags: string[] | undefined;
    readonly releaseDate: string;
    readonly publishedDate: string;
    readonly lastUpdated: string;
    readonly categories: string[] | undefined;
    readonly flags: string;
}

export interface IRawGalleryQueryResult {
    readonly results: {
        readonly extensions: IRawGalleryExtension[];
        readonly resultMetadata: {
            readonly metadataType: string;
            readonly metadataItems: {
                readonly name: string;
                readonly count: number;
            }[];
        }[];
    }[];
}
