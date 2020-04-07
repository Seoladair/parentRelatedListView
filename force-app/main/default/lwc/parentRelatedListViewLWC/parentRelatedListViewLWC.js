import { LightningElement, track, api } from 'lwc';

export default class ParentRelatedListViewLWC extends LightningElement {
    @api recordId;
    title;
    criteria;
    relatedListURL;
    lookupFieldName;
    parentRecId;
    sobjectName;
    objectName = "<Test>";
    childRelName;
    iconName;
    field1;
    field2;
    field3;
    field4;
    listRecords;
    showErrors;
    errorMessage;

    fetchRecords(event) {

    }

    viewRelatedList(event) {

    }

    viewRelatedList(event) {

    }

    get viewObjName () {
        return `View ${this.objectName}`;
    }
}