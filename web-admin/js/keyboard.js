function RemoteKeyboard(remoteChat){
    this.remoteChat = remoteChat;
	this.manage = false;
	var obj = this;  // for event handlers

    ui.on('RemoteChat.onManagementStart', function(){
        this.manage = true;
    }, this);

    ui.on('RemoteChat.onManagementStop', function(){
        this.manage = false;
    }, this);

    $(document).on('keydown', function(e){
		if (!obj.manage) {
		    return;
		}
		var encodedKey = e.key.replace('%', '%25').replace(',', '%2C');
		obj.remoteChat.sendData(`key,${encodedKey}`);
    });
}
