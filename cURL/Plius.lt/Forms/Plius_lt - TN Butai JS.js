function multiply3(a, b, c, d)
{
    var temp = Math.round(parseFloat($('#'+a).get(0).value) * parseFloat($('#'+b).get(0).value) * parseFloat($('#'+c).get(0).value) * 100) / 100;

    if (temp)
    {
        var result = (((d == 'capacity' || d == 'trail_capacity') && parseInt(temp) > 10000000)
            ?
        Math.round((parseInt(temp) / 10000000)) / 100
            :
            temp);

        $('#'+d).get(0).value = result;
    }
}

function switchFeaturesCheckboxes (group_id)
{
    var cb = $('#add-feat-'+group_id.value+' :checkbox');
    var check = false;
    if (cb[0].checked == true)
        check = true;
    for (i in cb)
        cb[i].checked = check;
}

function rc_field_status(e)
{
    if ((e != null) && (e != ''))
        return true;
    else if (e == undefined)
        return true;
    else
        return false;
}

function onChangeAddress()
{
    var building_number = document.getElementById('adress_building_number');
    if (building_number != undefined)
        e1 = rc_field_status(building_number.value);
    else
        e1 = false;

    var room_number = document.getElementById('adress_room_number');
    if (room_number != undefined)
        e2 = rc_field_status(room_number.value);
    else
        e2 = true;

    var street = document.getElementById('address_3');
    if (street != undefined)
        e3 = rc_field_status(street.value);
    else
        e3 = false;

    var b_import = document.getElementById('button_by_address');
    if (b_import != undefined)
        b_import.style.display=(e1 && e2 && e3) ? '' : 'none';
}


function onChangeEditAddress1(category_id, project)
{
    var address_2 = $('#address_2');
    if (address_2.length == 0)
        return;

    cursorStatus(0);
    var address_1 = document.getElementById('address_1').value;

    var resp = apAJAX.send(ann_edit_ajax_block, 'get_address_2', {address_1:address_1, language:language}, false);
    loadAjaxGeneratedSelect('address_2', resp);

    if ($('#address_2').get(0).length > 1)
        setDisableStatus('address_2', 1);
    else
    {
        setDisableStatus('address_2', 0);
        loadAjaxGeneratedSelect('address_3', '');
    }

    placereg_hide_fields('address_1');
}

function onChangeEditAddress2(category_id, project)
{
    var address_3 = $('#address_3');

    if (address_3.length == 0)
        return;

    cursorStatus(0);

    var address_2 = document.getElementById('address_2').value;
    var resp = apAJAX.send(ann_edit_ajax_block, 'get_address_3', {address_2:address_2, language:language}, false);

    //if (resp != undefined)
    loadAjaxGeneratedSelect('address_3', resp);

    if ($('#address_3').get(0).length > 1)
        setDisableStatus('address_3', 1);
    else
        setDisableStatus('address_3', 1);

    placereg_hide_fields('address_2');
}


function onChangeRegNr(){
    b_import = $('#button_by_number').get(0);

    e1 = rc_field_status($('#rc_part_1').get(0).value);

    e2 = rc_field_status($('#rc_part_2').get(0).value);

    b_import.style.display=(e1 && e2) ? '' : 'none';
}

function changeSellType(param)
{
    if (param != '9')
    {
        document.getElementById('short_rent').style.display = 'none';
        document.getElementById('normal_sell_rent').style.display = '';
    }
    else
    {
        document.getElementById('normal_sell_rent').style.display = 'none';
        document.getElementById('short_rent').style.display = '';
    }
    if (document.getElementById('action_type_'+param) != undefined)
        document.getElementById('action_type_'+param).checked = true;
}

//new ann edit function (dropdown instead of radio)
function changeSellingType()
{
    dropdown = document.getElementById('action_type');
    if (dropdown != undefined)
    {
        current_val = dropdown[dropdown.selectedIndex].value;

        if (current_val != '9')
        {
            document.getElementById('short_rent').style.display = 'none';
            document.getElementById('normal_sell_rent').style.display = '';
        }
        else
        {
            document.getElementById('normal_sell_rent').style.display = 'none';
            document.getElementById('short_rent').style.display = '';
        }
    }
}

//if in action_type checked "Parduoda" unhide has_change fieldset
function check_type()
{
    var action = $('#action_type_1_id');
    var change = $('#fs_has_change');
    if (action.length > 0 && change.length > 0)
    {
        action = action.get(0);
        change = change.get(0);
        if(action.options['0'])
            if(action.options['0'].selected == true && action.options['0'].value == 1754)
                change.style.display = '';
            else
                change.style.display = 'none';
        else
            change.style.display = 'none';

    }
}

//if in action_type checked "Parduoda" unhide has_change fieldset
function showChangeOption()
{
    var action = document.getElementById('action_type_1_id');
    var change = document.getElementById('fs_has_change');

    if (action != undefined && change != undefined && action.options['0'] != undefined)
    {
        if (action.options['0'].selected == true && action.options['0'].value == 1754)
            change.style.display = '';
        else
            change.style.display = 'none';
    }
    else
        change.style.display = 'none';
}

//is has_camera checked - showing others 3 camera fields
function show_camera_fields()
{
    var check = document.getElementById('has_camera');
    if(document.getElementById('camera_mpix_id') != 'NULL')
        var camera_mpix = document.getElementById('camera_mpix_id');
    else if (document.getElementById('camera_mpix') != 'NULL')
        var camera_mpix = document.getElementById('camera_mpix');
    var camera_zoom = document.getElementById('camera_zoom_id');
    var camera_flash = (document.getElementById('has_camera_flash') != undefined)?document.getElementById('has_camera_flash'):undefined;

    if(check.checked == true )
    {
        camera_mpix.disabled = '';
        camera_zoom.disabled = '';
        if(camera_flash != undefined)
            camera_flash.disabled = '';
    }
    else
    {
        camera_mpix.disabled = 'true';
        camera_zoom.disabled = 'true';
        if(camera_flash != undefined)
            camera_flash.disabled = 'true';
    }
}


//is has_change checked - showing has change to
function show_change_to()
{
    var check = document.getElementById('has_change');
    var change_to = document.getElementById('has_change_to');

    if (check != undefined && change_to != undefined && check.checked == true)
        change_to.disabled = false;
    else
        change_to.disabled = true;
}

//-------------------------------code for new ann edit--------------------------------
function show_features()
{
    all_feat_div = document.getElementById('all_features');
    top_feat_div = document.getElementById('top_features');
    if (!feature_form_type) //if need to show 'all features'
    {
        top_feat_div.style.display = 'none';
        all_feat_div.style.display = 'block';
        feature_form_type = 1; //all features
    }
    else //if show only top features
    {
        all_feat_div.style.display = 'none';
        top_feat_div.style.display = 'block';
        feature_form_type = 0; //top features
    }
}

function fillFeatures()
{
    fillCheckboxes(document.getElementById('top_features').getElementsByTagName('input'));
    var all_features = document.getElementById('all_features');
    if (all_features != undefined)
        fillCheckboxes(all_features.getElementsByTagName('input'));
}

function fillCheckboxes(data)
{
    var size = data.length;
    for (i=0; i < size; i++)
    {
        if (selected_features[data[i].name] != undefined && selected_features[data[i].name])
            data[i].checked = true;
        else
            data[i].checked = false;
    }
}


