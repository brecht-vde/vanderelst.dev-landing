import queryService from "./service";
import { Site as SiteType } from "../types";

let site: SiteType;

export const Site = async (): Promise<SiteType> => {
  if (!site) {
    const identifier = process.env.SITE_IDENTIFIER;

    if (!identifier)
      throw new Error("SITE_IDENTIFIER variable is not defined.");

    const result = await queryService.queryAsync<{ site: SiteType }>(
      `query Site {
        site(where: {identifier: "${identifier}"}) {
          profile {
            bio
          }
          navigation {
            value
            url
          }
          seo {
            author
            description
            keywords
            robots
            title
            image {
              url
            }
          }
          favicon {
            url
          }
        }
      }
      `
    );
    site = result.site;
  }
  return site;
};
