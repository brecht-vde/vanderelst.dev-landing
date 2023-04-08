import {
  RelationalFieldType,
  SimpleFieldType,
} from "@hygraph/management-sdk";
import Options from "./options.js";
import BaseSchema from "./baseSchema.js";

export default class SchemaV1 extends BaseSchema {
  constructor(options: Options, name: string) {
    super(options, name);
  }

  apply(): void {
    // Profile
    this._client.createComponent({
      apiId: "Profile",
      apiIdPlural: "Profiles",
      displayName: "Profile",
    });

    this._client.createSimpleField({
      apiId: "bio",
      displayName: "Bio",
      type: SimpleFieldType.String,
      isRequired: true,
      isTitle: true,
      parentApiId: "Profile",
      formRenderer: "GCMS_MARKDOWN",
    });

    // Navigation
    this._client.createComponent({
      apiId: "Navigation",
      apiIdPlural: "Navigations",
      displayName: "Navigation",
    });

    this._client.createSimpleField({
      apiId: "value",
      displayName: "Value",
      type: SimpleFieldType.String,
      isTitle: true,
      isRequired: true,
      parentApiId: "Navigation",
      formRenderer: "GCMS_MULTI_LINE",
    });

    this._client.createSimpleField({
      apiId: "url",
      displayName: "Url",
      type: SimpleFieldType.String,
      parentApiId: "Navigation",
    });

    // SEO
    this._client.createComponent({
      apiId: "SEO",
      apiIdPlural: "SEOs",
      displayName: "SEO",
    });

    this._client.createSimpleField({
      apiId: "title",
      displayName: "Title",
      type: SimpleFieldType.String,
      parentApiId: "SEO",
      isRequired: true,
    });

    this._client.createSimpleField({
      apiId: "keywords",
      displayName: "Keywords",
      type: SimpleFieldType.String,
      parentApiId: "SEO",
      isRequired: true,
    });

    this._client.createSimpleField({
      apiId: "author",
      displayName: "Author",
      type: SimpleFieldType.String,
      parentApiId: "SEO",
      isRequired: true,
    });

    this._client.createSimpleField({
      apiId: "description",
      displayName: "Description",
      type: SimpleFieldType.String,
      parentApiId: "SEO",
      isRequired: true,
    });

    this._client.createSimpleField({
      apiId: "robots",
      displayName: "Robots",
      type: SimpleFieldType.String,
      parentApiId: "SEO",
      isRequired: true,
    });

    this._client.createRelationalField({
      apiId: "image",
      displayName: "Image",
      type: RelationalFieldType.Asset,
      parentApiId: "SEO",
      reverseField: {
        apiId: "image",
        isUnidirectional: true,
        modelApiId: "Asset",
        displayName: "SEO_Image",
      },
      isRequired: true,
    });

    // Site
    this._client.createModel({
      apiId: "Site",
      apiIdPlural: "Sites",
      displayName: "Site",
    });

    this._client.createSimpleField({
      apiId: "identifier",
      displayName: "Identifier",
      type: SimpleFieldType.String,
      isRequired: true,
      isTitle: true,
      modelApiId: "Site",
      isUnique: true,
    });

    this._client.createComponentField({
      apiId: "profile",
      componentApiId: "Profile",
      displayName: "Profile",
      parentApiId: "Site",
    });

    this._client.createComponentField({
      apiId: "navigation",
      componentApiId: "Navigation",
      displayName: "Navigation",
      parentApiId: "Site",
      isList: true,
    });

    this._client.createComponentField({
      apiId: "seo",
      componentApiId: "SEO",
      displayName: "SEO",
      parentApiId: "Site",
    });

    this._client.createRelationalField({
      apiId: "favicon",
      displayName: "Favicon",
      isRequired: true,
      type: RelationalFieldType.Asset,
      modelApiId: "Site",
      reverseField: {
        apiId: "favicon",
        isUnidirectional: true,
        modelApiId: "Asset",
        displayName: "Asset",
      },
    });
  }
}