function changeFeature(feature)
{
    var name = feature.name;

    if (feature.checked)
    {
        if(document.getElementById('top_'+name) != null)
            document.getElementById('top_'+name).checked = 1;

        if(document.getElementById(name) != null)
            document.getElementById(name).checked = 1;
    }
    else
    {
        if(document.getElementById('top_'+name) != null)
            document.getElementById('top_'+name).checked = 0;

        if(document.getElementById(name) != null)
            document.getElementById(name).checked = 0;
    }

    return true;
}


function validateFields(req_fields, exceptions, error)
{
    var status = true;
    var minY = 60000;
    var field;

    var fieldHolder = [];

    //loop through validation exceptions
    for (var key in exceptions)
    {
        field = document.getElementById(key);

        if (field != undefined && !field.disabled)
        {
            var call_back_result = eval(exceptions[key][0])(field);
            var call_back_message = exceptions[key][1];

            field = document.getElementById(key);

            if (!call_back_result)
            {
                minY = getFieldYCord(field, minY);
                showError(field, call_back_message);
                fieldHolder[key] = 1;
                status = false;
            }
            else
                deleteClass(field, 'required-box');
        }
    }
    //end of exceptions

    //loop through simple fields validation
    var size = req_fields.length;

    for (var i=0; i < size; i++)
    {
        field = document.getElementById(req_fields[i]);
        if (field != undefined && !field.disabled)
        {
            if (fieldHolder[req_fields[i]] == undefined)
            {
                if (typeof(default_currency) != 'undefined' && field.name == 'sell_price_'+ default_currency)
                {
                    var value = parseFloat(field.value);

                    if(isNaN(value) || value <= 0)
                    {
                        minY = getFieldYCord(field, minY);
                        showError(field, error);
                        status = false;
                    }
                    else
                        deleteClass(field, 'required-box');
                }
                else if (field.disabled != true && field.name != undefined && field.style.display != 'none' && field.value == '')
                {
                    minY = getFieldYCord(field, minY);
                    showError(field, error);
                    status = false;
                }
                else if (field.title != '' && field.value == field.title)
                {
                    clearTip(field);
                    minY = getFieldYCord(field, minY);
                    showError(field, error);
                    status = false;
                }
                else
                    deleteClass(field, 'required-box');
            }
        }
    }

    if (minY > 0 && !status)
        window.scrollTo(0,minY-20);

    return status;
}


function showError(field, error)
{
    if (!RegExp('\\brequired-box\\b').test(field.className))
        field.className += ' required-box';
}

function getFieldYCord(field, minY)
{
    targetOffset = findPosY(field);

    if (minY > targetOffset && targetOffset > 0)
        return targetOffset;
    else
        return minY;
}

function findPosY(obj)
{
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
            curtop += obj.offsetTop;
            if(!obj.offsetParent)
                break;
            obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
}


function validateAdditionalPhone(field)
{
    var value = field.value;
    var numbers = value.length;

    if (value && value.length > 0)
        return (3 <= numbers && numbers <= 32 && value.match(/^(\+)?(\d|\s|\(|\)|-){3,32}$/));
    else
        return true;
}

function validateMakeId(field)
{
    var value = field.value;

    if (value != undefined && value > 0)
        return true;
    else
    {
        make = document.getElementById('make_id');

        if (make != undefined)
        {
            if (make.value > 0)
            {
                if (false == make.disabled)
                {
                    field.disabled = false;
                    $("#make_id").change();
                }
            }
        }
        return false;
    }
}

function validateContactsEmail(field)
{
    var value = $.trim(field.value);

    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if((value.length > 0) && reg.test(value) == false)
        return false;
    else if (value.length == 0 && document.getElementById('not_logged') != undefined)
        return false;
    else
        return true;
}

function validatePromotionPrice(field)
{
    if (field.value == '')
        return true;

    if (Number(field.value) >= document.getElementById('sell_price_'+ default_currency).value)
        return false

    return true;
}

function validateNTprices(field)
{
    dropdown = document.getElementById('action_type');
    if (dropdown != undefined)
    {
        current_val = dropdown[dropdown.selectedIndex].value;
        if (1 == current_val || 3 == current_val)
        {
            if(document.getElementById('sell_price_' + default_currency).value > 0)
                return true;
            else
                return false;
        }
        else if (9 == current_val)
        {
            if(document.getElementById('short_rent_price_day_' + default_currency).value > 0)
                return true;
            else
                return false;
        }
        return true;
    }
}

function validateAdPrice(field)
{
    //trimmed value
    var value	= $.trim(field.value);

    // regex to check for digits only
    var result	=  /^\d+$/g.test(value);

    return result;
}

function validateMakeDate(field)
{
    var value = field.value;

    // if make date is not required and it's empty, let it through
    if (req_fields.indexOf(field.name) == -1 && value == '')
        return true;

    if (field.title != '' && value == field.title)
    {
        clearTip(field);
        return false;
    }

    var minYear = 1900;
    var maxYear = 2100;

    var data = value.split('-');
    var years = parseInt(data[0]);

    if (!years)
        return false;

    if (data[1] != undefined)
    {
        months = data[1] * 1;

        if (!months)
            return false;
    }
    else
        months = false;

    if (years > maxYear || years < minYear)
        return false;

    if (months && (months > 12 || months < 1))
        return false;

    return true;
}

function validateMakeDateEmpty(field)
{
    if (field.value == '')
        return true;

    return validateMakeDate(field);
}


function changed_category_chooser(nr,obj,path,lang)
{
    if (document.getElementById('main_form') != undefined)
    {
        document.getElementById('main_form').style.display = 'none';
        document.getElementById('bottom_form').style.display = '';
    }
    cursorStatus(0);
    var prefix = 'cats_';

    source_id = prefix + nr;
    target_id = prefix + (nr+1);
    setDisableStatus(target_id,0);

    if((document.getElementById(target_id) != undefined) || (nr == 1))
    {
        if (ajax_js_category_chooser(source_id,target_id,path,lang)==1)
        {
            setDisableStatus(target_id,1);
            setDisplayStatus(target_id,1);
        }
    }
    cursorStatus(1);
}

function ajax_js_category_chooser(source_id,target_id,path,lang)
{
    var data0 = document.getElementById(source_id).value;
    var resp = apAJAX.send(ann_edit_ajax_block, 'js_category_chooser', {data0:data0,lang:lang,rand:Math.random()}, false);
    if(resp.substr(0,7) != '<option')
    {
        prefix = resp.substr(0,9);
        if(prefix =='redirect_')
        {
            split = resp.substr(10);
            document.location.href = split;
        }
    }
    else
    {
        $('#'+target_id).html(resp);
        return 1;
    }
}

function ajaxLogin(category_id, project, mobile)
{
    var name_field = document.getElementById('login_name_bottom');
    var pass_field = document.getElementById('login_password_bottom');
    var browser_tab = document.getElementById('browser_tab');
    var remember_me = $("#remember_me").prop('checked');

    if (name_field != undefined && pass_field != undefined)
    {
        var resp = apAJAX.send(ann_edit_ajax_block, 'login_to_system', {'login_name':name_field.value, 'login_password':pass_field.value, 'browser_tab':browser_tab.value, 'category_id':category_id, 'project': project, 'mobile': mobile, 'remember_me': remember_me, 'nr':Math.random()}, false);
        document.getElementById('contacts_content').innerHTML = resp;
        document.location.href = document.location.href + '#contacts_content';
    }
    return false;
}

