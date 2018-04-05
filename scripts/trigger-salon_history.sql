drop procedure if exists `salon_history_insert`;
delimiter //
create procedure `salon_history_insert`
(
    id varchar(11),
    salon_id int(11),
    field varchar(255),
    old_value varchar(255),
    new_value varchar(255),
    created_by int(11)
)
begin
insert into `salon_history` (
    `salon_id`,
    `field`,
    `old_value`,
    `new_value`,
    `created_by`,
    `created_at`
) values (
    salon_id,
    field,
    old_value,
    new_value,
    created_by,
    now()
);
end;//
delimiter ;

drop trigger if exists `salon_history_trigger`;
delimiter //
create trigger `salon_history_trigger`
after update on `salons`
for each row
begin
    if ( coalesce(old.display_id, '') <> coalesce(new.display_id, '') ) then call salon_history_insert ('', new.id, "display_id", old.display_id, new.display_id,  new.updated_by ); end if;
    if ( coalesce(old.name, '') <> coalesce(new.name, '') ) then call salon_history_insert ('', new.id, "name", old.name, new.name,  new.updated_by ); end if;
    if ( coalesce(old.registered_name, '') <> coalesce(new.registered_name, '') ) then call salon_history_insert ('', new.id, "registered_name", old.registered_name, new.registered_name,  new.updated_by ); end if;
    if ( coalesce(old.owner, '') <> coalesce(new.owner, '') ) then call salon_history_insert ('', new.id, "owner", old.owner, new.owner,  new.updated_by ); end if;
    if ( coalesce(old.description, '') <> coalesce(new.description, '') ) then call salon_history_insert ('', new.id, "description", old.description, new.description,  new.updated_by ); end if;
    if ( coalesce(old.long_desc, '') <> coalesce(new.long_desc, '') ) then call salon_history_insert ('', new.id, "long_desc", old.long_desc, new.long_desc,  new.updated_by ); end if;
    if ( coalesce(old.state, '') <> coalesce(new.state, '') ) then call salon_history_insert ('', new.id, "state", old.state, new.state,  new.updated_by ); end if;
    if ( coalesce(old.city_id, '') <> coalesce(new.city_id, '') ) then call salon_history_insert ('', new.id, "city_id", old.city_id, new.city_id,  new.updated_by ); end if;
    if ( coalesce(old.location_id, '') <> coalesce(new.location_id, '') ) then call salon_history_insert ('', new.id, "location_id", old.location_id, new.location_id,  new.updated_by ); end if;
    if ( coalesce(old.address, '') <> coalesce(new.address, '') ) then call salon_history_insert ('', new.id, "address", old.address, new.address,  new.updated_by ); end if;
    if ( coalesce(old.pincode, '') <> coalesce(new.pincode, '') ) then call salon_history_insert ('', new.id, "pincode", old.pincode, new.pincode,  new.updated_by ); end if;
    if ( coalesce(old.lat, '') <> coalesce(new.lat, '') ) then call salon_history_insert ('', new.id, "lat", old.lat, new.lat,  new.updated_by ); end if;
    if ( coalesce(old.lng, '') <> coalesce(new.lng, '') ) then call salon_history_insert ('', new.id, "lng", old.lng, new.lng,  new.updated_by ); end if;
    if ( coalesce(old.upload_business_for_days, '') <> coalesce(new.upload_business_for_days, '') ) then call salon_history_insert ('', new.id, "upload_business_for_days", old.upload_business_for_days, new.upload_business_for_days,  new.updated_by ); end if;
    if ( coalesce(old.category, '') <> coalesce(new.category, '') ) then call salon_history_insert ('', new.id, "category", old.category, new.category,  new.updated_by ); end if;
    if ( coalesce(old.thumb, '') <> coalesce(new.thumb, '') ) then call salon_history_insert ('', new.id, "thumb", old.thumb, new.thumb,  new.updated_by ); end if;
    if ( coalesce(old.h1_tag, '') <> coalesce(new.h1_tag, '') ) then call salon_history_insert ('', new.id, "h1_tag", old.h1_tag, new.h1_tag,  new.updated_by ); end if;
    if ( coalesce(old.slug, '') <> coalesce(new.slug, '') ) then call salon_history_insert ('', new.id, "slug", old.slug, new.slug,  new.updated_by ); end if;
    if ( coalesce(old.active, '') <> coalesce(new.active, '') ) then call salon_history_insert ('', new.id, "active", old.active, new.active,  new.updated_by ); end if;
    if ( coalesce(old.salon_group_id, '') <> coalesce(new.salon_group_id, '') ) then call salon_history_insert ('', new.id, "salon_group_id", old.salon_group_id, new.salon_group_id,  new.updated_by ); end if;
    
end;//
delimiter ;


