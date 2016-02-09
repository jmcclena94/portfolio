'use strict';
/* jshint -W040 */
/* jshint -W117 */
/* jshint -W097 */

function social (data) {
  this.name = data.name;
  this.link = data.link;
}

social.prototype.toHtml = function() {
  var template = Handlebars.compile($('#social_template').text());
  return template(this);
};

social.all = [];

social.fetchAll = function () {
  if (localStorage.socialData) {
    $.ajax({
      type: 'HEAD',
      url: 'data/socialData.json',
      success: function(data,message,xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
        } else {
          social.loadAll(JSON.parse(localStorage.socialData));
        }
      }
    });
    social.loadAll(JSON.parse(localStorage.socialData));
    viewer.initIndexPage();
  } else {
    $.getJSON('data/socialData.json', function(data) {
      var stringData = JSON.stringify(data);
      localStorage.setItem('socialData',stringData);
      social.loadAll(JSON.parse(localStorage.socialData));
      viewer.initIndexPage();
    });
  }
};

social.loadAll = function(socialData) {
  socialData.forEach(function(ele) {
    social.all.push(new social(ele));
  });
};
