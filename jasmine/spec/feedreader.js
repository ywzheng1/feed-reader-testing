$(function() {

    var entriesStart,
        entriesEnd;

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
         })


         it('names are defined', function() {
           for (var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allfeeds[i].name.length).not.toBe(0);
           }
         })

    });


    describe('The Menu', function() {
      it('menu element is hidden', function () {
        expect($('body').hasClass('menu-hidden')).toEqual(true);
      });

      it('working toggle on click event', function() {
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });
    });


    describe('Initial Entries', function() {

      beforeEach(function (done) {
        loadFeed(0, function () {
          done;
        });
      });

      it('define if entry has more than 0 entries', function () {
        expect($('entry .feed')).toBeDefined();
      });
    });


    describe('New Feed Selection', function () {

      beforeEach(function (done) {
        $('.feed').empty();
        loadFeed(0, function() {
          entriesStart = $('.feed').find(allFeeds.url);
          done();
        });
        loadFeed(1, function() {
          entriesEnd = $('.feed').find(allFeeds.url);
          done();
        })
      });

      it('new feed is different to old one', function () {
        expect(entriesStart).not.tobE(entriesEnd);
      })

    });


  });