function changeContactsType(type, category_id, project, mobile)
{
    var resp = apAJAX.send(ann_edit_ajax_block, 'load_contacts_form', {'type':type,'category_id':category_id, 'project': project, 'mobile': mobile}, false);
    document.getElementById('contacts_content').innerHTML = resp;
}

function clearTips()
{
    //unset 'tips' from inputs
    for (var i=0; i<tips_array.length; i++)
    {
        element = document.getElementById(tips_array[i]);
        if (element.title == element.value)
            element.value = '';
    }
    var regitra_element = document.getElementById('search_regitra_vnz');
    if (regitra_element != undefined)
        regitra_element.value = '';
    //END of unseting 'tips' from inputs
}

function submitMainForm(msg, object)
{
    if (true == main_form_submited)
        return false;

    if (validateFields(req_fields, exceptions, msg))
    {
        clearTips();
        main_form_submited = true; //do not submit more than 1 time
        document.main_form.submit();
        return false;
    }
    else
        return false;
}

function submitRegitra()
{
    var element = document.getElementById('search_regitra_vnz');
    deleteClass(element, 'required-box');
    if (element.title != element.value)
    {
        document.main_form.submit();
        return false;
    }
    else
    {
        addClass(element, 'required-box');
        return false;
    }
}

function submitRc()
{
    var element1 = document.getElementById('rc_part_1');
    var element2 = document.getElementById('rc_part_2');
    deleteClass(element1, 'required-box');
    deleteClass(element2, 'required-box');
    if ((element1.title != element1.value) && (element2.title != element2.value))
    {
        createHiddenField('search_rc_number', 1);
        document.main_form.submit();
        return false;
    }
    else
    {
        addClass(element1, 'required-box');
        addClass(element2, 'required-box');
        return false;
    }
}


function submitRcByAddress()
{
    createHiddenField('search_rc_address', 1);
    document.main_form.submit();
    return false;
}

function submitPartnerActivate(msg, object)
{
    if (validateFields(req_fields, exceptions, msg))
    {
        clearTips();
        createHiddenField('activate_ann', 1);
        document.main_form.submit();
        return false;
    }
    else
        return false;
}

function deleteAnn(ann_id, auth_code, project)
{
    apAJAX.send(ann_edit_ajax_block, 'show_delete_dialog_edit', {ann_id:ann_id,project:project,auth_code:auth_code,nr:Math.random()}, function(resp)
    {
        if (resp)
            TINY.box.show(resp.title, resp.content);
    });


    return false;
}

function submitFeedback()
{
    apAJAX.send(ann_ajax_block, 'feedback', function(resp)
    {
        TINY.box.show('Mums svarbi Jūsų nuomonė', resp);
    });
    return false;
}

function submitFeedbackMyAnns()
{
    apAJAX.send(ajax_block_my_anns, 'feedback', {nr:Math.random()}, function(resp)
    {
        TINY.box.show('Mums svarbi Jūsų nuomonė', resp);
    });
    return false;
}

function getWindowWidth()
{
    var x = 0;
    if (self.innerHeight)
        x = self.innerWidth;
    else if (document.documentElement && document.documentElement.clientHeight)
        x = document.documentElement.clientWidth;
    else if (document.body)
        x = document.body.clientWidth;

    return x;
}

function createHiddenField(name, value)
{
    if (arguments[2] != undefined)
        form = arguments[2];
    else
        form = document.getElementById('main_form');

    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
}

function submitUserAnnNote(ann_id, project, object, def_note)
{
    if('' == object.value)
    {
        addClass(object, 'tip');
        object.title = object.value = def_note;
        return false;
    }
    else if (object.value != object.title)
    {
        var resp = apAJAX.send(ajax_block_my_anns, 'save_note', {ann_id:ann_id,project:project,note:escape(object.value)}, false);
        if(resp)
        {
            object.title = object.value;
            return true;
        }
        else
        {
            addClass(object, 'tip');
            object.title = object.value = def_note;
            return false;
        }
    }
}

function updateUserAnnStatByType(type, ann_id, project, chart_id)
{
    var resp = apAJAX.send(ajax_block_my_anns, 'get_stats_by_type', {type:type,ann_id:ann_id,project:project,nr:Math.random()}, false);

    if (resp)
    {
        document.getElementById('user_stats_graph').style.display = 'block';
        document.getElementById('user_stats_no_data').style.display = 'none';

        var chart = document.getElementById(chart_id);
        if (chart != undefined)
        {
            chart.setParam('charts.chart[0].values.y_left.max', resp.max_value);
            chart.setData(resp.data_str.replace(/\\n/g, '\n'));

        }
    }
    else
    {
        document.getElementById('user_stats_graph').style.display = 'none';
        document.getElementById('user_stats_no_data').style.display = 'block';
    }

    if (type == 'views_listing')
    {
        deleteClass(document.getElementById('li_views'), 'active');
        addClass(document.getElementById('li_views_listing'), 'active');
    }
    else
    {
        deleteClass(document.getElementById('li_views_listing'), 'active');
        addClass(document.getElementById('li_views'), 'active');
    }
}

function getUserAnnStats(type, ann_id, category_id, project, stats, service_link)
{
    var resp = apAJAX.send(ajax_block_my_anns, 'load_stats', {type:type,ann_id:ann_id,category_id:category_id,project:project,stats:stats,service_link:service_link,nr:Math.random()}, false);
    if (resp)
    {
        TINY.box.show(resp.title, resp.content, 500);

        if (resp.no_data)
        {
            document.getElementById('user_stats_graph').style.display = 'none';
            document.getElementById('user_stats_no_data').style.display = 'block';
        }
        else if (resp.max_value)
        {
            amcharts_max_value = resp.max_value;
        }
    }
}

function amChartInited(chart_id)
{
    if (amcharts_max_value != undefined && amcharts_max_value > 0)
    {
        var chart = document.getElementById('amstock');
        chart.setParam('charts.chart[0].values.y_left.max', amcharts_max_value);
    }
}

function submitMyAnnsSearch()
{
    var fields = document.getElementById('my_anns_filters').getElementsByTagName('input');

    for (i=0; i < fields.length; i++)
    {
        if (fields[i].title == fields[i].value)
            fields[i].value = '';
    }

    document.my_anns_filters.submit();
    return false;
}

function changeCurrencyValue(dropdown_id, hidden_id)
{
    var currency_field = document.getElementById(dropdown_id);
    var hidden_field = document.getElementById(hidden_id);
    if (currency_field != undefined && hidden_field != undefined)
    {
        hidden_field.value = currency_field.value;
        submitMyAnnsSearch();
        return false;
    }
}

function showDeleteDialog(ann_id, project, page_nr, order_str)
{
    var resp = apAJAX.send(ajax_block_my_anns, 'show_delete_dialog', {ann_id:ann_id,project:project,page_nr:page_nr,order_str:order_str,nr:Math.random()}, false);

    if (resp)
        TINY.box.show(resp.title, resp.content);

    return false;
}

function choosedDeleteReason()
{
    var form = document.getElementById('delete_dialog');
    var error_msg = document.getElementById('need_to_choose_reason');
    if (form != undefined)
    {
        inputs = form.getElementsByTagName('input');
        for (var i=0; i < inputs.length; i++)
        {
            if (inputs[i].name == 'reason_id' && inputs[i].checked == true)
            {
                error_msg.style.display = 'none';
                return true;
            }
        }
        error_msg.style.display = '';

    }
    return false;
}


