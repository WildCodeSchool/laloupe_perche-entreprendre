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
            $('.tile').not('.controlCreateActivity').css({
                display: 'none'
            });
            smallCreateTile()
        });
    }
    // Fin fonction  Aggrandissement tuile "créer activité/contact"


    //Rétrecissement tuile "créer activité/contact"
    function smallCreateTile() {
        $('.close-button').click(function() {
            $('body').css({
                padding: '',
                overflowX: 'visible'
            });
            $('.container').css({
                marginLeft: '',
                marginRight: '',
                marginTop: '',
                width: '',
                height: ''
            });
            $('.form-pop').animate({
                height: '150px'
            }, {
                duration: 200,
                complete: function() {
                    $('.form-pop').css({
                        opacity: '0',
                    });
                    $('.controlCreateActivity').animate({
                        height: '250px',
                        width: '800px'
                    }, {
                        duration: 400,
                        complete: function() {
                            $('.tile').show();
                        }
                    });

                }
            });

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
            smallAgendaTile();
        });
    }
    // Fin fonction  Aggrandissement tuile "Agenda"


    //Rétrecissement tuile "Agenda"
  function smallAgendaTile() {

        $('.close-button').click(function() {
            $('body').css({
                padding: '',
                overflowX: 'visible'
            });
            $('.container').css({
                marginLeft: '',
                marginRight: '',
                marginTop: '',
                width: '',
                height: ''
            });
            $('.form-pop-agenda').animate({
                height: '150px'
            }, {
                duration: 200,
                complete: function() {
                    $('.form-pop-agenda').css({
                        opacity: '0',
                    });
                    $('.controlMyAgenda').animate({
                        height: '250px',
                        width: '550px'
                    }, {
                        duration: 400,
                        complete: function() {
                            $('.tile').show();
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
                    }, 'slow');

                }
            });
            $('.tile').not(this).css({
                display: 'none'
            });

            smallSocietyTile();
        });



    }
    // Fin fonction  Aggrandissement tuile "society"

    //Rétrecissement tuile "society"
    function smallSocietyTile() {

        $('.close-button').click(function() {
            $('body').css({
                padding: '',
                overflowX: 'visible'
            });
            $('.container').css({
                marginLeft: '',
                marginRight: '',
                marginTop: '',
                width: '',
                height: ''
            });
            $('.form-pop-society').animate({
                height: '150px'
            }, {
                duration: 200,
                complete: function() {
                    $('.form-pop-society').css({
                        opacity: '0',
                    });
                    $('.controlBuySociety').animate({
                        height: '250px',
                        width: '550px'
                    }, {
                        duration: 400,
                        complete: function() {
                            $('.tile').show();
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




        smallMovePercheTile();
    });

}
// Fin fonction  Aggrandissement tuile "installez-vous dans le Perche"



//Rétrecissement tuile "installez-vous dans le Perche"
function smallMovePercheTile() {
  $('.close-button').click(function() {
      $('body').css({
          padding: '',
          overflowX: 'visible'
      });
      $('.container').css({
          marginLeft: '',
          marginRight: '',
          marginTop: '',
          width: '',
          height: ''
      });
      $('.form-pop-lePerche').animate({
          height: '150px'
      }, {
          duration: 200,
          complete: function() {
              $('.form-pop-lePerche').css({
                  opacity: '0',
              });
              $('.movePerche').animate({
                  height: '250px',
                  width:'700px'
              }, {
                  duration: 400,
                  complete: function() {
                      $('.tile').show();
                  }
              });

          }
      });
        bigMovePercheTile();
  });

}
// Fin fonction  Rétrécissement tuile "installez-vous dans le Perche"


});
