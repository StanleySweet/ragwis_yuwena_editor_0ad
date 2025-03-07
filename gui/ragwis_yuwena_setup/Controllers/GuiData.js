/**
 * This class contains network-synchronized data specific to EditorSettingsController.
 * It's split from EditorSettingsController for convenience.
 */
 class EditorSettingsGuiData
 {
     constructor()
     {
         this.mapFilter = new Observable();
         this.mapFilter.filter = "default";
 
         // Mark some settings as unmodifiable even if they normally would be.
         // TODO: increase support for this feature.
         this.lockSettings = {};
     }
 
     /**
      * Serialize for network transmission & settings persistence.
      */
     Serialize()
     {
         const ret = {
             "mapFilter": this.mapFilter.filter
         };
         if (Object.keys(this.lockSettings).length)
             ret.lockSettings = this.lockSettings;
         return ret;
     }
 
     Deserialize(data)
     {
         this.mapFilter.filter = data.mapFilter;
         this.lockSettings = data?.lockSettings || {};
     }
 }
 