/* Partner my anns functions */
function deletePartnerAnn(ann_id, prev_ann_id)
{
    var resp = apAJAX.send(ajax_block_my_anns, 'show_delete_partner_dialog', {ann_id:ann_id, prev_ann_id:prev_ann_id, nr:Math.random()}, false);
    if (resp.title != undefined && resp.content != undefined)
        TINY.box.show(resp.title, resp.content);

    return false;
}

function offerPartnerAnns()
{
    var checked_anns = $('.ids:checked');
    var n = 0;
    var anns_for_offer = '';
    for (var i=0; i < checked_anns.length; i++)
    {
        n++;
        anns_for_offer = anns_for_offer + ',' + checked_anns[i].value;
        if (n > 4)
            break;
    }

    var resp = apAJAX.send(ajax_block_my_anns, 'show_partner_anns_offer_dialog', {category_id:glob_category_id,project:glob_project,ann_ids:anns_for_offer}, false);

    if (resp.reload != undefined)
    {
        if (opener)
        {
            opener.location.reload();
            close();
        }
        else if (parent)
        {
            parent.location.reload();
            close();
        }
        else
        {
            window.close();
        }

        return false;
    }
    else if (resp != undefined && resp.title != undefined && resp.content != undefined)
        TINY.box.show(resp.title, resp.content,375);

    return false;
}

function filterBroker()
{
    var broker = document.getElementById('broker');
    if (broker != undefined)
    {
        var broker_id = broker[broker.selectedIndex].value;
        document.location.href = broker_link+broker_id;
    }
}

function submitAnnPrice(ann_id, category_id, project, object, action_type, is_partner, currency_id)
{
    if (trimSpace(object.value) != trimSpace(object.title))
    {
        var resp = apAJAX.send(ajax_block_my_anns, 'save_price', {ann_id:ann_id, category_id:category_id, project:project, price:object.value, action_type:action_type, is_partner:is_partner, currency_id:currency_id}, false);
        if(parseFloat(resp.replace(/ /g, '')) > 0)
        {
            object.value = resp;
            object.title = object.value;
            object.style.backgroundImage = "url('/img/ico/edit-tick.gif')";
            setTimeout(function() { object.style.backgroundImage = "url('/img/ico/edit-pen.gif')" }, 700);
            return true;
        }
        else
        {
            object.value = object.title;
            alert(partner_lang_ids['bad_price_format']);
            return true;
        }
    }
    else
        object.value = object.title;
}

function trimSpace(param)
{
    if(typeof param == 'object')
    {
        param.value=param.value.replace(/ /g,'');
    }
    else
        return param.replace(/ /g, '');
}

function recalcPartnerServicePrices()
{
    var category_id, price;
    var cheks = $("#listing_form input[type=checkbox]:checked.ids");
    var services = $("#services_list input[type=checkbox]:checked");
    var current_multiplier = 1;

    total_price = 0;

    $("#pluses_total_price").html(total_price);

    cheks.each(function()
    {
        category_id = this.id.split('_')[1];
        services.each(function()
        {
            price = serv_prices[category_id][this.value];
            if (this.value == 10)
            {
                price = countPricePartnerRaiseAnn(price,'service',this);
            }
            else
            {
                current_multiplier = $("#multiplier_"+this.value).val();
                if (typeof current_multiplier === "undefined")
                    current_multiplier = 1;

                price = price * current_multiplier;
            }

            countPartnerPrice(price,this);
        })
    });
}

function recalcPartnerRightRaisePrice()
{
    var price_div = document.getElementById('service_price_10');
    if (price_div != undefined && serv_prices[glob_category_id][10] != undefined)
    {
        price_div.innerHTML = countPricePartnerRaiseAnn(serv_prices[glob_category_id][10]);
    }
}

function recalcPartnerRightPrice(service_id)
{
    var price_div = document.getElementById('service_price_'+service_id);
    if (price_div != undefined && serv_prices[glob_category_id][service_id] != undefined)
    {
        price_div.innerHTML = countPricePartnerRaiseAnn(serv_prices[glob_category_id][10]);
    }
}

function enableRaiseService()
{
    enableService(10);
}

function enableService(service_id)
{
    var service_checkbox = document.getElementById('service_' + service_id);
    if (typeof service_checkbox !== "undefined")
    {
        if (service_checkbox.checked == false)
            service_checkbox.checked = true;
    }
}

function isAnnsChecked()
{
    if ($("#listing_form input[type=checkbox]:checked").length == 0)
    {
        alert(partner_lang_ids['no_anns']);
        return false;
    }
    else
        return true;
}

function executePartnerAction(action)
{
    if (action === 'contacts_check' || action === 'contacts')
    {
        var anns_checked = [];

        $('#listing_form input[type=checkbox]:checked').each(function(){
            anns_checked.push(this.value)
        });

        if (action === 'contacts_check')
        {
            var post = {};
            var fields = $('#change_contacts_form').serializeArray();

            for(var i in fields)
                post[fields[i].name] = fields[i].value;

            var resp = apAJAX.send(ajax_block_my_anns, 'ajaxCheckContactsChangeForm', post, false);
        }
        else
            var resp = apAJAX.send(ajax_block_my_anns, 'ajaxGetContactsChangeForm', {items:anns_checked.join(',')}, false);

        if (action === 'contacts_check' && resp === true)
            return true;

        TINY.box.show(resp.title, resp.content, 776);
        return false;
    }

    if (!isAnnsChecked())
        return false;

    if(action)
    {
        if ('delete' == action)
            return deletePartnerAnn();
        else if ('offer' == action)
            return offerPartnerAnns();

        submitPartnerForm(partner_actions[action]);
    }
    else
        return alert(partner_lang_ids['no_action_choosed']);

    return false;
}

function executeServices(obj)
{
    var services = $("#services_list input[type=checkbox]:checked");
    if(services.length == 0)
        alert(partner_lang_ids['no_service_choosed']);
    else
    {
        if (isAnnsChecked())
        {
            $('#listing_form input:hidden').remove();
            for(i=0;i<services.length;i++)
            {
                if (services[i].value == 10)
                {
                    createHiddenField('serv_raise_ann_amount', document.getElementById('serv_raise_ann_amount').value,document.forms.listing_form);
                    createHiddenField('serv_raise_ann_days', document.getElementById('serv_raise_ann_days').value,document.forms.listing_form);
                }
                else
                {
                    var current_multiplier = $("#multiplier_"+services[i].value).val();
                    if (typeof current_multiplier !== "undefined")
                        createHiddenField('service_multiplier['+services[i].value+']', current_multiplier, document.forms.listing_form);
                }

                createHiddenField('service['+services[i].value+']', services[i].value, document.forms.listing_form);
            }
            document.forms.listing_form.submit();
        }
    }
}

function printAnn(id)
{
    OpenNamedPopup($('#item_'+ id +' td.link a').attr('href') + '&print', 'item' + id, 1020, 800);
    return false;
}

function submitPartnerDeleteReason(ann_id, prev_ann_id)
{
    var reason_input = document.delete_reason.reason_id;

    if (reason_input != undefined)
    {
        for (var i=0; i<reason_input.length; i++)
        {
            if (reason_input[i].checked == true)
            {
                var checked = reason_input[i].value;
                break;
            }
        }

        var input;
        if (checked != undefined)
            createHiddenField('reason_id', escape(checked), document.listing_form);
        if (document.getElementById('reason_other') != undefined)
        {
            createHiddenField('reason_other', escape(document.getElementById('reason_other').value), document.listing_form);
        }

        if (ann_id > 0)
        {
            $('.ids').prop('checked', false);
            createHiddenField('ids[]', ann_id, document.listing_form);
            createHiddenField('prev_ann_id', prev_ann_id, document.listing_form);
        }

        submitPartnerForm(partner_actions['delete']);
    }
}

