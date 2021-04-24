import { NgModule } from "@angular/core";
import { CommonModule, NgClass } from "@angular/common";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts/contacts.component";

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, ContactsRoutingModule, NgClass],
  exports: [ContactsComponent],
})
export class ContactsModule {}
