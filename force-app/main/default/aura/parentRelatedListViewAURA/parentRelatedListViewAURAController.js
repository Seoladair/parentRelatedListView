({
     
    fetchRecords : function(component, event, helper) {  
          
        component.set( "v.showErrors", false);
        var temObjName = component.get( "v.sobjectName" );  
        var action = component.get( "c.fetchRecs" );  
        action.setParams({  
            thisId: component.get( "v.recordId" ),
            lookupFldNam: component.get( "v.lookupFieldName" ),
            sobjName: temObjName,  
            parentFldNam: component.get( "v.parentFieldName" ),  
            criteria: component.get( "v.criteria" )  

        });  
        action.setCallback(this, function(response) {  
            var state = response.getState();  
            if ( state === "SUCCESS" ) {  
                  
                var tempTitle = component.get( "v.title" );  
                component.set( "v.listRecords", response.getReturnValue().listsObject );  
                component.set( "v.title", tempTitle + response.getReturnValue().title );  
                component.set( "v.parentRecId", response.getReturnValue().parentId );  
                  
            } if ( state === "ERROR" ) {
                var errors = action.getError();
                component.set( "v.showErrors", true);
                component.set( "v.errorMessage", errors[0].message);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    type: 'error',
                    message: 'There is a problem with the ParentObjectRelatedListViewer component.',
                });
                toastEvent.fire();
            };
            component.set( "v.doneLoading", true);
        });  
        $A.enqueueAction(action);  
          
    },  
      
    viewRelatedList: function (component, event, helper) {  
          
        var navEvt = $A.get("e.force:navigateToRelatedList");  
        navEvt.setParams({  
            "relatedListId": component.get( "v.childRelName" ),  
            "parentRecordId": component.get( "v.parentRecId" )  
        });  
        navEvt.fire();  
    },  
      
    viewRecord: function (component, event, helper) {  
          
        var navEvt = $A.get("e.force:navigateToSObject");  
        var recId = event.getSource().get( "v.value" )  
        navEvt.setParams({  
            "recordId": recId  
        });  
        navEvt.fire();  
          
    }  
      
})