function submitPartnerAnnOffer(ann_ids)
{
    if (document.getElementById('mail_from') != undefined && document.getElementById('mail_to') != undefined)
    {
        var mail_from = document.getElementById('mail_from');
        var mail_to = document.getElementById('mail_to');

        if (validateContactsEmail(mail_from) && validateContactsEmail(mail_to))
        {
            var comment = document.getElementById('comment').value;
            createHiddenField('mail_from', mail_from.value, document.listing_form);
            createHiddenField('mail_to', mail_to.value, document.listing_form);
            createHiddenField('comment', comment, document.listing_form);
            createHiddenField('offer_ann_ids', ann_ids, document.listing_form);
        }
        else
        {
            alert(partner_lang_ids['anns_offer_need_fields']);
            return false;
        }
    }
    submitPartnerForm(partner_actions['offer']);
}

function checkPartnerAnnOffer(ann_ids)
{
    var sci = document.getElementById('ann_offer_check').value;
    var resp = apAJAX.send(ajax_block_my_anns, 'validate_partner_anns_offer_dialog', {category_id:glob_category_id,project:glob_project,ann_ids:ann_ids, sci:sci}, false);
    if (resp.title != undefined && resp.content != undefined)
        TINY.box.show(resp.title, resp.content,375);
    return false;
}

function round(value, decimals) {
    var result = Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    if (!isNaN(result))
        return result;
    else
        return 0;
}

function submitPartnerForm (action_link)
{
    var form = document.forms.listing_form;
    form.action = action_link;
    form.submit();
}
/* end of partner my anns functions */
/* services functions */
function countPriceRaiseAnn(price, price_sms, type, parent_id)
{
    var parent_checkbox = document.getElementById(parent_id);
    var amount_select 	= document.getElementById('serv_raise_ann_amount');
    var days_select 	= document.getElementById('serv_raise_ann_days');

    if (parent_checkbox != undefined && amount_select != undefined && days_select != undefined)
    {
        var sms_price_span 	= document.getElementById('serv_raise_ann_sms_price');
        var bank_price_span = document.getElementById('serv_raise_ann_bank_price');

        var sms_price_span_eur 	= document.getElementById('serv_raise_ann_sms_price_eur');
        var bank_price_span_eur = document.getElementById('serv_raise_ann_bank_price_eur');

        if (parent_checkbox.checked == true)
        {
            var amount 	= parseInt(amount_select[amount_select.selectedIndex].value);
            var days 	= parseInt(days_select[days_select.selectedIndex].value);

            if (amount > 0 && days > 0)
            {
                //count bank price
                var new_price = (price * amount * days) - serv_raise_ann_price;
                serv_raise_ann_price = (price * amount * days);

                if (bank_price_span != undefined && bank_price_span_eur != undefined)
                {
                    bank_price_span.innerHTML		= round(serv_raise_ann_price, 2);
                    bank_price_span_eur.innerHTML	= floor_dec(serv_raise_ann_price * LTL_TO_EUR_RATE);
                }


                //count sms price
                var new_price_sms 			= round(((price_sms * amount * days) - serv_raise_ann_price_sms), 2);
                serv_raise_ann_price_sms 	= (price_sms * amount * days);

                if (sms_price_span != undefined && sms_price_span_eur != undefined)
                {
                    sms_price_span.innerHTML		= round(serv_raise_ann_price_sms, 2);
                    sms_price_span_eur.innerHTML	= floor_dec(serv_raise_ann_price_sms * LTL_TO_EUR_RATE);
                }

                countPrice(new_price, type, parent_id);
            }
        }
        else
        {
            countPrice(serv_raise_ann_price, type, parent_id);

            serv_raise_ann_price = 0;

            if (sms_price_span != undefined && sms_price_span_eur != undefined)
            {
                sms_price_span.innerHTML = default_serv_raise_ann_price_sms;
                sms_price_span_eur.innerHTML = default_serv_raise_ann_price_sms_eur;
            }

            if (bank_price_span != undefined && sms_price_span_eur != undefined)
            {
                bank_price_span.innerHTML = default_serv_raise_ann_price;
                sms_price_span_eur.innerHTML = default_serv_raise_ann_price_sms_eur;
            }
        }
    }
    return false;
}



function countPricePartnerRaiseAnn(price, type, parent_id)
{
    var amount_select = document.getElementById('serv_raise_ann_amount');
    var days_select = document.getElementById('serv_raise_ann_days');
    if (amount_select != undefined && days_select != undefined)
    {
        var amount = parseInt(amount_select[amount_select.selectedIndex].value);
        var days = parseInt(days_select[days_select.selectedIndex].value);
        if (amount > 0 && days > 0)
        {
            return Math.round((price * amount * days)*100)/100;
        }
    }
    return false;
}



function countPriceRaiseAnnCheckbox(price, price_sms, type, element_id)
{
    var element = document.getElementById(element_id);
    var amount_select = document.getElementById('serv_raise_ann_amount');
    var days_select = document.getElementById('serv_raise_ann_days');

    if (element.checked == true)
    {
        countPriceRaiseAnn(price, price_sms, type, element.id);
    }
    else
    {
        countPriceRaiseAnn(serv_raise_ann_price, serv_raise_ann_price_sms, type, element.id);
        amount_select.selectedIndex = 0;
        days_select.selectedIndex = 0;
    }
}


function countPricePartnerRaiseAnnCheckbox(element)
{
    if (element.checked == false)
    {
        var amount_select = document.getElementById('serv_raise_ann_amount');
        var days_select = document.getElementById('serv_raise_ann_days');

        amount_select.selectedIndex = 0;
        days_select.selectedIndex = 0;
    }
}


function countPartnerPrice(price, element)
{
    if (element.checked == true)
        total_price = total_price + price;
    else
        total_price = total_price - price;

    $("#pluses_total_price").html(Math.round(total_price*100)/100);
}


/* EO service functions */

function showAnnRaisesStats(ann_id, project, auth_code)
{
    var resp = apAJAX.send(ajax_block_my_anns, 'getAnnRaisesStats', {ann_id:ann_id, project:project, auth_code:auth_code}, false);
    if (resp.title != undefined && resp.content != undefined)
        TINY.box.show(resp.title, resp.content);

    return false;
}


