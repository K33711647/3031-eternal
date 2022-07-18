import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import { GrDocumentText, GrDocument } from "react-icons/gr";

export default () =>
  S.list()
    .title("Content")
    .items([
      // S.listItem()
      //   .title("Splash Screen")
      //   .child(
      //     S.document().schemaType("splashScreen").documentId("splashScreen")
      //   ),
      orderableDocumentListDeskItem({
        type: "projects",
        title: "Projects",
        icon: GrDocument,
      }),
      orderableDocumentListDeskItem({
        type: "pages",
        title: "Pages",
        icon: GrDocumentText,
      }),
    ]);
