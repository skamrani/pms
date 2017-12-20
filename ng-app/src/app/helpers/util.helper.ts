/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
declare var $: any, alertify: any;
export class Util {

    displayErrors(response: any) {
        var data = response['data'];
        //removing any error class
        $('.response-error').find('.help-block').remove();
        $('.response-error').removeClass('has-error').removeClass('response-error');
        if (data['errors']) {
            for (var i in data['errors']) {
                let objError = data['errors'][i];
                var helpBlock = $('<span/>', {
                    class: 'help-block',
                    text: objError['msg']
                });
                console.log('Error:', objError.param);
                var formGroup = $('input[name="' + objError.param + '"], select[name="' + objError.param + '"]').parents('.form-group');
                formGroup.removeClass('has-error').addClass('has-error').addClass('response-error');
                formGroup.find('.help-block').remove();
                formGroup.append(helpBlock);

            }
            alertify.log(response["msg"], "error");
        } else {
            alertify.log(response["msg"]);
        }
    }
}