/*ann_services_js*/
//šš
function parseUrlForOrder()
{
    var href = window.location.href;
    var parts = href.split('#');
    if (parts.length <= 1)
        return false;
    parts = parts[parts.length-1].split('/');
    if (parts.length <= 1)
        return false;
    smsCode = parts[0];
    orderId = parts[1];
}
function reloadSmsOrder ()
{
    if (!smsCode || !orderId)
        return false;

    var resp = apAJAX.send(servicesAjaxBlock, 'getOrderData', {'code':smsCode, 'order_id':orderId, 'ann_id':glob_ann_id, mobile:((typeof(mobile) == 'undefined') ? 0 : 1)}, false);
    if (resp == '')
        return false;

    if (resp.service != undefined && resp.service != '')
        clearInputs('radio');
    else
        clearInputs('checkbox');

    elements = document.getElementById('services_list').getElementsByTagName('input');

    var bank_pluses_price = parseFloat(resp.price / 2);

    $(".total_price_banks").html(bank_pluses_price);
    $(".total_price_banks_eur").html(floor_dec(bank_pluses_price * LTL_TO_EUR_RATE));
    $("#pluses_total_price").html(bank_pluses_price);

    total_price = bank_pluses_price;

    for (var i=0; i<elements.length; i++)
    {
        if (elements[i].checked == false)
        {
            if (typeof(resp.service) != "undefined" && typeof(resp.service[elements[i].value]) != "undefined")
                elements[i].checked = true;
            else if (elements[i].value == resp.packet)
                elements[i].checked = true;
        }
    }

    checkSmsPaymentStatus(smsCode);
    var sms_tab_checkbox = document.getElementById('pay_sms');
    if (sms_tab_checkbox.checked == false)
    {
        sms_tab_checkbox.checked = true;
        document.getElementById('pay_sms_tr').style.display = 'block';
        intervalStart = setInterval(function(){checkSmsPaymentStatus(smsCode)}, 60000);
    }

    serviceChanged = false;
    smsAjaxResponse = true;
}
function countPrice(price, type, element_id)
{
    element = document.getElementById(element_id);

    if (!quitSmsPayment(element))
        return false;

    if ($('#method-tabs .method-active').length > 0 && !checkServices(element))
    {
        stopSmsCheck();
        switchPaymentMethod('deselect_all');
    }

    if (type == 'service')
    {
        clearInputs('radio');

        if (element.checked == true)
            total_price = total_price + price;
        else
            total_price = total_price - price;
    }
    else
    {
        clearInputs('checkbox');

        if (element.checked == true)
            total_price = price;
    }
    isFreeServices();
    serviceChanged = true;

    if ($("#pay_sms").prop('checked') == true)
        switchPaymentMethod('deselect_all');

    $(".total_price_banks").html(round(total_price, 2));
    $(".total_price_banks_eur").html(floor_dec(total_price * LTL_TO_EUR_RATE));
    $("#pluses_total_price").html(round(total_price, 2));
}


function isFreeServices()
{
    var free_services = document.getElementById('free_services');

    if (total_price > 0)
    {
        if (document.getElementById("payment_methods").style.display == 'none')
        {
            if (document.getElementById('pay_banklink') != undefined)
            {
                changePayMethod('pay_banklink');
            }
            else
                changePayMethod('pay_sms');
        }

        $("#free_services").hide();
    }
    else
    {
        changePayMethod('free_services');

        if (countInputs() > 0)
            $("#free_services").show();
        else
            $("#free_services").hide();
    }
}

function clearInputs (type)
{
    var elements = document.getElementById('services_list').getElementsByTagName('input');
    for (var i=0; i < elements.length; i++)
    {
        if (elements[i].type == type && elements[i].checked == true && elements[i].disabled == false)
        {
            if (elements[i].id.indexOf('packet_') > -1)
                var index = 'packets'
            else
                var index = 'services';

            elements[i].checked = false;
            total_price = total_price - prices[index][elements[i].value]['price'];
        }
    }
}

function countInputs()
{
    var count = 0;
    elements = document.getElementById('services_list').getElementsByTagName('input');
    for (var i=0; i < elements.length; i++)
        if (elements[i].checked == true)
            count++;

    return count;
}

function changePayMethod (element)
{
    var element = document.getElementById(element);
    switch (element.id)
    {
        case 'pay_banklink':
            if (!quitSmsPayment(element))
            {
                switchPaymentMethod('pay_sms');
                return false;
            }

            if (!checkServices(element))
            {
                switchPaymentMethod('deselect_all');
                break;
            }

            stopSmsCheck();
            deleteClass(document.getElementById('bank'), 'required-box');
            switchPaymentMethod('pay_banklink');
            break;

        case 'pay_mokipay':
            if (!quitSmsPayment(element))
            {
                switchPaymentMethod('pay_sms');
                return false;
            }

            if (!checkServices(element))
            {
                switchPaymentMethod('deselect_all');
                break;
            }

            stopSmsCheck();
            switchPaymentMethod('pay_mokipay');
            break;

        case 'pay_cc':
            if (!quitSmsPayment(element))
            {
                switchPaymentMethod('pay_sms');
                return false;
            }

            if (!checkServices(element))
            {
                switchPaymentMethod('deselect_all');
                break;
            }

            stopSmsCheck();
            switchPaymentMethod('pay_cc');
            break;

        case 'pay_sms':
            if (!checkServices(element))
            {
                switchPaymentMethod('deselect_all');
                break;
            }
            if (submitSMSpayment(element))
                switchPaymentMethod('pay_sms');
            break;
        case 'pay_pluses':
            if (!quitSmsPayment(element))
            {
                switchPaymentMethod('pay_sms');
                return false;
            }

            if (!checkServices(element))
            {
                switchPaymentMethod('deselect_all');
                break;
            }

            stopSmsCheck();
            switchPaymentMethod('pay_pluses');
            break;
        case 'free_services':
            stopSmsCheck();
            switchPaymentMethod('');
            break;
    }
}

function switchPaymentMethod(type)
{
    if (type)
    {
        if (type != 'deselect_all')
        {
            $("#method-content div").hide();
            $("#payment_methods li").removeClass('method-active');
            $("#payment_methods li input").attr('checked', false);

            $("#" + type + "_tr").show();
            $("#" + type + "_li").addClass('method-active');
            $("#" + type + "_li input").attr('checked', true);
            $("#method-content").show();
            $("#payment_methods").show();
            $("#payment_methods").removeClass('empty-payment-methods');
        }
        else
        {
            $("#payment_methods li").removeClass('method-active');
            $("#payment_methods li input").attr('checked', false);
            $("#method-content").hide();
            $("#payment_methods").addClass('empty-payment-methods');
        }
    }
    else
    {
        $("#payment_methods").hide();
        $("#method-content").hide();
        $("#payment_methods").removeClass('empty-payment-methods');
    }
}

function checkServices()
{
    if (checkServiceNeedPhoto() && serv_data.ann.photo_count < 1)
    {
        TINY.box.show(need_photo_message.title, need_photo_message.message);
        return false;
    }

    if (typeof(serv_data) == 'undefined')
        return true;

    for(var service in serv_data)
    {
        var data = serv_data[service];

        // this is not a service
        if (typeof(data.duration) == 'undefined' || service == 'service_1')
            continue;

        if (service == 'service_8') // exception highlight ann
        {
            if ($('#'+ service +':checked').length && !checkServicesError(service, serv_data.ann.serv_highlight_till))
                return false;
        }
        else if (service == 'service_10') // exception raise ann
        {
            if ($('#'+ service +':checked').length)
            {
                serv_data[service].duration = parseInt($('#serv_raise_ann_days').val());

                if (!checkServicesError(service))
                    return false;
            }
        }
        else
        {
            if ($('#'+ service +':checked').length && !checkServicesError(service))
                return false;
        }
    }

    return true;
}

