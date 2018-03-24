fos.Router.setData({"base_url":"\/app_dev.php","routes":{"actia_prez_set_time":{"tokens":[["text","\/time"],["variable","\/","[^\/]++","user"],["text","\/presentation"]],"defaults":[],"requirements":[],"hosttokens":[]},"actia_prez_offre":{"tokens":[["text","\/offre"],["variable","\/","[^\/]++","company"],["text","\/presentation"]],"defaults":[],"requirements":[],"hosttokens":[]},"actia_prez_finish":{"tokens":[["text","\/finish"],["variable","\/","[^\/]++","appointment"],["text","\/presentation"]],"defaults":[],"requirements":[],"hosttokens":[]},"block_total_rdv":{"tokens":[["text","\/index\/block\/total-rdv"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"block_total_client":{"tokens":[["text","\/index\/block\/total-client"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"block_total_rdv_jour":{"tokens":[["text","\/index\/block\/total-rdv-jour"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"block_classement_client":{"tokens":[["text","\/index\/block\/classement-client"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"block_classement_national":{"tokens":[["text","\/index\/block\/classement-national"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"block_percent_valide":{"tokens":[["text","\/index\/block\/pourcentage-valide"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"block_rdv_detail":{"tokens":[["text","\/index\/block\/rdv-detail"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_product_info":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/index\/product\/product\/info"]],"defaults":[],"requirements":[],"hosttokens":[]},"actia_roadshow_external_events":{"tokens":[["variable","\/","[^\/]++","commercial"],["text","\/roadshow\/externalevents\/timeslot"]],"defaults":{"commercial":null},"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_roadshow_external_events_appointment":{"tokens":[["variable","\/","[^\/]++","distributor"],["text","\/roadshow\/externalevents\/appointment"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_roadshow_accept_appointment":{"tokens":[["variable","\/","[^\/]++","token"],["text","\/roadshow\/accept"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_roadshow_refuse_appointment":{"tokens":[["variable","\/","[^\/]++","token"],["text","\/roadshow\/refuser"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_roadshow_change_appointment":{"tokens":[["variable","\/","[^\/]++","token"],["text","\/roadshow\/changer"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_roadshow_filter_commercial":{"tokens":[["text","\/roadshow\/filter\/commercial"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_roadshow_filter_distributor":{"tokens":[["variable","\/","[^\/]++","commercial"],["text","\/roadshow\/filter\/distributeur"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"actia_roadshow_filter_branche":{"tokens":[["variable","\/","[^\/]++","distributor"],["variable","\/","[^\/]++","commercial"],["text","\/roadshow\/filter\/etablissement"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_calendar":{"tokens":[["text","\/roadshow\/appointment\/calendar"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_sidebar":{"tokens":[["text","\/roadshow\/appointment\/sidebar"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_new":{"tokens":[["text","\/roadshow\/appointment\/new"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_add":{"tokens":[["text","\/roadshow\/appointment\/add"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_modal_new":{"tokens":[["variable","\/","[^\/]++","distributor"],["text","\/roadshow\/appointment\/modalnew"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_modal_edit":{"tokens":[["text","\/modaledit"],["variable","\/","[^\/]++","id"],["text","\/roadshow\/appointment"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_modal_move":{"tokens":[["text","\/modalemove"],["variable","\/","[^\/]++","id"],["text","\/roadshow\/appointment"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_modal_delete":{"tokens":[["text","\/modaldelete"],["variable","\/","[^\/]++","id"],["text","\/roadshow\/appointment"]],"defaults":[],"requirements":{"_method":"GET|POST|DELETE"},"hosttokens":[]},"appointment_modal_status":{"tokens":[["text","\/roadshow\/appointment\/modalstatus"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"appointment_relance":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/roadshow\/appointment\/relance"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"timeslot_sidebar":{"tokens":[["text","\/roadshow\/timeslot\/sidebar"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"timeslot_days":{"tokens":[["variable","\/","[^\/]++","presenter_id"],["variable","\/","[^\/]++","distributor_id"],["text","\/roadshow\/timeslot\/days"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"timeslot_add":{"tokens":[["text","\/roadshow\/timeslot\/add"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"timeslot_modal_add":{"tokens":[["text","\/roadshow\/timeslot\/modaladd"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"timeslot_modal_delete":{"tokens":[["text","\/modaldelete"],["variable","\/","[^\/]++","id"],["text","\/roadshow\/timeslot"]],"defaults":[],"requirements":{"_method":"GET|POST|DELETE"},"hosttokens":[]},"timeslot_modal_edit":{"tokens":[["text","\/modaledit"],["variable","\/","[^\/]++","id"],["text","\/roadshow\/timeslot"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]},"ladr_shop_product_show":{"tokens":[["text","\/show"],["variable","\/","[^\/]++","id"],["text","\/shop\/products"]],"defaults":[],"requirements":{"_method":"GET|POST"},"hosttokens":[]}},"prefix":"","host":"localhost","scheme":"http"});