drop trigger if exists `salon_details_history_trigger`;
delimiter //
create trigger `salon_details_history_trigger`
after update on `salon_details`
for each row
begin
    if ( coalesce(old.landline, '') <> coalesce(new.landline, '') ) then call salon_history_insert ('', new.salon_id, "landline", old.landline, new.landline,  new.updated_by ); end if;
    if ( coalesce(old.is_credit_card_accepted, '') <> coalesce(new.is_credit_card_accepted, '') ) then call salon_history_insert ('', new.salon_id, "is_credit_card_accepted", old.is_credit_card_accepted, new.is_credit_card_accepted,  new.updated_by ); end if;
    if ( coalesce(old.is_paytm_accepted, '') <> coalesce(new.is_paytm_accepted, '') ) then call salon_history_insert ('', new.salon_id, "is_paytm_accepted", old.is_paytm_accepted, new.is_paytm_accepted,  new.updated_by ); end if;
    if ( coalesce(old.is_mobikwik_accepted, '') <> coalesce(new.is_mobikwik_accepted, '') ) then call salon_history_insert ('', new.salon_id, "is_mobikwik_accepted", old.is_mobikwik_accepted, new.is_mobikwik_accepted,  new.updated_by ); end if;
    if ( coalesce(old.is_upi, '') <> coalesce(new.is_upi, '') ) then call salon_history_insert ('', new.salon_id, "is_upi", old.is_upi, new.is_upi,  new.updated_by ); end if;
    if ( coalesce(old.airbrush_makeup, '') <> coalesce(new.airbrush_makeup, '') ) then call salon_history_insert ('', new.salon_id, "airbrush_makeup", old.airbrush_makeup, new.airbrush_makeup,  new.updated_by ); end if;
    if ( coalesce(old.female_leaves_at, '') <> coalesce(new.female_leaves_at, '') ) then call salon_history_insert ('', new.salon_id, "female_leaves_at", old.female_leaves_at, new.female_leaves_at,  new.updated_by ); end if;
    if ( coalesce(old.has_female_staff, '') <> coalesce(new.has_female_staff, '') ) then call salon_history_insert ('', new.salon_id, "has_female_staff", old.has_female_staff, new.has_female_staff,  new.updated_by ); end if;
    if ( coalesce(old.hd_makeup, '') <> coalesce(new.hd_makeup, '') ) then call salon_history_insert ('', new.salon_id, "hd_makeup", old.hd_makeup, new.hd_makeup,  new.updated_by ); end if;
    if ( coalesce(old.is_makeup_available, '') <> coalesce(new.is_makeup_available, '') ) then call salon_history_insert ('', new.salon_id, "is_makeup_available", old.is_makeup_available, new.is_makeup_available,  new.updated_by ); end if;
    if ( coalesce(old.opening_time, '') <> coalesce(new.opening_time, '') ) then call salon_history_insert ('', new.salon_id, "opening_time", old.opening_time, new.opening_time,  new.updated_by ); end if;
    if ( coalesce(old.closing_time, '') <> coalesce(new.closing_time, '') ) then call salon_history_insert ('', new.salon_id, "closing_time", old.closing_time, new.closing_time,  new.updated_by ); end if;
    if ( coalesce(old.hero_id, '') <> coalesce(new.hero_id, '') ) then call salon_history_insert ('', new.salon_id, "hero_id", old.hero_id, new.hero_id,  new.updated_by ); end if;
    if ( coalesce(old.thumbnail_id, '') <> coalesce(new.thumbnail_id, '') ) then call salon_history_insert ('', new.salon_id, "thumbnail_id", old.thumbnail_id, new.thumbnail_id,  new.updated_by ); end if;
    if ( coalesce(old.activation_date, '') <> coalesce(new.activation_date, '') ) then call salon_history_insert ('', new.salon_id, "activation_date", old.activation_date, new.activation_date,  new.updated_by ); end if;
    if ( coalesce(old.closed_on, '') <> coalesce(new.closed_on, '') ) then call salon_history_insert ('', new.salon_id, "closed_on", old.closed_on, new.closed_on,  new.updated_by ); end if;
    if ( coalesce(old.deactivation_date, '') <> coalesce(new.deactivation_date, '') ) then call salon_history_insert ('', new.salon_id, "deactivation_date", old.deactivation_date, new.deactivation_date,  new.updated_by ); end if;
    if ( coalesce(old.deactivation_reason, '') <> coalesce(new.deactivation_reason, '') ) then call salon_history_insert ('', new.salon_id, "deactivation_reason", old.deactivation_reason, new.deactivation_reason,  new.updated_by ); end if;
    if ( coalesce(old.frenchise_fee, '') <> coalesce(new.frenchise_fee, '') ) then call salon_history_insert ('', new.salon_id, "frenchise_fee", old.frenchise_fee, new.frenchise_fee,  new.updated_by ); end if;
    if ( coalesce(old.gst_no, '') <> coalesce(new.gst_no, '') ) then call salon_history_insert ('', new.salon_id, "gst_no", old.gst_no, new.gst_no,  new.updated_by ); end if;
    if ( coalesce(old.signed_by, '') <> coalesce(new.signed_by, '') ) then call salon_history_insert ('', new.salon_id, "signed_by", old.signed_by, new.signed_by,  new.updated_by ); end if;
    if ( coalesce(old.pan_no, '') <> coalesce(new.pan_no, '') ) then call salon_history_insert ('', new.salon_id, "pan_no", old.pan_no, new.pan_no,  new.updated_by ); end if;
    if ( coalesce(old.signing_date, '') <> coalesce(new.signing_date, '') ) then call salon_history_insert ('', new.salon_id, "signing_date", old.signing_date, new.signing_date,  new.updated_by ); end if;
    if ( coalesce(old.transfer_date, '') <> coalesce(new.transfer_date, '') ) then call salon_history_insert ('', new.salon_id, "transfer_date", old.transfer_date, new.transfer_date,  new.updated_by ); end if;
end;//
delimiter ;
