import React from "react";

export const ValidateEmail = e => {
	let email = e;
	if (email.indexOf("@") > -1) {
		let emailSplit = email.split("@");
		let domainExtension = emailSplit[1];
		let domainExtensionSplit = domainExtension.split(".");
		if (
			e.indexOf(".") > -1 &&
			e.indexOf("@") > -1 &&
			emailSplit[0] != "" &&
			domainExtensionSplit[0] != "" &&
			domainExtensionSplit[1] != ""
		) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};
