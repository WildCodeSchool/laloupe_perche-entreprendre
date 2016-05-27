$(window).load(function() {
    reAdd();



    //Grossissement tuile "créer activité/contact"
    function reAdd() {
        $('.controlCreateActivity').click(function() {
            $('.scoopitou').css({
                transform: 'translateX(-415px)'
            });
            $(this).css({
                width: '1128px',
                height: '800px'
            }).addClass('newCreateActivity').removeClass('controlCreateActivity');
            $('.littleActivity').css('margin-top', '-780px');
            $('.myAgenda').css({
                width: '800px',
                height: '250px',
                transform: 'translateY(-280px) translateX(164px)'
            });
            $('.buySociety').css({
                width: '1128px',
                transform: 'translateY(-280px)'
            });
            $('.last').css('transform', 'translateY(-280px)').css('margin-bottom', '-280px');
            add();
        });
    }
    // Fin fonction  Aggrandissement tuile "créer activité/contact"


    //Rétrecissement tuile "créer activité/contact"
    function add() {
        $('.newCreateActivity').click(function() {
            $(this).css({
                width: '',
                height: ''
            });
            $(this).addClass('controlCreateActivity');
            $('.myAgenda').css({
                width: '',
                heiht: '',
                transform: 'translateY(0px) translateX(0px)'
            });
            $('.littleActivity').css('margin-top', '');
            $('.buySociety').css({
                width: '',
                transform: 'translateY(0px)'
            });
            $('.scoopitou').css({
                transform: 'translateX(0px)'
            });
            $('.last').css('transform', 'translateY(0px)').css('margin-bottom', '0px');
            reAdd();

        });
    }
    // Fin fonction  Rétrécissement tuile "créer activité/contact"
    agendaReAdd();

    //Grossissement tuile "agenda"
    function agendaReAdd() {
        $('.myAgenda').click(function() {
            $('.createActivity').css({
                width: '800px',
                height: '250px'
            })
            $(this).css({
                width: '1128px',
                height: '600px'
            }).addClass('newMyAgenda').removeClass('controlMyAgenda');
            $('.buySociety').css({
                width: '1128px'
            });
            /*if ($('.createActivity').width() == 250) {
              $('.myAgenda').css('transform', 'translateY(280px)');
            } else {
              $('.myAgenda').css('margin-top', '');
            }*/
            agendaAdd();

        });
    }
    // Fin fonction  Aggrandissement tuile "Agenda"

    //Rétrecissement tuile "Agenda"
    function agendaAdd() {
        $('.myAgenda').click(function() {
            $('.createActivity').css({
                width: '',
                height: ''
            })
            $(this).css({
                width: '',
                height: ''
            });
            $('.buySociety').css({
                width: ''
            });
            agendaReAdd();
        });
    }
    // Fin fonction  Rétrécissement tuile "Agenda"


    societyReAdd();

    //Grossissement tuile "society"
    function societyReAdd() {
        $('.buySociety').click(function() {
            $(this).css({
                width: '1128px',
                height: '600px',
                transform: 'translateX(-7px)'
            })
            $('.myAgenda').css({
                position: 'absolute',
                width: '1128px',
                transform: 'translateY(620px) translateX(6px)'
            });
            $('.littleSociety').css('margin-top', '-550px');
            $('.last').css({
                transform: 'translateY(270px)',
            }).css('margin-bottom', '280px');


            societyAdd();
        });



    }
    // Fin fonction  Aggrandissement tuile "society"

    //Rétrecissement tuile "society"
    function societyAdd() {

        $('.buySociety').click(function() {
            $(this).css({
                width: '',
                height: '',
                transform: 'translateX(0px)'
            })
            $('.myAgenda').css({
                position: '',
                width: '',
                transform: 'translateY(0px) translateX(0px)'
            });
            $('.littleSociety').css('margin-top', '');
            $('.last').css({
                transform: 'translateY(0px)',
            }).css('margin-bottom', '0px');


            societyReAdd();
        });

    }
    // Fin fonction  Rétrécissement tuile "society"


    movePercheReAdd()

    //Grossissement tuile "society"
    function movePercheReAdd() {
        $('.movePerche').click(function() {
            $(this).css({
                width: '1128px',
                height: '600px'
            });
            movePercheAdd();
        });
    }
    // Fin fonction  Aggrandissement tuile "society"



    //Rétrecissement tuile "society"
    function movePercheAdd() {
      $('.movePerche').click(function() {
          $(this).css({
              width: '',
              height: ''
          });
          movePercheReAdd();
      });

    }
    // Fin fonction  Rétrécissement tuile "society"









});
