$(window).load(function() {


////////////////////////////////////////////////////////////////
// Fonction Aggrandissement de la tuile Création d'entreprise //
////////////////////////////////////////////////////////////////
  biggerCreationTile();
  function biggerCreationTile(){
    $('.theCreation').on("click", function() {
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
              $(this).animate({
                opacity: '1',
                marginLeft: '0px',
                width:'750px',
                height: '785px',
                transition: '0.2s ease-out'
              }, {
                duration: 200,
                complete: function(){
                  $('.closeButton1').css('opacity', '1');
                }
              });
            }
          }).addClass("bigCreation").removeClass('theCreation');
        }
      });
    });
    smallerCreationTile();
  }


  ///////////////////////////////////////////////////////////////
  // Fonction Rétrecissement de la tuile Création d'entreprise //
  ///////////////////////////////////////////////////////////////
  function smallerCreationTile(){
    $('.closeButton').click(function() {
      $('.tilev').not('.thePhoneMail, .theAgenda').animate({
        width: '0px',
        height: '0px',
        opacity: '0',
        marginLeft: '350px',
        transition: '0.2s ease-out'
      }, {
        duration: 200,
        complete: function() {
          $(this).fadeOut(10)
        }
      }).animate({
        color: 'green'
      }, {
        duration: 100,
        complete: function() {
          $('.bigCreation').fadeIn(30).css({
            marginLeft: '350px',
            width: '',
            height: '',
            opacity: '0'
          }).animate({
            color: 'green'
          }, {
            duration:70,
            complete: function() {
              $('.bigCreation').css({
                opacity: '0',
                marginLeft: '0px',
                width:'350px',
                height: '250px',
                transition: '0.2s ease-out'
              }).fadeIn(10);
              $('.tilev').fadeIn(10).animate({
                width: '350px',
                height: '250px',
                opacity: '1',
                marginLeft: '100px',
                transition: '0.2s ease-out'
              }).addClass("theCreation").removeClass('bigCreation');
            }
          });
        }
      });
    });

  }


/*
  ///////////////////////////////////////////////////////////////
  // Fonction Aggrandissement de la tuile Reprendre entreprise //
  ///////////////////////////////////////////////////////////////
  biggerSocietyTile();
  function biggerSocietyTile(){
    $('.theSociety').click(function() {
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
          $('.theSociety').fadeIn(30).css({
            marginLeft: '350px',
            width: '0px',
            height: '0px',
            opacity: '0'
          }).animate({
            backgroundColor: 'green'
          }, {
            duration:70,
            complete: function() {
              $(this).animate({
                opacity: '1',
                marginLeft: '0px',
                width:'750px',
                height: '785px',
                transition: '0.2s ease-out'
              }, {
                duration: 200,
                complete: function(){
                  $('.closeButton').css('opacity', '1');
                }
              });
            }
          }).addClass("bigSociety").removeClass('theSociety');
        }
      });
    });
    //smallerSocietyTile();
  }


  ////////////////////////////////////////////////////////////////
  // Fonction Aggrandissement de la tuile S'installer dans le Perche //
  ////////////////////////////////////////////////////////////////
  biggerLinksTile();
  function biggerLinksTile(){
    $('.theLinks').click(function() {
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
          $('.theLinks').fadeIn(30).css({
            marginLeft: '350px',
            width: '0px',
            height: '0px',
            opacity: '0'
          }).animate({
            backgroundColor: 'green'
          }, {
            duration:70,
            complete: function() {
              $(this).animate({
                opacity: '1',
                marginLeft: '-370px',
                width:'750px',
                height: '785px',
                transition: '0.2s ease-out'
              }, {
                duration: 200,
                complete: function(){
                  $('.closeButton').css('opacity', '1');
                }
              });
            }
          }).addClass("bigLinks").removeClass('theLinks');
        }
      });
    });
    //smallerLinksTile();
  }


  /////////////////////////////////////////////////
  // Fonction Aggrandissement de la tuile Agenda //
  /////////////////////////////////////////////////
  biggerAgendaTile();
  function biggerAgendaTile(){
    $('.theAgenda').click(function() {
      $('.tilev').not('.thePhoneMail').animate({
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
          $('.theAgenda').empty();
          $('.theAgenda').addClass("bigAgenda").removeClass('theAgenda').fadeIn(30).animate({
            backgroundColor: 'green'
          }, {
            duration:70,
            complete: function() {
              $('.thePhoneMail').fadeIn(10).animate({
                width: '300px',
                height: '250px',
                opacity: '1',
                marginLeft: '0px'
              }, 50);
              $('.theYoutube').fadeIn(10).animate({
                marginTop: '-520px',
                width: '350px',
                height: '250px',
                opacity: '1',
                marginLeft: '0px'
              }, 50);
              $('.theScoupit').fadeIn(10).animate({
                marginTop: '-520px',
                width: '350px',
                height: '250px',
                opacity: '1',
                marginLeft: '0px'
              }, 50);
              $(this).animate({
                marginTop:'-15px',
                opacity: '1',
                marginLeft: '0px',
                width:'1018px',
                height: '500px',
                transition: '0.2s ease-out'
              }, {
                duration: 200,
                complete: function(){
                  $('.closeButton').css('opacity', '1');
                }
              });
            }
          });
        }
      });


    });

  //  smallerAgendaTile();

  }


  ////////////////////////////
  // Fonction Slider Agenda //
  ////////////////////////////
setInterval(slideImages,1000);

    function slideImages () {
        $('.imgA').animate({
          color:'white'
        }, {
          duration:2000,
          complete: function() {
            $(this).fadeOut().animate({
              color:'white'
            }, {
              duration: 3000,
              complete: function() {
                $('.imgB').fadeOut().animate({
                  color:'white'
                }, {
                  duration: 3000,
                  complete: function() {
                    $('.imgC').fadeOut().animate({
                      color:'white'
                    }, {
                      duration: 3000,
                      complete: function(){
                        $('.imgAgenda').fadeIn();
                      }
                    }, {
                      duration:3000,
                      complete: function(){
                        $('.imgAgenda').css('color', 'transparent').setTimout(1000);
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
*/

});
