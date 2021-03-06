// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    updateArticles();
    footerApply();
    // etc.
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('form1');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  document.title = data.documentTitle;
};

  /**
   * Updating the articles
   * ** Putting content from the JSON file
   */
  var updateArticles = function () {

    Array.from($("article h1")).forEach(function (titre, i) {
      titre.innerHTML = data.articles[i].title;
    });
    Array.from($("article h3")).forEach(function (sousTitre, i) {
      sousTitre.innerHTML = data.articles[i].subtitle;
    });
    Array.from($("article p")).forEach(function (texte, i) {
      texte.innerHTML = data.articles[i].content;
    });

  };

  var footerApply = function (){
    	var footer = data.email + "     " + data.lastName + " " + data.firstName;
  $( "#info" ).append(footer);
  };