function checkServicesError(service, from)
{
    if (typeof(from) == 'undefined')
        from = serv_data.now;

    var actived_till = serv_data.ann.actived_till;

    // increase activation if 1 service selected
    if ($('#service_1:checked').length)
        actived_till += serv_data.service_1.duration * serv_data.day;

    // if new duration longer then activated ann show worning message
    if (actived_till < from + serv_data[service].duration * serv_data.day)
    {
        if (prices.services[1].price > 0)
        {
            // for paid anns show warning
            TINY.box.show(serv_data[service].title, serv_data[service].message);
            return false;
        }
        else if (!$('#service_1').is(':checked'))
        {
            // for free anns just check increase activation checkbox
            $('#service_1').prop('checked', true);
            makeActiveServiceRow(1);
        }
    }

    return true;
}

function submitSMSpayment (element)
{
    if (!serviceChanged && smsAjaxResponse)
    {
        checkSmsPaymentStatus(smsCode);
        intervalStart = setInterval(function(){checkSmsPaymentStatus(smsCode)}, 60000);
        return true;
    }

    if (!glob_has_photo && checkServiceNeedPhoto())
    {
        TINY.box.show(need_photo_message.title, need_photo_message.message);
        element.checked = false;
        return false;
    }

    if (document.getElementById('services_list') != undefined)
    {
        var elements = document.getElementById('services_list').getElementsByTagName('input');
        var services = {};
        var packet = 0;
        for (var i=0; i < elements.length; i++)
        {
            if (elements[i].checked == true && elements[i].value > 0)
            {
                if (elements[i].id.indexOf('packet_') > -1)
                    packet = elements[i].value;
                else
                    services[elements[i].value] = elements[i].value;
            }
        }
    }

    var serv_raise_ann_amount = document.getElementById('serv_raise_ann_amount');
    var serv_raise_ann_days = document.getElementById('serv_raise_ann_days');

    if (serv_raise_ann_amount != undefined && serv_raise_ann_days != undefined)
    {
        var raise_amount = serv_raise_ann_amount[serv_raise_ann_amount.selectedIndex].value;
        var raise_days = serv_raise_ann_days[serv_raise_ann_days.selectedIndex].value;
    }
    else
    {
        var raise_amount = 0;
        var raise_days = 0;
    }

    var resp = apAJAX.send(servicesAjaxBlock, 'smsPayment', {'category_id':glob_category_id, 'project':glob_project, 'ann_id': glob_ann_id, 'service':services, 'packet':packet, 'auth_code':glob_auth_code, 'serv_raise_amount':raise_amount, 'serv_raise_days':raise_days, 'country': country_name, mobile:((typeof(mobile) == 'undefined') ? 0 : 1)}, false);

    if (resp.td1 != undefined)
    {
        document.getElementById('td1').innerHTML = resp.td1;
        document.getElementById('td2').innerHTML = resp.td2;
        document.getElementById('td3').innerHTML = resp.td3;
    }

    serviceChanged = false;
    smsAjaxResponse = true;
    smsCode = resp.code;
    orderId = resp.order_id;
    intervalStart = setInterval(function(){checkSmsPaymentStatus(smsCode)}, 60000);
    setCodeAndOrderToHref(resp.code,resp.order_id);
    return true;
}
function setCodeAndOrderToHref (code, order)
{
    if (code == undefined || order == undefined)
        return false;
    var href = window.location.href;
    href = href.split('#');
    window.location.href = href[0]+'#'+code+'/'+order;
}

function checkSmsPaymentStatus (code)
{
    if (code == undefined && orderId == undefined)
        return false;

    var td1 = document.getElementById('td1');
    td1.innerHTML = '<img src="/img/lightbox/loading.gif" alt="Loading" />';

    var resp = apAJAX.send(servicesAjaxBlock, 'leftSmsAmount', {price:total_price, code:code, order_id:orderId, ann_id:glob_ann_id, country: country_name, mobile:((typeof(mobile) == 'undefined') ? 0 : 1)}, false);

    if (resp.reload != undefined)
    {
        var parts = window.location.href.split('#');
        need_confirm = false;
        window.location.href = parts[0]+'&top=1';
    }

    if (resp.stop != undefined)
        clearInterval(intervalStart);

    if (resp.td1 != undefined)
    {
        td1.innerHTML = resp.td1;
        document.getElementById('td2').innerHTML = resp.td2;
        document.getElementById('td3').innerHTML = resp.td3;
    }

    if (resp.error != undefined && resp.error != '')
        apMessageBox('messages_box', resp.error, 'error');
    return false;
}

function checkSmsStarted()
{
    var resp = apAJAX.send(servicesAjaxBlock, 'checkSmsStarted', {'code':smsCode, 'ann_id':glob_ann_id}, false);

    if (resp.error == undefined && resp)
        return true;
    else
        return false;
}

function submitBanklink ()
{
    if (smsCode)
    {
        if (checkSmsStarted())
        {
            if (!quitSmsPayment())
                return false;

            serviceChanged = true; //to generate new code for sms
        }
    }

    deleteClass(document.getElementById('bank'), 'required-box');
    if (!glob_has_photo && checkServiceNeedPhoto())
    {
        TINY.box.show(need_photo_message.title, need_photo_message.message);
        return false;
    }

    var bank = document.getElementById('bank');

    if (bank.selectedIndex == 0)
    {
        addClass(document.getElementById('bank'), 'required-box');
        return false;
    }
    need_confirm = false;
    document.pay_services.submit();
    return false;
}

function submitPluses ()
{
    if (!glob_has_photo && checkServiceNeedPhoto())
    {
        if (typeof(mobile) == 'undefined')
            TINY.box.show(need_photo_message.title, need_photo_message.message);
        else
            alert(need_photo_message.message);
        return false;
    }
    need_confirm = false;
    document.pay_services.submit();
    return false;
}

function submitActivate ()
{
    if (!glob_has_photo && checkServiceNeedPhoto())
    {
        TINY.box.show(need_photo_message.title, need_photo_message.message);
        return false;
    }
    createHiddenField('pay_method', 'activate');
    need_confirm = false;
    document.pay_services.submit();
    return false;
}

function checkServiceNeedPhoto()
{
    var can_order_services = false;

    if (document.getElementById('services_list') == undefined)
        return false;

    var elements = document.getElementById('services_list').getElementsByTagName('input');
    var packet = 0;
    var services = {};
    for (var i=0; i < elements.length; i++)
    {
        if (elements[i].checked == true && elements[i].value > 0)
        {
            if (elements[i].id.indexOf('packet_') > -1 && 1 == prices.packets[elements[i].value].need_photo)
                return true;
            else if (elements[i].id.indexOf('packet_') == -1 && 1 == prices.services[elements[i].value].need_photo)
                return true;
        }
    }
    return false;
}

function quitSmsPayment (element)
{
    if (!smsCode)
        return true;

    sms_element = document.getElementById('pay_sms');
    if (confirm(confirmChangeServicesMessage))
    {
        stopSmsCheck();

        switchPaymentMethod('deselect_all');

        smsCode 		= false;
        smsAjaxResponse = false;

        var parts = window.location.href.split('#');
        window.location.href = parts[0]+'#method-tabs';

        return true;
    }
    else
    {
        if (element != undefined)
            element.checked = !element.checked;

        return false;
    }
}

function stopSmsCheck ()
{
    if (intervalStart)
        clearInterval(intervalStart);

    intervalStart = false;
}


