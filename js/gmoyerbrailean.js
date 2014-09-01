$(document).ready(function() {
    // $('#anno').hide();
    $('#fgwas').hide();
    $('#gxe').hide();

    // Each block has a show-hide switch
    $('#anno-show').click(function() {
        $('#anno').fadeIn('fast');
    });
    $('#anno-hide').click(function() {
        $('#anno').fadeOut('fast');
    });
	$('#fgwas-show').click(function() {
        $('#fgwas').fadeIn('fast');
    });
    $('#fgwas-hide').click(function() {
        $('#fgwas').fadeOut('fast');
    });
    $('#gxe-show').click(function() {
        $('#gxe').fadeIn('fast');
    });
    $('#gxe-hide').click(function() {
        $('#gxe').fadeOut('fast');
    });

});