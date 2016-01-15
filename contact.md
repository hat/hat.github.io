---
layout: page
title: Contact
permalink: /Contact/
custom_css: contact
---
<!-- Contact Section -->
<form id="contactform" method="POST">
        <div class="floating-label-form-group controls">
            <input type="text" placeholder="Name" id="name">
        </div>
        <div class="floating-label-form-group controls">
                <input type="email" placeholder="Email Address" id="email" name="\_replyto">
        </div>
        <div class="floating-label-form-group controls">
            <textarea rows="4" placeholder="Message" id="message" name="message"></textarea>
        </div>

    <input type="text" name="\_gotcha" style="display:none" />
    <input type="submit" class="submit-btn" value="Send">
</form>
<script>
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'taztony2010' + '@' + 'yahoo' + '.' + 'com');
</script>
