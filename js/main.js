var app = {

findByName: function() {
    var self = this;
    this.store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(self.employeeLiTpl(employees));
    });
},
	
renderHomeView: function() {
    $('body').html(this.homeTpl());
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
},

initialize: function() {
    var self = this;
    this.store = new MemoryStore(function() {
		this.homeTpl = Handlebars.compile($("#home-tpl").html());
		this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
        self.renderHomeView();
    });
}

app.initialize();