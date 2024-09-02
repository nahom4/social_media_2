import { NgModule } from "@angular/core";
import { MessageComponent } from "./Message";
import { StatComponent } from "./Stat";
import { ContactsComponent } from "./Contacts";
import { NotificationTileComponent } from "./NotificationTile";
import { TileComponent } from "./Tile";

@NgModule({
    declarations: [
     
      ],
    imports: [
        MessageComponent,
        StatComponent,
        ContactsComponent,
        NotificationTileComponent,
        TileComponent
      ],
    providers: [
     
    ],
    exports: [MessageComponent,
              StatComponent,
              ContactsComponent,
              NotificationTileComponent,
              TileComponent
          ],
  })
  export class ComponentsModule { }