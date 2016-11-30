


;(function(window,document) {
    var w = window,doc = document;
    var ronger = function(selector) {
        return new ronger.prototype.init(selector);
    }
    ronger.prototype = {
        constructor : ronger,
        length : 0,
        splice: [].splice,
        selector : '',
        init : function(selector) {
			if(!selector) { return this; }
			var selector = selector.trim(),
				elm;
			if (selector.charAt(0) == '#' && !selector.match('\\s')) {
				selector = selector.substring(1);
				this.selector = selector;
				elm = doc.getElementById(selector);
				this[0] = elm;
				this.length = 1;
				return this;
			} else {
				elm = doc.querySelectorAll(selector);
				for (var i = 0; i < elm.length; i++) {
					this[i] = elm[i];
				}
				this.selector = selector;
				this.length = elm.length;
				return this;
			}
        },
		hasClass: function(className){
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
			for (var i = 0; i < this.length; i++) {
				if (this[i].className.match(reg)) return true;
					return false;
			}
			return this;
		},
        hide:function(){
            Array.from(this).forEach(function(e,i){
                e.style.display = "none";
            });
        },
        show:function(){
            Array.from(this).forEach(function(e,i){
                e.style.display = "";
            });
        },
        remove:function(){
            Array.from(this).forEach(function(el,i){
                el.parentNode.removeChild(el);
            });
        },
        append: function(item){
            this[0].appendChild(item);
        }

    }
    ronger.prototype.init.prototype = ronger.prototype;
    ronger.ajax = function(){
        console.log(this);
    };

    window.jR = ronger;
})(window,document);
