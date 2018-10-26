


/**
 * Kelvin 
 */


//Modelo
var model = {
    title: 'Bem vindo kelvin',
    usuarios: [
        {
            id: 1,
            nome: 'Nonato',
            sobrenome: 'Dias',
            idade: 23
        },
        {
            id: 2,
            nome: 'Kelvin',
            sobrenome: 'Kepler',
            idade: 25
        },
        {
            id: 3,
            nome: 'Ricarte',
            sobrenome: 'BArros',
            idade: 30
        }
    ]
}

/**********  view ********** */
var viewTitle = {
    init: function(){
        this.$el = $('#id-title');
        this.render();
    },

    render: function(){
        this.$el.html(model.title)
    }
}


var viewTableMain = {
    init: function(){
        var that = this;
        this.$el = $('#id-view-table_main');
        this.$tbody = $('#id-tbody_main');

        $('#add-user').click(function(){
            that.addUser()
        })

        this.render();
    },

    render: function(){        
        this.$tbody.html('');
        for(var i=0; i < model.usuarios.length; i++){
            var user = model.usuarios[i];
            this.$tbody.append(
                this.addTr(user)      
            )
        }
    },

    addTr: function(user){
        return (
            '<tr>'+
                '<th scope="row">'+user.id+'</th>'+
                '<td>'+user.nome+'</td>'+
                '<td>'+user.sobrenome+'</td>'+
                '<td>'+user.idade+'</td>'+
            '</tr>'
        )
    },

    addUser: function(){
        var user = {
            nome: 'Nome',
            sobrenome: 'so',
            idade: 50,
            id: 45
        }

        model.usuarios.push(user);
        this.render();
    },

    addLine: function(){
        
    }
}


/******* controlador ********/
var controller = {
    init: function(){
        viewTitle.init()
        viewTableMain.init();
    }
}

controller.init();