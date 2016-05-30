$(window).load(function() {

    bigCreateTile();




    //Grossissement tuile "créer activité/contact"
    function bigCreateTile() {
        $('.controlCreateActivity').click(function() {
            $(this).animate({
              width: '1128px'
            }, 800, function() {
              $(this).css({
              height: '800px'}).css('z-index', 4);
            });


            //Control scoop it tile
            $('.scoopitou').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateX(-415px)'
                }, 500, function() {
                $(this).css({
                  opacity: '1',
                  transform: 'translateX(-415px)'
                });
              });
            }
            });

            //Control agenda tile
            $('.myAgenda').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateX(164px) translateY(-280px)'
                }, 500, function() {
                $(this).css({
                  width: '800px',
                  height: '250px',
                  opacity: '1',
                  transform: 'translateX(164px) translateY(-280px)'
                });
              });
            }
            });

            //Control buy Society tile
            $('.buySociety').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateY(-280px)'
                }, 500, function() {
                $(this).css({
                  width: '1128px',
                  opacity: '1',
                  transform: 'translateY(-280px)'
                });
              });
            }
            });

            //Control youtube and MovetoPerche tiles
            $('.last').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateY(-280px)'
                }, 500, function() {
                $(this).css({
                  opacity: '1',
                  transform: 'translateY(-280px)'
                });
              });
            }
            });


            //Control youtube and MovetoPerche tiles
            $('.ultimate').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s',
              marginBottom: '-280px'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateY(-280px)'
                }, 500, function() {
                $(this).css({
                  opacity: '1',
                  transform: 'translateY(-280px)'

                });
              });
            }
            });











            /*//Control Create/contact tile
            $('.controlCreateActivity').css('width', '1128px');
            setTimeout(function() {
                $('.controlCreateActivity').css('height', '800px');
            }, 1000);


           //Control scoop it tile
            $('.scoopitou').css({
                transform: 'scale(0)',
                opacity: '0',
                transition: '0.2s'
            });
            setTimeout(function() {
                $('.scoopitou').css({
                    transform: 'translateX(-415px)',
                    opacity: '1'
                });
            }, 1500); /*

            //Control agenda tile
            $('.myAgenda').css({
                transform: 'scale(0)',
                opacity: '0',
                transition: '0.2s'
            });
            setTimeout(function() {
                $('.myAgenda').css({
                    transition: '0.5s',
                    width: '800px',
                    height: '250px',
                    transform: 'translateY(-280px) translateX(164px)',
                    opacity: '1'
                });
            }, 1300);

            //Control Reprendre activité tile
            $('.buySociety').css({
                transform: 'scale(0)',
                opacity: '0',
                transition: '0.2s'
            });
            setTimeout(function() {
                $('.buySociety').css({
                    transition: '0.5s',
                    width: '1128px',
                    transform: 'translateY(-280px)',
                    opacity: '1'
                });
            }, 1300);

            //Control youtube and MovetoPerche tile
            $('.last').css({
                transform: 'scale(0)',
                opacity: '0',
                transition: '0.2s'
            });
            setTimeout(function() {
                $('.last').css({
                    transition: '0.5s',
                    transform: 'translateY(-280px)',
                    opacity: '1',
                });
            }, 1300);

            //Control financeur tile
            $('.ultimate').css({
                transform: 'scale(0)',
                opacity: '0',
                transition: '0.2s'
            });
            setTimeout(function() {
                $('.ultimate').css({
                    transition: '0.5s',
                    transform: 'translateY(-280px)',
                    opacity: '1',
                    marginBottom: '-280px'
                });
            }, 1300);

            setTimeout (function() {
            $('.createActivity').removeClass("controlCreateActivity").addClass("newCreateActivity");
          }, 1100);
          */
            $('.createActivity').removeClass("controlCreateActivity").addClass("newCreateActivity");
            smallCreateTile();


        });
    }

    // Fin fonction  Aggrandissement tuile "créer activité/contact"


    //Rétrecissement tuile "créer activité/contact"
    function smallCreateTile() {
        $('.newCreateActivity').click(function() {

            //Control Create/contact tile
            $('.newCreateActivity').animate({
              width: '800px'
            }, 900, function() {
              $('.createActivity').css('height', '250px');
            });



            //Control scoop it tile
            $('.scoopitou').css('z-index', '2').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateX(0px)'
                }, 500, function() {
                $(this).css({
                  transform: 'translateX(0px)',
                  opacity: '1',
                  transition: '0.2s'
                });
              });
            }
            });


            //Control agenda tile
            $('.myAgenda').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateX(0px) translateY(0px)'
                }, 500, function() {
                $(this).css({
                  width: '550px',
                  height: '250px',
                  opacity: '1',
                  transform: 'translateX(0px) translateY(0px)'
                });
              });
            }
            });




            //Control buy Society tile
            $('.buySociety').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateY(0px)'
                }, 500, function() {
                $(this).css({
                  width: '550px',
                  opacity: '1',
                  transform: 'translateY(0px)'
                });
              });
            }
            });


            //Control youtube and MovetoPerche tiles
            $('.last').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateY(0px)'
                }, 500, function() {
                $(this).css({
                  opacity: '1',
                  transform: 'translateY(0px)'
                });
              });
            }
            });



            //Control youtube and MovetoPerche tiles
            $('.ultimate').animate({
              transform: 'scale(0)',
              opacity:'0',
              transition: '0.2s',
              marginBottom: '0px'
            }, {
            duration: 800,
            complete: function() {
              $(this).animate({
                  transform: 'translateY(0px)'
                }, 500, function() {
                $(this).css({
                  opacity: '1',
                  transform: 'translateY(0px)'

                });
              });
            }
            });



            $('.createActivity').removeClass("newCreateActivity").addClass("controlCreateActivity");

            bigCreateTile();



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

    //Grossissement tuile "installez-vous dans le Perche"
    function movePercheReAdd() {
        $('.movePerche').click(function() {
            $(this).css({
                width: '1128px',
                height: '600px'
            });
            $('.videoCard').fadeOut(200);
            movePercheAdd();
        });
    }
    // Fin fonction  Aggrandissement tuile "installez-vous dans le Perche"



    //Rétrecissement tuile "installez-vous dans le Perche"
    function movePercheAdd() {
        $('.movePerche').click(function() {
            $(this).css({
                width: '',
                height: ''
            });
            movePercheReAdd();
        });

    }
    // Fin fonction  Rétrécissement tuile "installez-vous dans le Perche"


});
