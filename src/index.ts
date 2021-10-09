import axios, { AxiosResponse } from "axios";
import { IRawGalleryQueryResult } from "./types";
import fs from "fs";

const query = {
    assetTypes: [
        "Microsoft.VisualStudio.Services.Icons.Default",
        "Microsoft.VisualStudio.Services.Icons.Branding",
        "Microsoft.VisualStudio.Services.Icons.Small",
    ],
    filters: [
        {
            criteria: [
                {
                    filterType: 8,
                    value: "Microsoft.VisualStudio.Code",
                },
                {
                    filterType: 10,
                    value: 'target:"Microsoft.VisualStudio.Code" ',
                },
                {
                    filterType: 12,
                    value: "37888",
                },
                {
                    filterType: 5,
                    value: "Themes",
                },
            ],
            direction: 2,
            pageSize: 100,
            pageNumber: 1,
            sortBy: 4,
            sortOrder: 0,
            pagingToken: null,
        },
    ],
    flags: 870,
};

export async function getExtensions() {
    const response: AxiosResponse<IRawGalleryQueryResult> = await axios.post(
        "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
        query,
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json;api-version=3.0-preview.1",
                "Accept-Encoding": "gzip",
            },
        }
    );
    return response.data;
}

(async () => {
    const extensions = await getExtensions();

    fs.writeFileSync(
        "./themes.json",
        JSON.stringify({
            themes: extensions.results[0].extensions,
        }, null, 2)
    );
})();
