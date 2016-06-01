$(window).load(function() {

    bigCreateTile();




    //Grossissement tuile "créer activité/contact"
    function bigCreateTile() {
        $('.controlCreateActivity').click(function() {
          $('body').css({
            padding: '0px',
            overflowX: 'hidden'
          });
          $('.container').css({
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: '0px',
            width: '102%',
            height: '100%'
          })
          $(this).animate({
            marginLeft: '0px',
            marginTop: '0px',
            width: '100%',
            height: '100px',
            opacity: '1',
            zIndex: '999',
            transition: 'easeOut'
          }, {
            duration: 200,
            complete: function(){
              $('.littletitle').css({
                marginTop:'-50px'
              });
              $('.icones').hide();
              $('.form-pop').animate({
                height: '100%',
                paddingTop:'70px',
                opacity: '1'
              }, 'slow');
            }
          });
          $('.tile').not('.controlCreateActivity').css({
            display: 'none'
          });


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
                opacity: '0',
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
                opacity: '0',
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
                opacity: '0',
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
                opacity: '0',
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
                opacity: '0',
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

    bigAgendaTile();

    //Grossissement tuile "agenda"
    function bigAgendaTile() {
        $('.myAgenda').click(function() {
            $(this).animate({
                width: '1128px',
            }, {
                duration: 500,
                easing: 'linear',
                complete: function() {
                    $(this).animate({
                        height: '600px'
                    });
                }
            });
            $('.buySociety').animate({
                width: '0px',
                opacity: '0',
                transition: 'linear'
            }, {
                duration: 600,
                complete: function() {
                    $(this).animate({
                        opacity: '1',
                        width: '1128px',
                        transition: 'ease-out'
                    }, 800);
                }
            });

            $('.myAgenda').removeClass("controlMyAgenda").addClass('newMyAgenda');
            smallAgendaTile();

        });
    }
    // Fin fonction  Aggrandissement tuile "Agenda"


    ////////////////////////////////////////////
    ///////// Non fonctionnel !!!!!!! /////////
    ///////////////////////////////////////////
    //Rétrecissement tuile "Agenda"
    function smallAgendaTile() {
        $('.newMyAgenda').click(function() {

            $('.myAgenda').removeClass("newMyAgenda").addClass('controlMyAgenda');
            $('.createActivity').css({
                width: '',
                height: ''
            });
            $('.controlMyAgenda').animate({
              height: '250px',
              position: 'absolute'
            }, {
                duration: 500,
                complete: function() {
                    $('.controlMyAgenda').animate({
                        width: '550px',
                        height: '250px'
                    }, 200);
                }
            });
            $('.buySociety').animate({
                transform: 'scale(0)',
                opacity: '0',
                transition: '0.2s'
            }, {
                duration: 200,
                complete: function() {
                    $(this).animate({
                        opacity: '1',
                        width: '550px'
                    }, 800);
                }
            });

            bigAgendaTile();
        });
    }
    // Fin fonction  Rétrécissement tuile "Agenda"
    ////////////////////////////////////////
    ////////// A Terminer //////////////////
    ////////////////////////////////////////


    bigSocietyTile();

    //Grossissement tuile "society"
    function bigSocietyTile() {
        $('.buySociety').click(function() {
            $(this).css({
                width: '1128px',
                height: '600px',
                transform: 'translateY(-280px)'
            });
            $('.myAgenda').css('transform', 'translateY(630px)', 'important', 'opacity', '0').animate({
                transform: 'scale(0)',
                width: '0px',
                opacity: '0'
            }, {
                duration: 800,
                complete: function() {
                    $('.myAgenda').animate({
                        width: '1128px',
                        opacity: '1'
                    }, 200);
                }
            });
            smallSocietyTile();
        });



    }
    // Fin fonction  Aggrandissement tuile "society"

    //Rétrecissement tuile "society"
    function smallSocietyTile() {

        $('.buySociety').click(function() {
          $(this).css({
              width: '550px',
              height: '250px',
              transform: 'translateY(0px)'
          });
          $('.myAgenda').css('transform', 'translateY(0px)', 'important', 'opacity', '0').animate({
              transform: 'scale(0)',
              width: '0px',
              opacity: '0'
          }, {
              duration: 800,
              complete: function() {
                  $('.myAgenda').animate({
                      width: '550px',
                      opacity: '1'
                  }, 200);
              }
          });


            bigSocietyTile();
        });

    }
    // Fin fonction  Rétrécissement tuile "society"


    bigMovePercheTile()

    //Grossissement tuile "installez-vous dans le Perche"
    function bigMovePercheTile() {
        $('.movePerche').click(function() {
          $(this).animate({
            width: '1128px'
          }, {
            duration: 300,
            complete: function() {
              $(this).css({
                height: '600px',
                transform: 'translateY(-280px)'
              });
              $('.ultimate').css('transform', 'translateX(400px)', 'important');
              $('.ultimate').animate({
                width:'700px',
                marginBottom: '-280px'
                }, 300);
              $('.videoCard').css('transform', 'translateY(630px) translateX(-365px)', 'important');
            }
          });


            smallMovePercheTile();
        });

    }
    // Fin fonction  Aggrandissement tuile "installez-vous dans le Perche"



    //Rétrecissement tuile "installez-vous dans le Perche"
    function smallMovePercheTile() {
        $('.movePerche').click(function() {
            $(this).css({
                width: '',
                height: ''
            });
            bigMovePercheTile();
        });

    }
    // Fin fonction  Rétrécissement tuile "installez-vous dans le Perche"


});
