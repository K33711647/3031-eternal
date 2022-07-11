// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageModuleImage from "./objects/page-module-image";
import pageModuleSectionTitle from "./objects/page-module-section-title";
import pageModuleLargeText from "./objects/page-module-large-text";
import pageModuleAccordion from "./objects/page-module-accordion";
import pageModulePaq from "./objects/page-module-paq";

import projectModuleImages from "./objects/project-module-images";
import projectModuleVideo from "./objects/project-module-video";
import projectModuleText from "./objects/project-module-text.js";

import pages from "./pages";
import projects from "./projects";
import splashScreen from "./splash-screen";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    pages,
    projects,
    splashScreen,
    pageModuleImage,
    pageModuleSectionTitle,
    pageModuleLargeText,
    pageModuleAccordion,
    pageModulePaq,
    projectModuleImages,
    projectModuleVideo,
    projectModuleText,
  ]),
});
