
// This is a spec file that Jasmine will read and contains
// all of the tests that will be run against your application.

$(function() {

    // First test: make sure the allFeeds variable has been defined and it is not empty

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('has a URL', function() {
           for (var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allfeeds[i].url.length).not.toBe(0);
           }
         });

         // This loops each feed in allFeeds, it tests to make sure each feed has a name defined
         // and the name is not empty.
         it('names are defined', function() {
           for (var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allfeeds[i].name.length).not.toBe(0);
           }
         });
    });


    // This tests if the menu is hidden by default on page load
    describe('The Menu', function() {

      var body = $('body'),
      menu_button = $('.menu-icon-link');

      it('menu element is hidden', function () {
        expect(body.hasClass('menu-hidden')).toBeTruthy();
      });


      it('working toggle on click event', function() {
        menu_button.click();
        expect(body.hasClass('menu-hidden')).toBeFalsy();

        menu_button.click();
        expect(body.hasClass('menu-hidden')).toBeTruthy();
      });
    });



    // Check feed is having more than 1 child entry element
    describe('Initial Entries', function() {

      beforeEach(function (done) {
        loadFeed(0, function () {
          done;
        });
      });

      // test after loadFeed function,
      // the HTML should contains at least a feed with entry

      it('define if entry has more than 0 entries', function () {
        expect($('.feed').has('.entry').length).not.toBe(0);
      });
    });


    // Test loadFeed function Asynchronously
    describe('New Feed Selection', function () {

      var entriesStart,
          entriesEnd;

      beforeEach(function (done) {
        $('.feed').empty();
        // load first feed
        loadFeed(0, function() {
          entriesStart = $('.feed').html();

          // load second feed
          loadFeed(1, function() {
               entriesEnd = $('.feed').html();
            done();
          })
        });

      });

      it('new feed is different to old one', function (done) {
        expect(entriesStart).not.tobE(entriesEnd);
        done();
      })

    });


  });
