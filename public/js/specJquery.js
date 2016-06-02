$(window).load(function() {

/*//===============================================================\\
/////////////////////////////////////////////////////////////////||
/////////////////////////   DEBUT   /////////////////////////////||
////////// Utilisation de Jquery afin de d'afficher des /////////||
//////////    modales lors d'un click sur une tuile   ///////////||
/////////////////////////////////////////////////////////////////||
/////////////////////////////////////////////////////////////////||


    //Appel fonction grossissement de la tuile create/contact
    bigCreateTile();

    //Grossissement tuile "créer activité/contact"
    function bigCreateTile() {
        $('.controlCreateActivity').click(function() {

          // Objectif : supprimer les marges pour l'aggrandissement de la tuile
            $('body').css({
                padding: '0px',
                overflowX: 'hidden',
                overflowY: 'scroll'
            });
            $('.container').css({
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '0px',
                width: '102%',
                height: '100%'
            })

            //Changement de la taille et de la position de la tuile
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
                complete: function() {
                    $('.littletitle').css({
                        marginTop: '-50px'
                    });
                    $('.form-pop').animate({
                        height: '100%',
                        opacity: '1'
                    }, 'slow');
                }
            });

            //Cacher les tuiles (sauf la tuile concernée) et le footer
            $('.tile').not('.controlCreateActivity').css({
                display : 'none'
            });
            $('.footer').not('.controlCreateActivity').css({
                display: 'none'
            });

            //Appel fonction rétrécissement de la tuile
            smallCreateTile()
        });
    }
    // Fin fonction  Aggrandissement tuile "créer activité/contact"


    //Rétrecissement tuile "créer activité/contact"
    function smallCreateTile() {
        $('.close-button').click(function() {

            //Changement taille de la modale
            $('.form-pop').animate({
                height: '150px'
            }, {
                duration: 200,
                complete: function() {

                    //Retour des éléments dans leur taille originale
                    $('.form-pop').css({
                        opacity: '0',
                    });
                    $('.controlCreateActivity').animate({
                        width: '0px',
                        height: '0px',
                        opacity: '0'
                    }, {
                        duration: 400,
                        complete: function() {
                            $('body').css({
                                padding: ''
                            });
                            $('.container').css({
                                marginLeft: '',
                                marginRight: '',
                                marginTop: '',
                                width: '',
                                height: ''
                            });
                            $(this).animate({
                                height: '250px',
                                width: '800px',
                                opacity: '1'
                            }, 200);
                            $('.tile').fadeIn(200);
                            $('.footer').fadeIn(200);
                        }
                    });
                }
            });
            bigCreateTile();
        });
    }
    // Fin fonction  Rétrécissement tuile "créer activité/contact"

    bigAgendaTile();

    //Grossissement tuile "agenda"
    function bigAgendaTile() {
        $('.controlMyAgenda').click(function() {
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
                complete: function() {
                    $('.littletitle').css({
                        marginTop: '-50px'
                    });
                    $('.form-pop-agenda').animate({
                        height: '100%',
                        paddingTop: '50px',
                        opacity: '1',
                        zIndex: '998'
                    }, 'slow');

                }
            });


            $('.tile').not(this).css({
                display: 'none'
            });
            $('.footer').css({
                display: 'none'
            });
            smallAgendaTile();
        });
    }
    // Fin fonction  Aggrandissement tuile "Agenda"


    //Rétrecissement tuile "Agenda"
    function smallAgendaTile() {

        $('.close-button').click(function() {
            $('.form-pop-agenda').animate({
                height: '150px'
            }, {
                duration: 200,
                complete: function() {

                    $('.form-pop-agenda').css({
                        opacity: '0',
                    });
                    $('.controlMyAgenda').animate({
                        width: '0px',
                        height: '0px',
                        opacity: '0'
                    }, {
                        duration: 400,
                        complete: function() {
                            $('body').css({
                                padding: ''
                            });

                            $('.container').css({
                                marginLeft: '',
                                marginRight: '',
                                marginTop: '',
                                width: '',
                                height: ''
                            });
                            $('.tile').fadeIn(200);
                            $('.footer').fadeIn(200)

                            $('.footer').animate({

                            }, {
                              duration: 250,
                              complete: function() {
                                $('.controlMyAgenda').animate({
                                    height: '250px',
                                    width: '550px',
                                    opacity: '1'
                                }, 400);
                              }
                            });
                        }
                    });
                }
            });
            bigAgendaTile();
        });
    }

    // Fin fonction  Rétrécissement tuile "Agenda"



    bigSocietyTile();

    //Grossissement tuile "society"
    function bigSocietyTile() {
        $('.controlBuySociety').click(function() {
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
                complete: function() {
                    $('.littletitle').css({
                        marginTop: '-50px'
                    });
                    $('.form-pop-society').animate({
                        height: '100%',
                        paddingTop: '50px',
                        opacity: '1',
                        zIndex: '998'
                    }, 'slow').css('display', 'flex')

                }
            });
            $('.tile').not(this).css({
                display: 'none'
            });
            $('.footer').css({
                display: 'none'
            });
            smallSocietyTile();
        });



    }
    // Fin fonction  Aggrandissement tuile "society"

    //Rétrecissement tuile "society"
    function smallSocietyTile() {

      $('.close-button').click(function() {
          $('.form-pop-society').animate({
              height: '150px'
          }, {
              duration: 200,
              complete: function() {

                  $('.form-pop-society').css({
                      opacity: '0',
                  });
                  $('.controlBuySociety').animate({
                      width: '0px',
                      height: '0px',
                      opacity: '0'
                  }, {
                      duration: 400,
                      complete: function() {
                          $('body').css({
                              padding: ''
                          });

                          $('.container').css({
                              marginLeft: '',
                              marginRight: '',
                              marginTop: '',
                              width: '',
                              height: ''
                          });

                          $(this).animate({
                              height: '250px',
                              width: '550px',
                              opacity: '1'
                          }, 300);
                          $('.tile').fadeIn(200);
                          $('.footer').fadeIn(200);
                      }
                  });
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
                complete: function() {
                    $('.littletitle').css({
                        marginTop: '-50px'
                    });
                    $('.form-pop-lePerche').animate({
                        height: '100%',
                        paddingTop: '50px',
                        opacity: '1',
                        zIndex: '998'
                    }, 'slow');

                }
            });
            $('.tile').not(this).css({
                display: 'none'
            });


            $('.footer').css({
                display: 'none'
            });

            smallMovePercheTile();
        });

    }
    // Fin fonction  Aggrandissement tuile "installez-vous dans le Perche"



    //Rétrecissement tuile "installez-vous dans le Perche"
    function smallMovePercheTile() {
      $('.close-button').click(function() {
          $('.form-pop-lePerche').animate({
              height: '150px'
          }, {
              duration: 200,
              complete: function() {

                  $('.form-pop-lePerche').css({
                      opacity: '0',
                  });
                  $('.movePerche').animate({
                      width: '0px',
                      height: '0px',
                      opacity: '0'
                  }, {
                      duration: 400,
                      complete: function() {
                          $('body').css({
                              padding: ''
                          });

                          $('.container').css({
                              marginLeft: '',
                              marginRight: '',
                              marginTop: '',
                              width: '',
                              height: ''
                          });

                          $(this).animate({
                              height: '250px',
                              width: '700px',
                              opacity: '1'
                          }, 300);
                          $('.tile').fadeIn(200);
                          $('.footer').fadeIn(200);
                      }
                  });
              }
          });
          bigMovePercheTile();
      });

    }
    // Fin fonction  Rétrécissement tuile "installez-vous dans le Perche"

//===============================================================\\
/////////////////////////////////////////////////////////////////||
//////////////////////       FIN        /////////////////////////||
////////// Utilisation de Jquery afin de d'afficher des /////////||
//////////    modales lors d'un click sur une tuile   ///////////||
/////////////////////////////////////////////////////////////////||
/////////////////////////////////////////////////////////////////||*/

  biggerCreationTile();

  function biggerCreationTile(){
    $('.theCreation').click(function() {
      $('.tilev').not('.thePhoneMail, .theAgenda').animate({
        width: '0',
        height: '0',
        opacity: '0',
        marginLeft: '50%',
        transition: '0.2s ease-out'
      }, {
        duration: 200,
        complete: function() {
          $(this).fadeOut(10)
        }
      }).animate({
        backgroundColor: 'green'
      }, {
        duration: 100,
        complete: function() {
          $('.theCreation').fadeIn(30).css({
            marginLeft: '350px',
            width: '0px',
            height: '0px',
            opacity: '0'
          }).animate({
            backgroundColor: 'green'
          }, {
            duration:70,
            complete: function() {
              $(this).css({
                opacity: '1',
                marginLeft: '0px',
                width:'750px',
                height: '785px',
                transition: '0.2s ease-out'
              });
            }
          }).addClass("bigCreation").removeClass('theCreation');
        }
      });


    });

    smallerCreationTile();

  }

  function smallerCreationTile(){
    $('.bigCreation').click(function() {
      $('.tilev').not('.thePhoneMail, .theAgenda').animate({
        width: '0',
        height: '0',
        opacity: '0',
        marginLeft: '50%',
        transition: '0.2s ease-out'
      }, {
        duration: 200,
        complete: function() {
          $(this).fadeOut(10)
        }
      }).animate({
        backgroundColor: 'green'
      }, {
        duration: 100,
        complete: function() {
          $('.bigCreation').fadeOut(30).css({
            marginLeft: '0px',
            width: '0px',
            height: '0px',
            opacity: '0'
          }).animate({
            backgroundColor: 'green'
          }, {
            duration:70,
            complete: function() {
              $(this).css({
                opacity: '1',
                marginLeft: '0px',
                width:'350px',
                height: '250px',
                transition: '0.2s ease-out'
              }).fadeIn(10);
              $('.tilev').fadeIn(10).animate({
                width: '',
                height: '',
                opacity: '1',
                marginLeft: '',
                transition: '0.2s ease-out'
              }).addClass("theCreation").removeClass('bigCreation');
            }
          });
        }
      });
    });

  }



});
