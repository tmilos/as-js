(function($) {

    QUnit.module('class.remove');

    QUnit.asyncTest('removes class', function(assert) {
        assert.expect(2);

        AS.container.set('assertResult', function(options) {
            assert.ok(!$('#target').hasClass('one'));
            assert.ok($('#target').hasClass('two'));
            QUnit.start();
        });

        $('#btn1').click();

    });

    QUnit.test('throws on empty target', function(assert) {
        assert.expect(1);
        assert.throws(function() {
            $('#btn2').click();
        }, 'class.add empty target');

    });

})(jQuery);
