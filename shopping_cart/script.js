$(document).ready(function() {
    updateAmount();
    $('.qty, .price').on('keyup keypress blur change',
    function(e) {
        updateAmount();
    });
});
function updateAmount(){
    var sum = 0.0;
    $('#myTable > tbody > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find ('.amount').text(''+amount);
    });
    $('.total').text(sum);
}

// quantity-increment or decrement
var incrementQty;
var decrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");

var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1 );
    updateAmount();
});

var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal -1);
    }
    updateAmount();
});
