import $ from 'jquery';
import Modal from './Modal';

$('#form-lets-talk-requirements').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
  } else {
    // everything looks good!
    e.preventDefault();
    var modal = new Modal();

    // clear form
    $('#form-lets-talk-requirements input').val('');

    setTimeout(function() {
      // clear form after validation gets triggerd 
      $('.has-error.has-danger').removeClass('has-error has-danger')
      $('.with-errors').html('');
    }, 1000);

    modal.openModal();
    return false;
  }
});
