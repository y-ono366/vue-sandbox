export const Shareble = {
  data: function() {
    return {
      _isProcessing: false
    };
  },
  methods: {
    share: function() {
      if (this._isProcessing) {
        return;
      }
      if (!window.confirm("シェエアしますか?")) {
        return;
      }
      this._isProcessing = true;
      //ここでSDK

      setTimeout(() => {
        window.alert("シェアしました。");
      }, 300);
    }
  }
};