function uploadVideoUrl()
{
    var type = false;
    var preloader_url = 'http://s.oplius.lt/beta.plius.lt/img/bg/ajax-loader.gif';
    var url = document.getElementById('video_url').value;
    var img_container = $("#video-thumb");

    if (url)
    {
        var video_url = url.replace(/^\s+|\s+$/g,"");

        var youtube_pattern = /(youtube\.com)+(.)+(v=)+([\w\-]+)/;
        var parsed_data = youtube_pattern.exec(video_url);
        if (parsed_data && parsed_data[4] != undefined)
            var youtube_code = parsed_data[4];

        var youtube_pattern = /(youtu\.be\/)+([\w\-]+)/;
        var parsed_data = youtube_pattern.exec(video_url);
        if (parsed_data && parsed_data[2] != undefined)
            var youtube_code = parsed_data[2];

        if (youtube_code != undefined)
        {
            img_container.attr('src', preloader_url);
            img_container.addClass('video-thumb-preloader');
            img_container.show();

            var img_path = 'http://img.youtube.com/vi/'+youtube_code+'/default.jpg';
            var img = new Image();
            $(img).load(function (){img_container.removeClass('video-thumb-preloader');$('#video-thumb').attr('src', this.src);}).attr('src', img_path);

            document.getElementById('video_uploaded').value = youtube_code;
            return false;
        }
    }

    document.getElementById('video_uploaded').value = '';
    img_container.hide();

    return false;
}

function showBlockDropReason(ann_id)
{
    var resp = apAJAX.send(ajax_block_my_anns, 'show_block_drop_reason', {ann_id:ann_id}, false);

    if (resp)
        TINY.box.show(resp.title, resp.content);

    return false;
}


function getChoosenCategoryId()
{
    for (var i=5; i > 0; i--)
    {
        var dropdown = $('#select_' + i);
        var select_name = dropdown.attr('name');

        if (select_name != undefined && select_name.indexOf('category_id') > -1 && dropdown.val() > 0)
        {
            choosen_category_id = dropdown.val();
            return choosen_category_id;
        }
    }
    choosen_category_id = 0;
    return choosen_category_id;
}

function changeCategory(object)
{
    var dropdown_nr 	= parseInt(object.id.replace('select_', ''));
    var field_value		= $(object).val();
    var field_name		= object.name;

    if (!field_value)
        return false;

    for (var i=dropdown_nr; i <= 4; i++)
    {
        $('#select_' + (i+1)).text('').hide();
        $('#select_' + (i+1)).parent().hide();
    }
    getChoosenCategoryId();

    var resp = apAJAX.send(category_chooser_ajax_block, 'get_next_level', {category_id: choosen_category_id, field_value: field_value, field_name: field_name}, false);

    if (resp.redirect != undefined)
    {
        var get_str = '';
        for (var i=2; i <= 5; i++)
        {
            var dropdown = $('#select_'+i);

            if (dropdown.attr('name') && dropdown.attr('name') != 'category_id')
                get_str += dropdown.attr('name') + '=' + dropdown.val() + '&';
        }
        window.location.href = resp.redirect + get_base + get_str;
    }
    else if (resp.html != undefined)
    {
        $('#select_' + (dropdown_nr+1)).parent().show();
        $('#select_' + (dropdown_nr+1)).attr('name', resp.field_name).html(resp.html).show();
    }
    $('#category_selector').animate({scrollLeft:$('#category_selector').find('table').width()}, 800);
}

function getChoosenCategoryId()
{
    for (var i=5; i > 0; i--)
    {
        var dropdown = $('#select_' + i);
        var select_name = dropdown.attr('name');

        if (select_name != undefined && select_name.indexOf('category_id') > -1 && dropdown.val() > 0)
        {
            choosen_category_id = dropdown.val();
            return choosen_category_id;
        }
    }
    choosen_category_id = 0;
    return choosen_category_id;
}

function changeCategory(object)
{
    var dropdown_nr 	= parseInt(object.id.replace('select_', ''));
    var field_value		= $(object).val();
    var field_name		= object.name;

    if (!field_value)
        return false;

    for (var i=dropdown_nr; i <= 4; i++)
    {
        $('#select_' + (i+1)).text('').hide();
        $('#select_' + (i+1)).parent().hide();
    }
    getChoosenCategoryId();

    var resp = apAJAX.send(category_chooser_ajax_block, 'get_next_level', {category_id: choosen_category_id, field_value: field_value, field_name: field_name}, false);

    if (resp.redirect != undefined)
    {
        var get_str = '';
        for (var i=2; i <= 5; i++)
        {
            var dropdown = $('#select_'+i);

            if (dropdown.attr('name') && dropdown.attr('name') != 'category_id')
                get_str += dropdown.attr('name') + '=' + dropdown.val() + '&';
        }
        window.location.href = resp.redirect + get_base + get_str;
    }
    else if (resp.html != undefined)
    {
        $('#select_' + (dropdown_nr+1)).parent().show();
        $('#select_' + (dropdown_nr+1)).attr('name', resp.field_name).html(resp.html).show();
    }
    $('#category_selector').animate({scrollLeft:$('#category_selector').find('table').width()}, 800);
}


function makeActivePacketsColumn(nr)
{
    $('.packet_radio').each(function(){
        if (!this.checked)
            $('.column_' + $(this).data('index')).removeClass('row-hover');
    });

    $('.column_'+ nr).addClass('row-hover');
    $('#packets_banner').removeClass(current_banner_class);
    $('#packets_banner').addClass('promt-' + nr);
    current_banner_class = 'promt-' + nr;
}

function makePassivePacketsColumn(nr)
{
    if (!$('.column_' + nr + ' input').prop('checked'))
        $('.column_' + nr).removeClass('row-hover');

    $('#packets_banner').removeClass(current_banner_class);

    if ($('.packet_radio:checked').val())
    {
        $("#packets_banner").addClass('promt-' + $(".packet_radio:checked").data('index'));
        current_banner_class = 'promt-' + $(".packet_radio:checked").data('index');
    }
    else
    {
        $("#packets_banner").addClass('promt-1');
        current_banner_class = 'promt-1';
    }
}

function makeActiveServiceRow(nr)
{
    $(".service_checkbox").each(function () {
        if (!this.checked)
            $(".row_" + this.value).removeClass("row-hover");
    });

    $(".row_" + nr).addClass("row-hover");
    $("#packets_banner").removeClass(current_banner_class);
    $("#packets_banner").addClass('promt-' + nr);
    current_banner_class = 'promt-' + nr;
}

function makePassiveServiceRow(nr)
{
    if (!$("#service_" + nr).prop("checked"))
        $(".row_" + nr).removeClass("row-hover");

    $("#packets_banner").removeClass(current_banner_class);

    var checked_values = $(".service_checkbox:checked").length;

    if (checked_values > 0)
    {
        $("#packets_banner").addClass('promt-' + $(".service_checkbox:checked").get(0).value);
        current_banner_class = 'promt-' + $(".service_checkbox:checked").get(0).value;
    }
    else
    {
        $("#packets_banner").addClass('promt-1');
        current_banner_class = 'promt-1';
    }
}

function countUnitPrice(price, size, str, str2)
{
    if (size > 0 && price > 0)
    {
        var unit_price = price / size;
        unit_price = unit_price.toFixed(0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
    }
    else
        var unit_price = 0;

    var string = base_unit_price_text.replace("%d", unit_price);

    // replace additional string if set
    if (typeof(str) !== 'undefined')
        string = string.replace("%s", str);

    // replace second additional string if set
    if (typeof(str2) !== 'undefined')
        string = string.replace("%s", str2);

    document.getElementById('unit_price').innerHTML = string;
}/**
 * Created by Eivydas on 2015-02-12.
 */
