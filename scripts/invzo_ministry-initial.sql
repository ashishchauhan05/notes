-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 24, 2018 at 04:19 PM
-- Server version: 5.7.19-0ubuntu0.16.04.1
-- PHP Version: 7.1.13-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invzo_ministry`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `appointment_history_insert` (`id` VARCHAR(11), `appointment_id` INT(11), `field` VARCHAR(255), `old_value` VARCHAR(255), `new_value` VARCHAR(255), `created_by` INT(11))  begin
insert into `appointment_history` (
    `appointment_id`,
    `field`,
    `old_value`,
    `new_value`,
    `created_by`,
    `created_at`
) values (
    appointment_id,
    field,
    old_value,
    new_value,
    created_by,
    now()
);
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `gift_voucher_history_insert` (`code` VARCHAR(10), `field` VARCHAR(30), `old_value` VARCHAR(30), `new_value` VARCHAR(30), `created_by` INT(11))  begin
insert into `gift_voucher_history` (
    `code`,
    `field`,
    `old_value`,
    `new_value`,
    `created_by`,
    `created_at`
) values (
    code,
    field,
    old_value,
    new_value,
    created_by,
    now()
);
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `salon_history_insert` (`id` VARCHAR(11), `salon_id` INT(11), `field` VARCHAR(255), `old_value` VARCHAR(255), `new_value` VARCHAR(255), `created_by` INT(11))  begin
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
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can add permission', 2, 'add_permission'),
(5, 'Can change permission', 2, 'change_permission'),
(6, 'Can delete permission', 2, 'delete_permission'),
(7, 'Can add user', 3, 'add_user'),
(8, 'Can change user', 3, 'change_user'),
(9, 'Can delete user', 3, 'delete_user'),
(10, 'Can add group', 4, 'add_group'),
(11, 'Can change group', 4, 'change_group'),
(12, 'Can delete group', 4, 'delete_group'),
(13, 'Can add content type', 5, 'add_contenttype'),
(14, 'Can change content type', 5, 'change_contenttype'),
(15, 'Can delete content type', 5, 'delete_contenttype'),
(16, 'Can add session', 6, 'add_session'),
(17, 'Can change session', 6, 'change_session'),
(18, 'Can delete session', 6, 'delete_session'),
(19, 'Can add appointment tracker', 7, 'add_appointmenttracker'),
(20, 'Can change appointment tracker', 7, 'change_appointmenttracker'),
(21, 'Can delete appointment tracker', 7, 'delete_appointmenttracker'),
(22, 'Can add coupons', 8, 'add_coupons'),
(23, 'Can change coupons', 8, 'change_coupons'),
(24, 'Can delete coupons', 8, 'delete_coupons'),
(25, 'Can add loyalty program', 9, 'add_loyaltyprogram'),
(26, 'Can change loyalty program', 9, 'change_loyaltyprogram'),
(27, 'Can delete loyalty program', 9, 'delete_loyaltyprogram'),
(28, 'Can add auth group', 10, 'add_authgroup'),
(29, 'Can change auth group', 10, 'change_authgroup'),
(30, 'Can delete auth group', 10, 'delete_authgroup'),
(31, 'Can add roles', 11, 'add_roles'),
(32, 'Can change roles', 11, 'change_roles'),
(33, 'Can delete roles', 11, 'delete_roles'),
(34, 'Can add sms log', 12, 'add_smslog'),
(35, 'Can change sms log', 12, 'change_smslog'),
(36, 'Can delete sms log', 12, 'delete_smslog'),
(37, 'Can add django session', 13, 'add_djangosession'),
(38, 'Can change django session', 13, 'change_djangosession'),
(39, 'Can delete django session', 13, 'delete_djangosession'),
(40, 'Can add django migrations', 14, 'add_djangomigrations'),
(41, 'Can change django migrations', 14, 'change_djangomigrations'),
(42, 'Can delete django migrations', 14, 'delete_djangomigrations'),
(43, 'Can add location', 15, 'add_location'),
(44, 'Can change location', 15, 'change_location'),
(45, 'Can delete location', 15, 'delete_location'),
(46, 'Can add auth permission', 16, 'add_authpermission'),
(47, 'Can change auth permission', 16, 'change_authpermission'),
(48, 'Can delete auth permission', 16, 'delete_authpermission'),
(49, 'Can add business daily', 17, 'add_businessdaily'),
(50, 'Can change business daily', 17, 'change_businessdaily'),
(51, 'Can delete business daily', 17, 'delete_businessdaily'),
(52, 'Can add reachout', 18, 'add_reachout'),
(53, 'Can change reachout', 18, 'change_reachout'),
(54, 'Can delete reachout', 18, 'delete_reachout'),
(55, 'Can add business target', 19, 'add_businesstarget'),
(56, 'Can change business target', 19, 'change_businesstarget'),
(57, 'Can delete business target', 19, 'delete_businesstarget'),
(58, 'Can add salon services', 20, 'add_salonservices'),
(59, 'Can change salon services', 20, 'change_salonservices'),
(60, 'Can delete salon services', 20, 'delete_salonservices'),
(61, 'Can add skillset', 21, 'add_skillset'),
(62, 'Can change skillset', 21, 'change_skillset'),
(63, 'Can delete skillset', 21, 'delete_skillset'),
(64, 'Can add appointments', 22, 'add_appointments'),
(65, 'Can change appointments', 22, 'change_appointments'),
(66, 'Can delete appointments', 22, 'delete_appointments'),
(67, 'Can add message template', 23, 'add_messagetemplate'),
(68, 'Can change message template', 23, 'change_messagetemplate'),
(69, 'Can delete message template', 23, 'delete_messagetemplate'),
(70, 'Can add contact', 24, 'add_contact'),
(71, 'Can change contact', 24, 'change_contact'),
(72, 'Can delete contact', 24, 'delete_contact'),
(73, 'Can add password resets', 25, 'add_passwordresets'),
(74, 'Can change password resets', 25, 'change_passwordresets'),
(75, 'Can delete password resets', 25, 'delete_passwordresets'),
(76, 'Can add migrations', 26, 'add_migrations'),
(77, 'Can change migrations', 26, 'change_migrations'),
(78, 'Can delete migrations', 26, 'delete_migrations'),
(79, 'Can add promotions', 27, 'add_promotions'),
(80, 'Can change promotions', 27, 'change_promotions'),
(81, 'Can delete promotions', 27, 'delete_promotions'),
(82, 'Can add resource skills', 28, 'add_resourceskills'),
(83, 'Can change resource skills', 28, 'change_resourceskills'),
(84, 'Can delete resource skills', 28, 'delete_resourceskills'),
(85, 'Can add auth user user permissions', 29, 'add_authuseruserpermissions'),
(86, 'Can change auth user user permissions', 29, 'change_authuseruserpermissions'),
(87, 'Can delete auth user user permissions', 29, 'delete_authuseruserpermissions'),
(91, 'Can add languages', 31, 'add_languages'),
(92, 'Can change languages', 31, 'change_languages'),
(93, 'Can delete languages', 31, 'delete_languages'),
(97, 'Can add services', 33, 'add_services'),
(98, 'Can change services', 33, 'change_services'),
(99, 'Can delete services', 33, 'delete_services'),
(100, 'Can add auth group permissions', 34, 'add_authgrouppermissions'),
(101, 'Can change auth group permissions', 34, 'change_authgrouppermissions'),
(102, 'Can delete auth group permissions', 34, 'delete_authgrouppermissions'),
(103, 'Can add selected services', 35, 'add_selectedservices'),
(104, 'Can change selected services', 35, 'change_selectedservices'),
(105, 'Can delete selected services', 35, 'delete_selectedservices'),
(106, 'Can add city', 36, 'add_city'),
(107, 'Can change city', 36, 'change_city'),
(108, 'Can delete city', 36, 'delete_city'),
(109, 'Can add auth user groups', 37, 'add_authusergroups'),
(110, 'Can change auth user groups', 37, 'change_authusergroups'),
(111, 'Can delete auth user groups', 37, 'delete_authusergroups'),
(112, 'Can add avail promotions', 38, 'add_availpromotions'),
(113, 'Can change avail promotions', 38, 'change_availpromotions'),
(114, 'Can delete avail promotions', 38, 'delete_availpromotions'),
(115, 'Can add auth user', 39, 'add_authuser'),
(116, 'Can change auth user', 39, 'change_authuser'),
(117, 'Can delete auth user', 39, 'delete_authuser'),
(121, 'Can add marketing channels', 41, 'add_marketingchannels'),
(122, 'Can change marketing channels', 41, 'change_marketingchannels'),
(123, 'Can delete marketing channels', 41, 'delete_marketingchannels'),
(124, 'Can add users', 42, 'add_users'),
(125, 'Can change users', 42, 'change_users'),
(126, 'Can delete users', 42, 'delete_users'),
(127, 'Can add django content type', 43, 'add_djangocontenttype'),
(128, 'Can change django content type', 43, 'change_djangocontenttype'),
(129, 'Can delete django content type', 43, 'delete_djangocontenttype'),
(130, 'Can add resources', 44, 'add_resources'),
(131, 'Can change resources', 44, 'change_resources'),
(132, 'Can delete resources', 44, 'delete_resources'),
(133, 'Can add permissions', 45, 'add_permissions'),
(134, 'Can change permissions', 45, 'change_permissions'),
(135, 'Can delete permissions', 45, 'delete_permissions'),
(136, 'Can add salons', 46, 'add_salons'),
(137, 'Can change salons', 46, 'change_salons'),
(138, 'Can delete salons', 46, 'delete_salons'),
(139, 'Can add django admin log', 47, 'add_djangoadminlog'),
(140, 'Can change django admin log', 47, 'change_djangoadminlog'),
(141, 'Can delete django admin log', 47, 'delete_djangoadminlog'),
(142, 'Can add coupon discount', 48, 'add_coupondiscount'),
(143, 'Can change coupon discount', 48, 'change_coupondiscount'),
(144, 'Can delete coupon discount', 48, 'delete_coupondiscount'),
(145, 'Can add loyalty members', 49, 'add_loyaltymembers'),
(146, 'Can change loyalty members', 49, 'change_loyaltymembers'),
(147, 'Can delete loyalty members', 49, 'delete_loyaltymembers'),
(148, 'Can add service category', 50, 'add_servicecategory'),
(149, 'Can change service category', 50, 'change_servicecategory'),
(150, 'Can delete service category', 50, 'delete_servicecategory'),
(151, 'Can add cors model', 51, 'add_corsmodel'),
(152, 'Can change cors model', 51, 'change_corsmodel'),
(153, 'Can delete cors model', 51, 'delete_corsmodel'),
(157, 'Can add manager attendance', 53, 'add_managerattendance'),
(158, 'Can change manager attendance', 53, 'change_managerattendance'),
(159, 'Can delete manager attendance', 53, 'delete_managerattendance'),
(160, 'Can add seo data', 54, 'add_seodata'),
(161, 'Can change seo data', 54, 'change_seodata'),
(162, 'Can delete seo data', 54, 'delete_seodata'),
(163, 'Can add app versions', 55, 'add_appversions'),
(164, 'Can change app versions', 55, 'change_appversions'),
(165, 'Can delete app versions', 55, 'delete_appversions'),
(172, 'Can add calls history', 58, 'add_callshistory'),
(173, 'Can change calls history', 58, 'change_callshistory'),
(174, 'Can delete calls history', 58, 'delete_callshistory'),
(175, 'Can add app device information', 59, 'add_appdeviceinformation'),
(176, 'Can change app device information', 59, 'change_appdeviceinformation'),
(177, 'Can delete app device information', 59, 'delete_appdeviceinformation'),
(178, 'Can add user details temp', 60, 'add_userdetailstemp'),
(179, 'Can change user details temp', 60, 'change_userdetailstemp'),
(180, 'Can delete user details temp', 60, 'delete_userdetailstemp'),
(181, 'Can add user details', 61, 'add_userdetails'),
(182, 'Can change user details', 61, 'change_userdetails'),
(183, 'Can delete user details', 61, 'delete_userdetails'),
(184, 'Can add salon details temp', 62, 'add_salondetailstemp'),
(185, 'Can change salon details temp', 62, 'change_salondetailstemp'),
(186, 'Can delete salon details temp', 62, 'delete_salondetailstemp'),
(187, 'Can add salon details', 63, 'add_salondetails'),
(188, 'Can change salon details', 63, 'change_salondetails'),
(189, 'Can delete salon details', 63, 'delete_salondetails'),
(190, 'Can add dbp', 64, 'add_dbp'),
(191, 'Can change dbp', 64, 'change_dbp'),
(192, 'Can delete dbp', 64, 'delete_dbp'),
(196, 'Can add calls', 66, 'add_calls'),
(197, 'Can change calls', 66, 'change_calls'),
(198, 'Can delete calls', 66, 'delete_calls'),
(199, 'Can add city services', 67, 'add_cityservices'),
(200, 'Can change city services', 67, 'change_cityservices'),
(201, 'Can delete city services', 67, 'delete_cityservices'),
(202, 'Can add corsheaders corsmodel', 68, 'add_corsheaderscorsmodel'),
(203, 'Can change corsheaders corsmodel', 68, 'change_corsheaderscorsmodel'),
(204, 'Can delete corsheaders corsmodel', 68, 'delete_corsheaderscorsmodel'),
(205, 'Can add notification logs', 69, 'add_notificationlogs'),
(206, 'Can change notification logs', 69, 'change_notificationlogs'),
(207, 'Can delete notification logs', 69, 'delete_notificationlogs'),
(208, 'Can add position logs', 70, 'add_positionlogs'),
(209, 'Can change position logs', 70, 'change_positionlogs'),
(210, 'Can delete position logs', 70, 'delete_positionlogs'),
(211, 'Can add role has permissions', 71, 'add_rolehaspermissions'),
(212, 'Can change role has permissions', 71, 'change_rolehaspermissions'),
(213, 'Can delete role has permissions', 71, 'delete_rolehaspermissions'),
(214, 'Can add user has permissions', 72, 'add_userhaspermissions'),
(215, 'Can change user has permissions', 72, 'change_userhaspermissions'),
(216, 'Can delete user has permissions', 72, 'delete_userhaspermissions'),
(217, 'Can add user has roles', 73, 'add_userhasroles'),
(218, 'Can change user has roles', 73, 'change_userhasroles'),
(219, 'Can delete user has roles', 73, 'delete_userhasroles'),
(220, 'Can add payment transaction', 74, 'add_paymenttransaction'),
(221, 'Can change payment transaction', 74, 'change_paymenttransaction'),
(222, 'Can delete payment transaction', 74, 'delete_paymenttransaction'),
(223, 'Can add refund transaction', 75, 'add_refundtransaction'),
(224, 'Can change refund transaction', 75, 'change_refundtransaction'),
(225, 'Can delete refund transaction', 75, 'delete_refundtransaction'),
(226, 'Can add details update', 76, 'add_detailsupdate'),
(227, 'Can change details update', 76, 'change_detailsupdate'),
(228, 'Can delete details update', 76, 'delete_detailsupdate'),
(229, 'Can add manager attendance summary', 77, 'add_managerattendancesummary'),
(230, 'Can change manager attendance summary', 77, 'change_managerattendancesummary'),
(231, 'Can delete manager attendance summary', 77, 'delete_managerattendancesummary'),
(232, 'Can add manager details', 78, 'add_managerdetails'),
(233, 'Can change manager details', 78, 'change_managerdetails'),
(234, 'Can delete manager details', 78, 'delete_managerdetails'),
(235, 'Can add customer', 79, 'add_customer'),
(236, 'Can change customer', 79, 'change_customer'),
(237, 'Can delete customer', 79, 'delete_customer'),
(238, 'Can add terms', 80, 'add_terms'),
(239, 'Can change terms', 80, 'change_terms'),
(240, 'Can delete terms', 80, 'delete_terms'),
(241, 'Can add payment link', 81, 'add_paymentlink'),
(242, 'Can change payment link', 81, 'change_paymentlink'),
(243, 'Can delete payment link', 81, 'delete_paymentlink'),
(244, 'Can add voucher services', 82, 'add_voucherservices'),
(245, 'Can change voucher services', 82, 'change_voucherservices'),
(246, 'Can delete voucher services', 82, 'delete_voucherservices'),
(247, 'Can add gift voucher', 83, 'add_giftvoucher'),
(248, 'Can change gift voucher', 83, 'change_giftvoucher'),
(249, 'Can delete gift voucher', 83, 'delete_giftvoucher'),
(250, 'Can add voucher template', 84, 'add_vouchertemplate'),
(251, 'Can change voucher template', 84, 'change_vouchertemplate'),
(252, 'Can delete voucher template', 84, 'delete_vouchertemplate'),
(253, 'Can add voucher appointments', 85, 'add_voucherappointments'),
(254, 'Can change voucher appointments', 85, 'change_voucherappointments'),
(255, 'Can delete voucher appointments', 85, 'delete_voucherappointments'),
(256, 'Can add salon images', 86, 'add_salonimages'),
(257, 'Can change salon images', 86, 'change_salonimages'),
(258, 'Can delete salon images', 86, 'delete_salonimages'),
(259, 'Can add desposition', 87, 'add_desposition'),
(260, 'Can change desposition', 87, 'change_desposition'),
(261, 'Can delete desposition', 87, 'delete_desposition'),
(262, 'Can add salon groups', 88, 'add_salongroups'),
(263, 'Can change salon groups', 88, 'change_salongroups'),
(264, 'Can delete salon groups', 88, 'delete_salongroups'),
(265, 'Can add group services', 89, 'add_groupservices'),
(266, 'Can change group services', 89, 'change_groupservices'),
(267, 'Can delete group services', 89, 'delete_groupservices'),
(268, 'Can add analytics call center business', 90, 'add_analyticscallcenterbusiness'),
(269, 'Can change analytics call center business', 90, 'change_analyticscallcenterbusiness'),
(270, 'Can delete analytics call center business', 90, 'delete_analyticscallcenterbusiness'),
(271, 'Can add appointment history', 91, 'add_appointmenthistory'),
(272, 'Can change appointment history', 91, 'change_appointmenthistory'),
(273, 'Can delete appointment history', 91, 'delete_appointmenthistory'),
(274, 'Can add partner agreements', 92, 'add_partneragreements'),
(275, 'Can change partner agreements', 92, 'change_partneragreements'),
(276, 'Can delete partner agreements', 92, 'delete_partneragreements'),
(277, 'Can add salon invoices', 93, 'add_saloninvoices'),
(278, 'Can change salon invoices', 93, 'change_saloninvoices'),
(279, 'Can delete salon invoices', 93, 'delete_saloninvoices'),
(280, 'Can add payment', 94, 'add_payment'),
(281, 'Can change payment', 94, 'change_payment'),
(282, 'Can delete payment', 94, 'delete_payment'),
(283, 'Can add salon invoices ag', 95, 'add_saloninvoicesag'),
(284, 'Can change salon invoices ag', 95, 'change_saloninvoicesag'),
(285, 'Can delete salon invoices ag', 95, 'delete_saloninvoicesag'),
(286, 'Can add invoices', 96, 'add_invoices'),
(287, 'Can change invoices', 96, 'change_invoices'),
(288, 'Can delete invoices', 96, 'delete_invoices'),
(289, 'Can add sac codes', 97, 'add_saccodes'),
(290, 'Can change sac codes', 97, 'change_saccodes'),
(291, 'Can delete sac codes', 97, 'delete_saccodes'),
(292, 'Can add invoice items', 98, 'add_invoiceitems'),
(293, 'Can change invoice items', 98, 'change_invoiceitems'),
(294, 'Can delete invoice items', 98, 'delete_invoiceitems'),
(295, 'Can add gift voucher history', 99, 'add_giftvoucherhistory'),
(296, 'Can change gift voucher history', 99, 'change_giftvoucherhistory'),
(297, 'Can delete gift voucher history', 99, 'delete_giftvoucherhistory'),
(298, 'Can add coupon conditions', 100, 'add_couponconditions'),
(299, 'Can change coupon conditions', 100, 'change_couponconditions'),
(300, 'Can delete coupon conditions', 100, 'delete_couponconditions'),
(301, 'Can add coupon groups', 101, 'add_coupongroups'),
(302, 'Can change coupon groups', 101, 'change_coupongroups'),
(303, 'Can delete coupon groups', 101, 'delete_coupongroups'),
(304, 'Can add coupon template', 102, 'add_coupontemplate'),
(305, 'Can change coupon template', 102, 'change_coupontemplate'),
(306, 'Can delete coupon template', 102, 'delete_coupontemplate'),
(307, 'Can add voucher groups', 103, 'add_vouchergroups'),
(308, 'Can change voucher groups', 103, 'change_vouchergroups'),
(309, 'Can delete voucher groups', 103, 'delete_vouchergroups'),
(310, 'Can add voucher conditions', 104, 'add_voucherconditions'),
(311, 'Can change voucher conditions', 104, 'change_voucherconditions'),
(312, 'Can delete voucher conditions', 104, 'delete_voucherconditions'),
(313, 'Can add filter', 105, 'add_filter'),
(314, 'Can change filter', 105, 'change_filter'),
(315, 'Can delete filter', 105, 'delete_filter'),
(316, 'Can add verifications', 106, 'add_verifications'),
(317, 'Can change verifications', 106, 'change_verifications'),
(318, 'Can delete verifications', 106, 'delete_verifications'),
(319, 'Can add promo wallet credit', 107, 'add_promowalletcredit'),
(320, 'Can change promo wallet credit', 107, 'change_promowalletcredit'),
(321, 'Can delete promo wallet credit', 107, 'delete_promowalletcredit'),
(322, 'Can add wallet promotion', 108, 'add_walletpromotion'),
(323, 'Can change wallet promotion', 108, 'change_walletpromotion'),
(324, 'Can delete wallet promotion', 108, 'delete_walletpromotion'),
(325, 'Can add wallet ledger', 109, 'add_walletledger'),
(326, 'Can change wallet ledger', 109, 'change_walletledger'),
(327, 'Can delete wallet ledger', 109, 'delete_walletledger'),
(328, 'Can add variables', 110, 'add_variables'),
(329, 'Can change variables', 110, 'change_variables'),
(330, 'Can delete variables', 110, 'delete_variables'),
(331, 'Can add salon history', 111, 'add_salonhistory'),
(332, 'Can change salon history', 111, 'change_salonhistory'),
(333, 'Can delete salon history', 111, 'delete_salonhistory');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$36000$HTOLdm78Brux$PkobaZvO/18/TDWVncC74ckPgnxo7sOp4gVxuFGNVxY=', '2017-11-03 19:35:30', 1, 'dhruv', '', '', 'dhruv.mahajan@gmail.com', 1, 1, '2016-11-26 05:37:12');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `state` enum('AP','AR','AS','BR','CG','GA','GJ','HR','HP','JK','JH','KA','KL','MP','MH','MN','ML','MZ','NL','OR','PB','RJ','SK','TN','TR','UK','UP','WB','AN','CH','DH','DD','DL','LD','PY') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `name`, `active`, `created_by`, `created_at`, `updated_at`, `lat`, `lng`, `state`) VALUES
(1, 'Ghaziabad', 1, 0, '0000-00-00 00:00:00', '2015-12-26 02:14:01', 28.6834702, 77.2449582, 'UP'),
(2, 'Noida', 1, 0, '0000-00-00 00:00:00', '2015-12-26 02:13:52', 28.5712722, 77.3151627, 'UP'),
(3, 'Delhi', 1, 1, '2016-02-09 08:11:10', '2016-04-07 11:30:59', 28.6289332, 77.2065322, 'DL'),
(4, 'Bhiwadi', 0, 1, '2016-04-07 11:40:03', '2016-04-07 11:40:03', 28.2037536, 76.804813, 'HR'),
(5, 'Faridabad', 1, 1, '2016-04-07 11:45:29', '2016-04-07 11:45:29', 28.4019486, 77.2993068, 'HR'),
(6, 'Hyderabad', 1, 1, '2016-04-26 04:31:25', '2017-01-04 07:11:43', 17.4126274, 78.2679585, 'AP'),
(7, 'Gurgaon', 1, 1, '2016-05-06 00:29:10', '2016-08-27 12:29:05', 28.4530696, 77.0405882, 'HR'),
(8, 'Greater Noida', 1, 1, '2016-08-13 13:20:09', '2016-08-13 13:20:09', 28.5072216, 77.4971153, 'UP');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `city` varchar(50) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `purpose` varchar(100) NOT NULL,
  `contact_text` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `city`, `area`, `purpose`, `contact_text`, `created_at`, `updated_at`) VALUES
(104, 'Rina Singh ', 'rs111174@gmail.com', '9871282249', NULL, NULL, 'Customer', '', '2015-12-31 12:09:02', '2015-12-31 12:09:02'),
(105, 'Tanushree', 'saxena09@gmail.com', '9871140203', NULL, NULL, 'Customer', 'Need deal price for full waxing facial n hair color', '2016-01-09 04:11:45', '2016-01-09 04:11:45'),
(106, 'Tanushree', 'saxena09@gmail.com', '9871140203', NULL, NULL, 'Customer', 'Need deal price for full waxing facial n hair color', '2016-01-09 04:11:53', '2016-01-09 04:11:53'),
(107, 'swayam mittal', 'swayammittal65@gmail.com', '9176726702', NULL, NULL, 'Careers', 'willing to start a career with glamstudios as an intern and utilizing the skills of getting the glamstudio more better.', '2016-01-18 07:03:13', '2016-01-18 07:03:13'),
(108, 'swayam mittal', 'swayammittal65@gmail.com', '9176726702', NULL, NULL, 'Careers', 'willing to start a career with glamstudios as an intern and utilizing the skills of getting the glamstudio more better.', '2016-01-18 07:03:20', '2016-01-18 07:03:20'),
(109, 'swayam mittal', 'swayammittal65@gmail.com', '9176726702', NULL, NULL, 'Careers', 'willing to start a career with glamstudios as an intern and utilizing the skills of getting the glamstudio more better.', '2016-01-18 07:03:22', '2016-01-18 07:03:22'),
(110, 'monika sharma', 'monikagakhar17@gmail.com', '9899237739', NULL, NULL, 'Customer', 'want to take good package.', '2016-01-24 04:04:18', '2016-01-24 04:04:18'),
(111, 'shivam saraogi', 'shivam.saraogi11@gmail.com', '9711430856', NULL, NULL, 'Careers', 'Dedicated Maverick with passion and Knowledge for Marketing.', '2016-01-30 06:50:16', '2016-01-30 06:50:16'),
(112, 'Rohan', 'rohanind1@yahoo.co.in', '9910366320', NULL, NULL, 'Partner', 'Hey guys,\r\nheard about you from a friend .I have 7-8 saloons in new delhi at different places and I am interested to partner with you .Contact me ASAP.\r\n\r\n', '2016-01-31 05:08:50', '2016-01-31 05:08:50'),
(113, 'soujanya reddy', 'soujanya.reddy@gmail.com', '8008117725', NULL, NULL, 'Partner', '', '2016-02-02 10:55:01', '2016-02-02 10:55:01'),
(114, 'Mohak Mathur', 'mohak.mathur@justdial.com', '9999191651', NULL, NULL, 'Partner', 'Hi,\r\n\r\n \r\nGreeting from Justdial!\r\n\r\nI would like to inform you that Justdial is delighted to express interest in collaborating with GlamStudios in offering you a unique opportunity to generate more real-time leads from your target consumer base that’s searching for your product & services on the biggest local search plus platform i.e. Justdial.\r\n\r\nTherefore, I would like to set-up your meeting with our Manager, Corporate Sales at Justdial. It would be great if you could spare some time to take the discussion forward.\r\n\r\n\r\nI also want to share that most of your competitors are already associated with us.\r\n\r\nPlease call or write back should there be any clarifications that I can help with. \r\n\r\nLook forward to hearing from you soon and to having a successful working relationship with GlamStudios.\r\n\r\n[P.S:-  Please forward it to concern person/department in case of wrong delivery of mail]\r\n\r\nThanks!\r\n\r\nWarm Regards,\r\n\r\nMohak Mathur\r\n\r\nCorporate Sales & Alliances\r\n\r\nJust Dial Ltd\r\n	\r\n\r\nPhone: +91-9999191651\r\n\r\nEmail: mohak.mathur@justdial.com', '2016-02-06 09:22:52', '2016-02-06 09:22:52'),
(115, 'Divita ', 'divitasb@gmail.com', '9560362666', NULL, NULL, 'Customer', 'Facial, waxing, manicure, pedicure, bleach face, neck and back, threading eye brow upper lip & chin, party make up occasionally including hair do.', '2016-02-09 10:28:43', '2016-02-09 10:28:43'),
(116, 'abbas', 'radioads@rediffmail.com', '9892380729', NULL, NULL, 'Partner', 'Dear All\r\n\r\nPleased to send you quotes for No parking boards (metal sheet MS \r\nmaterial/Sun pack)\r\n\r\nQuotes\r\nSize : 18"x 18" \r\n15" x 15" = Rs.55/- per board(55,000/-)\r\nQty. 1000 @65/- per board\r\nTotal Amount = Rs. 65,000/- (All inclusive)\r\n\r\nAreas Covered All over mumbai/ navi mumbai/thane\r\n\r\n\r\nDeliverables-10% photoproofs with excel sheet of buildings/ society \r\ncovered.\r\n\r\nNEWSPAPER FLIERS PRINTING /DISTRIBUTION (A-5 SIZE- 2 side/4 COLOR PRINTING 100 \r\nGSM)\r\n@0.55/paise(newspaper distribution.30 paise/per flier,hand distribution .50paise/per flier\r\nmin qty 10,000-1 lac\r\n.85? paise fliers (A4 size 2 side 100 gsm)newspaper distribution\r\n\r\n\r\nBUS SHELTER(NON LIT)\r\n@Rs.35,000/- per month(all incl)\r\n@Rs.20,000/-15 days (all incl)\r\n\r\n \r\n\r\nAUTO ADS(all mumbai)\r\n@Rs.150/- per sticker/month\r\nsize 24" x 9"\r\n\r\nmin 200 nos.\r\n\r\n\r\nBanner Branding(3\' x 4\')\r\n@Rs.400/- per banner(flex)\r\nbmc fees extra\r\n\r\nmin 25 banners\r\n\r\n\r\n\r\nUMBRELLA BRANDING\r\n\r\n36" (2 COLOR PRINTING)\r\n@1000/- PER PIECE WITHOUT STAND.\r\n\r\nMIN QTY 25 NOS.\r\n\r\nNote- We are also into Society contact program/events, school, college \r\ncontact , corporate park, health park events , supermarket events etc.\r\n', '2016-02-10 14:40:18', '2016-02-10 14:40:18'),
(117, 'Rakaysh Kumar', 'rakaysh@whatashort.com', '8800664067', NULL, NULL, 'Partner', 'Whatashort is an online platforms for short-filmmakers and lovers.We\'re looking for partners for few of our upcoming offline and online events in Delhi-NCR.\r\nPlease revert if interested\r\nThanks', '2016-02-11 06:40:18', '2016-02-11 06:40:18'),
(118, 'Arvind', 'arvii.yadav03@gmail.com', '8082230082', NULL, NULL, 'Partner', 'Please give me a call will help you to grow your business.', '2016-02-11 08:47:08', '2016-02-11 08:47:08'),
(119, 'Prashant', 'presenceinstitute@gmail.com', '9769842111', NULL, NULL, 'Partner', 'Hello,\n\n                              We are image consulting institute based in mumbai, We would like to sell over image consulting business kit, color styling business kit, soft skill business kit, and fashion and wedding related books in your salon on profit sharing basis, please get back to us for the same.\n', '2017-04-28 12:48:02', '2016-02-14 11:36:18'),
(120, 'Sachin Yadav', 'sachin@bhaifi.com', '9810135802', NULL, NULL, 'Partner', 'Hi,\r\n\r\nWould like to connect with someone in management team to discuss the possibility of providing Free WiFi in Glam Studios\r\nThanks,\r\nSachin Yadav', '2016-02-15 06:49:26', '2016-02-15 06:49:26'),
(121, 'Jatin', 'jatin@sarthy.in', '9711402973', NULL, NULL, 'Careers', 'Let me take this opportunity to invite you on-campuses of DCE and IIT Delhi to build your teams and recruit interns!  \r\nSarthy and E-Cell, DCE brings to you "Internship Drive at Delhi College of Engineering" on 26th Feb. The college is among the best technical institutes in Delhi as well as in India. And not only technical, you can also look forward to expect some great analytical minds who excel in marketing, content, BD and other various fields. Not to forget that DCE offers MBA also. \r\nThe Event Details are as follows:\r\n1. The event flow would be as follows\r\n\r\n9:00-11:00 - Startup Pitching Session to students (Details below)\r\n\r\n11:00-5:00 - Interview Rounds + 2 Refreshment Sessions\r\n\r\n5:00-7:00 - Networking Session (Details below)\r\n\r\n2. We have crossed 1000 mark of the number students attending the event. We have added a pitching session for the startups attending it which will be on the center of the college, so it will be an awesome marketing opportunity also for you guys. \r\n\r\n3. You will be provided with a stall, chairs and tables for displaying your startup. You can carry your standees, banners, posters, etc.  for better display to attract the students. The interviews will be conducted at the stalls itself. \r\n\r\n4. In the networking session, we have investors and mentors coming from Indian Angel Network and Palash Ventures. We have mentors from 91springboard as well. The expected number of mentors and investors is above 20 so I guess there will be one for each of the 20 startups to have healthy networking session.\r\n\r\nAll those who are interested kindly revert back to me with your numbers for our executives to get in touch with you for the details or you can fill in the attached form here:\r\nhttps://docs.google.com/forms/d/1-mIsVo6_BzsRjGmyR_wSNlRq_bHNpuG7c-VTo3UOdZE/viewform\r\nSo incase you are looking forward to building their teams, don\'t miss out on this opportunity. And also, we would be lining up an "Internship Drive at IIT Delhi" in the 2nd week of March! So those who are interested, do revert back for booking your slot at IIT Delhi too! You can also contact me on 9711402973 \r\nThanks!', '2016-02-21 09:00:29', '2016-02-21 09:00:29'),
(122, 'shakeb', 'shakebul@gmail.com', '9540831666', NULL, NULL, 'Careers', '', '2016-02-26 12:14:11', '2016-02-26 12:14:11'),
(123, 'Vinnie', 'nyknyk2015@gmail.com', '0000000000', NULL, NULL, 'Partner', 'Hi team,\r\n\r\nMy name is Nyk i am from mumbai and I wanted to know what will be the start up investment to start up a glam studio in mumbai. Sorry not entering the number as first need info as I am a basic salaries person and my wife is a beautician and she is struggling hard to make the living by doing make up and other beauty services.\r\nAlso will you people be able to help me start up by guidance of loan and other details and info required.\r\nPlease reply at the earliest.\r\nRegards\r\nNyk', '2016-02-29 03:16:01', '2016-02-29 03:16:01'),
(124, 'Vinnie', 'nyknyk2015@gmail.com', '0000000000', NULL, NULL, 'Partner', 'Hi team,\r\n\r\nMy name is Nyk i am from mumbai and I wanted to know what will be the start up investment to start up a glam studio in mumbai. Sorry not entering the number as first need info as I am a basic salaries person and my wife is a beautician and she is struggling hard to make the living by doing make up and other beauty services.\r\nAlso will you people be able to help me start up by guidance of loan and other details and info required.\r\nPlease reply at the earliest.\r\nRegards\r\nNyk', '2016-02-29 03:16:12', '2016-02-29 03:16:12'),
(125, 'Nyk', 'nyknyk2015@gmail.com', '0000000000', NULL, NULL, 'Partner', 'Hi team,\r\n\r\nMy name is Nyk i am from mumbai and I wanted to know what will be the start up investment to start up a glam studio in mumbai. Sorry not entering the number as first need info as I am a basic salaries person and my wife is a beautician and she is struggling hard to make the living by doing make up and other beauty services.\r\nAlso will you people be able to help me start up by guidance of loan and other details and info required.\r\nPlease reply at the earliest.\r\nRegards\r\nNyk', '2016-02-29 03:16:27', '2016-02-29 03:16:27'),
(126, 'nitesh kumar', 'niteshkmr66@gmail.com', '9430000266', NULL, NULL, 'Partner', 'i want to be a businessman', '2016-02-29 15:51:02', '2016-02-29 15:51:02'),
(127, 'nitesh kumar', 'niteshkmr66@gmail.com', '9430000266', NULL, NULL, 'Partner', 'i want to be a businessman', '2016-02-29 15:51:05', '2016-02-29 15:51:05'),
(128, 'nitesh kumar', 'niteshkmr66@gmail.com', '9430000266', NULL, NULL, 'Partner', 'i want to be a businessman', '2016-02-29 15:51:05', '2016-02-29 15:51:05'),
(129, 'nitesh kumar', 'niteshkmr66@gmail.com', '9430000266', NULL, NULL, 'Partner', 'i want to be a businessman', '2016-02-29 15:51:05', '2016-02-29 15:51:05'),
(130, 'nitesh kumar', 'niteshkmr66@gmail.com', '9430000266', NULL, NULL, 'Partner', 'i want to be a businessman', '2016-02-29 15:51:05', '2016-02-29 15:51:05'),
(131, 'Saksham verma', 'saksham.cbs@gmail.com', '0969043444', NULL, NULL, 'Partner', 'This mail is regarding sponsorship in Encore\'16 an inter college western dance group competition held as part of CRESCENDO’16, the annual cultural fest and flagship event of Shaheed Sukhdev College of business studies, University of Delhi. \r\n\r\nShaheed Sukhdev College of Business Studies (SSCBS) is the premier and the oldest specialized institution of the University of Delhi, imparting education in the field of management and information technology par excellence. SSCBS wishes to carry forward this legacy by organizing CRESCENDO’16 which acts as a platform for students from across Delhi to showcase their talents in different fields and also to display their management and organization skills.\r\n\r\nENCORE’16 is one of the main events of CRESCENDO’16 which invites dance teams from various colleges in Delhi and gives them the opportunity to compete with each other and showcase their dancing talent. ENCORE continues to be the most popular event in CRESCENDO getting the maximum participation.\r\n\r\n CRESCENDO’16 will be 2 days long extravaganza to take place from 15 th-16th march with a direct outreach of more than 30.000 students across not only Delhi University but also other universities in Delhi.    ', '2016-03-01 16:43:33', '2016-03-01 16:43:33'),
(132, 'Poonam Sharma', 'poonam.sharma@dsim.in', '9599282445', NULL, NULL, 'Customer', 'Dear Sir/Ma`am,\r\n\r\nHope You are doing well.\r\n \r\nI am Poonam Sharma, Content Writer (Market Researcher) of Delhi School of Internet Marketing. \r\n\r\nWe have over 100,461 Facebook fans and over 93000 opt in email subscribers. \r\n\r\nWe came across your website and find it quite attractive. We want to post an interview with your senior management which will be posted on our blog. Surely the interview posting will increase your visibility to the customers.\r\n\r\nKindly provide us the contact number and email id of the concerned person for the purpose of the interview so that we can provide a questionnaire to him. \r\n\r\nHope to get revert soon.', '2016-03-07 09:57:02', '2016-03-07 09:57:02'),
(133, 'NIDHI CHAUDHARY', 'nidhi.chaudhary.19@gmail.com', '9717269537', NULL, NULL, 'Customer', '', '2016-03-09 08:32:29', '2016-03-09 08:32:29'),
(134, 'NIDHI CHAUDHARY', 'nidhi.chaudhary.19@gmail.com', '9717269537', NULL, NULL, 'Customer', 'Hhhh', '2016-03-09 08:32:34', '2016-03-09 08:32:34'),
(135, 'Girish Gera', 'girish.hitachi@gmail.com', '0995882266', NULL, NULL, 'Partner', 'Hi..\r\nif you are looking for some suitable space in Faridabad, I have one 640 Sq ft free hold....in main market...We can discuss further terms of association.', '2016-03-10 03:37:34', '2016-03-10 03:37:34'),
(136, 'Richa', 'dubey.richi@gmail.com', '9582862898', NULL, NULL, 'Customer', 'Hi,\r\nwould like to know about your studio in gurgaon ?', '2016-03-17 10:09:48', '2016-03-17 10:09:48'),
(137, 'megha jain', 'megha_1988jain@yahoo.com', '9582802312', NULL, NULL, 'Customer', 'Monthly services', '2016-03-22 11:47:36', '2016-03-22 11:47:36'),
(138, 'megha jain', 'megha_1988jain@yahoo.com', '9582802312', NULL, NULL, 'Customer', 'Monthly services', '2016-03-22 11:48:08', '2016-03-22 11:48:08'),
(139, 'sakshi', 'sakshi02priya@gmail.com', '7838260036', NULL, NULL, 'Customer', 'Interesting in party Makeup @ 499 package \r\nBut my home at South delhi \r\nSo it\'s possible?', '2016-03-25 17:00:12', '2016-03-25 17:00:12'),
(140, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Mail by Ms Amita, myself interested for the job. please tell about duties hours ,responsibilities and perks through mail or call', '2016-04-01 15:42:48', '2016-04-01 15:42:48'),
(141, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Mail by Ms Amita, myself interested for the job. please tell about duties hours ,responsibilities and perks through mail or call', '2016-04-01 15:42:56', '2016-04-01 15:42:56'),
(142, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Mail by Ms Amita, myself interested for the job. please tell about duties hours ,responsibilities and perks through mail or call', '2016-04-01 15:43:03', '2016-04-01 15:43:03'),
(143, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Mail by Ms Amita, myself interested for the job. please tell about duties hours ,responsibilities and perks through mail or call', '2016-04-01 15:43:04', '2016-04-01 15:43:04'),
(144, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Mail by Ms Amita, myself interested for the job. please tell about duties hours ,responsibilities and perks through mail or call', '2016-04-01 15:43:05', '2016-04-01 15:43:05'),
(145, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Mail by Ms Amita, myself interested for the job. please tell about duties hours ,responsibilities and perks through mail or call', '2016-04-01 15:43:06', '2016-04-01 15:43:06'),
(146, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Mail by Ms Amita, myself interested for the job. please tell about duties hours ,responsibilities and perks through mail or call', '2016-04-01 15:43:12', '2016-04-01 15:43:12'),
(147, 'Ashish Chouhan', 'ashish_chouhan82@yahoo.com', '8882121499', NULL, NULL, 'Careers', 'Luking for job center head.', '2016-04-03 04:01:34', '2016-04-03 04:01:34'),
(148, 'Ashish Chouhan', 'ashish_chouhan82@yahoo.com', '8882121499', NULL, NULL, 'Careers', 'Luking for job center head.', '2016-04-03 04:01:34', '2016-04-03 04:01:34'),
(149, 'sanjay bansal', 'bansal.sanjay63@yahoo.in', '9013482339', NULL, NULL, 'Careers', 'Salon Manger- Interest for job, discuss about duties hours, responsibilities and perks etc...Ref  by Amita   Thanks', '2016-04-04 01:32:27', '2016-04-04 01:32:27'),
(150, 'Deepa', 'drawat2008.14@gmail.com', '8285081985', NULL, NULL, 'Customer', 'I want to know ur bridal makeup price..', '2016-04-06 12:02:25', '2016-04-06 12:02:25'),
(151, 'savina', 'ninasavina0013@gmail.com', '7042646143', NULL, NULL, 'Careers', 'i am looking for job as a bdm', '2016-04-11 11:52:07', '2016-04-11 11:52:07'),
(152, 'savina', 'ninasavina0013@gmail.com', '7042646143', NULL, NULL, 'Careers', 'i am looking for job as a bdm', '2016-04-11 11:52:20', '2016-04-11 11:52:20'),
(153, 'savina', 'ninasavina0013@gmail.com', '7042646143', NULL, NULL, 'Careers', 'i am looking for job as a bdm', '2016-04-11 11:52:20', '2016-04-11 11:52:20'),
(154, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:54:57', '2016-04-12 09:54:57'),
(155, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:54:57', '2016-04-12 09:54:57'),
(156, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:55:03', '2016-04-12 09:55:03'),
(157, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:55:05', '2016-04-12 09:55:05'),
(158, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:55:06', '2016-04-12 09:55:06'),
(159, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:55:10', '2016-04-12 09:55:10'),
(160, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:55:12', '2016-04-12 09:55:12'),
(161, 'ritushawel', 'ritushawel7@yahoo.com', '9899169677', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:55:13', '2016-04-12 09:55:13'),
(162, 'rahulshawel', 'ritushawel7@yahoo.com', '9910822123', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:55:58', '2016-04-12 09:55:58'),
(163, 'rahulshawel', 'ritushawel7@yahoo.com', '9910822123', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:56:06', '2016-04-12 09:56:06'),
(164, 'rahulshawel', 'ritushawel7@yahoo.com', '9910822123', NULL, NULL, 'Careers', 'Salon manager', '2016-04-12 09:56:07', '2016-04-12 09:56:07'),
(165, 'mona singh', 'radhahiranya@gmail.com', '9971400223', NULL, NULL, 'Customer', '', '2016-04-13 13:26:10', '2016-04-13 13:26:10'),
(166, 'mona singh', 'radhahiranya@gmail.com', '9971400223', NULL, NULL, 'Customer', '', '2016-04-13 13:26:20', '2016-04-13 13:26:20'),
(167, 'yogita singh', 'singh.yogita87@yahoo.com', '9818247819', NULL, NULL, 'Careers', 'hello!\r\ni would like to work with your company...basically i m consultant from patel nagar,delhi...if u hav any hiring plz let me kw...we ll do our best.\r\nthank u ', '2016-04-15 10:14:31', '2016-04-15 10:14:31'),
(168, 'payal', 'rohitsaiyyam@gmail.com', '9540377007', NULL, NULL, 'Customer', 'I have seen your offer for party make ups@ 40% discount at Khojguru. Com.Plz update  with full info', '2016-04-16 15:34:45', '2016-04-16 15:34:45'),
(169, 'priya', 'bhanupriya1286@gmail.com', '9599042926', NULL, NULL, 'Customer', 'I need to know whethet u have a branch in west delhi', '2016-04-18 06:21:46', '2016-04-18 06:21:46'),
(170, 'priya', 'bhanupriya1286@gmail.com', '9599042926', NULL, NULL, 'Customer', 'I need to know whethet u have a branch in west delhi', '2016-04-18 06:21:53', '2016-04-18 06:21:53'),
(171, 'priya', 'bhanupriya1286@gmail.com', '9599042926', NULL, NULL, 'Customer', 'I need to know whethet u have a branch in west delhi', '2016-04-18 06:22:05', '2016-04-18 06:22:05'),
(172, 'priya', 'bhanupriya1286@gmail.com', '9599042926', NULL, NULL, 'Customer', 'I need to know whethet u have a branch in west delhi', '2016-04-18 06:22:11', '2016-04-18 06:22:11'),
(173, 'priya', 'bhanupriya1286@gmail.com', '9599042926', NULL, NULL, 'Customer', 'I need to know whethet u have a branch in west delhi', '2016-04-18 06:22:11', '2016-04-18 06:22:11'),
(174, 'priya', 'bhanupriya1286@gmail.com', '9599042926', NULL, NULL, 'Customer', 'I need to know whethet u have a branch in west delhi', '2016-04-18 06:22:28', '2016-04-18 06:22:28'),
(175, 'Muneera', 'muneeranahri1@gmail.com', '7207984849', NULL, NULL, 'Customer', 'Bridal makeup', '2016-04-18 18:50:50', '2016-04-18 18:50:50'),
(176, 'Muneera', 'muneeranahri1@gmail.com', '7207984849', NULL, NULL, 'Customer', 'Bridal makeup', '2016-04-18 18:51:12', '2016-04-18 18:51:12'),
(177, 'Muneera', 'muneeranahri1@gmail.com', '7207984849', NULL, NULL, 'Customer', 'Bridal makeup', '2016-04-18 18:51:14', '2016-04-18 18:51:14'),
(178, 'Muneera', 'muneeranahri1@gmail.com', '7207984849', NULL, NULL, 'Customer', 'Bridal makeup', '2016-04-18 18:51:14', '2016-04-18 18:51:14'),
(179, 'Raghav Mohta', 'mohta16raghav@gmail.com', '7417370447', NULL, NULL, 'Careers', 'I am a 2nd year B-Tech Mechanical engineering student from IIT Roorkee. I have been contemplating a shift in my career and Operations has been a career choice which I have wanted to pursue.    \r\n\r\nI am looking to explore and develop a higher level of skills for professionalism.\r\n\r\nI realize that RTI caters comprehensively to all areas of my interest and I wish to do an internship at your facility during the months of May to July this summer. Please let me know of possible opportunities and where can I forward my resume.', '2016-04-22 10:16:36', '2016-04-22 10:16:36'),
(180, 'Akanksha', 'akankshaamway01@gmail.com', '9818151911', NULL, NULL, 'Customer', '', '2016-04-26 02:20:13', '2016-04-26 02:20:13'),
(181, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:35:20', '2016-04-26 03:35:20'),
(182, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:23', '2016-04-26 03:36:23'),
(183, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:23', '2016-04-26 03:36:23'),
(184, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:24', '2016-04-26 03:36:24'),
(185, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:24', '2016-04-26 03:36:24'),
(186, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:25', '2016-04-26 03:36:25'),
(187, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:25', '2016-04-26 03:36:25'),
(188, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:28', '2016-04-26 03:36:28'),
(189, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:28', '2016-04-26 03:36:28'),
(190, 'nitesh', 'nknitesh37@gmail.com', '7503985602', NULL, NULL, 'Partner', 'Owner of srishti hairport unisex salon , \r\nO_99\'noida sector 12', '2016-04-26 03:36:32', '2016-04-26 03:36:32'),
(196, 'adi', 'swaminarayanakb@yahoo.com', '9650528161', NULL, NULL, 'Careers', '+91 9650528161 \r\n\r\nFreelancer Web-Designer/Model/Actor Negative Shade \r\nNew Website or Re-Design Recommend Me It Will Be a Favor!\r\n{Freelancer Web-Designer/Model/Actor Negative Shade}\r\nAvailable For Web/Print Media Shoots/TV ADS Commercials\r\nHi There Gonna Got Ur mail If in a Hurry! Email Me at swaminarayanakb@yahoo.com | adityasakb@yahoo.com\r\n\r\nbelow are some of my latest creations \r\nProject 2016-17 www.dmstarsindia.com Deepak Mehraotra Casting Director Yashrajfilms \r\nwww.thakurapparels.com\r\nwww.rhutoherbals.com\r\n\r\nwww.darttournamentsindia.com India\'s 1st Dart Tournament Register Your Pub For The next Tournament\r\n\r\nwww.ggacademy.in Grooming & ENtertainment LLP www.asgaa.org\r\nwww.hrpr.in\r\nwww.sakshiengitechconstruction.com\r\nwww.gourisahni.com Hotel Interior Designer / Social Worker\r\nwww.hotelvipulpalace.com Katra, Jammu\r\nwww.trehan-bhiwadi.in\r\nwww.ramabraham.com Book of the Year 2016 Author Jhunjhunwala A Ganga Activist Site\r\nwww.trehanneemrana.in\r\n| www.northyatra.com | \r\nwww.horizoninfrastructurefzc.com Sharjah UAE Dubai | \r\nwww.conceptmannequins.com |\r\nwww.bhandariproperties.in', '2016-04-29 09:49:30', '2016-04-29 09:49:30'),
(197, 'seema', 'seema_cia2007@yahoo.com', '9899840741', NULL, NULL, 'Customer', '', '2016-05-01 09:35:14', '2016-05-01 09:35:14'),
(198, 'test', 'test@test.com', '1111111111', NULL, NULL, 'Customer', '', '2016-05-01 09:42:36', '2016-05-01 09:42:36'),
(199, 'test', 'test@test.com', '1111111111', NULL, NULL, 'Customer', 'test mail', '2016-05-01 09:43:15', '2016-05-01 09:43:15'),
(200, 'Kayina', 'adaliakayina@gmail', '9717037245', NULL, NULL, 'Careers', 'Want to know more about the salon and for training aswell', '2016-05-02 16:06:15', '2016-05-02 16:06:15'),
(201, 'Ravi Batra', 'ravibatra1993@gmail.com', '9691180180', NULL, NULL, 'Partner', 'I want to know dat...r uh giving franchisee to if anyone wants to open salon in there area..??\r\n', '2016-05-03 03:22:52', '2016-05-03 03:22:52'),
(202, 'Shweta Ranshore', 'ranshoreshweta@gmail.com', '9582479720', NULL, NULL, 'Careers', 'In context with the telephonic conversation I had with you last week, I would like to brief my take on Glamstudios and how I could contribute to your organization.\r\n\r\nTo start with, what interests me in Glamstudios?\r\n\r\nGlamstudios being a new and fresh concept of providing quality with affordability would become an eye-catcher in recent times. Let me start by a correlated observation. I live near sector 31 market in Gurgaon. The market hosts around 8-9 salons with no major differentiation in terms of the list of service offerings and clientele (customers looking for mid-range beauty treatments).However I have noticed the following differences:\r\n-lack of standardization of services (highly staff dependent)\r\n-staff training quality(poor to great)\r\n-Baseline pricing as well as peak season pricing(varies a lot within the same salon as well as among each other)\r\nGiven these differences exist even within this small local ecosystem, Let\'s say I choose the one that is best suited for me (price and service quality suits me).I would always miss the comfort of finding the same salon at my hometown in Indore. And if I get the same in Indore, I would be a happy as well as loyal promoter of the brand. I see a big problem to solve here. This excites me and thus I want to be a part of the journey.\r\n\r\nI would like to pitch myself as a problem solver. This would be my list of problems to be solved:\r\n1.Standardisation of services and salon aesthetics-How to ensure customer gets same quality of service and feel of the salon at same cost to the company?\r\nTop solution(s) would be \r\n-proper training to the staff\r\n-disciplined transformation of the salon\r\n\r\n2.Supply-How to ensure customer is able to book a service at every time he/she wants?\r\nTop solution \r\n-Get enough supply.I assume this to be a very high demand market. Supply should not be demand dependent, should be other way round where supply should be able to autogenerate demand\r\n\r\n3.Pricing\r\nWhat is the best price to offer to the customer ?\r\nSolution-predict demand, identify peak and non peak, price accordingly provided safe guard exist against competition pricing, pricing models/packages based on customer demographics.\r\nI see great possibilities of pricing interplay. Eg-Marriage season, price hike on mehndi services is a no brainer.\r\n\r\n4.Booking experience \r\n-How to let supply and demand meet ?\r\nSolution-Simple yet innovative tech product-book my show sort of setup maybe where I have the liberty to choose a sea shore side seat while getting my hair spa. Phone call customer interface is something we can\'t ignore as a significant portion of our clients would be comfortable booking slots over a call.\r\n\r\nI am open to take up any of these problems to solve or maybe the ones that you can suggest. I am willing to develop my skills and knowledge and also willing to share my ideas to develop the success of the company and a high-quality work every day. Moreover, I also enjoy interacting with people and know that a happy customer is a repeat customer. My passion for this industry and the job I do drives me to deliver the best and cover that extra mile which a startup at this stage would be needing the most.\r\nAs we discussed my current CTC at Fluor Corporation is 6.1 Lpa. The extra edge like every other girl has towards this sector, I am ready to work with you at a minimal increment. I am expecting a CTC of atleast 6.5 Lpa. Rest can be discussed when I get a chance to interact with you. \r\n\r\nWaiting in anticipation \r\nThanks\r\nShweta Ranshore\r\n(9582479720)\r\n', '2016-05-05 05:31:46', '2016-05-05 05:31:46'),
(203, 'RAAHUUL SAH', 'rahulsah1989@gmail.com', '9911377878', NULL, NULL, 'Partner', 'we use  to deal in the top class range of skin care and cosmetic and would like to have a meeting with glam studio', '2016-05-05 08:14:30', '2016-05-05 08:14:30'),
(204, 'Vini Dhamija', 'vinidhamija@gmail.com', '8527533719', NULL, NULL, 'Partner', 'Want to talk about my parlour', '2016-05-07 13:11:29', '2016-05-07 13:11:29'),
(205, 'Nikita Meena', 'niki3127@gmail.com', '7053917865', NULL, NULL, 'Careers', 'I would like to express my keen interest in interviewing with your firm.\r\nI wish to start my career in business management as it would bestow me with the challenges I delve in my work; to solve complex problems by exercising my management skills and to come up with innovative, out of the box solutions. I have always been enchanted by solving problems and am fairly good at it. The study of management and logic-based subjects of Chemical Engineering has taught me build a structured thought process and helped develop problem solving abilities. The fact that business management offers an opportunity to implement the latter in real life scenarios is what attracts me to this profession. The diversity in working across a gamut of business sectors, geography and function is unique to the profession. Also, I am excited at the thought of being intellectually stimulated even years after as were the very first day.\r\n\r\nWhat impressed me most about GLAM STUDIOS is that it offers a range of best-value products and services along with cutting-edge technology. GLAM STUDIOS is a place where I will not only learn to become a leader and improve my critical thinking abilities, but I will have also have fun in the process. It would be a privilege for me to work in a firm, which has developed such a rich culture. Apart from providing an unparalleled learning experience, GLAM STUDIOS can fuel my passion to excel in all endeavors.\r\nOwing to my diverse projects and social endeavors, during my tenure at college, I have been able to develop a higher level of endurance, adaptability to new environment and cultures, with a never-say-die attitude. Since my childhood, I have been passionate about sports and am a proficient athlete.  Constant adherence to varied sports activities has helped me grow as a commend leader and a trusted peer. It also succored me to strive towards achieving a goal with single-minded focus and dedication. Finally, I firmly state that my diligence towards excellence and desire to make every opportunity a learning experience will make me a valuable addition to your firm.\r\nThank you for the time. \r\nI look forward to talking with you.\r\n\r\n', '2016-05-07 18:32:24', '2016-05-07 18:32:24'),
(206, 'Gaurav Wahi', 'wahigaurav786@gmail.com', '9886940718', NULL, NULL, 'Careers', 'I have previous startup exp. and would like to explore marketing opportunity at your company.', '2016-05-08 19:31:26', '2016-05-08 19:31:26'),
(207, 'vanita Mudgill', 'vanitamudgill@gmail.com', '9582067602', NULL, NULL, 'Partner', 'Hi,\r\n\r\nplease let me know the procedure of be a partner or taking franchise of glam studios.', '2016-05-11 10:16:54', '2016-05-11 10:16:54'),
(208, 'Rajan Pillai', 'r.pillai@cyberworx.in', '7838112233', NULL, NULL, 'Partner', 'I Rajan Pillai from CyberWorx Technologies wants to offer you digital marketing and website designing solutions in order to provide you with better and efficient outreach to your customers.      Key areas of expertise of the company : Graphics + Web Designing, Internet/Digital Marketing, Web + Mobile Applications', '2016-05-11 11:32:52', '2016-05-11 11:32:52'),
(209, 'kashmira', 'kash_kool@live.com', '8655601887', NULL, NULL, 'Customer', 'need to get a booking done ', '2016-05-11 13:50:37', '2016-05-11 13:50:37'),
(210, 'raj sharma', 'rajevents14@gmail.com', '9873480324', NULL, NULL, 'Careers', 'Dear Sir/Mam,\r\n\r\nI have few candidates for SALON MANAGER, please let me know if you still require any. As last week i had a word with you regarding the same\r\n\r\nThank you\r\nRaj sharma\r\n8010019149\r\n9873480324', '2016-05-11 15:45:43', '2016-05-11 15:45:43'),
(211, 'raj sharma', 'rajevents14@gmail.com', '9873480324', NULL, NULL, 'Partner', 'Dear Sir/Mam,\r\n\r\nI have few candidates for SALON MANAGER, please let me know if you still require any. As last week i had a word with you regarding the same\r\n\r\nThank you\r\nRaj sharma\r\n8010019149\r\n9873480324', '2016-05-11 15:46:16', '2016-05-11 15:46:16'),
(212, 'Alice Thomas', 'alicethomas.mkt@gmail.com', '0000000000', NULL, NULL, 'Customer', 'Hi, We wanted to get in touch with you to increase traffic on your website. Please reply to this email so we can send you free audit report of your website. Thank you', '2016-05-12 09:24:22', '2016-05-12 09:24:22'),
(213, 'Supriya Adlakha', 'supriya.adlakha@oyorooms.com', '8527431342', NULL, NULL, 'Customer', 'oYO EMPLOYEE', '2016-05-14 10:06:21', '2016-05-14 10:06:21'),
(214, 'Aarti Shukla', 'Aarti.shukla@oyorooms.com', '8860823974', NULL, NULL, 'Customer', 'oyo employee', '2016-05-14 10:06:57', '2016-05-14 10:06:57'),
(215, 'kartik', 'chuadharykartik68@gmail.com', '8588884125', NULL, NULL, 'Customer', '', '2016-05-14 10:49:09', '2016-05-14 10:49:09'),
(216, 'Juhi Singh', 'juhisingh917@gmail.com', '8802865911', NULL, NULL, 'Customer', 'haircut+blow dry', '2016-05-14 14:48:11', '2016-05-14 14:48:11'),
(217, 'Amisha Panchal ', 'amisha.panchal@oyorooms.com', '9999491089', NULL, NULL, 'Customer', '', '2016-05-14 17:37:48', '2016-05-14 17:37:48'),
(218, 'Amisha Panchal ', 'amisha.panchal@oyorooms.com', '9999491089', NULL, NULL, 'Customer', '', '2016-05-14 17:37:49', '2016-05-14 17:37:49'),
(219, 'neha', 'kash.kool92@gmail.com', '8655601887', NULL, NULL, 'Partner', 'want to register my salon need to inquire about the same ', '2016-05-15 09:38:40', '2016-05-15 09:38:40'),
(220, 'sushma', 'sushma.sirohi@gmail.com', '9711171102', NULL, NULL, 'Customer', 'coloring', '2016-05-17 12:07:28', '2016-05-17 12:07:28'),
(221, 'Arina', 'arinadhawan@yahoo.com', '9810461899', NULL, NULL, 'Careers', 'area manager', '2016-05-18 12:25:13', '2016-05-18 12:25:13'),
(222, 'diya', 'pandit.diay62@gmail.com', '9999216457', NULL, NULL, 'Customer', 'i want to know your offers', '2016-05-20 10:41:30', '2016-05-20 10:41:30'),
(223, 'ratna', 'ratnayadav1317@gmail.com', '9650799885', NULL, NULL, 'Customer', 'monthly package, want to know address in crossing republic, ghaziabad', '2016-05-21 10:15:23', '2016-05-21 10:15:23'),
(224, 'kuldeep saini', 'sainikuldeep636@gmail.com', '9945022257', NULL, NULL, 'Careers', 'HI Team,\r\n\r\nMy name is Kuldeep, having 5.8 yr exp in accounts payables & customer service, currently working at Capgemini, Bangalore. looking for opportunities.\r\nRegards,\r\n\r\nKuldeep saini', '2016-05-24 20:41:39', '2016-05-24 20:41:39'),
(225, 'mayank batra', 'mayank.discovery@gmail.com', '9630380380', NULL, NULL, 'Partner', '', '2016-05-28 20:01:49', '2016-05-28 20:01:49'),
(226, 'ramnik', 'ramnikkkaur75@gmail.com', '9136426100', NULL, NULL, 'Customer', 'Pls send me the price of services ', '2016-05-31 00:58:18', '2016-05-31 00:58:18'),
(227, 'mohan shankar', 'shankaralankar@gmail.com', '9789403090', NULL, NULL, 'Partner', 'I would like to have franchise in my city.I am waiting to hear from you. ', '2016-06-01 19:57:03', '2016-06-01 19:57:03'),
(228, 'Sonal', 'sonal.bali@gmail.com', '9810483550', NULL, NULL, 'Customer', 'How do i get to know the offers if any Or you work only on standard prices mentioned here.', '2016-06-03 17:53:14', '2016-06-03 17:53:14'),
(229, 'ISHA', 'ishaqua89@gmail.com', '8588853198', NULL, NULL, 'Customer', 'I Want to know tge charges of hair smoothening n hair spa in noida sec-18', '2016-06-05 02:00:46', '2016-06-05 02:00:46'),
(230, 'Rupanshu Verma', 'Vermarupanshu733@mail.com', '9654562910', NULL, NULL, 'Careers', 'Looking for an internship ', '2016-06-05 16:21:25', '2016-06-05 16:21:25'),
(231, 'geeta tondaon', 'geetatondaon@yahoo.com', '9582442122', NULL, NULL, 'Partner', 'want to detail of franchise ', '2016-06-06 16:34:30', '2016-06-06 16:34:30'),
(232, 'nikita', 'nikitasaini0@gmail.com', '8800317072', NULL, NULL, 'Customer', 'plzz tell me rebonding price and smoothning price.', '2016-06-12 20:14:03', '2016-06-12 20:14:03'),
(233, 'kalpana', 'palarun4393@gmail', '9821364737', NULL, NULL, 'Careers', 'Sir /madam\r\n   I am kalpana I have done beaution corse .and 6 years experience .I want to this job please give me job .', '2016-06-14 23:56:07', '2016-06-14 23:56:07'),
(234, 'azad khan', 'aajadkhan@014', '0886486304', NULL, NULL, 'Partner', '', '2016-06-15 15:03:53', '2016-06-15 15:03:53'),
(235, 'azad khan', 'aajadkhan@014', '0886486304', NULL, NULL, 'Partner', '', '2016-06-15 15:03:53', '2016-06-15 15:03:53'),
(236, 'jayanti', 'jagdisharyan@gmail.com', '8510893991', NULL, NULL, 'Careers', 'job vacancy for manager.', '2016-06-20 15:39:48', '2016-06-20 15:39:48'),
(237, 'kamaljeetkaur', 'kamallovesgulab@gmail.com', '7383070026', NULL, NULL, 'Customer', '', '2016-06-22 13:29:54', '2016-06-22 13:29:54'),
(238, 'kamaljeetkaur', 'kamallovesgulab@gmail.com', '7383070026', NULL, NULL, 'Customer', '', '2016-06-22 13:29:55', '2016-06-22 13:29:55'),
(239, 'ayushi chopra', 'ayushi.chopra06@gmail.com', '9711649395', NULL, NULL, 'Customer', 'hair cut', '2016-06-25 14:04:20', '2016-06-25 14:04:20'),
(240, 'Apeksha', 'apeksha.n.rai@gmail.com', '9871899104', NULL, NULL, 'Partner', '', '2016-06-26 10:02:26', '2016-06-26 10:02:26'),
(241, 'Chhaviraj Nanchahal', 'chhavirajnanchahl@gmail.com', '9811769432', NULL, NULL, 'Partner', 'Sir\r\n\r\nI would like to introduce myself as a distributor of the parlour products.\r\nThe brands that i have are Leaves herbal & Reeds herbal. This is one of the biggest brands of Punjab & Haryana. \r\nThe products that we have are Facial kits, Bleaches, Massage Creams, Moiturizers, Massage Gels, Face Packs, Scrubs, Tonners, Astringents, Face washes and many more at reasonable & atractive prices. \r\nThere is no compromize in the quality. Number of Beauty Parlours in Vaishali, Vasundhara, Indrapuram & Dilshad Garden are using these products & satisfying there customers with Awsome results. \r\n\r\nSir, I would like to have an appointment so that i can show you the products & disscuss the business. We would love to join hands with your organization & provide you the excellent quality products at very reasonable prices.\r\n\r\nWaiting for your valuable reply.\r\n\r\nThanks & Regards\r\nChhaviraj Nanchahal\r\n9811769432/ 9716207105\r\nProperitor: Dwarkadheesh Enterises', '2016-06-28 00:55:02', '2016-06-28 00:55:02'),
(242, 'Pratik Sharma', 'pratik_sharma89@outlook.com', '9871948201', NULL, NULL, 'Customer', 'Excellent service!! Thanks guys..', '2016-06-28 14:45:39', '2016-06-28 14:45:39'),
(243, 'priyanka', 'prsingh238@gmail.com', '9599407403', NULL, NULL, 'Customer', 'I want an appointment ', '2016-06-30 16:21:07', '2016-06-30 16:21:07'),
(244, 'Aneerban Chakravarty', 'aneerban.chakravarty@justdial.com', '9911926390', NULL, NULL, 'Partner', 'We are interested in a partnership program where we would be promoting your products / services that you are offering in the market on our network to share  real time leads from your inquiring customers along with web-promotions. Kindly, drop in a word or call back for details or any queries. \r\nThanks! \r\n\r\nAneerban Chakravarty\r\nMarketing Manager, Corporate Alliances \r\nMob: +91 9911926390\r\nemail: aneerban.chakravarty@justdial.com', '2016-07-01 15:46:36', '2016-07-01 15:46:36'),
(245, 'pooja shah', 'poojashah257@yahoo.in', '8743088593', NULL, NULL, 'Customer', 'i want to get hair smoothening done from glam studios. Please provide the details of rates and schedule my appointment.', '2016-07-02 15:51:25', '2016-07-02 15:51:25'),
(246, 'Himanshu Namdeo', 'himanshunamdeo1991@gmail.com', '7042255608', NULL, NULL, 'Careers', '', '2016-07-04 11:30:35', '2016-07-04 11:30:35'),
(247, 'Khushbu Yasmin ', 'kyasmin15@gmail.com', '7827286166', NULL, NULL, 'Customer', 'Hair smoothing ', '2016-07-05 08:06:52', '2016-07-05 08:06:52'),
(248, 'Ankit Jain', 'jain1212.dx@gmail.com', '9871648838', NULL, NULL, 'Careers', 'I am looking for new opportunities in Operations profile. Currently working with Mydala.com (e-commerce) as a Sr. Operations Executive.\r\nDo let me know if you have suitable job opening.\r\nThanks!', '2016-07-05 18:02:21', '2016-07-05 18:02:21'),
(249, 'Shweta Kashyap', 'shwetakshyap@gmail.com', '7836914867', NULL, NULL, 'Customer', '', '2016-07-06 00:02:58', '2016-07-06 00:02:58'),
(250, 'Shweta Kashyap', 'shwetakshyap@gmail.com', '7836914867', NULL, NULL, 'Customer', '', '2016-07-06 00:02:59', '2016-07-06 00:02:59'),
(251, 'Neelaakshi Piplani', 'piplani.neelaakshi@gmail.com', '9717178964', NULL, NULL, 'Customer', 'Looking for a make up artist for my wedding ', '2016-07-08 16:14:04', '2016-07-08 16:14:04'),
(252, 'rajesh kumar', 'rajeshsurya.rajesh@gmail.com', '9811996473', NULL, NULL, 'Partner', 'i am intersted for partner', '2016-07-09 21:23:15', '2016-07-09 21:23:15'),
(253, 'Reena patel', 'reena04286@gmail.com', '9555363553', NULL, NULL, 'Customer', 'Make up hair do', '2016-07-10 17:54:42', '2016-07-10 17:54:42'),
(254, 'Rachna ', 'kumari.rachna9@gmail.com', '8447090440', NULL, NULL, 'Partner', 'I want to take your franchise pls contact me on number 8447090440 ', '2016-07-10 19:23:59', '2016-07-10 19:23:59'),
(255, 'aarti', 'aartirv8@gmail.com', '8750540515', NULL, NULL, 'Customer', '', '2016-07-11 15:15:33', '2016-07-11 15:15:33'),
(256, 'Abhinav Gangwar', 'abhgang@gmail.com', '9736996057', NULL, NULL, 'Careers', 'Hi ! \r\nI\'m interested in working with a motivated team like yours as a software developer. \r\nYou can find my resume here (http://abhgangwar.me:1169/resume ). \r\nI also developed Backend in Nodejs and MySQL at Jugnoo (https://www.jugnoo.in/ ) for app and web services.\r\nAnd designed an open source educational game in C++/Qt under KDE - Please refer to my resume. \r\nHoping for a positive reply !\r\n\r\nThanks, \r\nAbhinav \r\n( http://abhgangwar.me )', '2016-07-13 11:52:32', '2016-07-13 11:52:32'),
(257, 'Abhinav Gangwar', 'abhgang@gmail.com', '9736996057', NULL, NULL, 'Careers', 'Hi ! \r\nI\'m interested in working with a motivated team like yours as a software developer. \r\nYou can find my resume here (http://abhgangwar.me:1169/resume ). \r\nI also developed Backend in Nodejs and MySQL at Jugnoo (https://www.jugnoo.in/ ) for app and web services.\r\nAnd designed an open source educational game in C++/Qt under KDE - Please refer to my resume. \r\nHoping for a positive reply !\r\n\r\nThanks, \r\nAbhinav \r\n( http://abhgangwar.me )', '2016-07-13 11:52:32', '2016-07-13 11:52:32'),
(258, 'krishna', 'krishnasharma414@gmail.com', '7065713804', NULL, NULL, 'Careers', '', '2016-07-14 10:01:05', '2016-07-14 10:01:05'),
(259, 'Sarita Lal', 'lalsarita@gmail.com', '9716299824', NULL, NULL, 'Customer', 'Rebonding', '2016-07-15 10:03:00', '2016-07-15 10:03:00'),
(260, 'Sarita Lal', 'lalsarita@gmail.com', '9716299824', NULL, NULL, 'Customer', 'Rebonding', '2016-07-15 10:03:01', '2016-07-15 10:03:01'),
(261, 'Yachna Bhatia', 'yachnabhatia9@gmail.com', '8130371592', NULL, NULL, 'Careers', 'Hello,\r\nI am looking for Carrer in your firm. Please revert back with appropriate information.\r\nThank You', '2016-07-15 11:43:32', '2016-07-15 11:43:32'),
(262, 'Shivi Tyagi', 'tyagishivangini070@gmail.com', '9911608701', NULL, NULL, 'Customer', 'Whats the price of smoothening..Do it have any side effect.?', '2016-07-15 12:17:10', '2016-07-15 12:17:10'),
(263, 'neetu', 'neetuyadav2088@gmail.com', '9643524220', NULL, NULL, 'Customer', 'Pedicure manicure, facial, waxing... is there possible at home ', '2016-07-15 12:35:41', '2016-07-15 12:35:41'),
(264, 'Simran', 'simran.wadhwa@ymail.com', '9599789930', NULL, NULL, 'Customer', ' interested in Smoothening..', '2016-07-15 17:16:27', '2016-07-15 17:16:27'),
(265, 'Neelam', 'neelamrawat790@gmail.com', '9958441165', NULL, NULL, 'Customer', '', '2016-07-15 23:39:04', '2016-07-15 23:39:04'),
(266, 'Rema khan', 'Remakhanrema6@gmail.com', '9897886152', NULL, NULL, 'Customer', '', '2016-07-16 15:06:18', '2016-07-16 15:06:18'),
(267, 'Kamya', 'kamyadahiya.98@gmail.com', '9582118076', NULL, NULL, 'Customer', '', '2016-07-17 10:55:47', '2016-07-17 10:55:47'),
(268, 'sk saharuk ', 'ssaharuk6@gmail.com', '8977376231', NULL, NULL, 'Partner', '', '2016-07-17 14:29:57', '2016-07-17 14:29:57'),
(269, 'Tushar', 'tusharjn@gmail.com', '9910046697', NULL, NULL, 'Customer', '', '2016-07-18 11:44:01', '2016-07-18 11:44:01'),
(270, 'SONALI ', 'sonalijhamb88@gmail.com', '8527607676', NULL, NULL, 'Customer', 'WHAT IS SMOOTHING /REBONDING 2499 PLEASE CONFIRM', '2016-07-18 12:30:54', '2016-07-18 12:30:54'),
(271, 'neha singh', 'yogendra989@gmail.com', '9911243372', NULL, NULL, 'Customer', 'Hair straightening ', '2016-07-18 19:43:00', '2016-07-18 19:43:00'),
(272, 'veenus masih', 'veenushans57@gmail.com', '8882036120', NULL, NULL, 'Careers', 'heyyyyyyyyyyyyyyyy', '2016-07-19 10:30:23', '2016-07-19 10:30:23'),
(273, 'veenus masih', 'veenushans57@gmail.com', '8882036120', NULL, NULL, 'Careers', 'heyyyyyyyyyyyyyyyy', '2016-07-19 10:30:25', '2016-07-19 10:30:25'),
(274, 'Shipra Mudgal', 'shipra.mudgal90@gmail.com', '9821699668', NULL, NULL, 'Customer', 'Hair strighten', '2016-07-19 15:29:52', '2016-07-19 15:29:52'),
(275, 'Jayanti jha', 'Jayantijha8@gmail.com', '9711797943', NULL, NULL, 'Careers', 'Graphic designer', '2016-07-19 18:11:56', '2016-07-19 18:11:56'),
(276, 'Rajiya', 'rajiyairshad786@gmail.com', '7290979821', NULL, NULL, 'Customer', '', '2016-07-20 04:33:51', '2016-07-20 04:33:51'),
(277, 'Tanu Kapoor ', 'tanukapoor101@gmail.com', '9456201677', NULL, NULL, 'Customer', 'For rebounding ', '2016-07-20 08:52:45', '2016-07-20 08:52:45'),
(278, 'twinkle', 'cutietwinkle001@gmial.com', '9899115401', NULL, NULL, 'Customer', 'for rebonding', '2016-07-20 12:50:40', '2016-07-20 12:50:40'),
(279, 'twinkle', 'cutietwinkle001@gmial.com', '9899115401', NULL, NULL, 'Customer', 'for rebonding', '2016-07-20 12:50:41', '2016-07-20 12:50:41'),
(280, 'Deepak sharma', 'deepak@quickmultisolutions.com', '7876191969', NULL, NULL, 'Partner', 'Contact me for share some information ', '2016-07-20 14:38:57', '2016-07-20 14:38:57'),
(281, 'Surbhu garg', 'surgarg2892@gmail.com', '9675742205', NULL, NULL, 'Customer', '', '2016-07-21 10:03:23', '2016-07-21 10:03:23'),
(282, 'soumya', 'pattnaik.soumya007@gmail.com', '9654066767', NULL, NULL, 'Customer', 'Smoothning', '2016-07-23 11:52:24', '2016-07-23 11:52:24'),
(283, 'rachika samaiyar', 'samaiyarr@gmail.com', '7503618471', NULL, NULL, 'Customer', 'I want pre-bridal services', '2016-07-23 20:20:17', '2016-07-23 20:20:17'),
(284, 'Nitin', 'nksinghal41@gmail.com', '8744872768', NULL, NULL, 'Careers', '', '2016-07-24 18:29:57', '2016-07-24 18:29:57'),
(285, 'Sant', 'santkiet@gmail.com', '8527043288', NULL, NULL, 'Partner', 'Want to open Franchise ', '2016-07-24 23:30:44', '2016-07-24 23:30:44'),
(286, 'Javed Siddiqui', 'jvd.sddq@gmail.com', '9604943113', NULL, NULL, 'Careers', 'Looking a job...Kindly check my profile on linkedin.com as given URL - "https://in.linkedin.com/in/javed-siddiqui-b1023512"\r\n\r\nThanking You', '2016-07-25 13:43:56', '2016-07-25 13:43:56'),
(287, 'Afsha khan', 'afshakhanak@gmail.com', '8527975585', NULL, NULL, 'Customer', '', '2016-07-25 23:29:53', '2016-07-25 23:29:53');
INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `city`, `area`, `purpose`, `contact_text`, `created_at`, `updated_at`) VALUES
(288, 'Afsha khan', 'afshakhanak@gmail.com', '8527975585', NULL, NULL, 'Customer', '', '2016-07-25 23:29:54', '2016-07-25 23:29:54'),
(289, 'Kalpna', 'kalpna89redhal@gmail.com', '9205700589', NULL, NULL, 'Customer', 'Hair treatment', '2016-07-26 11:27:44', '2016-07-26 11:27:44'),
(290, 'Meenakshi', 'minaxipawar@gmail.com', '9896574575', NULL, NULL, 'Customer', 'Query for Hair smoothening', '2016-07-27 14:52:42', '2016-07-27 14:52:42'),
(291, ' sonalika ', 'sonalikanagpal111@gmail.com', '9711661024', NULL, NULL, 'Customer', 'Rebounding', '2016-07-28 00:28:55', '2016-07-28 00:28:55'),
(292, 'sandeep', 'sand_jat@yahoo.com', '8302420601', NULL, NULL, 'Partner', 'Want to be get associated with your brand, in Jaipur. please respond asap. Sandeep', '2016-07-28 12:10:45', '2016-07-28 12:10:45'),
(293, 'rishabh jain', 'rishabhkjain311@gmail.com', '9582564770', NULL, NULL, 'Careers', 'Hey ,\r\n\r\nIt is certainly fascinating to learn about the mission everyone at GLAMSTUDIOS believes in. A service like this is always handy for everyone.   \r\n\r\nA little about me - I am a Final Year student pursuing my Bachelor\'s Degree at Jaypee Institute of Information Technology, Noida. Though my major is in Computer Science, I have found my niche in Business Development comprising of cracking business relevant ideas and managing B2B sales. To explore this further, I had completed my summer internship with GrabOnRent, a Bangalore-based product rental startup where I took the responsibility of finding new possibilities to reach out their target audience. Setting up an Experience Zones in specific events with over 10,000 footfalls and strengthened their alliances with the Merchants by helping them organize a Merchant Meet to share the roadmap of the company.\r\n\r\nI am good at selling and getting businesses to work together. Forming Alliances, getting people together are the places where I feel at home. I believe that I can add substantial value to GLAMSTUDIOS\'s eco-system. \r\n\r\nShould you be interested, I am available for any queries at +91-9999061714\r\n\r\nWill look forward to hearing from you.\r\n\r\nThanks.', '2016-07-28 12:11:44', '2016-07-28 12:11:44'),
(294, 'Divya', 'divya.kundi@gmail.com', '8376830594', NULL, NULL, 'Customer', 'Rebonding', '2016-07-30 14:13:43', '2016-07-30 14:13:43'),
(295, 'Sonam', 'sonamlucky85@gmail.com', '9873399407', NULL, NULL, 'Customer', 'Smoothing', '2016-07-30 23:54:26', '2016-07-30 23:54:26'),
(296, 'Rachna ', 'rachna.1983@rediffmail.com', '9540081875', NULL, NULL, 'Customer', 'Smoothing ', '2016-07-31 18:13:13', '2016-07-31 18:13:13'),
(297, 'Deepti', 'singh.deepti73@gmail.com', '9990426542', NULL, NULL, 'Customer', '', '2016-07-31 18:46:43', '2016-07-31 18:46:43'),
(298, 'samrata kaur', 'mahikaroy92@gmail.com', '8470818093', NULL, NULL, 'Partner', 'Parlour work only for ladies', '2016-08-01 00:37:57', '2016-08-01 00:37:57'),
(299, 'samrata kaur', 'mahikaroy92@gmail.com', '8470818093', NULL, NULL, 'Partner', 'Parlour work only for ladies', '2016-08-04 20:06:52', '2016-08-04 20:06:52'),
(300, 'Aastha', 'achauhan0911@gmail.com', '8527563270', NULL, NULL, 'Customer', 'Please tell me the cost of rebonding and keratin treatment and please suggest me which option is best. I have very frizzy and thin hairs and no volume in my hairs.', '2016-08-04 20:53:13', '2016-08-04 20:53:13'),
(301, 'Akhilesh', 'akhileshpandey277@gmail.com', '9990756878', NULL, NULL, 'Partner', 'M looking for a business as I know you guys are available all NCR cities so I also interested to be your partner.. ', '2016-08-05 10:54:44', '2016-08-05 10:54:44'),
(302, 'Bhawana Joshi', 'bhawana1246@gmail.com', '9540684679', NULL, NULL, 'Customer', 'I want to do straightening and smoothing my hairs. Can you please suggest me the prices and best for my hairs. The length of the hair 15 inch.', '2016-08-05 11:15:33', '2016-08-05 11:15:33'),
(303, 'Aanchal ', 'aanchal.sahu83@gmail.cim', '7840001037', NULL, NULL, 'Customer', 'Query ', '2016-08-06 06:18:39', '2016-08-06 06:18:39'),
(304, 'Praveen Kumar', 'chauhanpraveen15@gmail.com', '9501188463', NULL, NULL, 'Careers', 'Hello, i\'m looking for job Business Development Executive. i have experienced of 2.5 years and still working in chandigarh.', '2016-08-06 12:05:20', '2016-08-06 12:05:20'),
(305, 'Neha', 'neha.mehta76@gmail.com', '9818787379', NULL, NULL, 'Customer', 'Hair smoothening', '2016-08-06 15:01:41', '2016-08-06 15:01:41'),
(306, 'Mamtaaroradua@gmail.com', 'mamta.arora@axisbank.com', '9958421507', NULL, NULL, 'Customer', 'Hair smooth', '2016-08-06 19:24:00', '2016-08-06 19:24:00'),
(307, 'Rakhi', 'rakhi455garg@gmail.com', '9999150816', NULL, NULL, 'Customer', 'Rebonding', '2016-08-06 21:18:20', '2016-08-06 21:18:20'),
(308, 'Anjali Panchal', 'anjalipnchl@gmail.com', '8802102752', NULL, NULL, 'Customer', 'Want to knw the charges for amoothng and straightning too.', '2016-08-07 09:37:20', '2016-08-07 09:37:20'),
(309, 'pratibha dubey', 'pratibhadubey36@gmail.com', '7827743305', NULL, NULL, 'Customer', 'hair cut', '2016-08-07 18:06:39', '2016-08-07 18:06:39'),
(310, 'Teena', 'teenakuniyal@gmail.com', '8010376714', NULL, NULL, 'Customer', 'Smuthning', '2016-08-07 21:51:46', '2016-08-07 21:51:46'),
(311, 'Himani Saxena', 'himanisaxena.haps@gmail.com', '8979440573', NULL, NULL, 'Customer', '', '2016-08-07 23:54:14', '2016-08-07 23:54:14'),
(312, 'nisha gautam', 'gautamnisha249@gmail.com', '9411404396', NULL, NULL, 'Customer', '', '2016-08-08 00:23:55', '2016-08-08 00:23:55'),
(313, 'Nancy', 'nancy.jaiswal05@gmail.com', '8377054008', NULL, NULL, 'Customer', 'Need pre bridal services/sittings details', '2016-08-08 11:12:20', '2016-08-08 11:12:20'),
(314, 'Meenakshi', 'meenakshibhardwaj23@yahoo.com', '9599091949', NULL, NULL, 'Customer', 'Want to know ur PRI bridal and bridal package', '2016-08-08 16:49:53', '2016-08-08 16:49:53'),
(315, 'Divyanshi', 'divya1772@gmail.com', '7042075572', NULL, NULL, 'Customer', 'About rebounding', '2016-08-08 17:48:57', '2016-08-08 17:48:57'),
(316, 'deepali', 'deepchemin@yahoo.co.in', '8587080049', NULL, NULL, 'Customer', 'want to know more about happy hours', '2016-08-09 10:53:32', '2016-08-09 10:53:32'),
(317, 'Shivali Tomar', 'tomarshivali92@gmail.com', '8860484626', NULL, NULL, 'Customer', 'Hair straight treatment', '2016-08-09 11:31:46', '2016-08-09 11:31:46'),
(318, 'Neha Agarwal', 'nehagupta6025@gmail.com', '9560849852', NULL, NULL, 'Careers', 'Myself Neha Agarwal Is interested for job at Your saloon.I have 8 Years experience.Please provide the opportunity to prove myself\r\n\r\nNeha Agarwal\r\nM-212 Sanjay nagar Ghaziabad\r\nM-9560849852', '2016-08-09 18:42:07', '2016-08-09 18:42:07'),
(319, 'Neha Agarwal', 'nehagupta6025@gmail.com', '9560849852', NULL, NULL, 'Careers', 'Myself Neha Agarwal Is interested for job at Your saloon.I have 8 Years experience.Please provide the opportunity to prove myself\r\n\r\nNeha Agarwal\r\nM-212 Sanjay nagar Ghaziabad\r\nM-9560849852', '2016-08-09 18:42:34', '2016-08-09 18:42:34'),
(320, 'Arshi Garg', 'er.arshi2garg@gmail.com', '7827308657', NULL, NULL, 'Customer', '', '2016-08-09 21:32:23', '2016-08-09 21:32:23'),
(321, 'Jyoti', 'jyoti.jinaga@yahoo.com', '9582525652', NULL, NULL, 'Customer', 'Queries about reboundingn smoothing', '2016-08-10 01:41:09', '2016-08-10 01:41:09'),
(322, 'Bharti Mahajan', 'mahajanb90@gmail.com', '9899582104', NULL, NULL, 'Customer', 'Smooting', '2016-08-10 11:23:42', '2016-08-10 11:23:42'),
(323, 'Bharti Mahajan', 'mahajanb90@gmail.com', '9899582104', NULL, NULL, 'Customer', 'Smooting', '2016-08-10 11:23:42', '2016-08-10 11:23:42'),
(324, 'anubhi gupta', 'anubhiguptmua@gmail.com', '9953091885', NULL, NULL, 'Careers', 'Makeup artist', '2016-08-10 15:59:41', '2016-08-10 15:59:41'),
(325, 'Divya thakur', 'divyathakur9990@gmail.com', '9582319377', NULL, NULL, 'Partner', '', '2016-08-10 21:14:10', '2016-08-10 21:14:10'),
(326, 'priyanka', 'prnkgaurav@gmail.com', '9599344077', NULL, NULL, 'Customer', 'Rebonding', '2016-08-11 12:31:34', '2016-08-11 12:31:34'),
(327, 'chhaya sharma', 'chhaya8may@gmail.com', '9971889770', NULL, NULL, 'Customer', 'Basic', '2016-08-11 19:19:26', '2016-08-11 19:19:26'),
(328, 'yamini', 'saiyamini.naidu@gmail.com', '7416722130', NULL, NULL, 'Customer', 'best price for hair smoothening(rebonding)', '2016-08-13 14:03:06', '2016-08-13 14:03:06'),
(329, 'noor afsa', 'noorafsa16@gmail.com', '9718488148', NULL, NULL, 'Careers', 'I have four year of experience in guest relation executive .', '2016-08-13 14:08:57', '2016-08-13 14:08:57'),
(330, 'seerat', 'seeratsetia8@gmail.com', '9646265933', NULL, NULL, 'Customer', 'want to get smoothening n keratin treatment details???', '2016-08-14 00:06:04', '2016-08-14 00:06:04'),
(331, 'Ashi', 'a.arrora8489@gmail.com', '9911172727', NULL, NULL, 'Customer', 'Interested in smoothning...', '2016-08-14 21:29:23', '2016-08-14 21:29:23'),
(332, 'anjali', 'goforanjali02@gmail.com', '9958000125', NULL, NULL, 'Customer', 'Offer pack of \'hair cut, shave, clean , hair spa\' .... is is it  valid at any salon of glam studios..', '2016-08-15 11:52:44', '2016-08-15 11:52:44'),
(333, 'Himani Saxena', 'himanisaxena.haps@gmail.com', '8979440573', NULL, NULL, 'Customer', 'I want to do rebounding but it will be for first tym si I am confused if my hair quality get spoiled then..', '2016-08-17 22:10:50', '2016-08-17 22:10:50'),
(334, 'Mukti Mukherjee', 'sonalimukherjee1193@gmail.com', '8604525123', NULL, NULL, 'Careers', 'I am looking for a job in HR domain. i am having 8 months of experience in Talent aquisition.', '2016-08-18 14:03:05', '2016-08-18 14:03:05'),
(335, 'Sid', 'siddharth.arora@click-labs.com', '9023517618', NULL, NULL, 'Customer', 'Hi ,\r\n\r\nThis is Siddharth(Sid) from Click Labs and I have an interesting offering to explain and share with you.\r\n\r\nI was much impressed by your website (glamstudios.in) I happened to visit, just want to know if you might want all the same on a mobile app that can enhance the experience you are trying to provide to your customers. If interested, we can schedule a telephonic conversation or else I still wish the best for your business.\r\n\r\nThanks\r\n\r\nSiddharth Arora\r\nBusiness Development Executive\r\ne: siddharth.arora@click-labs.com\r\nCall: (415) 689-6165\r\n siddharth.arora_3\r\nWhatsapp: 9023517619\r\nNext-Juggernaut\r\nClick-Labs', '2016-08-19 16:29:07', '2016-08-19 16:29:07'),
(336, 'Uma', 'umaaswtesting@gmail.com', '9951125001', NULL, NULL, 'Customer', 'Need it services in dilsukhnagar', '2016-08-21 17:09:34', '2016-08-21 17:09:34'),
(337, 'lalita sharma', 'lalita.123happy@gmail.com', '9540275721', NULL, NULL, 'Customer', '', '2016-08-23 13:01:51', '2016-08-23 13:01:51'),
(338, 'abhilas Saini', 'sainiabhilash@outlook.com', '9761308064', NULL, NULL, 'Careers', 'Hi,\r\nI have applied for Business development Executive post and also got a matched mail from angel.co.How can we take this forward.', '2016-08-23 16:03:29', '2016-08-23 16:03:29'),
(339, 'abhilas Saini', 'sainiabhilash@outlook.com', '9761308064', NULL, NULL, 'Careers', 'Hi,\r\nI have applied for Business development Executive post and also got a matched mail from angel.co.How can we take this forward.', '2016-08-23 16:03:29', '2016-08-23 16:03:29'),
(340, 'abhilas Saini', 'sainiabhilash@outlook.com', '9761308064', NULL, NULL, 'Careers', 'Hi,\r\nI have applied for Business development Executive post and also got a matched mail from angel.co.How can we take this forward.', '2016-08-23 16:03:30', '2016-08-23 16:03:30'),
(341, 'Anamika ', 'yashodar361@gmail.com', '9205111140', NULL, NULL, 'Customer', '  ', '2016-08-23 18:59:40', '2016-08-23 18:59:40'),
(342, 'shweta', 'shweta.rajput@asrco.in', '7530942351', NULL, NULL, 'Customer', '', '2016-08-24 21:22:03', '2016-08-24 21:22:03'),
(343, 'Khushboo gaur', 'rakhi1926@gmail.com', '9873537977', NULL, NULL, 'Customer', 'Want to know about smoothening .. And some good services as we\'ll ', '2016-08-25 09:56:51', '2016-08-25 09:56:51'),
(344, 'Rashmi  priya', 'priyarashmi21@gmail.com', '9205665837', NULL, NULL, 'Customer', '', '2016-08-25 12:58:04', '2016-08-25 12:58:04'),
(345, 'sakshi jindal', 'er.sakshigarg@gmail.com', '9468133313', NULL, NULL, 'Customer', 'I want to knw abt smoothning 2499 offer', '2016-08-25 14:07:21', '2016-08-25 14:07:21'),
(346, 'Pooja', 'Poojagodara512@gmail.com', '8527780060', NULL, NULL, 'Customer', 'I want smoothing treatment for my hairs.I want to know price and price varies according to the length of hairs or it is fix......', '2016-08-26 09:30:58', '2016-08-26 09:30:58'),
(347, 'pooja', 'pujastfc@gmail.com', '9891696004', NULL, NULL, 'Customer', 'I want to rebond my hairs.', '2016-08-26 11:40:18', '2016-08-26 11:40:18'),
(348, 'pooja', 'pujastfc@gmail.com', '9891696004', NULL, NULL, 'Customer', 'I want to rebond my hairs.', '2016-08-26 11:40:18', '2016-08-26 11:40:18'),
(349, 'Laxmi Jhanwar', 'laxmijhanwar14@gmail.com', '9660008030', NULL, NULL, 'Customer', 'i want a package n i want service in noida itself ', '2016-08-26 16:25:45', '2016-08-26 16:25:45'),
(350, 'Savita sehrawat', 'savitadeswal122@gmail.com', '9582176146', NULL, NULL, 'Customer', '', '2016-08-26 16:57:11', '2016-08-26 16:57:11'),
(351, 'Savita sehrawat', 'savitadeswal122@gmail.com', '9582176146', NULL, NULL, 'Customer', '', '2016-08-26 16:57:12', '2016-08-26 16:57:12'),
(352, 'sadhana gupta ', 'sadhana.gupta1208@gmail.com', '8287395723', NULL, NULL, 'Customer', 'Want smoothing and straightening ', '2016-08-26 20:16:09', '2016-08-26 20:16:09'),
(353, 'Sushmita Kohli', 'catchyvoice@gmail.com', '9582895775', NULL, NULL, 'Customer', '', '2016-08-26 22:42:22', '2016-08-26 22:42:22'),
(354, 'Cheshta nagpal', 'cheshta.2106@gmail.com', '9711450984', NULL, NULL, 'Customer', 'What services will you provide in basic light party makeup?\r\nWill it be complete makeup with base and everything or just liner and lipstick\r\n', '2016-08-27 00:08:38', '2016-08-27 00:08:38'),
(355, 'Shailja pundir', 'shaileja392@gmail.com', '7838657728', NULL, NULL, 'Customer', 'Threading,waxing ,facial', '2016-08-28 00:18:11', '2016-08-28 00:18:11'),
(356, 'sherlly', 'sherlly94cutie@gmail.com', '9418165519', NULL, NULL, 'Customer', 'I have very thin hair. I\'ve been doing rebonding thrice. I want my hair to look healthier and longer please suggest me something. Do you provide permanent hair extensions, tell me it\'s details like process,effect and cost. Will be waiting for your reply.', '2016-08-28 08:14:12', '2016-08-28 08:14:12'),
(357, 'Anjali', 'goforanjali02@gmail.com', '9958000125', NULL, NULL, 'Customer', 'Smoothing charges for mid length.. ', '2016-08-28 20:38:00', '2016-08-28 20:38:00'),
(358, 'mohita', 'sonimohita33@gmail.com', '9643540995', NULL, NULL, 'Customer', 'i want my hair smoothing ', '2016-08-28 22:33:19', '2016-08-28 22:33:19'),
(359, 'isha', 'isha.daswal@gmail.com', '7827947580', NULL, NULL, 'Customer', 'I want the rebonding/smoothening on my hairs can u plz send me the details regarding it.', '2016-08-28 23:07:51', '2016-08-28 23:07:51'),
(360, 'payal jain', 'payalj@outlook.com', '9654036372', NULL, NULL, 'Customer', 'Smoothing and rebonding', '2016-08-29 11:39:20', '2016-08-29 11:39:20'),
(361, 'payal jain', 'payalj@outlook.com', '9654036372', NULL, NULL, 'Customer', 'Smoothing and rebonding', '2016-08-29 11:39:20', '2016-08-29 11:39:20'),
(362, 'Neha Gupta', 'neha.gupta9316@gmail.com', '8860911480', NULL, NULL, 'Customer', '', '2016-08-29 18:45:19', '2016-08-29 18:45:19'),
(363, 'Priyanka shukla', 'priyankashukla216@gmail.com', '9873090126', NULL, NULL, 'Customer', '', '2016-08-30 08:12:30', '2016-08-30 08:12:30'),
(364, 'renuka ', 'renukachaudhary23@gmail.com', '7827955563', NULL, NULL, 'Customer', 'For bridal purpose and self ', '2016-08-30 09:06:10', '2016-08-30 09:06:10'),
(365, 'Pooja yadav', 'poojayada2704@gmail.com', '9555917075', NULL, NULL, 'Customer', 'Rebonding price ', '2016-08-30 09:46:23', '2016-08-30 09:46:23'),
(366, 'Sapna walia', 'sapnawalia11@yahoo.in', '8802464544', NULL, NULL, 'Careers', 'I wanna open Glam studio in fbd sec 37.please give me the all details for it.', '2016-08-30 15:12:20', '2016-08-30 15:12:20'),
(367, 'Sapna walia', 'sapnawalia11@yahoo.in', '8802464544', NULL, NULL, 'Partner', 'I wanna open Glam studio in fbd sec 37..please give me all details for it.', '2016-08-30 15:14:49', '2016-08-30 15:14:49'),
(368, 'Anuradha Chauhan ', 'anuspn29@gmail.com', '9999921843', NULL, NULL, 'Customer', '', '2016-08-30 20:55:17', '2016-08-30 20:55:17'),
(369, 'Aarti', 'aartibatra.16dec@gmail.com', '9560930454', NULL, NULL, 'Customer', '', '2016-08-31 08:06:25', '2016-08-31 08:06:25'),
(370, 'jagdish chandra', 'jagdisharyan@gmail.com', '9718908037', NULL, NULL, 'Careers', 'apply for area manager(ASM)', '2016-08-31 17:03:19', '2016-08-31 17:03:19'),
(371, 'Namrata', 'namrata.bora.92@gmail.com', '8447775401', NULL, NULL, 'Partner', 'Hello, I visited Glam Studios at South ex and was very impressed by your work and the affordable rates. I would like to enquire if you are open for franchising. I have a property at Guwahati, Assam and I would like to know if you would like to expand. Please let me know about the franchise fees, royalty and investment details if you are open to the idea of franchising. Thanks!', '2016-08-31 23:01:20', '2016-08-31 23:01:20'),
(372, 'Shina', 'akanksha.preet@gmail.com', '8283834229', NULL, NULL, 'Customer', 'Got keratin done but not all liked', '2016-09-01 15:42:27', '2016-09-01 15:42:27'),
(373, 'Prachi tyagi', 'ruchityagi567@gmail.com', '8377846297', NULL, NULL, 'Customer', '', '2016-09-01 17:24:06', '2016-09-01 17:24:06'),
(374, 'Sanchita Singh', 'sanchita3303@gmail.com', '9999271131', NULL, NULL, 'Customer', 'Hair smoothening of shoulder lengh hair', '2016-09-02 10:57:38', '2016-09-02 10:57:38'),
(375, 'Abdul Qadir', 'abdulqadur821@gmail.com', '8090283786', NULL, NULL, 'Careers', 'Hi I have done MBA from Lucknow university as international business specialization i.And I want to join u r team which is enthuastic energetic .\r\nAnd glam', '2016-09-02 14:27:35', '2016-09-02 14:27:35'),
(376, 'Vandana ', 'vandanas952@gmail.com', '9911733411', NULL, NULL, 'Customer', 'Need head to toe package ....', '2016-09-02 23:46:04', '2016-09-02 23:46:04'),
(377, 'Vandana ', 'vandanas952@gmail.com', '9911733411', NULL, NULL, 'Customer', 'Need head to toe package ....', '2016-09-02 23:46:04', '2016-09-02 23:46:04'),
(378, 'Vandana ', 'vandanas952@gmail.com', '9911733411', NULL, NULL, 'Customer', 'Need head to toe package ....', '2016-09-02 23:46:04', '2016-09-02 23:46:04'),
(379, 'Vikrant dubey ', 'vikrantd48@gmail.com', '9971549532', NULL, NULL, 'Customer', 'I am looking glam studio\'s outlet near noida sector 63 and want to make a appointment for my female friend , ', '2016-09-03 14:16:06', '2016-09-03 14:16:06'),
(380, 'Ravi Lalwani ', 'ravilalwani369@gmail.com', '9557534999', NULL, NULL, 'Customer', 'Just want to know.. In this saloon waxing is available for men or not? In the noida sec 16\r\nKindly revert', '2016-09-04 08:47:24', '2016-09-04 08:47:24'),
(381, 'Anubhav jundre', 'ajundre321@gmail.com', '8522013208', NULL, NULL, 'Customer', '', '2016-09-04 13:48:58', '2016-09-04 13:48:58'),
(382, 'Monika verma', 'monika.shekhar.2009@gmail.com', '9899654663', NULL, NULL, 'Customer', '', '2016-09-05 12:05:01', '2016-09-05 12:05:01'),
(383, 'shilpi sharma', 'sshilpi2312@gmail.com', '7248026897', NULL, NULL, 'Customer', 'i want to know about the price of  hair rebonding', '2016-09-05 13:38:53', '2016-09-05 13:38:53'),
(384, 'kshitij chauhan', 'kshitijchauhan11@gmail.com', '8252885448', NULL, NULL, 'Customer', 'Du u have an outlet at patna? ', '2016-09-05 23:51:48', '2016-09-05 23:51:48'),
(385, 'Meenu joshi', 'meenujoshilmj@gmail.com', '9560309993', NULL, NULL, 'Customer', '', '2016-09-06 01:00:01', '2016-09-06 01:00:01'),
(386, 'mayank ', 'monudwivedi97@gmail.com', '9628917421', NULL, NULL, 'Careers', '', '2016-09-06 23:46:56', '2016-09-06 23:46:56'),
(387, 'saniya', 'sana.angel53@yahoo.in', '7291880884', NULL, NULL, 'Customer', '', '2016-09-07 00:29:58', '2016-09-07 00:29:58'),
(388, 'Preeti', 'preeti.catty27@gmail.com', '9643381647', NULL, NULL, 'Customer', 'I want to know more about the smoothening offer you recently updated for 2499 only', '2016-09-07 12:46:57', '2016-09-07 12:46:57'),
(389, 'richa ', 'richa.sharma1809@gmail.com', '7042511522', NULL, NULL, 'Customer', '', '2016-09-07 17:02:53', '2016-09-07 17:02:53'),
(390, 'Anu thakur', 'anuthakur93@Gmail.com', '9811024350', 'New Delhi', 'South Delhi', 'partner', 'I want open my own salon. ...', '2016-09-07 20:01:48', '2016-09-07 20:01:48'),
(391, 'Harish', 'goelharish@gmail.com', '9582842488', 'Gurgaon', 'Gurgaon', 'partner', 'Looking for options to open an outlet in Gurgaon.', '2016-09-08 10:37:41', '2016-09-08 10:37:41'),
(392, 'Ambrish Tripathi', 'ambrishtripathi14@gmail.com', '9013444717', NULL, NULL, 'Careers', 'Hi,\r\nI want to know about jobs at Glam Studios. Currently i am a software developer at Lochbridge, Gurgaon.', '2016-09-08 14:37:58', '2016-09-08 14:37:58'),
(393, 'Neha Nupur', 'nehanupur3010@gmail.com', '9717964316', NULL, NULL, 'Careers', 'Respected Mam,\r\n\r\nI have passed my post graduation and  applying for any post in  M.B.A (Human Resource)  with your firm.I would like you to kindly consider my application for any  post in HR Department in Northern  region.\r\n\r\nAs you can see my resume, I have passed my B.Tech(Biotechnology) in 2015 with 70.01% ,  & 80.01% in M.B.A(HR).\r\n\r\nI am keen at learning things faster and have a quite good communication skill. I have good computer efficiency as well and quite proficient in basics like MS office and internet.\r\n\r\nI have a strong desire to establish my career in  HR Profile through my capabilities and efficient team work along with good time management. It is my dream to get associated with a winning company like yours.\r\n\r\nI look forward to hearing from you &  seeking an appointment with you soon to take this further.\r\n\r\nTherefore, I am attaching my CV along with this mail for further reference.\r\n\r\nLooking forward to work with You.\r\n\r\nYours faithfully,\r\n\r\nRegards:-\r\nNeha Nupur\r\nB.Tech(B.T)+MBA(Human Resource)\r\nMobile:- 9717964316', '2016-09-08 17:16:03', '2016-09-08 17:16:03'),
(394, 'Nidhi', 'Rajamakkar@ymail.com', '9540408877', 'New Delhi', '1000sq feet', 'partner', 'I want to open my own salon', '2016-09-08 20:58:27', '2016-09-08 20:58:27'),
(395, 'Rimi', 'rekhasagar8775@gmail.com', '8527305266', NULL, NULL, 'Careers', '', '2016-09-09 22:54:07', '2016-09-09 22:54:07'),
(396, 'DINESH MULCHANDANI', 'dineshmulchadani2010@gmail.com', '8805029164', NULL, NULL, 'Careers', 'Having around 14 Years of Experience in Sales & Marketing, Presently am working with carryage Technologies pvt ltd (www.tempogo.com ) an on demand Logistics startup as Sales And Operations Manager In Nagpur Since August 2015 . Prior to this was working with foodpanda, As a Business Head- Central,Initially Looking after Sales and Operations and Launching of Nagpur,Indore and Bhopal Cities and then later was working as operations Dept Looking after Nagpur Delivery handling team of 45 Food Delivery Expert Team and 3 Hub Managers. \r\nHad worked with HINDUSTAN UNILEVER LTD ( HUL)  Looking for opportunities in Sales & Operations ...\r\n', '2016-09-10 14:33:39', '2016-09-10 14:33:39'),
(397, 'Sara Khan ', 'sanjayrockon6@gmail.com', '9899306502', NULL, NULL, 'Customer', 'Call back arrange', '2016-09-10 16:25:07', '2016-09-10 16:25:07'),
(398, 'Preeti', 'preeti.catty27@gmail.com', '9643381647', NULL, NULL, 'Customer', 'I want to go for this anti tan cleanup for 300/- in janakpuri branch', '2016-09-11 23:31:53', '2016-09-11 23:31:53'),
(399, 'Rajiv', 'rajivsingh@sidbi.in', '9452904886', NULL, NULL, 'Partner', 'Saw your programme on BTVi. Congrats on your growing success. We may try to be together, if you plan to cover Lucknow. \r\n- A new entrepreneur.', '2016-09-12 13:41:00', '2016-09-12 13:41:00'),
(400, 'Vishnu ', 'vishnu@salvinindia.com', '9790192595', NULL, NULL, 'Partner', 'Want to be an franchisee in Coimbatore,  Tamilnadu.  So please let me know about the details of the same ', '2016-09-12 20:27:42', '2016-09-12 20:27:42'),
(401, 'Dan singh', 'dan.jasaawat@gmail.com', '9012826340', NULL, NULL, 'Careers', 'I am  presently working in Houejoy.in as an Assistant Operations Manager.Would like to explore job opportunity in Glam Studios.Please guide me for the same.', '2016-09-12 22:57:59', '2016-09-12 22:57:59'),
(402, 'Dilpreet kaur', 'dil18preet@gmail.com', '9871185801', NULL, NULL, 'Customer', 'Smoothning/rebonding ', '2016-09-12 23:55:35', '2016-09-12 23:55:35'),
(403, 'Pooja', 'poojabhalla19@gmail.com', '8587005087', NULL, NULL, 'Customer', 'Rebounding', '2016-09-13 13:38:55', '2016-09-13 13:38:55'),
(404, 'ankita singh', 'ankitasingh0057@gmail.com', '9654900022', NULL, NULL, 'Customer', '', '2016-09-13 21:40:24', '2016-09-13 21:40:24'),
(405, 'ankita singh', 'ankitasingh0057@gmail.com', '9654900022', NULL, NULL, 'Customer', '', '2016-09-13 21:40:24', '2016-09-13 21:40:24'),
(406, 'preeti', 'preetikasharma09@gmail.com', '7838011219', NULL, NULL, 'Customer', 'Rebounding', '2016-09-13 21:51:06', '2016-09-13 21:51:06'),
(407, 'Baljeet Singh', 'baljeetsinghgulati@gmail.com', '9810136083', NULL, NULL, 'Partner', '', '2016-09-13 23:07:19', '2016-09-13 23:07:19'),
(408, 'Minakshii ', 'meenakshichadha123@gmail.com', '9818255999', NULL, NULL, 'Partner', 'We have running salon in sector18, all setup is there. If interseted in taking over pls contact', '2016-09-14 14:36:26', '2016-09-14 14:36:26'),
(409, 'Jaswinder', 'jassi7794@gmail.com', '9212125205', NULL, NULL, 'Partner', 'I want to open a bussiness', '2016-09-14 16:29:35', '2016-09-14 16:29:35'),
(410, 'Mousumi Kukreti', 'mousumi@bigcity.in', '9538766643', NULL, NULL, 'Partner', 'Hi, I am looking forward to speak to your PAN India Marketing Head / Alliance Head to discuss a possible partnership opportunity. We are on of India\'s leading tactical sales promotions agency and one of the largest aggregator of spare capacity for our partners in Salon, Dining, Extreme Sports etc to name a few. We are currently partnered with VLCC, Naturals, YLG, Head Turners, O2 Spa and many more stand alone salons.\r\n\r\n', '2016-09-14 17:09:15', '2016-09-14 17:09:15'),
(411, 'Mousumi Kukreti', 'mousumi@bigcity.in', '9538766643', NULL, NULL, 'Partner', 'Hi, I am looking forward to speak to your PAN India Marketing Head / Alliance Head to discuss a possible partnership opportunity. We are on of India\'s leading tactical sales promotions agency and one of the largest aggregator of spare capacity for our partners in Salon, Dining, Extreme Sports etc to name a few. We are currently partnered with VLCC, Naturals, YLG, Head Turners, O2 Spa and many more stand alone salons.\r\n\r\n', '2016-09-14 17:09:15', '2016-09-14 17:09:15'),
(412, 'Mousumi Kukreti', 'mousumi@bigcity.in', '9538766643', NULL, NULL, 'Partner', 'Hi, I am looking forward to speak to your PAN India Marketing Head / Alliance Head to discuss a possible partnership opportunity. We are on of India\'s leading tactical sales promotions agency and one of the largest aggregator of spare capacity for our partners in Salon, Dining, Extreme Sports etc to name a few. We are currently partnered with VLCC, Naturals, YLG, Head Turners, O2 Spa and many more stand alone salons.\r\n\r\n', '2016-09-14 17:09:57', '2016-09-14 17:09:57'),
(413, 'Akanksha ', 'baliakanksha5@gmail.com', '9654040465', NULL, NULL, 'Customer', 'Want to know about the hair treatment practises you follow. I have really damaged and dull hair. Just wan to know some tips related to it', '2016-09-15 19:09:13', '2016-09-15 19:09:13'),
(414, 'ankita', 'ankita.prerana@gmail.com', '9999663539', NULL, NULL, 'Customer', 'hi, i just wanted to know in hair hat trick deal, we can take any hair cut of our choice or is there any conditions?', '2016-09-16 12:09:42', '2016-09-16 12:09:42'),
(415, 'sadiya', 'sn@test.com', '9910053244', 'Faridabad', 'testing', 'partner', 'hi', '2016-09-16 12:25:56', '2016-09-16 12:25:56'),
(416, 'Smita minz', 'smithaminz@gmail.com', '9958109417', NULL, NULL, 'Customer', 'Reboonding', '2016-09-17 03:43:40', '2016-09-17 03:43:40'),
(417, 'shreeram', 'shreeramgodara1@gmail.com', '9660185950', NULL, NULL, 'Customer', '', '2016-09-17 07:53:13', '2016-09-17 07:53:13'),
(418, 'shreeram ', 'shreeramgodara1@gmail.com', '9660185950', NULL, NULL, 'Partner', 'Pune ', '2016-09-17 07:55:34', '2016-09-17 07:55:34'),
(419, 'shreeram ', 'shreeramgodara1@gmail.com', '9660185950', NULL, NULL, 'Partner', 'Pune ', '2016-09-17 07:55:35', '2016-09-17 07:55:35'),
(420, 'Shailja', 'shailjasingla9@gmail.com', '9811775341', NULL, NULL, 'Customer', 'Smoothening', '2016-09-17 09:25:31', '2016-09-17 09:25:31'),
(421, 'Swati Sharma', 'physio.swati01@gmail.com', '9560081458', NULL, NULL, 'Customer', 'Hi Glam Studios!! I was trying to contact your number but could not go through. I want information about pre bridal package. ', '2016-09-17 11:00:39', '2016-09-17 11:00:39'),
(422, 'kuljit singh', 'kuljitsingh143@yahoo.com', '9717748484', NULL, NULL, 'Partner', 'Owner', '2016-09-17 12:01:59', '2016-09-17 12:01:59'),
(423, 'anil kumar', 'anilkumar7838413423@gmail.com', '7838413423', NULL, NULL, 'Partner', 'Plzz contact me i open a glam studio so plzz tell Me process', '2016-09-17 12:48:42', '2016-09-17 12:48:42'),
(424, 'Sunil', 'sunil1maddy@gmail.com', '9555126478', NULL, NULL, 'Partner', 'I want to know abou franchise.', '2016-09-17 20:33:59', '2016-09-17 20:33:59'),
(425, 'Lovleen Bhalla', 'bhalla.lovleen@gmail.com', '9692816490', NULL, NULL, 'Careers', 'I am pleased to submit my application for consideration for the available Android Developer role with your tech start up. Given my background in developing application solutions and talent for creating aesthetically pleasing and highly functional mobile applications, I feel I am in a great position to make a positive impact with GlamStudios.\r\n\r\n\r\nIn addition to my formal education and training, my hands-on experiences as an Android Developer make me an excellent match for the unique demands of this opportunity. I have a passion for pushing mobile technologies to the limit and have experience with a wide variety of Android device resolutions. As an engineer I challenge and enjoyed being challenged, and I have a reputation for producing the best product experience, irrespective of its category.\r\n\r\n\r\n', '2016-09-17 20:42:03', '2016-09-17 20:42:03'),
(426, 'lakshika', 'verma.l1994@gmail.com', '9873747238', NULL, NULL, 'Customer', 'Tell me the price of rebonding and smoothning', '2016-09-18 19:18:13', '2016-09-18 19:18:13'),
(427, 'Manvendra singh', 'manvenderlnupe@gmail.com', '9818680995', NULL, NULL, 'Customer', '', '2016-09-18 21:06:10', '2016-09-18 21:06:10'),
(428, 'Deepika', 'deepikabagga07@gmail.com', '8376917767', NULL, NULL, 'Customer', '', '2016-09-18 23:17:14', '2016-09-18 23:17:14'),
(429, 'soumya', 'pattanaik.soumya007@gmail.com', '9654066767', NULL, NULL, 'Customer', 'I want smoothening to my hair. Pls contact me if possible', '2016-09-19 16:33:08', '2016-09-19 16:33:08'),
(430, 'Parul Shukla', 'parul0906@rediffmail.com', '9654518454', NULL, NULL, 'Customer', 'I want to know more about the straightening pros & cons with duration of the same and even want to know more about smoothening and rebonding.', '2016-09-19 22:54:52', '2016-09-19 22:54:52'),
(431, 'MUKESH BANDOONI', 'mbandooni1980@gmail.com', '7840864353', NULL, NULL, 'Careers', 'Respected Sir/Madam,\r\n\r\nPlease find attached the detailed CV. I hope it will be as per your requirements.\r\nI will be highly obliged to you.\r\n\r\nWith regards,\r\nSincerely,\r\n\r\nMukesh Bandooni\r\n(M): 7840864353', '2016-09-22 13:01:34', '2016-09-22 13:01:34'),
(432, 'sonakshi', 'komaldeol07@gmail.com', '8447643364', NULL, NULL, 'Customer', 'please confirm about rebonding charges.', '2016-09-22 15:54:18', '2016-09-22 15:54:18'),
(433, 'Mohmad irshad', 'mohmadirshad72@gmail.com', '9990004280', NULL, NULL, 'Careers', 'Hi..sir I M a hair trainer from Natural\'s salon&spa\r\n I M handling North and West India all over naturals. ', '2016-09-23 10:25:16', '2016-09-23 10:25:16'),
(434, 'Nishant Jain', 'nishant.lnmiit2k10@gmail.com', '8385073292', NULL, NULL, 'Careers', 'Hi,\r\n\r\nI am interested to work with you,\r\nPlease let me know about current openings at Glam Studios.\r\n\r\nThanks\r\nNishant Jain\r\n', '2016-09-23 16:22:47', '2016-09-23 16:22:47'),
(435, 'Yajata Hemrajani', 'yajata20@gmail.com', '9869335019', NULL, NULL, 'Customer', 'Do y\'all have nothing for the nails? ', '2016-09-23 16:44:16', '2016-09-23 16:44:16'),
(436, 'Test', 'test@test.com', '9090909090', NULL, NULL, 'Customer', 'test', '2016-09-24 01:42:59', '2016-09-24 01:42:59'),
(437, 'Purnachandra Kiran', 'purnachandrakiran@gmail.com', '9248794275', NULL, NULL, 'Careers', '\r\nHi Glam Studios,\r\nI\'ve heard about GLAM STUDIOS through one of my colleagues and quite impressed about the business model & Management, and came to know about the career opportunities with GLAM STUDIOS. I would like to join with Glam Studios in the Business Development segment and would like to be partnered in the Growth of Glam Studios as well as to have personal & professional growth. Let me know if there is any opportunity available.\r\nRegards,\r\nPurnachandra Kiran.\r\nHyderabad', '2016-09-24 12:02:05', '2016-09-24 12:02:05'),
(438, 'Priti Pandya', 'ambition2live@gmail.com', '8238655588', NULL, NULL, 'Partner', 'Please forward me information in detail for partnership at Surat city', '2016-09-25 10:15:59', '2016-09-25 10:15:59'),
(439, 'Priyanka Pandey', 'priyap21@yahoo.com', '9711751896', NULL, NULL, 'Customer', 'Want to book 2 packages.', '2016-09-25 12:49:54', '2016-09-25 12:49:54'),
(440, 'Sahil ', 'sahil555khan@yahoo.com', '9555111767', NULL, NULL, 'Customer', 'Like want services ', '2016-09-25 14:12:13', '2016-09-25 14:12:13'),
(441, 'Rishi Mahendru', 'rishimahendru@rediff.com', '9350777786', NULL, NULL, 'Partner', 'We have a salon in pitampura delhi.  Want to know more about your business cooperation', '2016-09-25 21:30:10', '2016-09-25 21:30:10'),
(442, 'vijay singhal', 'vijaysinghal.2006@gmail.com', '9310584507', NULL, NULL, 'Partner', 'i am start a new business in jaipur.', '2016-09-25 22:02:08', '2016-09-25 22:02:08'),
(443, 'Amrita', 'amrita_a_g@yahoo.co.in', '9901399000', NULL, NULL, 'Partner', 'I am looking for franchise ', '2016-09-26 00:25:40', '2016-09-26 00:25:40'),
(444, 'Priyanka Pal', 'munia.priya@gmail.com', '9530746742', NULL, NULL, 'Customer', 'Hair cutting ', '2016-09-26 11:50:54', '2016-09-26 11:50:54'),
(445, 'Lalitha Radhakrishnan', 'studio11dwarka@gmail.com', '9711119309', NULL, NULL, 'Partner', 'I have a studio under the francise name of Studio11. Are you interested in taking a partnership ?', '2016-09-26 17:39:58', '2016-09-26 17:39:58'),
(446, 'swati', 'swatisingh021@gmail.com', '8527807183', NULL, NULL, 'Customer', 'enquire about services', '2016-09-27 15:59:48', '2016-09-27 15:59:48'),
(447, 'Mahalakshmi', 'mahalakshmiarjunan@yahoo.co.in', '9003864193', NULL, NULL, 'Partner', 'Would like to have a talk with Sadiya in regard of launching Glam Studios in TN', '2016-09-28 08:15:13', '2016-09-28 08:15:13'),
(448, 'Megha', 'meghadogra19@gmail.com', '9810118202', NULL, NULL, 'Customer', 'Had a word with Miss Tanya one of your executive regarding smoothing. Need to change my schedule. Please inform Miss Tanya to contact me.', '2016-09-28 10:10:21', '2016-09-28 10:10:21'),
(449, 'Ankita Gupta', 'ankita.gupta10@yahoo.co.in', '8447240418', NULL, NULL, 'Careers', 'I am a Software Developer and would love to work with you. If there is any opening, please feel to contact me on 8447240418. Waiting to hear back from you.', '2016-09-28 10:17:06', '2016-09-28 10:17:06'),
(450, 'Viney ', 'vin.bana@gmail.com', '9540963118', NULL, NULL, 'Partner', 'Running chain of affordable salons.Believe in 1 n 1 is 11 or may be more', '2016-09-28 14:24:53', '2016-09-28 14:24:53'),
(451, 'RashiGupta', 'gupta.rashi72@gmail.com', '9971052794', NULL, NULL, 'Customer', 'Hair Smoothing and rebonding booking need to be done', '2016-09-29 15:53:01', '2016-09-29 15:53:01'),
(452, 'RashiGupta', 'gupta.rashi72@gmail.com', '9971052794', NULL, NULL, 'Customer', 'smoothening rebonding required', '2016-09-29 15:57:12', '2016-09-29 15:57:12'),
(453, 'aditya Pandey', 'aditya.pandey@paytm.com', '9999689432', NULL, NULL, 'Partner', 'Dear Team\r\n\r\nGreetings from Paytm.com\r\n\r\nWith the advent of technology and changing consumer behaviour the payment wallet industry is encountering an exceptional growth and acceptance amongst masses. \r\n\r\nThis has not only eased the process of money transactions but has on the other side also reduced the payment leakages in the pipeline as well as in its reconciliation, as the payment directly hits the merchant’s account and the consumer enjoys the mental satisfaction of making the accurate payment to the right company.\r\n\r\nHerein, there would only be a fixed transaction commission and no AMC or installation/onboarding fee.\r\n\r\nAs Paytm, we too will promote GlamStudio’s in different ways for enhancing the usage of Paytm @ it Salons. \r\n\r\nMay I request you to please suggest the way we can take the discussion forward in regards to enabling GlamStudio’s clients using Paytm as a preferred mode of payments.\r\n\r\nThanks & Regards\r\nAditya Pandey\r\nAGM – Sales & Alliances\r\n+91-9999689432\r\n', '2016-09-29 16:30:30', '2016-09-29 16:30:30'),
(454, 'priya chauhan', 'priyachauhan0202@gmail.com', '8586034445', NULL, NULL, 'Customer', 'how to create own package', '2016-09-29 20:03:52', '2016-09-29 20:03:52'),
(455, 'Upasna', 'upasnaarora21@gmail.com', '9716847270', NULL, NULL, 'Customer', 'I want to know the charges of hair smoothening & also your karvachauth packages', '2016-09-30 09:26:44', '2016-09-30 09:26:44'),
(456, 'Rahul', 'rahul.chakraverti@hindustantimes.com', '9717477770', NULL, NULL, 'Partner', 'Wish to explore possibilities of associating as an advertising/promotion medium for Glam Studios.', '2016-09-30 10:24:51', '2016-09-30 10:24:51'),
(457, 'Geetanjalu', 'dhamija.geetanjali@gmail.com', '9015862828', NULL, NULL, 'Customer', 'I want Hair smoothening n hair cut within 3500rs. Will u do this....????', '2016-09-30 11:30:07', '2016-09-30 11:30:07'),
(458, 'Geetanjalu', 'dhamija.geetanjali@gmail.com', '9015862828', NULL, NULL, 'Customer', 'I want Hair smoothening n hair cut within 3500rs. Will u do this....????', '2016-09-30 11:30:10', '2016-09-30 11:30:10'),
(459, 'Geetanjalu', 'dhamija.geetanjali@gmail.com', '9015862828', NULL, NULL, 'Customer', 'I want Hair smoothening n hair cut within 3500rs. Will u do this....????', '2016-09-30 11:30:12', '2016-09-30 11:30:12'),
(460, 'Preeti', 'preetisehgal78@gmail.com', '8860348356', NULL, NULL, 'Customer', '', '2016-10-01 16:23:10', '2016-10-01 16:23:10'),
(461, 'Neha Rana', 'rana.neha2013@gmail.com', '9818258112', NULL, NULL, 'Customer', 'I need hair color global and strips', '2016-10-01 21:23:49', '2016-10-01 21:23:49'),
(462, 'Mehak Chawla ', 'mchawla0804@gmail.com', '9810877883', NULL, NULL, 'Careers', 'I am graphic designer and I am looking for job in graphics. I have 1 Year experience in Designing. ', '2016-10-04 17:39:25', '2016-10-04 17:39:25'),
(463, 'deepika', 'drjoshi.2009@yahoo.com', '9910873250', NULL, NULL, 'Careers', '', '2016-10-05 13:59:51', '2016-10-05 13:59:51'),
(464, 'Lubna Hussain', 'lubna.husain@gmail.com', '9910250491', NULL, NULL, 'Customer', 'Looking for hair straightening or smoothing offer..', '2016-10-05 17:05:34', '2016-10-05 17:05:34'),
(465, 'vishal', 'vishalbhadana6653@gmail.com', '9971710253', NULL, NULL, 'Customer', '', '2016-10-05 18:54:04', '2016-10-05 18:54:04'),
(466, 'Archit Jain', 'jain.archit09@gmail.com', '8800768885', NULL, NULL, 'Customer', '', '2016-10-06 00:19:52', '2016-10-06 00:19:52'),
(467, 'Richa', 'shrivastavaricha125@gmail.com', '7835819741', NULL, NULL, 'Customer', 'Want to know about packages', '2016-10-06 09:24:18', '2016-10-06 09:24:18'),
(468, 'sravanthi', 'contact@perfhack.com', '9704217268', NULL, NULL, 'Customer', 'Hi,\r\n\r\nYour website "www.glamstudios.in" is slow. On average many pages are taking around 3.7 seconds to load.\r\n\r\nFor a great user experience average load time should be around 0.7 to 1.1 seconds. We at "Perfhack" have huge experience in solving performance issues, especially websites which are based on Drupal,WordPress and Joomla.\r\n\r\nWe will decrease your index page load time for free.  After that if you are interested, you can use our paid services for other pages.\r\n\r\nWe just want to let you know that, we don\'t need your code or database backup to use our services. We work remotely on your system. Please visit us at "http://www.perfhack.com".\r\n\r\nPlease let us know if you need us. Have a great day.\r\n\r\nthanks\r\nPerfhack Team\r\nEmail : contact@perfhack.com\r\nwww.perfhack.com', '2016-10-07 12:41:37', '2016-10-07 12:41:37'),
(469, 'Rashmi', 'rashu24sep@gmail.com', '8955133858', NULL, NULL, 'Customer', 'Rebonding', '2016-10-07 13:51:44', '2016-10-07 13:51:44'),
(470, 'Rashmi', 'rashu24sep@gmail.com', '8955133858', NULL, NULL, 'Customer', 'Rebonding', '2016-10-07 13:52:03', '2016-10-07 13:52:03'),
(471, 'RENUKA ', 'renukachaudhary23@gmail.com', '7827955563', NULL, NULL, 'Customer', 'Party purpose makeup and facial waxing manicure and pedicure ', '2016-10-07 17:53:05', '2016-10-07 17:53:05'),
(472, 'Meghna Wadhwani', 'meghna4you@gmail.com', '9893077111', NULL, NULL, 'Partner', 'Dear Ms.Sadiya,\r\n\r\nIt gives me pleasure to introduce myself, Meghna Wadhwani, Chairperson of the FICCI LADIES ORGANISATION at Indore.\r\n\r\nI feel privileged  to extend to you an INVITATION to grace our platform as our guest speaker.\r\nWe will be highly honoured to host you.\r\n\r\nFLO Indore Chapter has a member base of approximately a 100 women ranging from Entrepreneurs, Working Professionals to Women looking to Start Up.\r\n\r\nIn an effort to inspire and motivate these members we continuously try to identify women leaders and empowered entrepreneurs such as yourself to share your journey with us. \r\n\r\nWe have been lucky to have had dignified women personalities such as Priya Dutt, Neerja Birla, Soha Ali Khan, Yasmin Karachiwala, Anju Modi and Priyanka Modi in our past events as motivational speakers and we hope that you will accept our earnest Invitation.\r\n\r\nWe propose to Invite you for a \'START UP\' concept event on the Tuesday, 8th November at Indore.\r\n\r\nIf you revert with your consent and confirmation then we can work out travel logistics for you.\r\n\r\nEagerly looking forward to gracing you.\r\n\r\n\r\nWarm Regards \r\n\r\nMeghna Wadhwani \r\nChairperson \r\nFLO Indore Chapter \r\nMob: 9893077111\r\nEmail: meghna4you@gmail.com', '2016-10-07 18:07:00', '2016-10-07 18:07:00'),
(473, 'Sonam sagarika', 'sonamsagarika17@gmail.com', '9718338990', NULL, NULL, 'Customer', 'For smoothening', '2016-10-07 21:51:09', '2016-10-07 21:51:09'),
(474, 'Kajal bajpai ', 'kajalvajpai@gmail.com', '9953225041', NULL, NULL, 'Careers', 'I am a student of Delhi university, i saw posters around in my college for internships. I would love to be a part.', '2016-10-07 22:57:34', '2016-10-07 22:57:34'),
(475, 'Smriti Bhan', 'smriti_bhan2000@yahoo.com', '8800534224', NULL, NULL, 'Customer', 'Wanted to do hair smoothening', '2016-10-08 00:14:55', '2016-10-08 00:14:55'),
(476, 'Harshita batra', 'harshitabatra235@gmail.com', '7838840806', NULL, NULL, 'Careers', '', '2016-10-09 07:41:25', '2016-10-09 07:41:25'),
(477, 'Harshita batra', 'harshitabatra235@gmail.com', '7838840806', NULL, NULL, 'Careers', '', '2016-10-09 07:41:25', '2016-10-09 07:41:25'),
(478, 'Harshita batra', 'harshitabatra235@gmail.com', '7838840806', NULL, NULL, 'Careers', '', '2016-10-09 07:41:26', '2016-10-09 07:41:26'),
(479, 'Harshita batra', 'harshitabatra235@gmail.com', '7838840806', NULL, NULL, 'Careers', '', '2016-10-09 07:41:26', '2016-10-09 07:41:26'),
(480, 'Harshita batra', 'harshitabatra235@gmail.com', '7838840806', NULL, NULL, 'Careers', '', '2016-10-09 07:41:26', '2016-10-09 07:41:26'),
(481, 'Harshita batra', 'harshitabatra235@gmail.com', '7838840806', NULL, NULL, 'Careers', '', '2016-10-09 07:41:26', '2016-10-09 07:41:26'),
(482, 'Reshma Reshma', 'riazpasha163@gmail.com', '7702335548', NULL, NULL, 'Careers', 'Hi sir, \r\nThis is Reshma sultana, \r\nWorking as a hair & beauty \r\nI had worked in Naturals beauty salon, \r\nfor 3 years experience in naturals, \r\nAnd \r\nNow I\'m working in Jawed habib hair & beauty salon since 1 year ', '2016-10-09 20:36:34', '2016-10-09 20:36:34'),
(483, 'Ramanjeet ', 'rmnchahal@gmail.com', '9540206091', NULL, NULL, 'Customer', 'I have very rough hairs n hair fall n I want to do spa ', '2016-10-10 21:35:05', '2016-10-10 21:35:05'),
(484, 'amrit  raj', 'koshiinstitute@gmail.com', '9654249722', NULL, NULL, 'Partner', 'I am looking for a running salon in Delhi Ncr. I WANT TO BUY A RUNNING SALON. ', '2016-10-11 12:26:29', '2016-10-11 12:26:29'),
(485, 'pallavi parashar', 'pallaviparashar28@gmail.com', '9582135864', NULL, NULL, 'Customer', 'Price of hair smoothening', '2016-10-11 20:11:13', '2016-10-11 20:11:13'),
(486, 'Swati', 'swati_jisoria2005@yahoo.com', '8700459754', NULL, NULL, 'Customer', 'Hi would like to know the cost if I go for services including full leg wax, full hand wax with underarms, bleach facial or if any karwa chauth special offer is there\r\nHope to hear some budgeted deals', '2016-10-12 21:43:55', '2016-10-12 21:43:55'),
(487, 'ritika', 'charmingal.noni@gmail.com', '9999614905', NULL, NULL, 'Customer', 'Want a hair rebonding', '2016-10-13 00:49:35', '2016-10-13 00:49:35'),
(488, 'Pooja Rana', 'ranapooja463@gmail.com', '8527948635', NULL, NULL, 'Customer', 'Nic', '2016-10-13 20:54:23', '2016-10-13 20:54:23'),
(489, 'Akhil Gupta', 'akhilgupta216@gmail.com', '8419971504', NULL, NULL, 'Careers', 'Need to know the procedure to apply to your startup', '2016-10-14 13:44:58', '2016-10-14 13:44:58'),
(490, 'Ankit', 'ankit.mittal@mddir.com', '9854784512', NULL, NULL, 'Partner', 'Hello,\r\n\r\n     We are allowing growing startup to share their story on our blog. I would like to invite you to share a free guest blog post.\r\n\r\nhttp://www.mddir.com/hub/submit-guest-post/\r\n\r\nPlease read the guideline before sharing the content.\r\n\r\nThank you\r\n', '2016-10-14 15:29:37', '2016-10-14 15:29:37'),
(491, 'sakshi', 'sakshigr676@gmail.com', '9560572718', NULL, NULL, 'Customer', 'I will be facial,and bleach and waxing', '2016-10-14 22:56:50', '2016-10-14 22:56:50'),
(492, 'Preeti', 'preetianitha19@gmail.com', '8527482070', NULL, NULL, 'Customer', 'Home service is available ', '2016-10-15 00:44:10', '2016-10-15 00:44:10'),
(493, 'huma hashmi', 'hashmihuma@gmail.com', '7042158190', NULL, NULL, 'Customer', 'want to know the prices of bridal makeup and party makeup. ', '2016-10-15 02:47:32', '2016-10-15 02:47:32'),
(494, 'Priya', 'srivastava.priyadarshani@gmail.com', '8130082732', NULL, NULL, 'Customer', 'For hair straightning', '2016-10-15 09:40:52', '2016-10-15 09:40:52'),
(495, 'Priya', 'srivastava.priyadarshani@gmail.com', '8130082732', NULL, NULL, 'Customer', 'For hair straightning', '2016-10-15 09:40:53', '2016-10-15 09:40:53'),
(496, 'archana', 'archu.naman@gmail.com', '9871836037', NULL, NULL, 'Customer', 'charges for facial and bleach', '2016-10-15 13:16:36', '2016-10-15 13:16:36'),
(497, 'Ambreen ', 'sweetamby2007@gmail.com', '8860989080', NULL, NULL, 'Customer', 'Bridal services ', '2016-10-15 18:15:10', '2016-10-15 18:15:10'),
(498, 'Lubna Hussain', 'lubna.husain@gmail.com', '9910250491', NULL, NULL, 'Customer', 'Hair straightening', '2016-10-15 21:26:51', '2016-10-15 21:26:51'),
(499, 'jini johnson', 'jini.johnson27@gmail.com', '9821765255', NULL, NULL, 'Customer', 'Bridal makeup', '2016-10-15 23:14:59', '2016-10-15 23:14:59'),
(500, 'Sunita ', 'sunitashsrmas1030@gmail.com', '7533055403', NULL, NULL, 'Customer', '', '2016-10-16 09:33:25', '2016-10-16 09:33:25'),
(501, 'Sunita ', 'sunitashsrmas1030@gmail.com', '7533055403', NULL, NULL, 'Customer', '', '2016-10-16 09:34:22', '2016-10-16 09:34:22'),
(502, 'Manjeet Kaur', 'manjeetpawa@gmail.com', '9999531273', NULL, NULL, 'Customer', 'query of hair smoothning', '2016-10-16 11:39:11', '2016-10-16 11:39:11'),
(503, 'Aarti negi', 'negiarti21@gmail.com', '9410107422', NULL, NULL, 'Customer', 'I have my wedding in Nov at Dehradun if you offer services at Doon too then I will be glad to be yr customer.contact asap if u do', '2016-10-16 20:15:31', '2016-10-16 20:15:31'),
(504, 'Shubhangi Shah', 'shubhagi309.sr@gmail.com', '9953416143', NULL, NULL, 'Customer', 'Can i make changes in 999 plan??\r\nLike if i dont want facial i can put legs waxing and in place of manicure i would have pedicure. Kindly revert.', '2016-10-17 07:01:39', '2016-10-17 07:01:39'),
(505, 'SHIVANI', 'shaluthakur.singh@gmail.com', '9582874026', NULL, NULL, 'Customer', 'please inform cost for smoothning n rebonding', '2016-10-17 12:50:00', '2016-10-17 12:50:00'),
(506, 'Test', 'feeroz.a.khan@gmail.com', '9611014400', NULL, NULL, 'Partner', 'Test message', '2016-12-15 18:03:20', '2016-12-15 18:03:20'),
(507, 'Test', 'feeroz.a.khan@gmail.com', '9611014400', NULL, NULL, 'Partner', 'Test message', '2016-12-15 18:03:22', '2016-12-15 18:03:22'),
(508, 'Test', 'feeroz.a.khan@gmail.com', '9611014400', NULL, NULL, 'Partner', 'Test', '2016-12-16 06:56:56', '2016-12-16 06:56:56'),
(509, 'Test', 'feeroz.a.khan@gmail.com', '961101440', NULL, NULL, 'Partner', 'Test', '2016-12-16 06:57:42', '2016-12-16 06:57:42'),
(510, 'PAYAL', 'payal5115@gmail.com', '8130358984', NULL, NULL, 'Customer', 'Need facial and waxing at home', '2016-12-16 10:05:12', '2016-12-16 10:05:12'),
(511, 'PAYAL', 'payal5115@gmail.com', '8130358984', NULL, NULL, 'Customer', 'Need facial and waxing at home', '2016-12-16 10:05:14', '2016-12-16 10:05:14');
INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `city`, `area`, `purpose`, `contact_text`, `created_at`, `updated_at`) VALUES
(512, 'Sankalp ', 'sankalp.sharma.vns@gmail.com', '9650956465', NULL, NULL, 'Partner', 'I own a unisex salon in varanasi , and interested in your franchisee module.\r\npls make a call for details talks.\r\n', '2016-12-18 10:54:08', '2016-12-18 10:54:08'),
(513, 'Priyanka singh', 'priyankasinghnagar@gmail.com', '9899758654', NULL, NULL, 'Customer', 'The glam studio situated in Ansal Plaza, Greater Noida misled with the information that a discount of 10% will be given if services exceed the amount of ₹2000. But they didn\'t gave me the discount and neither did they provided ne the bill . Highly unprofessional !!', '2016-12-19 13:24:45', '2016-12-19 13:24:45'),
(514, 'nidhi saini', 'nidhi.saini31@gmail.com', '8588812527', NULL, NULL, 'Careers', 'Looking for job ', '2016-12-20 16:09:19', '2016-12-20 16:09:19'),
(515, 'nidhi saini', 'nidhi.saini31@gmail.com', '8588812527', NULL, NULL, 'Careers', 'Looking for job ', '2016-12-20 16:09:22', '2016-12-20 16:09:22'),
(516, 'Essence Bizz', 'essencebizz@gmail.com', '8882324004', NULL, NULL, 'Partner', 'To Glam Studio,\r\n\r\nEssence Bizz is dealing in the following Products :-\r\n\r\nRound Cotton Pad\r\nCotton Ball\r\nFace Tissue paper\r\nEar buds.\r\nChemical for Brushes\r\n\r\nDealing and giving supplies to all the leading luxury branded stores like Sephora,Bobby Brown,Mac, Estee Lauder, Clinique etc.\r\n\r\nEssence Bizz is providing the best quality of products.\r\n\r\nPlease give the time to show samples and looking forward for positive response and business ahead with Glam Studio.\r\n\r\nThanking You.\r\n\r\nRegards,\r\nEssence Bizz\r\n+918882324004', '2016-12-21 07:36:18', '2016-12-21 07:36:18'),
(517, 'Xavier Rozario G', 'xavier.g@adatha.com', '8489501110', NULL, NULL, 'Partner', 'Hi Team,\r\n\r\nNice to E-meet you.I am Xavier and I currently handle the partnerships and Business Development on our end over here at ADATHA ( www.adatha.com ) - Award winning performance mobile Ad marketing Agency.\r\n\r\nI discovered your app and I think it has a great potential to generate more revenue with the help of our professional marketing team.\r\n\r\nWe help mobile apps/Brands to acquire new users.We deliver the installs for mobile application.We will help you to get more loyal users.\r\n\r\nWe have worldwide traffic and we works on CPI and CPR basis.\r\n\r\nWe worked on several apps and we have a very good track record of promoting the apps.\r\n\r\nSome of our clients are\r\n\r\n    Amazon, We chat, LINE, Myntra, Flipkart, Snapdeal, PayTM.,\r\n\r\nYou can pay us on download basis. We generate downloads for free apps only.\r\n\r\nIn addition we have various other services and helpful tips to share with you as a client\r\n\r\nIf you are looking for ways to acquire new users and get more downloads, please contact me.\r\n\r\nThank you for your time and consideration.\r\n', '2016-12-22 05:01:06', '2016-12-22 05:01:06'),
(518, 'Xavier Rozario G', 'xavier.g@adatha.com', '8489501110', NULL, NULL, 'Partner', 'Hi Team,\r\n\r\nNice to E-meet you.I am Xavier and I currently handle the partnerships and Business Development on our end over here at ADATHA ( www.adatha.com ) - Award winning performance mobile Ad marketing Agency.\r\n\r\nI discovered your app and I think it has a great potential to generate more revenue with the help of our professional marketing team.\r\n\r\nWe help mobile apps/Brands to acquire new users.We deliver the installs for mobile application.We will help you to get more loyal users.\r\n\r\nWe have worldwide traffic and we works on CPI and CPR basis.\r\n\r\nWe worked on several apps and we have a very good track record of promoting the apps.\r\n\r\nSome of our clients are\r\n\r\n    Amazon, We chat, LINE, Myntra, Flipkart, Snapdeal, PayTM.,\r\n\r\nYou can pay us on download basis. We generate downloads for free apps only.\r\n\r\nIn addition we have various other services and helpful tips to share with you as a client\r\n\r\nIf you are looking for ways to acquire new users and get more downloads, please contact me.\r\n\r\nThank you for your time and consideration.\r\n', '2016-12-22 05:01:08', '2016-12-22 05:01:08'),
(519, 'Vishal Saini', 'vishal@bluelupin.com', '9889436744', NULL, NULL, 'Partner', 'HI, \r\nWe develop Mobile Application. \r\nSir, I would like to meet you and give you a small DEMO, as we see in survey that your business doesn’t have Mobile Application. \r\n“Mobile App can fulfill your requirement, it will encourage lots of potential, through this customer can find you, also we can get your customer engaged.”\r\n\r\nWe offer best class service and product to our client over the globe.\r\n   We have done work with many big brands like - Patanjali Group, Vodafone, Reliance, Gayathri Pariwaar, Trimarine, Crescerance and many more.\r\n\r\nNow Sir if you are interested for mobile application then we can talk about and discuses more.\r\n', '2016-12-22 11:23:54', '2016-12-22 11:23:54'),
(520, 'Neha', 'nehaaggarwal135@gmail.com', '9818060516', NULL, NULL, 'Customer', 'Need the assistance regarding pre bridal', '2016-12-24 06:28:16', '2016-12-24 06:28:16'),
(521, 'Sarita', 'rajbirsinghbisht@gmail.com', '9711291909', NULL, NULL, 'Customer', 'Please let me know if full body waxing covers bikini waxing as well and how much time it needs for basic full body waxing?\r\n\r\nThanks,\r\nSarita', '2016-12-24 06:51:15', '2016-12-24 06:51:15'),
(522, 'Poonam verma', 'poo_soni000@yahoo.com', '9873077862', NULL, NULL, 'Customer', 'Want party makeup.\r\nMonthly package.\r\nPlz tell me charges.', '2016-12-24 09:00:05', '2016-12-24 09:00:05'),
(523, 'Lubna Hussain', 'lubna.husain@gmail.com', '9910250491', NULL, NULL, 'Customer', 'I am looking for straightening therapy.. elbow length..', '2016-12-24 14:30:36', '2016-12-24 14:30:36'),
(524, 'Kulwant', 'kulwantthakur@yahoo.com', '9899276133', NULL, NULL, 'Partner', 'Parlour', '2016-12-24 15:32:09', '2016-12-24 15:32:09'),
(525, 'Geetanjli Rajput ', 'geetupagal98@gmail.com', '9582102763', NULL, NULL, 'Customer', 'Reboding ', '2016-12-25 08:08:07', '2016-12-25 08:08:07'),
(526, 'Romesha', 'kratigangwar19@gmail.com', '9454019368', NULL, NULL, 'Customer', 'Smoothing \r\n', '2016-12-25 20:10:13', '2016-12-25 20:10:13'),
(527, 'Dr. Monika', 'roushan.rous.k27@gmail.c', '9958682712', NULL, NULL, 'Customer', 'I want details of ur all pakages', '2016-12-26 01:33:15', '2016-12-26 01:33:15'),
(528, 'Dr. Monika', 'roushan.rous.k27@gmail.c', '9958682712', NULL, NULL, 'Customer', 'I want details of ur all pakages', '2016-12-26 01:33:16', '2016-12-26 01:33:16'),
(529, 'Alisha sameja ', 'Admin@Mumkido.com', '8764455786', NULL, NULL, 'Partner', 'I want take your franchise  in jaipur \r\nPls contact soon ', '2016-12-26 16:09:40', '2016-12-26 16:09:40'),
(530, 'Raushan singh', 'singhraushan2@gmail.com', '8860003389', NULL, NULL, 'Partner', 'Hi my name is Raushan, I am taking care of the corporate accounts for 03+.\r\nI would like to explore the partnering opportunity with glam studios.\r\nLook forward to hearing from you.\r\n\r\nWarm regards,\r\nRaushan\r\n+#8860003389', '2016-12-27 05:39:17', '2016-12-27 05:39:17'),
(531, 'Reshma Saha', 'reshmasaha845@gmail.com', '8527788581', NULL, NULL, 'Customer', 'Want to know the price of Smoothening, Rebonding, Keratin & Shine Bond ', '2016-12-27 08:29:10', '2016-12-27 08:29:10'),
(532, 'khushbu goel', 'khushiaggarwal153@gmail.com', '9456932655', NULL, NULL, 'Customer', 'Helo\r\nmam \r\n\r\nplz tell me ur full makeup price weding season\r\n', '2016-12-27 09:16:10', '2016-12-27 09:16:10'),
(533, 'Essence Bizz', 'essencebizz@gmail.com', '8882324004', NULL, NULL, 'Partner', 'To Glam Studio,\r\n\r\nEssence Bizz is dealing in the following Products :-\r\n\r\nRound Cotton Pad\r\nCotton Ball\r\nFace Tissue paper\r\nEar buds.\r\nChemical for Brushes\r\n\r\nDealing and giving supplies to all the leading luxury branded stores like Sephora,Bobby Brown,Mac, Estee Lauder, Clinique etc.\r\n\r\nEssence Bizz is providing the best quality of products.\r\n\r\nPlease give the time to show samples and looking forward for positive response and business ahead with Glam Studio.\r\n\r\nThanking You.\r\n\r\nRegards,\r\nEssence Bizz\r\n+918882324004', '2016-12-27 09:41:13', '2016-12-27 09:41:13'),
(534, 'Arshi', 'arship450@gmail.com', '8368900106', NULL, NULL, 'Customer', 'Manicure nd pedicure', '2016-12-27 11:44:47', '2016-12-27 11:44:47'),
(535, 'Nadia', 'twinkleahmad@gmail.com', '8376981788', NULL, NULL, 'Customer', 'Wats d pricw of rebonding', '2016-12-30 04:42:00', '2016-12-30 04:42:00'),
(536, 'Lavika', 'lavikasachinpanwar@gmail.com', '9811233210', NULL, NULL, 'Customer', 'Want to about hair colour service package and hair style..', '2016-12-30 18:13:02', '2016-12-30 18:13:02'),
(537, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:25', '2016-12-31 06:39:25'),
(538, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:40', '2016-12-31 06:39:40'),
(539, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:44', '2016-12-31 06:39:44'),
(540, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:44', '2016-12-31 06:39:44'),
(541, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:44', '2016-12-31 06:39:44'),
(542, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:45', '2016-12-31 06:39:45'),
(543, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:45', '2016-12-31 06:39:45'),
(544, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:45', '2016-12-31 06:39:45'),
(545, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:45', '2016-12-31 06:39:45'),
(546, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:46', '2016-12-31 06:39:46'),
(547, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:46', '2016-12-31 06:39:46'),
(548, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:46', '2016-12-31 06:39:46'),
(549, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:46', '2016-12-31 06:39:46'),
(550, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:47', '2016-12-31 06:39:47'),
(551, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:47', '2016-12-31 06:39:47'),
(552, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:47', '2016-12-31 06:39:47'),
(553, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:47', '2016-12-31 06:39:47'),
(554, 'Hari', 'harivishat.@gmail.com', '8331891069', NULL, NULL, 'Customer', 'Need to enquire', '2016-12-31 06:39:47', '2016-12-31 06:39:47'),
(555, 'fowzia NOOR', 'fowzia21@hotmail.com', '7019265899', NULL, NULL, 'Careers', 'i would like to noe if u hav any vacancy for manager in bangalore branch st johns road?\r\nthanx', '2017-01-05 07:49:26', '2017-01-05 07:49:26'),
(556, 'Shikha Shah', 'nagesh.shah@rediffmail.com', '9452215033', NULL, NULL, 'Customer', 'Advance payment (Token Money) - regarding (as discussed)', '2017-01-05 08:22:39', '2017-01-05 08:22:39'),
(557, 'Shikha Shah', 'nagesh.shah@rediffmail.com', '9452215033', NULL, NULL, 'Customer', 'Advance payment (Token Money) - regarding (as discussed)', '2017-01-05 08:22:41', '2017-01-05 08:22:41'),
(558, 'praveen singh', 'priynka674@gmail.com', '9069332142', NULL, NULL, 'Customer', 'For bridal makeup I get in touch with you.want an an appointment for my marriage on 28 feb', '2017-01-05 14:38:50', '2017-01-05 14:38:50'),
(559, 'Shweta Madan', 'madan.shweta@gmail.com', '9212275880', NULL, NULL, 'Customer', 'This is a complaint against hour studio in Rohini Sector 7.The girls there are not experienced.I have got done my upper lips and a girl named Monika has burnt my skin.Is this type service you are going to provide to the customer.you should take necessary action against her.highly disgusting', '2017-01-05 18:05:15', '2017-01-05 18:05:15'),
(560, 'Rahul Sharma', 'rahul.bhrd@gmail.com', '8285480445', NULL, NULL, 'Careers', 'I Have good experience in python/django,\r\nand I have worked for Snapdeal,Pizzahut and done so many Developments and API Integration.\r\n', '2017-01-06 05:28:36', '2017-01-06 05:28:36'),
(561, 'Bhavya Dutt', 'bhavyadutt55@gmail.com', '9540792881', NULL, NULL, 'Customer', 'Hi, I would like to know about hair care and growth. Secondly, is it necessary to book the online appointment.', '2017-01-06 11:32:13', '2017-01-06 11:32:13'),
(562, 'Bhavya Dutt', 'bhavyadutt55@gmail.com', '9540792881', NULL, NULL, 'Customer', 'Hi, I would like to know about hair care and growth. Secondly, is it necessary to book the online appointment.', '2017-01-06 11:32:14', '2017-01-06 11:32:14'),
(563, 'Rahul ', 'minrahul.gupta@gmail.com', '9971166032', NULL, NULL, 'Customer', 'Want to service at vaishali unisex saloon', '2017-01-06 16:23:13', '2017-01-06 16:23:13'),
(564, 'Tanveer', 'br.estates@yahoo.in', '9873434431', NULL, NULL, 'Partner', 'Hi just cane accross glam studios all over delhi ncr\r\nIt would be great if we connect you to get the new outlets open for you at prime locations as we specialize in commercial leasing for all over delhi ncr', '2017-01-07 11:07:44', '2017-01-07 11:07:44'),
(565, 'Archi pathak', 'archipathak33@gmail.com', '9971037511', NULL, NULL, 'Customer', 'Need to know the packages ', '2017-01-08 07:42:06', '2017-01-08 07:42:06'),
(566, 'Gaurav Kapoor ', 'packersindiakapoors@yahoo.com', '9811017024', NULL, NULL, 'Customer', 'Head to toe', '2017-01-08 09:52:03', '2017-01-08 09:52:03'),
(567, 'Priyanka', 'pinkygusain999@gmail.com', '9582618879', NULL, NULL, 'Customer', 'I', '2017-01-08 16:27:28', '2017-01-08 16:27:28'),
(568, 'Ishanya dwivedi', 'pehu.dwivedi@gmail.com', '9958260457', NULL, NULL, 'Customer', 'Want to know tge price of rebonding uptu shoulder lengtg as its showing some offer on FB but not on your site', '2017-01-10 04:51:39', '2017-01-10 04:51:39'),
(569, 'Tarun', 'mba.tarunkalra@gmail.com', '9711152696', NULL, NULL, 'Partner', 'FYI', '2017-01-10 08:54:00', '2017-01-10 08:54:00'),
(570, 'Tarun', 'mba.tarunkalra@gmail.com', '9711152696', NULL, NULL, 'Partner', 'FYI', '2017-01-10 08:54:03', '2017-01-10 08:54:03'),
(571, 'Shipra', 'shipraachawla@gmail.com', '9582001501', NULL, NULL, 'Customer', 'hi, \r\n\r\nwhat\'s the charge for party makeup with hair do?', '2017-01-11 15:40:13', '2017-01-11 15:40:13'),
(572, 'Kritika Singhal', 'Kritika.singhal1987@gmail.com', '8860347612', NULL, NULL, 'Customer', 'I want to know about party makeup for 16 jan.\r\n', '2017-01-11 16:35:45', '2017-01-11 16:35:45'),
(573, 'Vamshi sai reddy', 'chandrapr.cs.14@nitj.ac.in', '9417697717', NULL, NULL, 'Careers', 'Hello ma\'am/sir\r\n    This is vamshi,placement coordinator from National Institute of Technology Jalandhar .I would like to know if there are any summer internship opportunities in your startup so that our students can be part of your start up\r\nRegards\r\nVamshi sai reddy', '2017-01-11 16:41:28', '2017-01-11 16:41:28'),
(574, 'Vamshi sai reddy', 'chandrapr.cs.14@nitj.ac.in', '9417697717', NULL, NULL, 'Careers', 'Hello ma\'am/sir\r\n    This is vamshi,placement coordinator from National Institute of Technology Jalandhar .I would like to know if there are any summer internship opportunities in your startup so that our students can be part of your start up\r\nRegards\r\nVamshi sai reddy', '2017-01-11 16:41:31', '2017-01-11 16:41:31'),
(575, 'Shruti', '20.chauhanshruti@gmail.com', '9038866729', NULL, NULL, 'Customer', 'I wanted to know if services like  (1) styling hair (into a desired bun) and (2) wedding party make up ,  are available at glam studios. And if yes, what will be the charges, how and when to make the payment. Also let me know when to make the appointment. The occasion is on 15th jan.', '2017-01-12 06:27:23', '2017-01-12 06:27:23'),
(576, 'MUKESH BANDOONI', 'mbandooni1980@gmail.com', '7840864353', NULL, NULL, 'Careers', 'Respected Sir/Madam,\r\n\r\nPlease find attached the detailed CV. I hope it will be as per your requirements.\r\nI will be highly obliged to you.\r\n\r\nWith regards,\r\nSincerely,\r\n\r\nMukesh Bandooni\r\n(M): 7840864353', '2017-01-14 09:32:53', '2017-01-14 09:32:53'),
(577, 'Swati Nair', 'n.swati2011@yahoo.com', '9971880093', NULL, NULL, 'Customer', 'I need hair treatment, skin care, pedicure & make up if required. Please let me know if I can visit you next Saturday. ', '2017-01-15 03:24:59', '2017-01-15 03:24:59'),
(578, 'soni chauhan', 'mayurichauhan677@gmail.com', '8750711526', NULL, NULL, 'Customer', 'Rebonding hair and glowing fairness skin facial\r\n\r\n\r\n', '2017-01-15 17:46:52', '2017-01-15 17:46:52'),
(579, 'soni chauhan', 'mayurichauhan677@gmail.com', '8750711526', NULL, NULL, 'Customer', 'Rebonding hair and glowing fairness skin facial\r\n\r\n\r\n', '2017-01-15 17:46:56', '2017-01-15 17:46:56'),
(580, 'soni chauhan', 'mayurichauhan677@gmail.com', '8750711526', NULL, NULL, 'Customer', 'Rebonding hair and glowing fairness skin facial\r\n\r\n\r\n', '2017-01-15 17:46:56', '2017-01-15 17:46:56'),
(581, 'Shayan kundu', 'wanted.kgp@gmail.com', '7501511291', NULL, NULL, 'Customer', 'I need a help from u. ', '2017-01-16 07:08:30', '2017-01-16 07:08:30'),
(582, 'Shayan Kundu', 'wanted.kgp@gmail.com', '7501511291', NULL, NULL, 'Customer', 'Actually I want a change my look,  Make Over. I don\'t know which hair cut suit on me nd I want a change my all style,  Which dress,  Body language,  Way Of Talking, nd Personality  suit on me,  So If u Help me in those things then, Told me.\r\nI change my every thing,  Did u understand wt I want.\r\nI am not explained you,  But if you understand Then told me is it possibility or not?', '2017-01-16 07:25:32', '2017-01-16 07:25:32'),
(583, 'Shayan Kundu', 'wanted.kgp@gmail.com', '7501511291', NULL, NULL, 'Customer', 'Actually I want a change my look,  Make Over. I don\'t know which hair cut suit on me nd I want a change my all style,  Which dress,  Body language,  Way Of Talking, nd Personality  suit on me,  So If u Help me in those things then, Told me.\r\nI change my every thing,  Did u understand wt I want.\r\nI am not explained you,  But if you understand Then told me is it possibility or not?', '2017-01-16 07:25:34', '2017-01-16 07:25:34'),
(584, 'paramita', 'parasmita@rediffmail.com', '8527284333', NULL, NULL, 'Customer', 'Want facial and hair spa at greater noida', '2017-01-16 13:31:17', '2017-01-16 13:31:17'),
(585, 'deepica bhardwaj', 'deepicabhardwaj@gmail.com', '9818777408', NULL, NULL, 'Customer', 'I want to do Hair Smoothening', '2017-01-16 17:02:27', '2017-01-16 17:02:27'),
(586, 'Neeraj jain', 'njain1975@hotmail.com', '9311175474', NULL, NULL, 'Partner', 'Want to discuss regarding business model ', '2017-01-17 03:56:59', '2017-01-17 03:56:59'),
(587, 'Neeraj jain', 'njain1975@hotmail.com', '9311175474', NULL, NULL, 'Partner', 'Want to discuss regarding business model ', '2017-01-17 03:57:01', '2017-01-17 03:57:01'),
(588, 'Xavier G', 'xavier.g@adatha.com', '8489501110', NULL, NULL, 'Partner', 'Hi Team,\r\n\r\nNice to E-meet you.I am Xavier and I currently handle the partnerships and Business Development on our end over here at ADATHA ( www.adatha.com ) - Award winning performance mobile Ad marketing Agency.\r\n\r\nI discovered your app and I think it has a great potential to generate more revenue with the help of our professional marketing team.\r\n\r\nWe help mobile apps/Brands to acquire new users.We deliver the installs for mobile application.We will help you to get more loyal users.\r\n\r\nWe have worldwide traffic and we works on CPI and CPR basis.\r\n\r\nWe worked on several apps and we have a very good track record of promoting the apps.\r\n\r\nSome of our clients are\r\n\r\n    Amazon, We chat, LINE, Myntra, Flipkart, Snapdeal, PayTM.,\r\n\r\nYou can pay us on download basis. We generate downloads for free apps only.\r\n\r\nIn addition we have various other services and helpful tips to share with you as a client\r\n\r\nIf you are looking for ways to acquire new users and get more downloads, please contact me.\r\n\r\nThank you for your time and consideration.', '2017-01-19 10:00:39', '2017-01-19 10:00:39'),
(589, 'Shakti Ranbir Singh', 'success.shakti@gmail.com', '+918586903906', NULL, NULL, 'Careers', 'Hello Ma\'am/Sir,\r\nGreetings!\r\nI have 4 year, 5 star Hotels and Airports Spas & Salons experience and total experience of 11 years.\r\nI am very much interested to work with your organization. Please let me know if there any managerial post is available.\r\n\r\nThanks & Regards\r\nShakti Ranbir Singh', '2017-01-20 10:04:21', '2017-01-20 10:04:21'),
(590, 'Tanvi juneja', 'tanvijuneja29@gmail.com', '9599914705', NULL, NULL, 'Customer', 'Charges for smoothning and highlights', '2017-01-20 16:50:25', '2017-01-20 16:50:25'),
(591, 'Ritika', 'ritikasarkar0@gmail.com', '8757374370', NULL, NULL, 'Customer', 'Please let me know about rica wax packege full arm and full legs', '2017-01-22 06:12:25', '2017-01-22 06:12:25'),
(592, 'Vilasini', 'villu.strings9@yahoo.com', '8897728138', NULL, NULL, 'Customer', 'Bridal make up details', '2017-01-23 01:31:11', '2017-01-23 01:31:11'),
(593, 'Lata', 'Latagurani@gmail.com', '9990075875', NULL, NULL, 'Customer', 'Hair smoothing or straightning', '2017-01-23 05:15:14', '2017-01-23 05:15:14'),
(594, 'Khushbu dua', 'khushbudua_2006@yahoo.co.in', '9711190886', NULL, NULL, 'Partner', 'Pls call urgt', '2017-01-24 06:53:36', '2017-01-24 06:53:36'),
(595, 'Khushbu dua', 'khushbudua_2006@yahoo.co.in', '9711190886', NULL, NULL, 'Partner', 'Pls call urgt', '2017-01-24 06:53:40', '2017-01-24 06:53:40'),
(596, 'PRIYANK PANDE', 'priyankpande@rediffmail.com', '9971900975', NULL, NULL, 'Customer', 'I have walked into your studio at Shipra Mall on Sunday. It had a banner displayed which stated 30% discount on billing of Rs3000 & above. When I asked Manager to provide benefit of the same on my invoice of more than Rs3,000 he refused stating it is not applicable on Saturday/Sunday. This is not a fair practice, the banner did not stated that terms & condition applicable. \r\nI called customer care centre after reaching home but did not get a satisfactory response. Rather explanation given that you would be getting 20% discount as 30% offer is applicable on prior appointment. Thereafter, I was given an assurance that I will receive a call back on Monday but no one called. \r\nRequest you to look into this.', '2017-01-24 08:35:00', '2017-01-24 08:35:00'),
(597, 'Gagan soni deaf', 'gagansoni@hotmail.com', '9891735414', NULL, NULL, 'Customer', 'Soni publication pvt ltd -11096 doriwalan east park karol bagh new delhi-110005', '2017-01-24 15:00:31', '2017-01-24 15:00:31'),
(598, 'Navjot Kaur', '7128@gmail.com', '9711796793', NULL, NULL, 'Customer', 'Please send me the best packages for Skin and Hair Care. Loking forward for some 50% discounted deals. ', '2017-01-24 16:25:58', '2017-01-24 16:25:58'),
(599, 'Shefali saraf', 'shaifaligr8@gmail.com', '9650357472', NULL, NULL, 'Customer', 'I just wanted to know about hair colouring', '2017-01-24 17:10:52', '2017-01-24 17:10:52'),
(600, 'Mansi', 'manshinishtha.1997@gamil.com', '8860754846', NULL, NULL, 'Customer', 'I wanted to know about the prices of rebonding here... nd also if there are any offers going to happen in coming months ...', '2017-01-24 18:05:07', '2017-01-24 18:05:07'),
(601, 'Prathyaksh Hegde', 'Prathyaksh.hegde@businesswireindia.com', '09535759933', NULL, NULL, 'Partner', 'Good Evening,\r\n\r\nI am looking for an opportunity to discuss our service to distribute your press releases to various wire agencies, online portals and journalists panels through print media and electronic media.\r\nBusiness Wire India is a global platform for corporate news distribution both in India and Internationally. Business Wire being a part of Berkshire Hathaway (a Warren Buffet enterprise) has a global network. We play a vital role in strategizing communication goals. We help corporate in issuing their press release i.e product launch, announcement, earning calls, result filling etc. to relevant audience such as editors, journalists, analysts, stock exchanges etc in a targeted fashion. Business Wire India (BWI) reaches out to a network of more than 9000+journalists, and investors; and information seekers across New Agencies such as PTI, IANS, UNI; Print Media, Online Media and the Broadcast Media. \r\n\r\nCost Details ( One time release ):\r\n\r\n1.	      All India Distribution: Rs 11,000 + 15 % taxes ( One time release price) - Minimum 48+ online postings guaranteed\r\n2.	       All India Distribution with ANI Wires: INR 18,000 + 15 % taxes. ( ANI Wires  and Partners ) - Minimum 68+ online postings guaranteed\r\n\r\n•	The package includes- Option 1, Minimum 48+ online postings guaranteed \r\n \r\n·         Business Wire India Distribution to national and regional publications in English, Online media , trade media, social media;\r\n·         Distribution via our journalist network;\r\n·         Wire Posting on PTI and IANS Websites;\r\n·         Complimentary logo branding;\r\n·         SEO for every release;\r\n·         Theming and tagging of press releases;\r\n·         2 Newstrail reports for every press release.\r\n·         Brand visibility on our website;\r\n·         Google news tagging for every release.\r\n\r\nValue Added Services\r\nPicture Distribution on Business Wire India Network: Rs 1000 per picture\r\nPicture distribution Business Wire India + PTI Networks – Rs 1500 per image\r\nVideo distribution – Rs 2,000 per video \r\n       \r\nAdditional with Option 2 : \r\n•	68+ online postings\r\n•	Distribution to mainlines such as Business Standard, Yahoo, Sify, ET, TOI and many more (Coverage depend upon their editorial discretion)\r\n•	Presence on Google News\r\n•	1 Image distribution on ANI at no additional cost (However image shouldn’t be in a form of an advertisement)\r\n\r\n\r\nPlease feel free to contact me on the below listed coordinates for any further queries.\r\n\r\n\r\n\r\n\r\nThanks & Regards,\r\n\r\nPrathyaksh Hegde I Manager- Business Development I Business Wire India\r\nTelephone: +91 80 4261 2259I M No. - +91 9535759933|Fax: +91 (0) 80 4261 2257\r\n9th floor, Embassy Heights, 13, Magrath Road, Bangalore -560025\r\nwww.businesswireindia.com \r\n\r\n \r\n', '2017-01-25 09:00:24', '2017-01-25 09:00:24'),
(602, 'Gagan soni deaf', 'gagansoni@hotmail.com', '9891735414', NULL, NULL, 'Partner', '11096 doriwalan east. Park karol bagh new delhi-110005', '2017-01-26 13:31:09', '2017-01-26 13:31:09'),
(603, 'ruchika vij', 'ruchikavij55@gmail.com', '8505858552', NULL, NULL, 'Customer', 'looking for job in corporate office .as a 1- area business manager ,2-management trainer .', '2017-01-26 14:32:39', '2017-01-26 14:32:39'),
(604, 'Vishal Saini', 'vishal@oneinternet.in', '9716649594', NULL, NULL, 'Partner', 'Hello team,\r\n\r\nHope you are doing great!\r\n\r\nPlease allow me to introduce myself and One Internet to you. This is Vishal Saini, community manager at One Internet. One Internet is a co-working space located at Connaught Place, Delhi. Apart from Co-working, we are building a Global Community where we are connecting startups to Organizations, Mentors, Investors etc to help them grow.\r\n\r\nCurrently, 50+ startups have already started working from One Internet and 100 + are using virtual office services. In the last few weeks, we have opened One Internet in two more places: Gurgaon & Pitampura. Also, within a span of 1 year, we are expanding in 15 different locations.\r\n\r\nI write to you to initiate a collaborative offering for start-ups.\r\n\r\nOn our stack credit list are a plethora of organizations that provide valuable services to co- workers at discounted prices. To name a few :  Amazon Web Services is offering  USD 1000 credits, IBM Cloud - USD 12,000 credits, Vakil Search - 20% discount, Faasos - 20% Discount. So we are looking for similar kind of association with Glamstudios.\r\n\r\nLooking forward to knowing your thoughts on the same', '2017-01-26 17:25:14', '2017-01-26 17:25:14'),
(605, 'Vishal Saini', 'vishal@oneinternet.in', '9716649594', NULL, NULL, 'Partner', 'Hello team,\r\n\r\nHope you are doing great!\r\n\r\nPlease allow me to introduce myself and One Internet to you. This is Vishal Saini, community manager at One Internet. One Internet is a co-working space located at Connaught Place, Delhi. Apart from Co-working, we are building a Global Community where we are connecting startups to Organizations, Mentors, Investors etc to help them grow.\r\n\r\nCurrently, 50+ startups have already started working from One Internet and 100 + are using virtual office services. In the last few weeks, we have opened One Internet in two more places: Gurgaon & Pitampura. Also, within a span of 1 year, we are expanding in 15 different locations.\r\n\r\nI write to you to initiate a collaborative offering for start-ups.\r\n\r\nOn our stack credit list are a plethora of organizations that provide valuable services to co- workers at discounted prices. To name a few :  Amazon Web Services is offering  USD 1000 credits, IBM Cloud - USD 12,000 credits, Vakil Search - 20% discount, Faasos - 20% Discount. So we are looking for similar kind of association with Glamstudios.\r\n\r\nLooking forward to knowing your thoughts on the same', '2017-01-26 17:25:26', '2017-01-26 17:25:26'),
(606, 'Vishal Saini', 'vishal@oneinternet.in', '9716649594', NULL, NULL, 'Partner', 'Hello team,\r\n\r\nHope you are doing great!\r\n\r\nPlease allow me to introduce myself and One Internet to you. This is Vishal Saini, community manager at One Internet. One Internet is a co-working space located at Connaught Place, Delhi. Apart from Co-working, we are building a Global Community where we are connecting startups to Organizations, Mentors, Investors etc to help them grow.\r\n\r\nCurrently, 50+ startups have already started working from One Internet and 100 + are using virtual office services. In the last few weeks, we have opened One Internet in two more places: Gurgaon & Pitampura. Also, within a span of 1 year, we are expanding in 15 different locations.\r\n\r\nI write to you to initiate a collaborative offering for start-ups.\r\n\r\nOn our stack credit list are a plethora of organizations that provide valuable services to co- workers at discounted prices. To name a few :  Amazon Web Services is offering  USD 1000 credits, IBM Cloud - USD 12,000 credits, Vakil Search - 20% discount, Faasos - 20% Discount. So we are looking for similar kind of association with Glamstudios.\r\n\r\nLooking forward to knowing your thoughts on the same', '2017-01-26 17:25:28', '2017-01-26 17:25:28'),
(607, 'OUSAF AHMED', 'SUNNYAHMED1986@GMAIL.COM', '9818030295', NULL, NULL, 'Partner', 'Kindly mail me only  for partner detail ', '2017-01-27 07:11:03', '2017-01-27 07:11:03'),
(608, 'Muskan', 'muskanarora93@yahoo.co.in', '8527645618', NULL, NULL, 'Customer', 'I m muskan and I live in faridabad sec -3 ballabgarh.  And I want home services for smoothing please conform me how to contact with u ', '2017-01-27 10:59:12', '2017-01-27 10:59:12'),
(609, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:10', '2017-01-27 15:49:10'),
(610, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:11', '2017-01-27 15:49:11'),
(611, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:11', '2017-01-27 15:49:11'),
(612, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:12', '2017-01-27 15:49:12'),
(613, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:13', '2017-01-27 15:49:13'),
(614, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:13', '2017-01-27 15:49:13'),
(615, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:14', '2017-01-27 15:49:14'),
(616, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:14', '2017-01-27 15:49:14'),
(617, 'Bhuvan ', 'bhuvan.dd@gmail.com', '8077252872', NULL, NULL, 'Customer', 'I\'m  not satisfied  for your work', '2017-01-27 15:49:15', '2017-01-27 15:49:15'),
(618, 'Neha Goel', 'manager.salesblast@gmail.com', '9818518225', NULL, NULL, 'Partner', 'We have salon in Ghaziabad Rakesh Marg. Please tell us how can we take glam studio franchisee.', '2017-01-30 10:27:32', '2017-01-30 10:27:32'),
(619, 'Neha Goel', 'manager.salesblast@gmail.com', '9818518225', NULL, NULL, 'Partner', 'We have salon in Ghaziabad Rakesh Marg. Please tell us how can we take glam studio franchisee.', '2017-01-30 10:27:34', '2017-01-30 10:27:34'),
(620, 'Neha Goel', 'manager.salesblast@gmail.com', '9818518225', NULL, NULL, 'Partner', 'We have salon in Ghaziabad Rakesh Marg. Please tell us how can we take glam studio franchisee.', '2017-01-30 10:27:36', '2017-01-30 10:27:36'),
(621, 'Neha Goel', 'manager.salesblast@gmail.com', '9818518225', NULL, NULL, 'Partner', 'We have salon in Ghaziabad Rakesh Marg. Please tell us how can we take glam studio franchisee.', '2017-01-30 10:27:36', '2017-01-30 10:27:36'),
(622, 'Akshay Deep Pathania', 'wehiringnow7@gmail.com', '8802782457', NULL, NULL, 'Partner', 'Want to interview Sadiya Nassm for my blog.', '2017-01-31 18:38:31', '2017-01-31 18:38:31'),
(623, 'Priya', 'prinzaphutela.pp@gmail.com', '8826594856', NULL, NULL, 'Customer', 'For today I have to come for eyebrows trimming. By what time the lady assis2 will be available for the same.', '2017-02-01 12:02:12', '2017-02-01 12:02:12'),
(624, 'Amod', 'mrsamodsc@gmail.com', '9811234028', NULL, NULL, 'Customer', 'On 31jan I had been to your shopprix mall center and got hair colour touch up done.  I read your banner kept outside about happy hours 50% dicount on Monday and Wednesdayfrom 1_4. I enquired the same from your staff wherein they confirmed that tomorrow I. E.  On 1feb, Wednesday if I come for any service between 1_4, I will get 50%discount. Accordingly today I went to your Centre for services with prior appointment.  But surprisingly your manager miss. Ruby denied giving any discount saying it\'s for students. \r\nIf discount isonly for students,  why you have you mentioned happy hours? That too in big big letters.  This is making fool of customer.  I will think twice now before heading to your parlor. ', '2017-02-01 16:59:25', '2017-02-01 16:59:25'),
(625, 'Shikha ', 'drshikhabhms@gmail.com', '8130356022 ', NULL, NULL, 'Customer', 'Price of haircut for female', '2017-02-03 15:08:40', '2017-02-03 15:08:40'),
(626, 'Shikha ', 'drshikhabhms@gmail.com', '8130356022 ', NULL, NULL, 'Customer', 'Price of haircut for female', '2017-02-03 15:08:43', '2017-02-03 15:08:43'),
(627, 'Shikha ', 'drshikhabhms@gmail.com', '8130356022 ', NULL, NULL, 'Customer', 'Price of haircut for female', '2017-02-03 15:08:44', '2017-02-03 15:08:44'),
(628, 'Vijay Choudhary ', 'choudharyvj17@gmail.com', '8860112058', NULL, NULL, 'Customer', 'Looking for new hair style but my hair is too thin and small', '2017-02-04 12:10:03', '2017-02-04 12:10:03'),
(629, 'Sumegha', 'sunegharsolanki@gmail.com', '9716161191', NULL, NULL, 'Customer', 'Need moisture therapy for rough and dry hairs', '2017-02-04 13:28:09', '2017-02-04 13:28:09'),
(630, 'Lata joshi', 'Latagurani@gmail.com', '9990075875', NULL, NULL, 'Customer', 'I went to sector 35 faridabad for rebonding.  But after coming back home i am finding my hairs fluffy. ', '2017-02-04 13:49:51', '2017-02-04 13:49:51'),
(631, 'divay kanotra', 'divaykanotra@gmail.com', '9216755099', NULL, NULL, 'Partner', 'Dear \r\nwe are architects and interior designers , based in chandigarh \r\nwe have worked with start up like star dental pvt ltd on  turnkey project basis in opening their outletsunder brand name clove dental and various other saloons of her in chandigarh  punjab and haryana region .\r\nif you guys have any plans to open outlets here in this region . \r\nAnd need our services kindly contact the above mentioned person \r\nthanks and all the best for your venture.', '2017-02-06 13:28:51', '2017-02-06 13:28:51'),
(632, 'Vikas Kalani', 'vikas2345@gmail.com', '9599215878', NULL, NULL, 'Customer', 'Book appointment for saturday feb 11 2017 in gold souk mall based salon', '2017-02-09 03:38:48', '2017-02-09 03:38:48'),
(633, 'manju', 'manjusetia@gmail.com', '8130157272', NULL, NULL, 'Customer', 'want to know about beauty packages ', '2017-02-09 06:05:20', '2017-02-09 06:05:20'),
(634, 'Max Williams', 'seo2@googlepositions.com', '7077060205', NULL, NULL, 'Customer', '\r\n\r\n Hello and good morning\r\n \r\nI am Max Alias Jitesh, Marketing Manager with a reputable online marketing company based in India.\r\n\r\nWe can fairly quickly promote your website to the top of the search rankings with no long term contracts!\r\n\r\nWe can place your website on top of the Natural Listings on Google, Yahoo and MSN. Our Search Engine Optimization team delivers more top rankings than anyone else and we can prove it. We do not use "link farms" or "black hat" methods that Google and the other search engines frown upon and can use to de-list or ban your site. The techniques are proprietary, involving some valuable closely held trade secrets. Our prices are less than half of what other companies charge.\r\n\r\nWe would be happy to send you a proposal using the top search phrases for your area of expertise. Please contact me at your convenience so we can start saving you some money.\r\n\r\nIn order for us to respond to your request for information, please include your company’s website address (mandatory) and or phone number.\r\n\r\nSo let me know if you would like me to mail you more details or schedule a call. We\'ll be pleased to serve you.\r\nI look forward to your mail.\r\n\r\nThanks and Regards\r\nMax Alias Jitesh\r\n\r\n\r\n', '2017-02-09 12:34:44', '2017-02-09 12:34:44'),
(635, 'Max Williams', 'seo2@googlepositions.com', '7077060205', NULL, NULL, 'Customer', '\r\n\r\n Hello and good morning\r\n \r\nI am Max Alias Jitesh, Marketing Manager with a reputable online marketing company based in India.\r\n\r\nWe can fairly quickly promote your website to the top of the search rankings with no long term contracts!\r\n\r\nWe can place your website on top of the Natural Listings on Google, Yahoo and MSN. Our Search Engine Optimization team delivers more top rankings than anyone else and we can prove it. We do not use "link farms" or "black hat" methods that Google and the other search engines frown upon and can use to de-list or ban your site. The techniques are proprietary, involving some valuable closely held trade secrets. Our prices are less than half of what other companies charge.\r\n\r\nWe would be happy to send you a proposal using the top search phrases for your area of expertise. Please contact me at your convenience so we can start saving you some money.\r\n\r\nIn order for us to respond to your request for information, please include your company’s website address (mandatory) and or phone number.\r\n\r\nSo let me know if you would like me to mail you more details or schedule a call. We\'ll be pleased to serve you.\r\nI look forward to your mail.\r\n\r\nThanks and Regards\r\nMax Alias Jitesh\r\n\r\n\r\n', '2017-02-09 12:34:45', '2017-02-09 12:34:45'),
(636, 'Max Williams', 'seo2@googlepositions.com', '7077060205', NULL, NULL, 'Customer', '\r\n\r\n Hello and good morning\r\n \r\nI am Max Alias Jitesh, Marketing Manager with a reputable online marketing company based in India.\r\n\r\nWe can fairly quickly promote your website to the top of the search rankings with no long term contracts!\r\n\r\nWe can place your website on top of the Natural Listings on Google, Yahoo and MSN. Our Search Engine Optimization team delivers more top rankings than anyone else and we can prove it. We do not use "link farms" or "black hat" methods that Google and the other search engines frown upon and can use to de-list or ban your site. The techniques are proprietary, involving some valuable closely held trade secrets. Our prices are less than half of what other companies charge.\r\n\r\nWe would be happy to send you a proposal using the top search phrases for your area of expertise. Please contact me at your convenience so we can start saving you some money.\r\n\r\nIn order for us to respond to your request for information, please include your company’s website address (mandatory) and or phone number.\r\n\r\nSo let me know if you would like me to mail you more details or schedule a call. We\'ll be pleased to serve you.\r\nI look forward to your mail.\r\n\r\nThanks and Regards\r\nMax Alias Jitesh\r\n\r\n\r\n', '2017-02-09 12:34:45', '2017-02-09 12:34:45'),
(637, 'Max Williams', 'seo2@googlepositions.com', '7077060205', NULL, NULL, 'Customer', '\r\n\r\n Hello and good morning\r\n \r\nI am Max Alias Jitesh, Marketing Manager with a reputable online marketing company based in India.\r\n\r\nWe can fairly quickly promote your website to the top of the search rankings with no long term contracts!\r\n\r\nWe can place your website on top of the Natural Listings on Google, Yahoo and MSN. Our Search Engine Optimization team delivers more top rankings than anyone else and we can prove it. We do not use "link farms" or "black hat" methods that Google and the other search engines frown upon and can use to de-list or ban your site. The techniques are proprietary, involving some valuable closely held trade secrets. Our prices are less than half of what other companies charge.\r\n\r\nWe would be happy to send you a proposal using the top search phrases for your area of expertise. Please contact me at your convenience so we can start saving you some money.\r\n\r\nIn order for us to respond to your request for information, please include your company’s website address (mandatory) and or phone number.\r\n\r\nSo let me know if you would like me to mail you more details or schedule a call. We\'ll be pleased to serve you.\r\nI look forward to your mail.\r\n\r\nThanks and Regards\r\nMax Alias Jitesh\r\n\r\n\r\n', '2017-02-09 12:34:46', '2017-02-09 12:34:46'),
(638, 'Max Williams', 'seo2@googlepositions.com', '7077060205', NULL, NULL, 'Customer', '\r\n\r\n Hello and good morning\r\n \r\nI am Max Alias Jitesh, Marketing Manager with a reputable online marketing company based in India.\r\n\r\nWe can fairly quickly promote your website to the top of the search rankings with no long term contracts!\r\n\r\nWe can place your website on top of the Natural Listings on Google, Yahoo and MSN. Our Search Engine Optimization team delivers more top rankings than anyone else and we can prove it. We do not use "link farms" or "black hat" methods that Google and the other search engines frown upon and can use to de-list or ban your site. The techniques are proprietary, involving some valuable closely held trade secrets. Our prices are less than half of what other companies charge.\r\n\r\nWe would be happy to send you a proposal using the top search phrases for your area of expertise. Please contact me at your convenience so we can start saving you some money.\r\n\r\nIn order for us to respond to your request for information, please include your company’s website address (mandatory) and or phone number.\r\n\r\nSo let me know if you would like me to mail you more details or schedule a call. We\'ll be pleased to serve you.\r\nI look forward to your mail.\r\n\r\nThanks and Regards\r\nMax Alias Jitesh\r\n\r\n\r\n', '2017-02-09 12:34:46', '2017-02-09 12:34:46'),
(639, 'Madhulika Singh', 'madhulikasingh336@gmail.com', '7835961134', NULL, NULL, 'Customer', 'I want to know price for smoothening... My hair is little long from shoulders but i have short hair... Could you tell me the cost of smoothening ????', '2017-02-11 07:02:40', '2017-02-11 07:02:40'),
(640, 'SUNEEL KUMAR', 'rit2013042@iiita.ac.in', '8400268792', NULL, NULL, 'Careers', 'Respected ma\'am/sir,\r\n\r\nMy name is Suneel Kumar, age 21, currently in 4th year of B.Tech(IT) in Indian Institute of Information Technology, Allahabad and will be graduating in May 2017. \r\nI want to apply for the full time position of Full Stack Developer in your company.', '2017-02-11 13:35:04', '2017-02-11 13:35:04'),
(641, 'Gauri Arora', 'gauriarora_90@icloud.com', '9818629907', NULL, NULL, 'Customer', 'Need to inquire about your services.\r\nI need at home service for party make up and hair do.\r\nN saree draping', '2017-02-12 10:25:30', '2017-02-12 10:25:30'),
(642, 'Gauri Arora', 'gauriarora_90@icloud.com', '9818629907', NULL, NULL, 'Customer', 'Need to inquire about your services.\r\nI need at home service for party make up and hair do.\r\nN saree draping', '2017-02-12 10:25:34', '2017-02-12 10:25:34'),
(643, 'Samta', 'samtaksimmy@gmail.com', '8860608212', NULL, NULL, 'Customer', 'want to knw monthly package and about home services', '2017-02-12 11:45:56', '2017-02-12 11:45:56'),
(644, 'Priya phutela', 'prinzaphutela.pl@gmail.com', '8826594856', NULL, NULL, 'Customer', 'Eye brows trimming', '2017-02-12 13:46:36', '2017-02-12 13:46:36'),
(645, 'Divyanshi singh', 'divyanshisingh007@yahoo.in', '9821461165', NULL, NULL, 'Customer', 'To ask about home service', '2017-02-13 14:13:54', '2017-02-13 14:13:54'),
(646, 'Jasmine', 'jasminekaurnarula@gmail.com', '8076678233', NULL, NULL, 'Customer', 'Have an enquiry for grooming session for male staff at my outlet which will eventually be rolled out across 25 stores.\r\nNeed grooming session and hairstyling ', '2017-02-15 05:00:08', '2017-02-15 05:00:08'),
(647, 'Sunil Kumar ', 'sunilkumar2312@gmail.com', '9811812805', NULL, NULL, 'Partner', 'Need information on investment, space requirement etc. ', '2017-02-16 04:01:23', '2017-02-16 04:01:23'),
(648, 'Saurabh Sehgal', 'saurabhsehgal1979@gmail.com', '9810271592', NULL, NULL, 'Partner', 'Dear Sir / Ma\'am,\r\n\r\nThis is Saurabh Sehgal from New Delhi.\r\n\r\nI own retail shops in Sector 76, Noida, which I would like to offer for rent / lease. I own G.F shops there in the biggest high street market of that area. Currently 84 shops and same no. of shops coming up in next phase.\r\n \r\nYou may consider it for your business.\r\n \r\nProp Details:\r\n1. Market: Amrapali Crystal Home Shopping Arcade. (An open low maintenance market)\r\n2. Opp. to Supertech North Eye (North India\'s tallest residential bldg at 66 storeys)\r\n3. Sector 74 to 79 have around 1 lakh flats.\r\n\r\nDensely populated area having immense business potential. Kindly visit the area to have a feel of it.\r\n\r\nLooking forward to hearing from you.', '2017-02-17 06:47:38', '2017-02-17 06:47:38'),
(649, 'Surabhi', 'surabhimua@gmail.com', '7982522564', NULL, NULL, 'Partner', 'Hi we are looking forward for an option where we can tie up with you. We are already an existing salon entrepreneur, located in chattarpur.\r\n\r\nKindly please get in touch for further discussion.\r\n\r\nThanks and regards\r\nSurabhi \r\n7982522564', '2017-02-17 07:27:45', '2017-02-17 07:27:45'),
(650, 'Shamreen', 'shamreen9404@gmail.com', '9818840274', NULL, NULL, 'Customer', 'For rebonding', '2017-02-17 19:51:53', '2017-02-17 19:51:53'),
(651, 'Neha ', 'ydv31neha@gmail.com', '9911223614', NULL, NULL, 'Customer', 'I have left my bag in ur shoprix spa. Kindly call me back if u receive my message.', '2017-02-18 16:11:46', '2017-02-18 16:11:46'),
(652, 'Gagan soni deaf', 'gagansoni@hotmail.com', '9891735414', NULL, NULL, 'Careers', 'Soni publication pvt ltd -11096!doriwalan east park karol bagh new delhi-110005 9891735414', '2017-02-18 18:25:38', '2017-02-18 18:25:38'),
(653, 'Surya Teja', 'suryateja0079@gmail.com', '8985440079', NULL, NULL, 'Customer', 'I need haircut and tan nd spa please call it want 20 the February in hyderabad ', '2017-02-19 12:23:09', '2017-02-19 12:23:09'),
(654, 'Nimisha Goyal', 'ngoyal080246@gmail.com', '8767114711', NULL, NULL, 'Careers', 'Hey,\r\n\r\nI am keen on joining the Glam Studio team, under Business Development & Marketing Role. \r\nI have previous experience of heading the same department at a Salon chain startup based in Mumbai. \r\nPlease get in touch, if you are looking for somebody who has relevant experience. \r\nThank you in Advance. ', '2017-02-19 16:59:25', '2017-02-19 16:59:25'),
(655, 'prerna', 'panditria@yahoo.com', '9821165306', NULL, NULL, 'Customer', 'Do u provide services at home. .I put up in ghaziabad do u provide there too', '2017-02-21 16:39:04', '2017-02-21 16:39:04'),
(656, 'Aneeta maurya', 'aneetasingh90@gmail.com', '9810704856', NULL, NULL, 'Careers', 'NeedJob :- beautician &makeup artist', '2017-02-22 04:34:11', '2017-02-22 04:34:11');
INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `city`, `area`, `purpose`, `contact_text`, `created_at`, `updated_at`) VALUES
(657, 'Surya Ramanathan', 'suryaram94@gmail.com', '9841759000', NULL, NULL, 'Careers', 'Hello!\r\n\r\nI\'ve always been interested in startup companies working on the lines of aggregating business with mobile/computer being the backbone for development. I currently work in Business Development in one of the country\'s most talked about and leading startup companies. I would love to work in your company if at all there is any necessity or requirement to launch it in Chennai or Bangalore. Please do get in touch, when possible. :)', '2017-02-24 19:15:19', '2017-02-24 19:15:19'),
(658, 'Surya Ramanathan', 'suryaram94@gmail.com', '9841759000', NULL, NULL, 'Careers', 'Hello!\r\n\r\nI\'ve always been interested in startup companies working on the lines of aggregating business with mobile/computer being the backbone for development. I currently work in Business Development in one of the country\'s most talked about and leading startup companies. I would love to work in your company if at all there is any necessity or requirement to launch it in Chennai or Bangalore. Please do get in touch, when possible. :)', '2017-02-24 19:15:23', '2017-02-24 19:15:23'),
(659, 'Sandeep gupta ', 'crs.consultants79@gmail.com', '8742907489', NULL, NULL, 'Careers', 'Sir/madam we are mobile app co.we are deal into barter business. We can provide you media all over India case less to promote your brand.barter have so many banifits like save cash.increse your sales .increase client.big media plateform to promote your company Brand. ', '2017-02-25 04:46:09', '2017-02-25 04:46:09'),
(660, 'Geetanjali', 'geetanjali617@gmail.com', '7206780285', NULL, NULL, 'Customer', 'Ask abt prices and timing for smoothening', '2017-02-25 04:57:59', '2017-02-25 04:57:59'),
(661, 'Aman', 'puri.aman01@gmail.com', '9582245135', NULL, NULL, 'Customer', 'Pls send me your locations near pitampura punjabi bagh', '2017-02-25 10:17:06', '2017-02-25 10:17:06'),
(662, 'Sonu Marwah', 'vmarwahsmakeup@gmail.com', '8860611207', NULL, NULL, 'Partner', 'hi i hv a salon wNt to know your partnership terms nd conditions if we want to get associated wid u', '2017-02-26 05:52:39', '2017-02-26 05:52:39'),
(663, 'Ankur', 'ankurgupta674@gmail.com', '7827050797', NULL, NULL, 'Customer', 'Hi,\r\n\r\nI want to know about your hairfall treatment which 4 sitting course. Please send me the details... ', '2017-02-26 12:15:36', '2017-02-26 12:15:36'),
(664, 'Akanksha', 'aakshu05cancerian@gmail.com', '8588831108', NULL, NULL, 'Customer', 'Prices of smoothing ...?', '2017-02-26 14:56:57', '2017-02-26 14:56:57'),
(665, 'Kaviraj Kataria', 'kaviraj.kataria@ilfsIndia.com', '9654092464', NULL, NULL, 'Partner', 'Dear Sir/Madam,\r\n\r\nGreetings !!\r\n\r\nWe are NSDC partner training company doing training for skin care services, Make up artists and Hair stylist as per National Skills Qualification Framework Level-3 and Level-4 and assessment is done by Beauty and Wellness Sector Skills Council. In regard of placement of these trainees, we would like to meet and discuss the same in details. \r\nSeeking for appointment.\r\n\r\nThanks', '2017-02-27 07:34:21', '2017-02-27 07:34:21'),
(666, 'kriti', 'kritisingh48@gmail.com', '9999316972', NULL, NULL, 'Customer', 'i would like to cancel my booking for tomorrow(dwarka sec12) at 2:45pm  and would like to take it on some other day.', '2017-02-27 15:12:12', '2017-02-27 15:12:12'),
(667, 'GAURAV', 'GANGWANIGAURAV@YAHOO.COM', '9990360707', NULL, NULL, 'Partner', 'IM INTERESTED IN OPENING GLAM STUDIO  IN NOIDA SECTOR 137 IN GULSHAN VIVANTE.\r\nIF INTERESTED LET ME KNOW.', '2017-02-28 05:40:17', '2017-02-28 05:40:17'),
(668, 'Rashid Anwar', 'rashidtcs199@gmail.com', '9560823399', NULL, NULL, 'Customer', 'About permanent straightning', '2017-02-28 12:12:25', '2017-02-28 12:12:25'),
(669, 'Sylvia', 'silvy_2007@hotmail.com', '96566879313', NULL, NULL, 'Partner', 'would like to know terms and conditions and more information of operation', '2017-03-05 09:10:43', '2017-03-05 09:10:43'),
(670, 'Deshdeep', 'deshdeep91@gmail.com', '9535105683', NULL, NULL, 'Careers', 'Hi, \r\nI am web developer looking for job as back-end developer.\r\nMy profile link : https://angel.co/deshdeep', '2017-03-23 08:33:21', '2017-03-23 08:33:21'),
(671, 'Arun Kumar', 'arun.tyagi20@gmail.com', '9711376140', NULL, NULL, 'Customer', 'Is there nay package for men " Haircut ,bread, Hairstyle change "', '2017-03-24 11:05:30', '2017-03-24 11:05:30'),
(672, 'Amit Kumar', 'akumar4850@gmail.com', '9406580936', NULL, NULL, 'Careers', 'Hello sir, \r\nI want to apply for Software Developer position at your company.\r\nI am Amit Kumar, currently pursuing my Integrated Post Graduate programme in Information Technology stream from IIIT Gwalior. I have skills and experience in Software development, Machine learning, Backend development and Python Development. \r\nI also have strong background in DS & Algo.I have worked with MongoDB, Celery, Redis, NodeJs, Python Flask. I am also well versed with programming languages C++,C and Javascript. I have also worked with AWS SQS and DynamoDB.\r\nI have a good understanding of Machine learning algorithms and Data Science Concepts such as KNN, Decision tree, Neural networks, Use of Pandas aand have done few projects in this field. \r\nI have a deep interest in Machine learning and Data Sciences field.\r\nI am a self-motivated individual looking for a challenging job.\r\nPlease review my profile.\r\nMy github profile: https://github.com/amit-iiitm \r\nLinkedin Profile: https://in.linkedin.com/in/amit-kumar-50a7b694\r\nLink to my CV: https://drive.google.com/file/d/0B45hSCdga5nFNEtyRnpMbEt1d3M/view?usp=sharing\r\nThanks, \r\nAmit Kumar', '2017-03-24 14:24:10', '2017-03-24 14:24:10'),
(673, 'Monika Goel', 'goels1981@gmail.com', '9818999194', NULL, NULL, 'Customer', 'I want to share my experience that I had with your services and after service.\r\n\r\nAfter seeing a lot of ads in the social media, I thought to book an appointment for my hair smoothing and booked an appointment for sector 18 Noida from your head office. The working staff was fine and at the time of leaving, one lady from the team asked me to visit the next day for washing my hairs.\r\n\r\nWhen I called today morning for this, she simply refused and had a conversation with me in a very bad manner. This is highly unacceptable.\r\n\r\nI just want to know, after making all the payment, if this is the response that we expect from a brand like you. I have spended 5K rupees in your parlour, however the staff behaviour was just like a street person. I think they should know how to behave with a customer so that a customer can be with in touch of you otherwise a lot of options are there in the market.\r\n\r\nI will definitely never recommend any one to Glam studio.\r\n\r\nThanks,\r\n\r\nMonika Goel (981899194)', '2017-03-29 04:10:43', '2017-03-29 04:10:43'),
(674, 'Ajay', 'ajay@glamstudios.in', '9910222969', NULL, NULL, 'Customer', 'Wedding Booking', '2017-04-01 08:39:33', '2017-04-01 08:39:33'),
(675, 'Vanaja', 'vanajaa16@gmail.com', '9010064227', NULL, NULL, 'Customer', 'if i need any info i will chat with u people', '2017-04-10 12:15:11', '2017-04-10 12:15:11'),
(676, 'rahul', 'rahulchavan2878@gmail.com', '9999981322', NULL, NULL, 'Partner', 'do you give franchisee, if yes. please share details.', '2017-04-12 11:36:48', '2017-04-12 11:36:48'),
(677, 'Tarun anand', 'tarun.anand@grofers.com', '7030302763', NULL, NULL, 'Partner', 'Hi, I am looking for any co-branding campaign we can work over for the eve of Mother\'s day. \r\n\r\nKindly reach back.\r\n\r\nThankyou', '2017-04-18 06:53:30', '2017-04-18 06:53:30'),
(678, 'Moris Harbert', 'morisharbert@gmail.com', '8420862837', NULL, NULL, 'Customer', 'Hello,\r\n\r\nHow are you? Hope you are fine.\r\n\r\nI have been checking your website quite often. It has seen that the main keywords are still not in top 10 rank. You know things of working;  I mean the procedure of working has changed a lot.\r\n\r\nSo I would like to have opportunity to work for you and this time we will bring the keywords to the top 10 spot with guaranteed period.\r\n\r\nThere is no wondering that it is possible now cause, I have found out that there are few things need to be done for better performances (Some we Discuss, in this email). Let me tell you some of them -\r\n\r\n1. Title Tag Optimization\r\n2. Meta Tag Optimization (Description, keyword and etc)\r\n3. Heading Tags Optimization\r\n4. Targeted keywords are not placed into tags\r\n5. Alt / Image tags Optimization\r\n6. Google Publisher is missing\r\n7. Custom 404 Page is missing\r\n8. The Products are not following Structured markup data\r\n9. Word-Press is not installed properly, in the blogs\r\n10. Website Speed Development (Both Mobile and Desktop)\r\nPlease check via Google Developer -\r\nhttps://developers.google.com/speed/pagespeed/ \r\n11. Favicon needs to be changed too.\r\n12. Off –Page SEO work\r\n\r\nLots are pending……………..\r\n\r\nYou can see these are the things that need to be done properly to make the keywords others to get into the top 10 spot in Google Search & your sales Increase.\r\n\r\nAlso there is one more thing to mention that you did thousands of links that time for your website, which are considered as spam after Google roll outs several updates of Panda and penguin. We need to remove them too.\r\n\r\nSir/Madam, please give us a chance to fix these errors and we will give you rank on these keywords.\r\n\r\nPlease let me know if you encounter any problems or if there is anything you need. If this email has reached you by mistake or if you do not wish to take advantage of this free advertising opportunity, please accept my apology for any inconvenience caused and rest assured that you will not be contacted again.\r\n\r\nMany thanks for your time and consideration,\r\n\r\nLooking forward\r\n\r\nRegards\r\n\r\n\r\n\r\nMoris Harbert\r\n\r\nIf you did not wish to receive this, please reply with "unsubscribe" in the subject line.\r\n\r\nDisclaimer: This is an advertisement and a promotional mail strictly on the guidelines of CAN-SPAM Act of 2003. We have clearly mentioned the source mail-id of this mail and the subject lines and they are in no way misleading in any form. We have found your mail address through our own efforts on the web search and not through any illegal way. If you find this mail unsolicited, please reply with "unsubscribe" in the subject line and we will take care that you do not receive any further promotional mail.', '2017-04-20 11:52:57', '2017-04-20 11:52:57'),
(679, 'Gaurav Singh', 'gauravkumar@kyisolutions.com', '9650019468', NULL, NULL, 'Partner', 'Dear All,\r\n\r\nGreeting of the day!!\r\n\r\nPromote your business through digital marketing, we offer best services in industry with huge and quality database.\r\nExpertise in:-\r\nSMS Marketing\r\nWhats app Marketing\r\nE-mail Marketing\r\nVirtual Number\r\nMiss Call Service\r\nShort & Long Code\r\nAnd many more\r\n\r\nContact me if you require to promote your business. \r\n', '2017-04-26 10:04:29', '2017-04-26 10:04:29'),
(680, 'princy agrawal', 'princy51191@gmail.com', '7693927842', NULL, NULL, 'Customer', 'I have seen some head to toe packages in your website few days back. I want to book the same but now its not showing here. Can u please contact me regarding the same.', '2017-05-02 03:23:49', '2017-05-02 03:23:49'),
(681, 'harshil lumbhani', 'harshil469@gmail.com', '7874554405', NULL, NULL, 'Partner', 'Hello, I\'d like to open Glam studio salon in Rajkot,Gujarat at a good location.\r\nMay I get all the franchise details ?', '2017-05-02 19:27:39', '2017-05-02 19:27:39'),
(682, 'Puneet Mithra ', 'puneetmithra@gmail.com', '9871008442 ', NULL, NULL, 'Partner', 'Hi, I have a restaurant in gurgaon and I am considering opening a salon in the same area. In your list of outlets mentioned in website, there is nothing in that area at the moment. I am keen to partner with glam studios so if someone could contact me to discuss the details. My alternate number is 9999 661 669. Thanks! ', '2017-05-03 09:01:01', '2017-05-03 09:01:01'),
(683, 'Swati Agrahari', 'swatiagrahari4@gmail.com', '9818807005', NULL, NULL, 'Partner', 'Hi,\r\n\r\nI am interested in opening a salon in Noida Sec 137.\r\nPlease let me know the details.\r\n\r\nThanks,\r\nSwati', '2017-05-08 05:50:22', '2017-05-08 05:50:22'),
(684, 'Mrs. Shreya Mohan Sharma', 'writeshreya@gmail.com', '9910289891', NULL, NULL, 'Customer', 'Need a package of hair spa, cleanup, waxing (half legs and full hands with underarms). Staying in Janakpuri east , Please update me with the packages so that i can be available asap.', '2017-05-08 07:53:19', '2017-05-08 07:53:19'),
(685, 'Siddharth Rajan', 'siddharth71193@gmail.com', '8375094381', NULL, NULL, 'Careers', 'Any software engineering roles in company?', '2017-05-08 08:31:26', '2017-05-08 08:31:26'),
(686, 'chitra', 'chitra.14mar@gmail.com', '9873803025', NULL, NULL, 'Customer', 'Please let me know about the deal 999..', '2017-05-15 05:49:16', '2017-05-15 05:49:16'),
(687, 'sheetal goswami', 'sheetal.goswami@osscube.com', '9582346605', NULL, NULL, 'Customer', 'My company has tie up with glamstudio. I want to know about any corporate package available.', '2017-05-16 05:33:08', '2017-05-16 05:33:08'),
(688, 'Prashant Mishra', 'prashant.mishra@goldstonetech.com', '7308538493', NULL, NULL, 'Partner', 'Hi , \r\n  \r\nHope you’re doing great. \r\n  \r\nIntroducing myself as Prashant Mishra from Goldstone Technologies. Just to know you, we are publicly trading IT Analytics and consulting firm with Global presence, supporting our clients on business, Enterprise and professional consulting space. We wish to introduce you to Tableau, a Decision Support System, aimed at helping the senior management to gain “ Greater Visibility into business data, much faster “. We help organizations to make their Business Data Analysis successful and insightful by offering our software Tableau. Tableau enables you to tune large amounts of data into sweets spots of information for value added decision making. And our other established practices in Information Technology are: Analytics Services, Outsourcing, Mobility and Enterprise Services. \r\n  \r\nWhat Can People Accomplish with Tableau- Tableau’s rapid-fire business intelligence software lets everyone in your organization analyze and understand their data far faster than any other solution and at a fraction of their costs and resources without requiring any programing knowledge or prior work with the data analytics solutions. People see and understand data, report and dashboards faster through tableau’s unique, easy to use visual analytics technology. They discover key trends and outliers that would otherwise be impossible to find using typical business intelligence solutions. Because they’re in the driver’s seat, they work 10 to 100 times faster with Tableau. \r\n  \r\nWatch a Quick 2 Minute Video of Tableau \r\n  \r\n  \r\nI look forward to hear your interest and if we can plan for informative session on Tableau with a Tele –conversation and an online demo based on your available time. \r\n', '2017-05-16 06:53:17', '2017-05-16 06:53:17'),
(689, 'Arshad Mullani', 'info@shopindeal.com', '8087190242', NULL, NULL, 'Partner', 'Greetings from ShopINdeal, \r\n\r\nOn behalf of Mindfreak Mobile Media Pvt. Ltd., we would like to consider your valuable time for a collaborative advertising in the national market. Considering the present competitive market condition and demanding target audience, we brought ShopINdeal, a digital advertising platform informs of  an agile mobile app (on Android, followed by iOS) and interactive website .\r\n\r\nShopINdeal is the simplest and an economical way to advertise, connect and promote local business. It’s very convenient for buyers to know about live deals in the market, product availability, nearby shops and other relevant service related news & information. Our present ShopINdeal website has been developed to reach to more target consumers by giving exact and relevant product/service information with the help of our simplified menu based features, like- any kind of deals (Exclusive or open for all) available in the local market from any nearby shops, information about new products/services introduced, on-going local activities/events, wholesale businesses information and online deals/offers related to any products or services from e-commerce sites. Special features like ratings, reviews and add to customized ‘favourite list’ is also available to directly connect to the businesses.\r\n \r\nWe have proposed a strong advertising & promotional solution in terms of customer retention and web traffic to your website as a supplementary offer from ShopINdeal. With us you can accomplish a large number of common audiences by aligning both of our company’s interest & marketing goals. Being an advertising partner with us, you will have an occasion to create more brand awareness with local market and greater exposure to new potential buyers.\r\n \r\nWe can be contacted by +91 8087190242 or via email at info@shopindeal.com. We are available at your discretion to meet and further discuss any aspect of our business Offer. We look forward to a favourable response and to a long and productive working relationship with your company.\r\n \r\nThanking You,\r\n\r\nShopINdeal Team ', '2017-05-17 10:29:32', '2017-05-17 10:29:32'),
(690, 'Ankur', 'ankur.friend@gmail.com', '9958595034', NULL, NULL, 'Partner', 'interested in franchisee. please call me', '2017-05-23 07:36:59', '2017-05-23 07:36:59'),
(691, 'Srishti Tiwari', 'srishti@jumpapps.co', '8700581971', NULL, NULL, 'Partner', 'We are pinkbook, a lifestyle application for women and we are looking for collaboration with Salon\'s and Spa\'s, and other lifestyle brands.\r\n\r\nWe wish to connect with your marketing team, kindly assist with the number of the concerned person. ', '2017-06-01 06:28:47', '2017-06-01 06:28:47'),
(692, 'Anuj Sharma', 'anujlcetian@gmail.com', '8130292898', NULL, NULL, 'Partner', 'Looking to start a salon in Gurgaon.', '2017-06-01 07:30:54', '2017-06-01 07:30:54'),
(693, 'Nimmy Arun Prasad', 'nimmy@doodleblue.com', '9539337338', NULL, NULL, 'Partner', 'Hi,\r\n\r\nWould you like to build or improve your digital platform? Are you in need of some help with anything ranging from your organisation’s website, app or wearable/AR/VR works? \r\n\r\nIf this is so and you wish to gain a reliable digital technology partner, Glam Studios might find our services to be of great interest. We offer help with all of the above mentioned platforms and anything in between, whether it just needs some maintenance or even custom creation.  \r\n\r\nPlease contact me if you are interested and I would love to chat with you. I would also be glad to help you with any questions or concerns you may have. \r\n\r\nWork link - www.doodleblue.com/work \r\n\r\nWarm regards,\r\nNimmy.\r\ndoodleblue Innovations Private Limited\r\nwww.doodleblue.com\r\n', '2017-06-06 14:01:48', '2017-06-06 14:01:48'),
(694, 'Venu Gopal', 'venugopal@3dtrix.in', '8867490233', NULL, NULL, 'Partner', 'Hi,\r\nI hope this note finds you doing well.\r\nI had a chance to search you on web and thought to check with you if you would be interested to have Explainer Video for your company at this time? \r\nAn explainer video is a video that explains and promotes a company, product, or service to audiences in an entertaining way, Instead of explaining to the clients for hours through PPT’s, the video will convey your brand message to your particular clients in 2 minutes and Increase the Conversion Rate & Sales Revenue. There is a different style and a different story for every company.\r\nOur Price per minute of Explainer video is र15,000.                                                       \r\nWe do also provide services like Corporate Video, Advertisement Video, 3D Interior/Exterior Designs, 3D Product Design, Website Development etc.\r\nLet me know if you’re interested in our services.\r\nThe main portfolio of our company is\r\nhttps://www.youtube.com/watch?v=Q0NeLqEN-pE\r\nMeanwhile you can click on the link provided\r\nhttps://3dtrix.in/product/explainer-video-2/\r\nThanks and I look forward to your response.\r\n-- \r\nKind Regards,\r\nVenu Gopal| Online Sales & Marketing\r\nWebsite: www.3dtrix.in\r\n#30, 5th Cross, 23rd Main, J.P Nagar 2nd Phase, Bangalore-560078.\r\nMobile: Vivek Kamal (CEO & Founder) +91-8867490233 | Email: venugopal@3dtrix.in\r\n \r\n------------------------------------------------------------------------------------------------------------------\r\nThis e-mail and any files transmitted with it may contain confidential and privileged information are for the sole use of the intended recipient(s) . If you are not the intended recipient, please appraise the sender by reply e-mail and destroy all copies and the original message. Any unauthorized disclosure, dissemination, forwarding, printing or copying of this email or any action taken on this e-mail is strictly prohibited and may be unlawful.\r\n', '2017-06-13 11:37:49', '2017-06-13 11:37:49'),
(695, 'Deepti', 'deepti_27m@yahoo.com', '7838603333', NULL, NULL, 'Customer', 'Hi,\r\n\r\nI want to book appointment for sat 11 am for facial , leg waxing and full arms waxing.\r\nI have package.\r\nMy package card no. is 81.', '2017-06-16 05:44:49', '2017-06-16 05:44:49'),
(696, 'Mousumi Kukreti', 'mousumi@bigcity.in', '9538766643', NULL, NULL, 'Partner', 'Big City Promotions Pvt Ltd is one of India’s premier tactical sales promotions agency and has 9+ years of experience as one of the largest aggregator of spare capacity for business across all verticals like Salons, Spa, Restaurants, Hotels, Fitness etc to name a few. We are looking forward to partner with Glam Studios for PAN India locations and promote your salon services by generating footfall for your salons thereby increasing your chances of up sell and cross sell and can be instrumental in generation of  additional revenue worth 12 to 15 lacs annually and would like to speak to your Marketing Head to take this forward.', '2017-06-22 08:11:21', '2017-06-22 08:11:21'),
(697, 'ashok bhatia', 'aakash.bhatia9510@gmail.com', '09136246348', NULL, NULL, 'Partner', 'i want to take your franchise in NIT faridabad \r\nplease contact me as soon as possible i have lot of space on main   market ', '2017-06-25 14:56:09', '2017-06-25 14:56:09'),
(698, 'Pawan Garg', 'gargp2002@yahoo.co.in', '9811363220', NULL, NULL, 'Partner', 'intend to open a salon in noida', '2017-06-26 03:28:17', '2017-06-26 03:28:17'),
(699, 'Kamal', 'kamal@godigiworld.com', '9310511199', NULL, NULL, 'Partner', 'First page rankings on Google\r\n\r\nWe can put your website on 1st page of Google to drive relevant traffic to your site. Let us know if you would be interested in getting detailed proposal. We can also schedule a call & will be pleased to explain our services in detail. We look forward to hearing from you soon. Thanks!\r\n', '2017-06-27 06:56:32', '2017-06-27 06:56:32'),
(700, 'Kiran Kumar Velalam', 'velalam.kirankumar@gmail.com', '9948033805', NULL, NULL, 'Partner', 'Pls let me know the budget and profits/benefits to open franchise in hyderabad', '2017-06-30 13:54:37', '2017-06-30 13:54:37'),
(701, 'Swati Golani', 'swatigolani98@gmail.com', '9999058198', NULL, NULL, 'Customer', 'If you provide any short term courses in the academy, need to know the details.', '2017-06-30 19:38:25', '2017-06-30 19:38:25'),
(702, 'Swati Golani', 'swatigolani98@gmail.com', '9999058198', NULL, NULL, 'Customer', 'If you provide any short term courses in the academy, need to know the details.', '2017-06-30 19:38:27', '2017-06-30 19:38:27'),
(703, 'Rajesh Reddy', 'rajeshreddy.radan@gmail.com', '9502289878', NULL, NULL, 'Careers', 'Hi Glam Studios,\r\n\r\n                   I representative of Radan Infrastructures which deals in Interiors and Exteriors of residential and commercial places.We are ready to give our best services for your studios in Telangana and Andhra Pradesh. Can you send me your branch office address and contact number. Hope a nice reply and have a nice day.\r\n\r\nThanks& Regards,\r\n   Rajesh', '2017-07-04 08:38:25', '2017-07-04 08:38:25'),
(704, 'Parvi Dwivedi', 'parvidwivedi@gmail.com', '7081500014', NULL, NULL, 'Customer', 'Hi, I visited one of the glam studio branch in aminabad stellar jeevan and the staff there was not at all helpful she completely denied to give any services to me as i hve an online coupon code GLAM50 she started saying that we don\'t have any staff for any sort of work and similar is the case with gaur city staff , she completely denied to accept that coupon in her salon, my point is if you guys are not ready to accept this coupon then why its showing on the website this is completely unprofessional behaviour of your staff . I would never visit your parlor .', '2017-07-10 07:04:45', '2017-07-10 07:04:45'),
(705, 'Dhaval Shukla', 'shukladhaval27@gmail.com', '8238067719', NULL, NULL, 'Careers', 'Dear Sir/Madam,\r\nI intend to apply for positions of AVP-VP Project, Product & Brand Management/Business Analysis/ Business Process Re-engineering & Transformation Service/IT Service Delivery/Marketing & Corporate Communication positions.\r\nWith over 9 years of International work experience in Australia and USA in the field of Banking & Financial services, Telecommunications & Media Cable industry, with overall 14 years of experience. I seek a formal communication, so that you can better gauge my suitability e.g. Skills, Experience and Qualifications as identified in the position statement, for existing or future employment in your valued organization.\r\nMy key attributes are professional and positive approach, diligent with attention to detail, ability to cope under pressure, dynamic and vigorous, self-motivated & self-sufficient, effective communicator at all levels, team player, and able to work on own initiative, assertive, adaptable, and creative, energetic, radical thinker, deeply analytical, outcome oriented, eye for detail, and positive individual who can be great asset to your organization and create “Value” for it.\r\nI can be contacted on +91 823-806-7719 or by email: shukladhaval27@gmail.com\r\nLooking forward to hear from you!\r\nThanks & Regards,\r\nDhaval Shukla\r\n', '2017-07-13 09:58:24', '2017-07-13 09:58:24'),
(706, 'Joseph', 'info@godigiworld.com', '9310511199', NULL, NULL, 'Partner', '"Hi ,\r\n\r\nI am joseph marketing Manager of godigiworld.com (A venture of IIT & IIM Associates ). \r\n\r\nBoost your website traffic through SEO and use effective techniques of SEO to get the best results that can last longer. \r\n\r\nWe can place your website on top of the Natural Listings on Google, Yahoo and MSN. Our Search Engine Optimization team delivers more top rankings than anyone else and we can prove it. \r\n\r\nWe do not use ""link farms"" or ""black hat"" methods that Google and the other search engines frown upon and can use to de-list or ban your site. The techniques are proprietary, involving some valuable closely held trade secrets. Our prices are less than half of what other companies charge.\r\n"\r\n', '2017-07-15 06:00:05', '2017-07-15 06:00:05'),
(707, 'akshit pal', 'akshitpal040@gmail.com', '7428095300', NULL, NULL, 'Careers', 'hello\r\nmy name is Akshit pal\r\ni have completed my certification course in basic makeup artistry and hairstyling \r\nwilling to work as a makeup artist and hairstylist \r\nhope i do get revert ', '2017-07-15 12:55:15', '2017-07-15 12:55:15'),
(708, 'akshit pal', 'akshitpal040@gmail.com', '7428095300', NULL, NULL, 'Careers', 'hello\r\nmy name is Akshit pal\r\ni have completed my certification course in basic makeup artistry and hairstyling \r\nwilling to work as a makeup artist and hairstylist \r\nhope i do get revert ', '2017-07-15 12:55:16', '2017-07-15 12:55:16'),
(709, 'Sharat chandra', 'sharat.chandra@gmail.com', '9676079309', NULL, NULL, 'Customer', 'Franchisee inquiry', '2017-07-21 08:40:35', '2017-07-21 08:40:35'),
(710, 'Jayakrishna Gupta', 'jayakrishnagupta17@gmail.com', '7092429996', NULL, NULL, 'Partner', 'Greetings, \r\nI am a representative of Google Developers Group VIT Vellore. \r\nWe are conducting an event "GDG DevFest’17" which is a community-run event that offer speaker sessions across multiple product areas, all day hack-a-thons, code labs and much more.\r\n \r\nThe event will be conducted in October and is expected to have a turnover of more than 200 students. \r\n\r\nHere at GDG, we believe in using technology to benefit everyone around us and spreading knowledge in this domain has always been our priority. With this event, we are aiming to help developers use the best resources to develop new age applications and technologies which solve problems. We hope that this event is worthy of your support and cooperation.\r\n\r\nThanks\r\n\r\n\r\nJayakrishna Gupta\r\nGDG VIT Vellore\r\n', '2017-07-21 10:07:30', '2017-07-21 10:07:30'),
(711, 'Rohan Nanda', 'rohannanda_30@yahoo.co.in', '9873754982', NULL, NULL, 'Careers', 'Hello,\r\nI would like to introduce myself to you. I am a fresh graduate from Eastern Illinois University, USA with Bachelor of Sciences in Business with Finance major and an Accounting minor having two rich internship experiences with one of the big 4 firms (Ernst and Young) and a telecommunication company (Knowlarity Communications).  \r\n\r\nI am very enthusiastic to start my career with a firm having an innovative business proposition and which is dynamic and helps me learn versatility and do different tasks in different fields and ways. \r\n \r\n I would be grateful if you consider arranging a telephonic interview or face-to- face interactions with me so I can also know about your set-up.\r\n\r\nThank you, \r\n \r\nRohan Nanda\r\nMobile: 919873754982/ 9990756587\r\nE-Mail: rohannanda_30@yahoo.co.in\r\n', '2017-07-30 05:37:42', '2017-07-30 05:37:42'),
(712, 'Shivakumar', 'bdev.8@gapminers.com', '9949741010', NULL, NULL, 'Partner', 'Dear Sir/Madam,\r\n \r\n \r\nGreetings from http://www.upto75.com/  . Online promotions Company.                                                            \r\n \r\nUPto75.com is India\'s leading aggregator of deals, discounts and offers in the retail arena across 20 product categories.                                  \r\n \r\nWe usher in customers to merchant stores in the most cost effective manner with an ideal blend of online and offline promotion, giving them a real high impact reach. We provide this wide consumer reach through our associations with leading players across various platforms.                                  \r\n                                  \r\nWe do not require huge discounts nor we promise such ones to our users. We believe in getting offers from merchants which help them in business and not result in any brand dilution.     \r\n                           \r\nThis approach of ours resulted in having top 25% of the brands advertising with us.                                  \r\n We are very keen to promote Glam Studio\'s offers on our site.                                  \r\n                                  \r\n How to get started?       \r\n                         \r\nStep 1:                 \r\n               \r\nProvide us with an attractive offer than entices a customer to come to your outlets.              \r\n                 \r\nStep 2:                                  \r\n \r\nWe will promote your offer on our site and generate leads / business for you.                                  \r\nIf the customer is interested he downloads the Coupon on our site for Free and come to your outlet to avail your service by claiming the discount.   \r\n \r\nOur charges:\r\n                          \r\nPay us 10%  commission on the business that comes from us. \r\n \r\nLook forward to hear from you.\r\n \r\n \r\n \r\nRegards,\r\nShiva,\r\n9949741010,\r\nwww.UPto75.com\r\n ', '2017-08-03 10:01:20', '2017-08-03 10:01:20'),
(713, 'Riya', 'riyashrestha2013@gmail.com', '7532952142', NULL, NULL, 'Partner', 'i m intersted to take your partnership or franchise pls share the detail', '2017-08-03 12:59:23', '2017-08-03 12:59:23'),
(714, 'Apurva Khurana', 'apurvakhurana@gmail.com', '9810803328', NULL, NULL, 'Customer', 'Want to know prices of smoothening please', '2017-08-11 08:35:07', '2017-08-11 08:35:07'),
(715, 'Town Roof Productions', 'townroofofficial@gmail.com', '+91-9521761309', NULL, NULL, 'Partner', 'TRP is organizing a Stand-Up Comedy show where India\'s top artists from Comedy (Sapan Verma & Kunal Rao) will perform. We are looking forward to collaborate with Glam Studios for sponsorship for the event, prominently providing the brand a premium coverage and space on our promotional assets.\r\n\r\nWe will promote our event along with our Sponsor partner at various platforms like-\r\n\r\n-Social media (Facebook, Twitter, Mailer & Whatsapp) - We have a strong network over social media for promotions. Our specialized target audience is of 16 to 40 years of age, which includes students from University of Delhi and various colleges across Delhi.\r\n\r\n-Legal Sites across city with huge footfall - We will have hoardings put on major prime locations of Delhi with mass footfall, on each of which the sponsor will have a prominent space. \r\n\r\n-Print Media & Web portals - Our Print media & Web portals partners will promote our Sponsor on their platforms.\r\n\r\n-Venue - Our Sponsor partner will get full promotional coverage at the Event Venue. We will provide prominent advertisement space on the event venue, entry, stage and all other advertising sections inside.\r\n\r\n\r\nWe specially will provide space for Title sponsor every where in campaign (Stage, venue, Hoardings, tickets, Social Media etc).\r\n\r\nLooking forward to hear from Glam Studios & discuss it further. Please let us know the suitable path and people to carry this forward.\r\n\r\n"Your Branding is our Target"\r\n', '2017-08-11 19:05:23', '2017-08-11 19:05:23'),
(716, 'Shruti Chhabra', 'thatfoodepicurean@gmail.com', '9999020129', NULL, NULL, 'Customer', 'Hey just want to know if I can customise the basic monthly package, I need a cleanup instead of facial, and full legs waxing as well. Reply asap. Also, does the cleanup/facial process includes facial bleaching?', '2017-08-15 15:51:33', '2017-08-15 15:51:33'),
(717, 'sangeeta jain', 'sangeeta1014@gmail.com', '9899987279', NULL, NULL, 'Customer', 'on 24 may 2017 i had keratine treatment and got d 100% cashback offer. but not yet they hvnt gv me my cashback voucher.\r\n\r\ni hd my treatment by online booking at glam studio shashtri nagar ghaziabad.', '2017-08-18 17:10:09', '2017-08-18 17:10:09'),
(718, 'Anjolie Eapen', 'sophiacollege.kscope@gmail.com', '+91 9562406709', NULL, NULL, 'Partner', 'Hello, I\'m Anjolie Eapen from Sophia College,Mumbai. We have our inter collegiate fest \'Kaleidoscope\' coming up in September and would love to associate with \'Glam Studios\'. Please get me connected to the concerned person as soon as possible.\r\nThanks and Regards,\r\nAnjolie Eapen\r\n+91 9562406709\r\nEmail us at sophiacollege.kscope@gmail.com', '2017-08-22 11:16:47', '2017-08-22 11:16:47'),
(719, 'Anjolie Eapen', 'sophiacollege.kscope@gmail.com', '+91 9562406709', NULL, NULL, 'Partner', 'Hello, I\'m Anjolie Eapen from Sophia College,Mumbai. We have our inter collegiate fest \'Kaleidoscope\' coming up in September and would love to associate with \'Glam Studios\'. Please get me connected to the concerned person as soon as possible.\r\nThanks and Regards,\r\nAnjolie Eapen\r\n+91 9562406709\r\nEmail us at sophiacollege.kscope@gmail.com', '2017-08-22 11:16:48', '2017-08-22 11:16:48'),
(720, 'Scott Jensen', 'scotstjensen@gmail.com', '8420862837', NULL, NULL, 'Customer', 'Hello,\r\n\r\nHow are you? Hope you are fine.\r\n\r\nI have been checking your website quite often. It has seen that the main keywords are still not in top 10 ranks. You know things of working; I mean the procedure of working has changed a lot.\r\n\r\nSo I would like to have opportunity to work for you and this time we will bring the keywords to the top 10 spot with guaranteed period.\r\n\r\nThere is no wondering that it is possible now cause, I have found out that there are few things need to be done for better performances (Some we Discuss, in this email). Let me tell you some of them -\r\n\r\n> Title Tag Optimization (Keyword in Title Tag)\r\n> Title Tag Starts with Keyword\r\n> Meta Tag Optimization (Description, keyword and etc)\r\n> Keyword in Description Tag\r\n> Keyword Appears in H1 Tag\r\n> Keyword is Most Frequently Used Phrase in Document\r\n> Content Length\r\n> Keyword Density\r\n> Latent Semantic Indexing Keywords in Content (LSI)\r\n> LSI Keywords in Title and Description Tags\r\n> Page Loading Speed via HTML\r\n> Duplicate Content\r\n> Rel=Canonical\r\n> Page Loading Speed via Chrome\r\n> Image Optimization\r\n> Recency of Content Updates\r\n> Magnitude of Content Updates\r\n> Historical Updates Page Updates\r\n> Keyword Prominence\r\n> Keyword in H2, H3 Tags\r\n> Keyword Word Order\r\n> Outbound Link Quality\r\n> Outbound Link Theme\r\n> Grammar and Spelling\r\n> Syndicated Content\r\n> Helpful Supplementary Content\r\n> Number of Outbound Links\r\n> Number of Internal Links Pointing to Page Quality of Internal Links Pointing to Page\r\n> Broken Links\r\n> HTML errors/W3C validation\r\n> Bullets and Numbered Lists\r\n> Priority of Page in Sitemap\r\n> Too Many Outbound Links\r\n> User Friendly Layout\r\n> Useful Content\r\n> Appropriate amount of contact information ON Contact Us Page\r\n> Site Architecture\r\n> Site Updates\r\n> Terms of Service and Privacy Pages \r\n> Mobile Optimized\r\n> User reviews/Site reputation\r\n> Excessive 301 Redirects to Page\r\n> Link from Authority Sites\r\n> Schema.org Microformats\r\n> DMOZ Listed\r\n> Geo Targeting\r\n> Image Results\r\n> Number of Tweets\r\n> Number of Facebook Likes:\r\n> Facebook Shares\r\n> Pinterest Pins\r\n> Number of Google+1’s\r\n> Authority of Google+ User Accounts\r\n> Heading Tags Optimization\r\n> Targeted keywords are not placed into tags\r\n> Custom 404 Page \r\n> Blog Page Add for Article Upload Weekly Basic\r\n> Website Speed Development (Both Mobile and Desktop)\r\n\r\nPlease check via Google Developer -\r\nhttps://developers.google.com/speed/pagespeed/\r\nFavicon ADD.\r\n\r\nLots are pending……………..\r\n\r\nYou can see these are the things that need to be done properly to make the keywords others to get into the top 10 spot in Google Search & your sales Increase.\r\n\r\nSir/Madam, please give us a chance to fix these errors and we will give you rank on these keywords.\r\n\r\nPlease let me know if you encounter any problems or if there is anything you need. If this email has reached you by mistake or if you do not wish to take advantage of this free advertising opportunity, please accept my apology for any inconvenience caused and rest assured that you will not be contacted again.\r\n\r\nMany thanks for your time and consideration,\r\n\r\nLooking forward\r\n\r\nRegards\r\nScott Jensen\r\n\r\nDisclaimer: This is an advertisement and a promotional mail strictly on the guidelines of CAN-SPAM Act of 2003. We have clearly mentioned the source mail-id of this mail and the subject lines and they are in no way misleading in any form. We have found your mail address through our own efforts on the web search and not through any illegal way. If you find this mail unsolicited, please reply with &quot; unsubscribe&quot; in the subject line and we will take care that you do not receive any further promotional mail.\r\n', '2017-08-23 04:16:02', '2017-08-23 04:16:02'),
(721, 'Kiran', 'sidkiran@gmail.com', '7678667333', NULL, NULL, 'Customer', 'I am trying to call but noone is picking. Want to know about prices of re-bonding/smoothening', '2017-08-26 12:47:33', '2017-08-26 12:47:33'),
(722, 'Dechen', 'hapihelpas1@gmail.com', '719725978', NULL, NULL, 'Customer', 'Hi. I wanted to bleach my hair platinum blonde. Would you tell me how much it would cost? My hair is a little above the shoulder length', '2017-08-29 08:53:27', '2017-08-29 08:53:27'),
(723, 'LAXMI MANDAL', 'pooja.mandal27@gmail.com', '8375036803', NULL, NULL, 'Careers', 'I did beauty Therapist course from Orane Institute of Beauty and Wellness Lajpat Nagar Delhi, I also have 1-year experience, just looking job opportunity ', '2017-09-01 13:33:59', '2017-09-01 13:33:59'),
(724, 'navika', 'navikasharma9953@gmail.com', '9899365987', NULL, NULL, 'Careers', 'master in cosmetology from vlcc    and  i complete my post graduation  and  work in vlcc as hair faculty', '2017-09-01 15:38:54', '2017-09-01 15:38:54'),
(725, 'Yuan Chen', 't1hairs@gmail.com', '9876543210', NULL, NULL, 'Partner', 'Hello,\r\n\r\nHope you are doing great!\r\n \r\nMy name is Yuan Chen and I\'ve been working as a manager in Hair Extension Company. I\'ve been following your blog for quite some time now, and I love your content and the topics you share with your readers. Such a great blog and I do appreciate your insights and thoughts. \r\n\r\nI read your blog straight hair blog (http://glamstudios.in/blog/11687/things-people-with-straight-hair-will-understand) and I really enjoyed my self during reading this article. I also write one blog on straight hair (https://www.t1hair.com/straight-hair). If you like my work please share it with your readers they may love this.\r\n\r\nThank you so much and hope to hear from you soon\r\n \r\nLet me know your views?\r\nYuan Chen.', '2017-09-02 11:52:48', '2017-09-02 11:52:48'),
(726, 'nosheen khan', 'khan.nisha786@yahoo.com', '9818855259', NULL, NULL, 'Customer', 'i like your salon', '2017-09-03 12:11:01', '2017-09-03 12:11:01'),
(727, 'kaizad', 'kaizadh@getnatty.com', '9099911910', NULL, NULL, 'Partner', 'Hi. We are launching a nationwide social movement to create livelihood opportunities for the artisans of kutch and we need your involvement to help us spread the word. Would you be up for it?', '2017-09-05 18:28:02', '2017-09-05 18:28:02'),
(728, 'Arnaud Fischer', 'arnaud@adtechhub.com', '3109931184', NULL, NULL, 'Partner', 'Hello, I am selling the glambook.com domain name. I thought I would reach out. You can reach me at arnaud@adtechhub.com . Regards -arnaud', '2017-09-07 00:12:51', '2017-09-07 00:12:51'),
(729, 'Arnaud Fischer', 'arnaud@adtechhub.com', '3109931184', NULL, NULL, 'Partner', 'glams.com & glambook.com domain names for sell\r\n', '2017-09-07 13:58:08', '2017-09-07 13:58:08'),
(730, 'Moiz Attarwala', 'moizkattar@gmail.com', '8879271661', NULL, NULL, 'Careers', 'This is with regards to the job openings at ePayLater & I would like to express my sincere interest in the same.\r\n\r\nI, Moiz Attarwala, am a graduate from K. J. Somaiya College of Engineering, Mumbai with major in Electronics and Telecommunication Engineering.\r\n\r\nWith 2+ years of professional work experience, I have a penchant for continuous learning & problem solving which is coupled with an innate desire to make a difference. This is what always drives me to pursue a career in Data Analytics & Marketing.\r\n\r\nI have been professionally trained in all verticals of Digital Marketing including SEO, SEM, SMO, ORM & Google Analytics. I have been strategising, planning and executing media campaigns for clients in sectors like BFSI, Lifestyle, Nutrition & Real Estate. Along with marketing, I have also been a part of various Data Analytics projects including website free text search, sales revenue prediction etc. I have also completed an advance level certified course on Data Analytics using R from MITx which includes working knowledge of Regression, Classifications, Bag of words, Optimization & Visualisation. I have also been exposed to Advance Excel including Macros & VBA.\r\n\r\nAs a student I was always at the forefront in managerial roles. Therefore, I was chosen as the PR & Marketing Head of the Students\' Council at K. J. Somaiya COE. During my tenure as the college head, I was responsible for sponsorships & PR for all major college events & festivals with budget upwards of ₹15 lakhs. Apart from this, I\'m also a fitness enthusiast, having played Basketball at a National Level.\r\n\r\nI bring diversity & dependability & if recruited, I am prepared to meet every challenge head-on, keep on learning & make a lasting impact through my distinct line of thought & action. I believe that my attitude to excel in all activities I engage in, communication skills, prime role in conceptualization of ideas to successful execution is what would deem me fit for your organisation.', '2017-09-14 14:22:58', '2017-09-14 14:22:58'),
(731, 'Deepak Rajgar', 'rajgar.deepak@gmail.com', '9004631743', NULL, NULL, 'Careers', 'DEEPAK PRATAP RAJGAR.                                                          \r\n6/ HANUMAN SEVA CO-OP.,\r\nSOCIETY, J.M. ROAD,\r\nSARVODAY NAGAR, \r\nBHANDUP (WEST)\r\nMUMBAI – 400 078.\r\nMobile No: (+91) 9004631743.\r\nE-mail id: rajgar.deepak@gmail.com.\r\n                rajgardeepak@yahoo.com.\r\n\r\n						       							\r\nQUALIFICATION		\r\n\r\nYear	\r\nSchool, College, University or other Institution	\r\nExamination	\r\nStatus\r\n\r\nJune\r\n2012	\r\nPeriyar University.	\r\nT.Y.BCOM	       \r\n       Pass\r\n\r\nMar\r\n2005	National Education Society High School & Jr. College. (Mumbai Board)\r\n	\r\nHSC	\r\n       Pass\r\n\r\nMar\r\n2003	\r\nNational Education Society High School & Jr. College. (Mumbai Board)\r\n	\r\n\r\n          SSC	\r\n\r\n       Pass\r\n\r\n\r\nCOMPUTER SKILLS:\r\n•	Certification in Advanced Excel.\r\n\r\nSr.Team Leader for Samsung Service Desk (Forte InfoTech) (2012 Jan-Till date.)\r\n\r\n•	Manage & Motivate team of 30 agents. \r\n•	Ensure that the Service Desk is fully using appropriate knowledge management tools and practices in order to provide a more effective and efficient service to customers.\r\n•	Contribute to the success of the business and assist in improving the overall customers experience within the team.\r\n•	Ensure that the strategy and business plan are understood by all the team. \r\n•	Meet goals and KPIs as set by the Process manager.\r\n•	Ensure that team’s KPIs are monitored, actions are taken, evaluated accordingly and delegated properly.  \r\n•	Review aspects for improvement with own practices and processes and ensure that   communication takes place across the whole area of responsibility.\r\n\r\n\r\n\r\nTeam Leader for MTNL Customer care services,NAAPTOL E-Commerce Process (Spice BPO PVT LTD) for  (Apr. 2008-2011Dec.)\r\n• Resolving the customer’s query online.\r\n• Providing system related training for the new agents.\r\n• Handling the floor & looking after the break’s\r\n• Monitoring the RTM (Real Time Management)\r\n• Handling Escalation Calls & Mails.\r\n• Reverting through mails for suggestions & complaints. \r\n• Conducting trainings of new updates for process change.\r\n• Co-ordinate with client for resolving the customer’s query online.\r\n• Handling team of 25 People grooming and coaching them.\r\n• Helping process by running project to achieve full quality on call.\r\n• Achieving the floor SLA (Service level Agreement).\r\n• Putting the agent in PIP (Performance Implement Plan) to improve their quality & AHT \r\n   (Average Handling Time).\r\n• Making the review of my team weekly wise.\r\n\r\n\r\n\r\nPERSONAL DETAILS		\r\nDate of Birth			:	Nov.22nd 1985.\r\nFather’s name			:	Pratap D. Rajgar.\r\nFather’s Occupation		:	Sr. Sous Chef (Kohinoor Continental).\r\nPassport No.			:	Z2704878           \r\nPan No.                                       	:            AZQPR5013D\r\n\r\nI hereby declare that the information in this document is correct and true to the best of my knowledge.\r\n\r\nPLACE	:       	\r\nDATE		:\r\n            \r\nSIGN	: DEEPAK P. RAJGAR.\r\n', '2017-09-16 09:06:32', '2017-09-16 09:06:32'),
(732, 'Dhruv', 'dhruv.madan@henkel.com', '84083487', NULL, NULL, 'Partner', 'Hello\r\n\r\nI am Dhruv from Henkel APAC, Singapore. Henkel is an MNC that deals with adhesives, laundry and beauty care products. I think there are some potential use cases and or collaborations for Henkel with your company. Could you please send me your company’s presentation so that we can look through?\r\n \r\nThanks and Regards\r\nDhruv Madan Gopal\r\n', '2017-09-21 02:14:20', '2017-09-21 02:14:20'),
(733, 'ASHWANI KUMAR GAUTAM', 'ASHWANIGAUTAM04@OUTLOOK.COM', '9999144647', NULL, NULL, 'Partner', 'WE WANT TO BE WORK WITH YOUR BRAND CAN YOU UPDATE US HOW TO SUBSCRIBE AND WHAT WILL BE THE CHARGES', '2017-09-22 17:59:59', '2017-09-22 17:59:59');
INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `city`, `area`, `purpose`, `contact_text`, `created_at`, `updated_at`) VALUES
(734, 'Mobasshir Khan', 'mobasshirkhan@outlook.com', '9507550116', NULL, NULL, 'Careers', 'BUSINESS OPERATIONS MANAGER\r\n\r\nI bring with me an experience of 16 months as an organized and detail oriented work ethic to the position.\r\n \r\nExperience - Initially , I imparted training to candidates under Electronics system design and manufacturing(ESDM),Pradhan Mantri Kaushal Vikas Yojna(PMKVY) Programs ,with, National Skill Development Corporation being the guardian body.\r\nLater , I was handed over the charge of all the end to end operations of all the aforesaid projects and corporate projects of Reliance Resq and one CSR project of Whirlpool of India ltd. The responsibilities include Mobilization of candidates , Training according to “National Occupational Standards” and Qualification pack , Creation of Placement opportunities  ,Liaison with industry partners etc\r\n \r\nAnalytical Skills - My responsibilities required of me, to understand the needs of industry so as to satisfy our customers with state of the art training which meet the demands of the current time. Therefore data analysis was a daily routine .\r\nTaking a step further , I helped to reduce the employee drop out rate from Lava International Mobile Factory by conducting orientation programs  before interviews (Lava was partner for "Earn while you learn" program .\r\n \r\nCollaborative Skills - I was the first employee of my company to start work in Patna on a long term Plan . Responsibilities were to take start a CSR project and create placement opportunities for candidates trained in Bihar .\r\nWithin 15 days of my work, our company had candidates placed in LG electronics, Reliance Resq , Whirlpool of India and IFB electronics .This was my first exposure to business to business operations and it led to formation of long term relationships with the big guns of consumer electronics sector\r\n \r\nInterpersonal Skills - Handling operations requires of a professional to be good manager and an excellent coordinator . I have always tried to improve my inherent interpersonal skills .\r\nAs a token of recognition of this quality , I was awarded incentives for being a team player and helping the new employees to help become a family .\r\n \r\nI have attached my resume and i look forward to hear from “Glamstudios.” .Thank you for your time and consideration.\r\n', '2017-09-22 18:28:32', '2017-09-22 18:28:32'),
(735, 'himanshi', 'himanshi.sharma14190@gmail.com', '9205199676', NULL, NULL, 'Customer', 'Hair Smoothning', '2017-09-23 07:09:00', '2017-09-23 07:09:00'),
(736, 'Rohit', 'i.rohit@cashkaro.com', '9518634100,8950849110', NULL, NULL, 'Partner', 'hello there,\r\n                hi this is Rohit from cashkaro.com ,we are India\'s largest cashback &coupon website.lets have a discussion ,i can save you thousands & more on premium brands beauty products & much more . lets have a discussion over phone.', '2017-09-29 07:20:28', '2017-09-29 07:20:28'),
(737, 'Divita', 'divitasharma.imtn@gmail.com', '7709105142', NULL, NULL, 'Careers', 'Hello Sir/Ma\'am,\r\n\r\nI am a student of IMT Nagpur and a member of the placements committee and would like to take this opportunity to build a campus corporate relationship between your organisation and my institute.\r\n\r\nHoping for a positive response, looking forward to connecting with you sir.\r\n\r\nRegards,\r\nDivita', '2017-10-11 08:33:17', '2017-10-11 08:33:17'),
(738, 'Sneha Chandi', 'snehachandi.101@gmail.com', '9999333290', NULL, NULL, 'Partner', 'Hi,\r\n\r\nHope you are doing well.\r\n\r\nI am interested in opening a franchise of Glam Studios nearby sector 40, Gurgaon, Haryana. Kindly provide the details of concerned personnel for further inquiries or revert on +919999333290.\r\n\r\nThanks,\r\nSneha', '2017-10-16 17:49:51', '2017-10-16 17:49:51'),
(739, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:35', '2017-10-24 16:38:35'),
(740, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:38', '2017-10-24 16:38:38'),
(741, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:39', '2017-10-24 16:38:39'),
(742, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:41', '2017-10-24 16:38:41'),
(743, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:41', '2017-10-24 16:38:41'),
(744, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:41', '2017-10-24 16:38:41'),
(745, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:45', '2017-10-24 16:38:45'),
(746, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:45', '2017-10-24 16:38:45'),
(747, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:46', '2017-10-24 16:38:46'),
(748, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:47', '2017-10-24 16:38:47'),
(749, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:47', '2017-10-24 16:38:47'),
(750, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:51', '2017-10-24 16:38:51'),
(751, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:52', '2017-10-24 16:38:52'),
(752, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:52', '2017-10-24 16:38:52'),
(753, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:53', '2017-10-24 16:38:53'),
(754, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:38:54', '2017-10-24 16:38:54'),
(755, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:06', '2017-10-24 16:39:06'),
(756, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:09', '2017-10-24 16:39:09'),
(757, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:12', '2017-10-24 16:39:12'),
(758, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:13', '2017-10-24 16:39:13'),
(759, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:13', '2017-10-24 16:39:13'),
(760, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:14', '2017-10-24 16:39:14'),
(761, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:14', '2017-10-24 16:39:14'),
(762, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:20', '2017-10-24 16:39:20'),
(763, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:21', '2017-10-24 16:39:21'),
(764, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:21', '2017-10-24 16:39:21'),
(765, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:22', '2017-10-24 16:39:22'),
(766, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:22', '2017-10-24 16:39:22'),
(767, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:22', '2017-10-24 16:39:22'),
(768, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:23', '2017-10-24 16:39:23'),
(769, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:39:59', '2017-10-24 16:39:59'),
(770, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:40:00', '2017-10-24 16:40:00'),
(771, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:40:00', '2017-10-24 16:40:00'),
(772, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:40:01', '2017-10-24 16:40:01'),
(773, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:40:01', '2017-10-24 16:40:01'),
(774, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:40:01', '2017-10-24 16:40:01'),
(775, 'Prince Garg', 'princeg5006@gmail.com', '9215392100', NULL, NULL, 'Careers', 'I have nearly 4 year experience as Business development executive.', '2017-10-24 16:40:02', '2017-10-24 16:40:02'),
(776, 'Test', 'feeroz.a.khan@gmail.com', '1111111111', NULL, NULL, 'Customer', 'test Mail', '2017-10-26 07:38:30', '2017-10-26 07:38:30'),
(777, 'Deepa Verma', 'verma.deepa0911@gmail.com', '9868553477', NULL, NULL, 'Customer', 'Hi,\r\n\r\nPlease forward to your CEO\'S & Founder :--\r\n\r\nTaking a career break or sabbatical is not a sin. The culture of looking down on people with career gaps should stop. Period. \r\n\r\nMany have asked me to write about this topic, for they are facing discrimination inspite of having genuine reasons to take a break. This is unfortunate. What we should assess is the capability, skill & attitude of candidates rather than rejecting them because of gaps. \r\n\r\nShould we just work till we retire? Should there be nothing else in life apart from earning salaries & leading a dull life? Why should we frown upon people who want to go on an uncharted journey, to work at an NGO, to act in theatre or to live in the wild? You should be appreciating their guts to follow their dreams. \r\n\r\nWhy can\'t people quit to take care of their children/family when in need? It\'s the most human thing to do, no?\r\n\r\nLet\'s not set a culture where we tell people how to live. Let everyone be free to tell in interviews that they took a break for a reason. There is nothing wrong. Tell them to judge you on the skills required for the job, that\'s what really matters right?\r\n\r\nFor all hiring managers/recruiters-next time you see someone with a gap. Don\'t just reject their resumes. Understand why? Respect their choices in life.I think they need to work on the same else their start up will not grow. She don\'t have manners to talk (Sadia) & trying to humiliating the employees.She needs to learn if she wants to reject any candidate in terms of experience or salary (If not able to pay) so simply say no not by punching on one point why u left previous job.I am sure soon this start up will fall down.I wish.\r\n', '2017-10-27 17:51:37', '2017-10-27 17:51:37'),
(778, 'MONIKA', 'monikaprsd7@gmail.com', '8587881566', NULL, NULL, 'Partner', 'looking for franchise ', '2017-11-01 09:07:28', '2017-11-01 09:07:28'),
(779, 'rajendra venturi', 'rajendraventuri@gmail.com', '9985062121', NULL, NULL, 'Customer', 'Non refund of money deducted at your glam studio MalviyaNagar', '2017-11-05 06:00:23', '2017-11-05 06:00:23'),
(780, 'samir Partap', 'spartap@brainwiresinfotech.com', '9891950123', NULL, NULL, 'Partner', 'Hi,\r\n\r\nWe are a manpower consulting firm and would love to empanel with you to provide you hiring support with FREE 3 months replacement.\r\n\r\nRegards\r\nSamir Partap\r\n9891950123\r\n\r\nDirector\r\nBrainwires infotech Pvt. Ltd', '2017-11-11 09:59:38', '2017-11-11 09:59:38'),
(781, 'Aishwarya', 'aishwarya.sharma822@gmail.com', '9536936336', NULL, NULL, 'Customer', 'I am looking for hair smoothening services for myself. I have middle length hair, please tell me about the charges for the same.', '2017-11-13 06:59:10', '2017-11-13 06:59:10'),
(782, 'Sunita Kumari', 'seo.webranked5@gmail.com', '9968514181', NULL, NULL, 'Partner', 'Are you looking for promote your website to grow your business on Google and top search engines, increase traffic on your website and want to get you latest as #! Page? \r\n\r\nWe offer Advanced SEO Techniques, Custom SEO, SMO & Link Building Packages. Let Us Bring Your Business On Top Of Google; We Have Highly Experienced Team Who Ensures Best SEO Results With ROI Focused. We give you 100% guaranty to grow you Business and increase traffic as you website and get website as #1 Page.', '2017-11-14 12:46:42', '2017-11-14 12:46:42'),
(783, 'Arpit', 'arpit.shah@icicisecurities.com', '8976611115', NULL, NULL, 'Partner', 'Hi Team,\r\n\r\nI am writing to you explore the possibilities for our elite customer of ICICI Securities. \r\n\r\nKindly share contact coordinates for further communication. \r\n\r\nRegards,\r\nArpit Shah\r\nMarketing\r\nICICI Securities Limited\r\nDirect: +91 22 40701437\r\nMobile: +91 89766 11115\r\n', '2017-11-16 09:46:11', '2017-11-16 09:46:11'),
(784, 'Nitin Arora', 'nitin_arora89@yahoo.com', '9891319809', NULL, NULL, 'Partner', 'Dear Glam Studios,\r\n\r\nKindly provide me the details of franchise.\r\n\r\nRegards,\r\n\r\nNitin', '2017-11-23 18:41:37', '2017-11-23 18:41:37'),
(785, 'Monica', 'monica.patole@gmail.com', '8956509039', NULL, NULL, 'Customer', 'Hi.. I want to know if there is any discount on hair services if I do 3 to 4 different ones..', '2017-11-28 09:47:59', '2017-11-28 09:47:59'),
(786, 'veena shrivastava', 'goldvee@gmail.com', '9953151205', NULL, NULL, 'Partner', 'hallo,\r\ni am from kanpur utterpradesh , pls. share with me terms and conditions for partenership.  have sufficient space to open glam studio.', '2017-11-28 16:18:53', '2017-11-28 16:18:53'),
(787, 'vinayak bhardwaj', 'vinayakbhardwaj1994@gmail.com', '+916280177233', NULL, NULL, 'Careers', 'Hello sir/mam,\r\nmy name is Vinayak bhardwaj from noida. i am very passionate to work with Startup. i have one year of experience in startup. so i know how to manage all the responsibility while playing your own role as well. and work as a team. and while i was reading the article about the startups i like your idea and willingly want to work with you.\r\nRegards \r\nvinayak bhardwaj', '2017-11-29 09:53:17', '2017-11-29 09:53:17'),
(788, 'Saikat Debnath', 'debnath.saikat76@gmail.com', '8892256291', NULL, NULL, 'Careers', 'Hi,\r\n      Please accept this letter as my application for QA Engineer position in your firm. I hold a Bachelor’s degree in Computer Science with  3.10 years of experience in Software Testing and QA(Manual and Automation). \r\n       \r\nLet me know if any opening for QA position\r\n\r\nThanks!\r\nRegards\r\nSaikat Debnath', '2017-11-30 05:36:51', '2017-11-30 05:36:51'),
(789, 'Srinivas Rao Voleti', 'srinivasrao.voleti@khushiadvertising.com', '8019560186', NULL, NULL, 'Partner', 'Dear Ma\'am / Sir, \r\n\r\nGreetings from Khushi Advertising…                                                                                                                                              \r\n \r\nJust to introduce ourselves - Khushi Advertising Ideas Pvt. Ltd. is a leading ambient media agency in India. Starting its operations from Ahmedabad, Khushi has been exponentially growing having its own offices across 33 major cities in India. We provide 360 degree ambient solution to our clients wherein we ensure maximum engagement, brand visibility and lead generation through our media.\r\n \r\nKhushi furnishes its advertisers with a unique mix of exciting ambient spaces & innovations in leading Malls, Multiplexes, Hypermarkets, Departmental Stores, Coffee shops, Gymnasiums, etc. across India.\r\n \r\nKhushi dominates the cinema advertising industry with major market share in ad inventory across all multiplex chains.\r\n \r\nWith wide array of advertising spaces, innovative ideas and creativity Khushi contributes growth for all its clients through targeted & innovative communications plans across India.\r\n \r\nA Feather in our cap is Experiential platforms -  We  have a tie up with all Cafes & QSRs, Departmental stores  (Shoppers Stop, Pantaloons, Westside, Lifestyle, etc.) , Bookstores , Airlines, Transit media ( Cabs)  via which we aim to give focused Target audience to our clients/brands by creating positive disruption.\r\n \r\nKindly let us know when can we arrange a meeting at any time convenient to you to explore the possibilities of working together – Attached herewith Credentials for your kind perusal.\r\n \r\nMeeting Agenda – to discuss on :\r\n \r\nCinema advertising – We are exclusively tied up with Multiplexes chains like Inox, Cinepolis, Fun & Big Cinemas and we own 85 % slides media right across all major chains Pan India  and can help you with the best mix chains plan Pan India.\r\n \r\nMall/ Multiplex branding –we have exclusive branding sites across major cities.\r\n \r\nAmritsar Airport branding opportunities– We own the media rights of all external hoardings at Amritsar International Airport & Chandigarh Airport.\r\n \r\nBranding at Experiential platforms – we can help with prominent branding options at Bookstores/departmental stores/gyms etc..,      \r\n \r\nLooking forward to meet you soon. \r\n \r\nWarm Regards,\r\n\r\nSrinivas Rao Voleti | Manager - Corporate Sales | +91 8019560186 / 9948330429 | www.khushiadvertising.com', '2017-12-01 05:19:53', '2017-12-01 05:19:53'),
(790, 'Himanshu', 'kumarhimanshu.com613@gmail.com', '7982106270', NULL, NULL, 'Partner', 'Hi,\r\n\r\ni just want to know that what all formalities and requirement do we need to follow to become a partner with glam studios.\r\n\r\nThanks.', '2017-12-02 09:20:35', '2017-12-02 09:20:35'),
(791, 'ammii', 'amsingh1296@gmail.com', '9711418296', NULL, NULL, 'Partner', 'Hello Dear,\r\n\r\n I Am Ammii Please Sent Me Your Product And Product Item', '2017-12-05 06:14:41', '2017-12-05 06:14:41'),
(792, 'ammii', 'amsingh1296@gmail.com', '9711418296', NULL, NULL, 'Partner', 'Hello Dear,\r\n\r\n I Am Ammii Please Sent Me Your Product And Product Item', '2017-12-05 06:14:41', '2017-12-05 06:14:41'),
(793, 'RADHIKA', 'HGT@GMAIL.COM', '9711086565', NULL, NULL, 'Customer', 'BOOK appointment ', '2017-12-06 09:03:50', '2017-12-06 09:03:50'),
(794, 'RADHIKA', 'HGT@GMAIL.COM', '9711086565', NULL, NULL, 'Customer', 'BOOK appointment ', '2017-12-06 09:03:52', '2017-12-06 09:03:52'),
(795, 'Vandna Dhariwal', 'vandna1701@gmail.com', '8860232924', NULL, NULL, 'Careers', 'Hi', '2017-12-07 13:47:26', '2017-12-07 13:47:26'),
(796, 'Abhishank Jain', 'abhishank@furyfest.in', '8800219630', NULL, NULL, 'Partner', 'Hi there,\r\nI am the founder the of Achilles Racing Club. We are organizing a techno-cultural event "FURY FEST" in Greater Noida in the month of February. We are looking for an effectual partnership with GlamStudios. \r\n', '2017-12-08 21:13:12', '2017-12-08 21:13:12'),
(797, 'Bhawna', 'bhawna.meena89@gmail.com', '9599745482', NULL, NULL, 'Customer', 'I want to know about  the packages you are offering.', '2017-12-09 06:27:11', '2017-12-09 06:27:11'),
(798, 'Urvi Shah', 'urvi.rotaract3142@gmail.com', '8850187121', NULL, NULL, 'Partner', 'Warm Rotaract Greetings!!!\r\n\r\nWe, Rotaract district 3142, are the youth wing of Rotary International district 3142. \r\nRID 3142 comprises of the geographical areas of Navi Mumbai, Thane, Kalyan-Dombivli & Ambernath-Badalapur, with 55+ clubs strength, and 50+ members in each club, with members in the age group of 18-30 yrs.\r\n\r\nAs a district initiative, we organize Rotaract Entertainment Destination (RED) annually. \r\nIt is a cultural fest, with events ranging from debates, poetry, sculpting, doodling, body painting, wall art, cosplay, open mic, treasure hunt, culinary competitions, singing, dance, fashion shows, talent rounds etc.  \r\nThis is one of the biggest initiatives of RID 3142, in which four zonal groups compete with each other in 20+ events over two days, for the magnificient RED trophy.\r\nYou can have glimpse of RED 2016 here Day 1 & Day 2\r\n\r\nYou can also checkout our website & social media handles for the same.\r\n\r\nhttps://www.rotaract3142.org/\r\nhttps://www.instagram.com/rotaract3142/?hl=en \r\nhttps://www.facebook.com/rotaract3142/ \r\n\r\nRED 2017 is happening on 23-24th December, 2017 at RR Education Ground, Mulund (E). Rolling audience of 2500+ is expected for the RED 2017.\r\n\r\nLooking forward to partner with you for the most exciting event of the Rotaract year.\r\nPlease find the attached file for the specific details of deliverables.\r\n\r\nApart from title partner, co-partner & event partner, we do customize our deliverables, as per the marketing needs and strategies of our prospective partners. This can be discussed in person.\r\nDo let me know if you\'re interested, so that we can meet & discuss regarding the same.\r\n\r\nLooking forward to a positive reply. :)\r\n\r\nRegards,\r\n\r\nRtr. Urvi Shah \r\nDirector-PR & Marketing \r\nRID 3142\r\n#Ekatra3142\r\nContact: +91-8850187121', '2017-12-11 08:15:37', '2017-12-11 08:15:37'),
(799, 'shivani aggarwal', 'shivani11aggarwal@yahoo.co.in', '7011236143', NULL, NULL, 'customer', 'please call me back soon', '2017-12-16 06:52:06', '2017-12-16 06:52:06'),
(800, 'shivani aggarwal', 'shivani11aggarwal@yahoo.co.in', '7011236143', NULL, NULL, 'customer', 'please call me back soon', '2017-12-16 06:53:10', '2017-12-16 06:53:10'),
(801, 'SHAILENDRA SHARMA', 'lfpmkt@siliconcomnet.com', '7042330761', NULL, NULL, 'careers', 'Dear Sir/Ma\'am,\r\nWe are authorize dealer of EPSON PLOTTER. We have wide range of EPSON PLOTTER for Photography, Studio, Signage. Do contact me for any kind of requirement.', '2017-12-19 07:02:11', '2017-12-19 07:02:11'),
(802, 'Hemant ', 'seo@wnt.co.in', '8447392187', NULL, NULL, 'careers', ' Increase Your Website Ranking And Traffic\r\n\r\nWe can put your website on 1st page of Google to drive relevant traffic to your site. Let us know if you would be interested in getting detailed proposal. We can also schedule a call & will be pleased to explain our services in detail. We look forward to hearing from you soon. Thanks!\r\n', '2017-12-21 06:22:49', '2017-12-21 06:22:49'),
(803, 'sufiya naseem', 'sufiyanaseem201@gmail.com', '9958219489', NULL, NULL, 'customer', 'Looking for get 2 services for 499 ', '2017-12-21 11:27:21', '2017-12-21 11:27:21'),
(804, 'lavesh chopra', 'laveshchopra@gmail.com', '9958074869', NULL, NULL, 'customer', 'I want a package for myself as groom. I like to check if you have O3+ Facial to bring glow on my skin.', '2017-12-22 10:29:40', '2017-12-22 10:29:40'),
(805, 'Himanshu Jain', 'himanshujain171@gmail.com', '9818079184', NULL, NULL, 'partner', 'I want Glam Franchise for Gurugram location for my salon. please call ', '2017-12-26 17:32:48', '2017-12-26 17:32:48'),
(806, 'Naveen Kumar', 'nvnkumar987@gmail.com', '9560411055', NULL, NULL, 'partner', 'Regarding:- Franchise of Glam Studios\r\n\r\nThanks', '2017-12-27 08:55:31', '2017-12-27 08:55:31'),
(807, 'Alok Khandelwal', 'taraashsalon@yahoo.com', '9886623000', NULL, NULL, 'partner', 'I am interested in exploring salon partnership opportunities with you in Bangalore. Please can you call me or provide your email ID that I can send details to? ', '2017-12-27 13:17:11', '2017-12-27 13:17:11'),
(808, 'Reyanna Lewis', 'reyannalewis.mkt@gmail.com', '9718099999', NULL, NULL, 'partner', 'First page rankings on Google\r\n\r\nWe can put your website on 1st page of Google to drive relevant traffic to your site. Let us know if you would be interested in getting detailed proposal. We can also schedule a call & will be pleased to explain our services in detail. We look forward to hearing from you soon. Thanks!\r\n', '2017-12-28 09:45:03', '2017-12-28 09:45:03'),
(809, 'Hemant ', 'seo@wnt.co.in', '8447392187', NULL, NULL, 'careers', ' Increase Your Website Ranking And Traffic\r\n\r\nWe can put your website on 1st page of Google to drive relevant traffic to your site. Let us know if you would be interested in getting detailed proposal. We can also schedule a call & will be pleased to explain our services in detail. We look forward to hearing from you soon. Thanks!\r\n', '2017-12-29 10:28:32', '2017-12-29 10:28:32'),
(810, 'Cristina Matthews', 'matthewscristina12@gmail.com', '206-309-5272', NULL, NULL, 'careers', 'Hi\r\nWe can help your website to get on first page of Google and increase the number of leads and sales you are getting from your website. Please email us back for full proposal.\r\n\r\nBest Regards\r\nCristina', '2018-01-02 10:35:11', '2018-01-02 10:35:11'),
(811, 'Ashish', 'test@test.com', '1234567890', NULL, NULL, 'BASIC COSMETOLOGY COURSE', 'test mail for course', '2018-01-02 12:50:33', '2018-01-02 12:50:33'),
(812, 's589790', 'sourav', '6777487696', NULL, NULL, 'ADVANCED COSMETOLOGY COURSE', 'hh', '2018-01-02 14:04:41', '2018-01-02 14:04:41'),
(813, 's589790', 'sourav', '6777487696', NULL, NULL, 'ADVANCED COSMETOLOGY COURSE', 'hh', '2018-01-02 14:04:48', '2018-01-02 14:04:48'),
(814, 's589790', 'sourav', '6777487696', NULL, NULL, 'ADVANCED COSMETOLOGY COURSE', 'hh', '2018-01-02 14:04:53', '2018-01-02 14:04:53'),
(815, 's589790', 'sourav', '6777487696', NULL, NULL, 'ADVANCED COSMETOLOGY COURSE', 'hh', '2018-01-02 14:04:53', '2018-01-02 14:04:53'),
(816, 's589790', 'sourav', '6777487696', NULL, NULL, 'ADVANCED COSMETOLOGY COURSE', 'hh', '2018-01-02 14:04:53', '2018-01-02 14:04:53'),
(817, 's589790', 'sourav', '6777487696', NULL, NULL, 'ADVANCED COSMETOLOGY COURSE', 'hh', '2018-01-02 14:04:53', '2018-01-02 14:04:53'),
(818, 's589790', 'sourav', '6777487696', NULL, NULL, 'BASIC COSMETOLOGY COURSE', 'hh', '2018-01-02 14:04:59', '2018-01-02 14:04:59'),
(819, 'Test', 'sourav@zaping.in', '8798677898', NULL, NULL, 'Advanced Cosmetology Course', 'hello', '2018-01-02 14:15:09', '2018-01-02 14:15:09'),
(820, 'Sayali Palav', 'sayali.p@arguscmpo.com', '7977934150', NULL, NULL, 'partner', 'MEDIA PARTNERSHIP\r\n\r\nDear Aggregator,\r\n\r\nWe would like to invite you to be the media partner for Salonex 2018, an exclusive trade show catering to the salon industry scheduled on 27th - 28th February 2018 at Nehru Centre, Worli, Mumbai.\r\n\r\nWe would like to promote this trade show through your online channel inviting salon owners for participation, look and learn sessions and competitions. As a barter, we will give you a free stall to promote your online services. You could get many subscriptions on site as you would have a huge targeted audience at your disposal to interact with.\r\n\r\nMay we know the name and contact details of the person to get in touch with for more discussions on the subject.\r\n\r\nWarm regards,\r\n\r\nSayali Palav\r\n\r\nArgus CMPO - Strategic Consultants for Salonex\r\n\r\n', '2018-01-04 09:20:34', '2018-01-04 09:20:34'),
(821, 'subhi', 'riteshr274@gmail.com', '9887065530', NULL, NULL, 'careers', 'my sister is very interested in this field, she want to became a famous cosmetologist.please provide course related all information for me', '2018-01-05 09:31:39', '2018-01-05 09:31:39'),
(822, 'Muskan Bansal', 'muskanbansal98@gmial.com', '9950503540', NULL, NULL, 'careers', 'I am Muskan Bansal, pursuing my B.E. in Information Technology, 3rd Semester from MBM Engineering College, Jodhpur (Rajasthan)\r\nI am looking for industry internship, at the end of 4th semester, for the duration of 2 months tentatively in June-July.  I am an intermediate in C Programming, C++ and a beginner in Java, Python, and XHTML. Apart from this I have experience in Arduino Coding and have done few projects related to Robotics and Internet of things.\r\nI have attached my resume with the mail.Here are links to my social media profiles -\r\nLinkedIn : https://www.linkedin.com/in/muskan-bansal-b9b758144/\r\nFacebook: https://www.facebook.com/muskan.bansal.165\r\nWebPage: https://muskan1998.github.io/muskanbansal98/\r\n\r\nLooking forward to a reply.\r\n\r\nTHANKYOU. \r\n', '2018-01-10 04:50:39', '2018-01-10 04:50:39'),
(823, 'Muskan Bansal', 'muskanbansal98@gmial.com', '9950503540', NULL, NULL, 'careers', 'I am Muskan Bansal, pursuing my B.E. in Information Technology, 3rd Semester from MBM Engineering College, Jodhpur (Rajasthan)\r\nI am looking for industry internship, at the end of 4th semester, for the duration of 2 months tentatively in June-July.  I am an intermediate in C Programming, C++ and a beginner in Java, Python, and XHTML. Apart from this I have experience in Arduino Coding and have done few projects related to Robotics and Internet of things.\r\nI have attached my resume with the mail.Here are links to my social media profiles -\r\nLinkedIn : https://www.linkedin.com/in/muskan-bansal-b9b758144/\r\nFacebook: https://www.facebook.com/muskan.bansal.165\r\nWebPage: https://muskan1998.github.io/muskanbansal98/\r\n\r\nLooking forward to a reply.\r\n\r\nTHANKYOU. \r\n', '2018-01-10 04:50:40', '2018-01-10 04:50:40'),
(824, 'udit sharma', 'operations@goswag.in', '9958330058', NULL, NULL, 'partner', 'We are launching an app for Salons and Spas, where customer can book online and avail services.\r\nOur app will be launched in Feb and we would love to get you guys on board, if we can get a number or an email where we can send some details that would be great.\r\nHope to hear from you guys.\r\n', '2018-01-11 05:06:07', '2018-01-11 05:06:07'),
(825, 'Praharsha', 'recruitment@anoos.com', '9959091122', NULL, NULL, 'training', 'Greetings from Anoos!\r\n\r\nWe are looking forward to have association with your organisation for placements of skilled manpower.\r\n\r\nOur Company Profile is as mentioned below,\r\n\r\nAnoo\'s Electrolysis & Obesity P Ltd was founded in the year 1982, Hyderabad based. Anoo\'s is one of the country\'s oldest name in Clinical and Salon Services. Initially developed as a family venture, the company has today grown into a full-fledged professional set up with presence in 28 main centers at prime spots like Hyderabad, Vijayawada, Guntur, Rajahmundry, Visakhapatnam, Karimnagar, Warangal, Tirupathi, Chennai, Bangalore, Gulbarga, Bellary and America (Florida, USA). Anoo\'s has a current work force of more than 450 professionally trained estheticians and technicians.\r\n\r\nWe have a requirement of 5-7 Unisex Hairdressers for our branches in Tirupati, Hanamkonda, Karimnagar, Bellary.\r\n\r\nSalary range - Rs 15000 to Rs 23000 + Incentives. ( Food and Accommodation will be provided for those willing to relocate )\r\n\r\nPlease reach us at the below number,  if there is a batch of Hairdressers available for placements.\r\n\r\n\r\n-- \r\nPraharsha\r\n9959091122', '2018-01-12 06:39:06', '2018-01-12 06:39:06'),
(826, 'Praharsha', 'recruitment@anoos.com', '9959091122', NULL, NULL, 'Advance Hair Course', 'Greetings from Anoos!\r\n\r\nWe are looking forward to have association with your organisation for placements of skilled manpower.\r\n\r\nOur Company Profile is as mentioned below,\r\n\r\nAnoo\'s Electrolysis & Obesity P Ltd was founded in the year 1982, Hyderabad based. Anoo\'s is one of the country\'s oldest name in Clinical and Salon Services. Initially developed as a family venture, the company has today grown into a full-fledged professional set up with presence in 28 main centers at prime spots like Hyderabad, Vijayawada, Guntur, Rajahmundry, Visakhapatnam, Karimnagar, Warangal, Tirupathi, Chennai, Bangalore, Gulbarga, Bellary and America (Florida, USA). Anoo\'s has a current work force of more than 450 professionally trained estheticians and technicians.\r\n\r\nWe have a requirement of 5-7 Unisex Hairdressers for our branches in Tirupati, Hanamkonda, Karimnagar, Bellary.\r\n\r\nSalary range - Rs 15000 to Rs 23000 + Incentives. ( Food and Accommodation will be provided for those willing to relocate )\r\n\r\nPlease reach us at the below number,  if there is a batch of Hairdressers available for placements.\r\n\r\n\r\n-- \r\nPraharsha\r\n9959091122', '2018-01-12 06:39:37', '2018-01-12 06:39:37'),
(827, 'navika', 'navikasharma9953@gmail.com', '9899365987', NULL, NULL, 'careers', 'for beautician job', '2018-01-12 11:08:44', '2018-01-12 11:08:44'),
(828, 'Dikshita Basumatary', 'dikshitabasumatary1@gmail.com', '8399090620', NULL, NULL, 'careers', 'Hi I am aand an Btech student from IIIT Guwahati and a fashion enthusiast. Being the cultural secretary I am having a good experience of management and team work. I am a writer too and you can check my blog at dikshitabblog.wordpress.com . Apart from it I have also participated and have been a finalist in beauty pageants from where my interest for fashion grew. I am looking for an internship where my technical and management skills are utilized along with my avid interest in this field.  \r\nEnd up with hope to hear from you soon.', '2018-01-16 14:03:17', '2018-01-16 14:03:17'),
(829, 'neha thakur', 'neha.thakur@gmail.com', '8800399115', NULL, NULL, 'Advanced Cosmetology Course', 'want to join', '2018-01-18 12:22:12', '2018-01-18 12:22:12'),
(830, 'nikunj', 'nkv0013@hotmail.com', '7990564945', NULL, NULL, 'Advance Hair Course', 'send me fees detail and course details of hair..', '2018-01-20 11:18:19', '2018-01-20 11:18:19'),
(831, 'Arsh Razdan', 'arshrazdan1111@gmail.com', '9882855404', NULL, NULL, 'careers', 'I wish to work as an intern in your Company.\r\nPrevious Experiences\r\n1. SCM intern at 1800sports.in\r\n2. Worked as an intern at Schoofi\r\n3. President Of E-Cell UIIT Shimla\r\n4. Campus Director at Hult Prize @ HPU\r\n\r\nIt would be great if you could give me an opportunity to display my ability.\r\nLooking forward to a response from you', '2018-01-20 16:25:06', '2018-01-20 16:25:06'),
(832, 'vinay', 'jimmy.vinay@gmail.com', '9599278850', NULL, NULL, 'Airbrush Makeup', 'Make up and hair styling course 10 days combined can it be done and fees. Pls call me on 9599279850 and ok for Gurgaon branches only', '2018-01-29 02:22:28', '2018-01-29 02:22:28');

-- --------------------------------------------------------

--
-- Table structure for table `corsheaders_corsmodel`
--

CREATE TABLE `corsheaders_corsmodel` (
  `id` int(11) NOT NULL,
  `cors` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `city_id` tinyint(3) UNSIGNED NOT NULL,
  `is_active` enum('y','n') NOT NULL DEFAULT 'y',
  `created_by` int(11) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `name`, `city_id`, `is_active`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Sector 52', 2, 'y', 1, '2016-05-04 19:38:54', '2016-05-04 19:38:54'),
(2, 'Sector 31', 2, 'y', 1, '2016-05-04 19:39:11', '2016-05-04 19:39:11'),
(3, 'Sector 29', 2, 'y', 1, '2016-05-04 19:39:43', '2016-05-04 19:39:43'),
(4, 'Sector 62', 2, 'y', 1, '2016-05-04 19:39:53', '2016-05-04 19:39:53'),
(5, 'Kothapet', 6, 'y', 1, '2016-05-04 19:40:12', '2016-05-04 19:40:12'),
(6, 'Serilingampally', 6, 'n', 1, '2016-05-04 19:40:23', '2017-07-07 06:35:40'),
(7, 'Indirapuram', 1, 'y', 1, '2016-05-04 19:40:40', '2016-05-04 19:40:40'),
(8, 'Vaishali', 1, 'y', 1, '2016-05-04 19:40:51', '2016-05-04 19:40:51'),
(9, 'Vasundhara', 1, 'y', 1, '2016-05-04 19:41:02', '2016-05-04 19:41:02'),
(10, 'Sahibabad', 1, 'y', 1, '2016-05-04 19:41:12', '2016-05-05 07:41:48'),
(11, 'Crossings Republik', 1, 'y', 1, '2016-05-04 19:41:21', '2017-04-20 09:54:36'),
(12, 'Rajnagar District Centre', 1, 'y', 1, '2016-05-04 19:41:31', '2016-05-04 19:41:31'),
(13, 'Mohan Nagar', 1, 'y', 1, '2016-05-04 19:41:40', '2016-05-04 19:41:40'),
(14, 'Shastri Nagar', 1, 'y', 1, '2016-05-04 19:41:53', '2016-05-04 19:41:53'),
(15, 'Sector 35', 5, 'y', 1, '2016-05-04 19:42:14', '2016-05-04 19:42:14'),
(16, 'Laxmi Nagar', 3, 'y', 1, '2016-05-04 19:42:30', '2016-05-04 19:42:30'),
(17, 'Mayur Vihar', 3, 'y', 1, '2016-05-04 19:42:42', '2016-05-04 19:42:42'),
(18, 'Vasundhara Enclave', 3, 'y', 1, '2016-05-04 19:42:51', '2016-05-04 19:42:51'),
(19, 'Capital Galleria', 4, 'y', 1, '2016-05-04 19:43:12', '2016-05-04 19:43:12'),
(20, 'Sushant Lok Phase I', 7, 'y', 1, '2016-05-06 00:31:43', '2016-05-06 00:31:43'),
(21, 'Sector 18', 2, 'y', 1, '2016-05-06 00:41:27', '2016-05-06 00:41:27'),
(22, 'Sector 28', 7, 'y', 1, '2016-05-06 00:43:05', '2016-05-06 00:43:05'),
(23, 'Dilsukhnagar', 6, 'y', 1, '2016-05-06 00:45:17', '2016-05-06 00:45:17'),
(24, 'Sector 49', 7, 'y', 1, '2016-05-06 00:48:45', '2016-05-06 00:48:45'),
(25, 'Sector 31', 7, 'y', 1, '2016-05-06 00:52:44', '2016-05-06 00:52:44'),
(26, 'Sector 45', 7, 'y', 1, '2016-05-06 00:55:39', '2016-05-06 00:55:39'),
(27, 'Pari Chowk', 8, 'y', 10, '2016-08-13 13:29:10', '2016-08-13 13:29:10'),
(28, 'Janakpuri', 3, 'y', 1, '2016-08-24 17:00:49', '2016-08-24 17:00:49'),
(29, 'South Ex', 3, 'y', 12, '2016-08-29 15:25:34', '2016-08-29 15:26:15'),
(30, 'Sector 50', 2, 'y', 12, '2016-09-14 10:46:34', '2016-09-14 10:46:34'),
(31, 'Karkardooma', 3, 'y', 12, '2016-09-20 11:48:49', '2016-09-20 11:48:49'),
(32, 'Kaushambi', 1, 'y', 12, '2016-09-22 17:09:01', '2016-09-22 17:09:01'),
(33, 'Shopprix Mall', 2, 'n', 12, '2016-09-27 15:11:42', '2017-12-26 10:37:17'),
(34, 'Vijay Nagar', 3, 'y', 12, '2016-09-29 15:14:52', '2016-09-29 15:14:52'),
(35, 'Rajouri Garden', 3, 'y', 10, '2016-10-06 12:50:45', '2016-10-06 12:50:45'),
(36, 'Preet Vihar', 3, 'y', 12, '2016-10-07 21:07:12', '2016-10-07 21:07:12'),
(37, 'Sector 56', 7, 'y', 11, '2016-10-15 15:01:03', '2016-10-15 15:01:03'),
(38, 'Rajnagar Extension', 1, 'y', 11, '2016-10-15 15:05:00', '2017-07-01 13:38:09'),
(39, 'Geeta Colony', 3, 'y', 11, '2016-10-15 15:50:40', '2016-10-15 15:50:40'),
(40, 'Dwarka', 3, 'y', 11, '2016-10-15 15:58:22', '2016-10-15 16:02:43'),
(41, 'Paschim Vihar', 3, 'y', 11, '2016-10-15 16:10:19', '2017-04-13 07:28:02'),
(42, 'Krishna Nagar', 3, 'y', 11, '2016-10-15 16:49:23', '2016-10-15 16:49:23'),
(43, 'Rohini', 3, 'y', 11, '2016-10-15 17:01:02', '2016-10-15 17:01:02'),
(44, 'Sector 57', 7, 'y', 11, '2016-10-15 17:05:05', '2016-10-15 17:05:05'),
(45, 'Vivek Vihar', 3, 'y', 11, '2016-10-15 17:09:03', '2016-10-15 17:09:03'),
(46, 'Moti Nagar', 3, 'y', 11, '2016-10-15 17:13:57', '2016-10-15 17:13:57'),
(47, 'Palam Vihar', 7, 'y', 11, '2016-10-15 17:20:34', '2016-10-15 17:20:34'),
(48, 'Sector 37', 7, 'y', 11, '2016-10-15 17:35:15', '2016-10-15 17:35:15'),
(49, 'Gaur City', 1, 'y', 11, '2016-10-15 17:42:50', '2016-10-15 17:42:50'),
(50, 'Rani Bagh', 3, 'y', 11, '2016-10-15 17:55:49', '2016-10-15 17:55:49'),
(51, 'Pitampura', 3, 'y', 11, '2016-10-15 17:58:19', '2016-10-15 17:58:19'),
(52, 'Landcraft Society', 1, 'y', 11, '2016-10-15 18:07:24', '2016-10-15 18:07:24'),
(53, 'Noida Extn', 2, 'y', 11, '2016-10-15 18:11:51', '2016-10-15 18:11:51'),
(54, 'Hari Nagar', 3, 'y', 11, '2016-10-17 18:33:14', '2016-10-17 18:33:14'),
(55, 'Sector Gama 1', 8, 'y', 11, '2016-10-17 18:41:25', '2016-10-17 18:41:25'),
(56, 'Jagat Puri', 3, 'y', 11, '2016-10-17 18:53:17', '2016-10-17 18:53:17'),
(57, 'Govindpuri Extn', 3, 'y', 11, '2016-10-17 19:00:50', '2016-10-17 19:00:50'),
(58, 'Sector 7', 2, 'y', 11, '2016-10-17 19:10:08', '2016-10-17 19:10:08'),
(59, 'Rajendra Nagar', 1, 'y', 11, '2016-10-18 16:51:23', '2016-10-18 16:51:23'),
(60, 'Munirka', 3, 'y', 11, '2016-10-18 17:03:04', '2016-10-18 17:03:04'),
(61, 'Sector 17', 7, 'y', 11, '2016-10-18 17:07:14', '2016-10-18 17:07:14'),
(62, 'Sector Zeta 1', 8, 'y', 11, '2016-10-18 17:12:57', '2016-10-18 18:27:57'),
(63, 'Sector Alpha 1', 8, 'y', 11, '2016-10-18 18:32:39', '2016-10-18 18:32:39'),
(64, 'Malviya Nagar', 3, 'y', 10, '2016-11-09 10:10:29', '2016-11-09 10:10:29'),
(65, 'Nangloi', 3, 'y', 10, '2016-11-15 10:01:24', '2016-11-15 10:01:24'),
(66, 'Madeenaguda', 6, 'y', 10, '2016-12-29 07:25:57', '2016-12-29 07:25:57'),
(67, 'CR Park', 3, 'y', 12, '2017-01-03 10:23:20', '2017-01-03 10:23:20'),
(68, 'U-Block, DLF Phase 3', 7, 'y', 12, '2017-01-18 07:22:10', '2017-01-18 07:22:10'),
(70, 'Manesar', 7, 'y', 10, '2017-01-25 08:04:17', '2017-01-25 08:04:17'),
(71, 'KPHB', 6, 'y', 10, '2017-01-26 11:03:18', '2017-01-26 11:03:18'),
(72, 'Kondapur', 6, 'y', 10, '2017-01-26 11:03:42', '2017-01-26 11:03:42'),
(73, 'Himayat Nagar', 6, 'y', 10, '2017-01-26 11:03:57', '2017-01-26 11:03:57'),
(74, 'Hyderguda', 6, 'y', 10, '2017-01-26 11:04:13', '2017-01-26 11:04:13'),
(75, 'Panjagutta', 6, 'y', 10, '2017-02-17 10:55:44', '2017-02-17 10:55:44'),
(76, 'Bhiwadi', 7, 'y', 10, '2017-02-18 06:35:41', '2017-02-18 06:35:41'),
(77, 'Chattarpur', 3, 'y', 10, '2017-02-28 06:27:52', '2017-05-15 10:49:59'),
(78, 'Bhoiguda', 6, 'y', 11, '2017-03-09 07:56:24', '2017-03-09 08:04:14'),
(79, 'Ansal Plaza Palam Vihar', 7, 'y', 12, '2017-03-17 04:28:42', '2017-03-17 04:28:42'),
(80, 'Gaur City 2', 8, 'n', 11, '2017-04-04 14:26:59', '2017-05-06 12:50:09'),
(81, 'Gaur City 2', 1, 'y', 11, '2017-05-06 12:46:22', '2017-05-06 12:46:22'),
(82, 'New Ashok Nagar', 3, 'y', 10, '2017-06-02 10:13:16', '2017-06-02 10:13:16'),
(83, 'Suncity', 6, 'y', 11, '2017-07-11 12:36:54', '2017-07-11 12:36:54'),
(84, 'Shivam Road', 6, 'y', 10, '2017-07-21 09:50:56', '2017-07-21 09:50:56'),
(85, 'Warsiguda', 6, 'y', 10, '2017-07-21 10:14:29', '2017-07-21 10:14:29'),
(86, 'Alwal', 6, 'y', 10, '2017-07-21 10:14:39', '2017-07-21 10:14:39'),
(87, 'Subhash Nagar ', 3, 'y', 14155, '2017-08-09 06:03:23', '2017-08-09 06:03:23'),
(88, 'Subhash Nagar', 3, 'y', 13460, '2017-08-09 06:10:14', '2017-08-09 06:10:14'),
(89, 'Subhash Nagar', 3, 'y', 1, '2017-08-09 06:11:34', '0000-00-00 00:00:00'),
(90, 'Sector 51', 7, 'y', 214, '2017-11-06 08:26:14', '2017-11-06 08:26:14'),
(91, 'Punjabi Bagh', 3, 'y', 214, '2017-12-08 10:00:26', '2017-12-08 10:00:26'),
(92, 'Sector 61', 2, 'y', 214, '2017-12-08 10:35:20', '2017-12-08 10:35:20'),
(93, 'Delhi Cantt', 3, 'y', 214, '2017-12-09 12:38:22', '2017-12-09 12:38:22'),
(94, 'Tolichowki', 6, 'y', 214, '2017-12-29 11:41:43', '2017-12-29 11:41:43'),
(95, 'Nizampet', 6, 'y', 214, '2018-01-03 19:12:22', '2018-01-03 19:12:22');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'administrate', '2016-12-28 20:26:14', '2016-12-28 20:26:14');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2016-12-12 06:23:11', '2016-12-12 06:23:11'),
(2, 'owner', '2016-12-12 06:23:12', '2016-12-12 06:23:12'),
(3, 'salon_mgr', '2016-12-12 06:23:12', '2016-12-12 06:23:12'),
(4, 'customer', '2016-12-12 06:23:12', '2016-12-12 06:23:12'),
(5, 'glamos_user', '2017-01-03 06:02:12', '2017-01-03 06:02:12'),
(6, 'agent', '2017-03-02 10:02:12', '2017-03-02 10:02:12'),
(7, 'call-center', '2017-03-27 09:58:12', '2017-03-27 09:58:12'),
(8, 'manager', '2017-07-28 18:30:00', '2017-07-28 18:30:00'),
(9, 'editor', '2017-08-02 18:30:00', '2017-08-02 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `otp` int(4) UNSIGNED DEFAULT NULL,
  `device_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `date_of_anniversary` date DEFAULT NULL,
  `confirmation_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `confirmed` tinyint(1) NOT NULL DEFAULT '0',
  `active` enum('0','1') COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `role` enum('admin','salon_mgr','customer','owner') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'customer',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` int(11) UNSIGNED NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `mobile`, `gender`, `password`, `otp`, `device_token`, `address`, `date_of_birth`, `date_of_anniversary`, `confirmation_code`, `confirmed`, `active`, `admin`, `role`, `remember_token`, `created_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Admin User', 'admin_user', 'admin@admin.com', '9898989898', NULL, '$2y$10$EUNcHGNFkS1oDtQby9bXaOt2C69Plw6DVcFAzeaYOMvkZAThglqIq', NULL, NULL, '', '2016-09-30', '0000-00-00', '2b0abee26e3f840da34fa29a204dde28', 1, '1', 1, 'admin', '4U6u3sAUrBwbOQj5yQHigredkPJ9jMRrx68QhkAT13kW0untAMCNQKAlmywF', 0, '2015-09-18 18:42:54.000000', '2017-12-11 13:07:36.000000', NULL),
(2, 'Test User', 'test_user', 'user@user.com', '7045706457', NULL, '$2y$10$sXyLd9PVP3Oxmd5LEXTNL.p2J5WEAqugQCEpVyZ.b89PvfQOR9Lfe', 712654, 'dKHzFoA0fJE:APA91bEvhUw2vNAzIgvYXyLJmiuLeJbdsN5I2ni1SAZnrRz-yt1iXNs6LFF-ThtIloHGiGd1vu8xmYVFEv2DHA_35IRofkLWTQb3MYA3eS9ytvBcY0kLSBEWhSoWoTCbTK5Zbw8aqpCd', 'Whatever', '2016-11-30', '2016-11-30', '5a21d24b4dc24741f950c2f1ff25e1f6', 0, '1', 0, '', 'WeFjhOvs66eLknupjm41mhyGslVlNScUhFqOSSQXT0KtczNA79lZZIGjWuKJ', 0, '2015-09-18 18:42:54.000000', '2017-01-03 12:08:04.000000', NULL),
(3, 'Ashish Chauhan', 'ashish.chauhan@glamstudios.in', 'ashish.chauhan@glamstudios.in', '9811657128', NULL, '$2y$10$dITMjClUnrT6M4kB.I6c1uS0kDYxNWGqLa0jeqNY6cfRUyoJdZDQG', 247292, NULL, '', NULL, NULL, 'mfuJjWf4EXFeMesMnr0IwzHVEIEOpWjF', 0, '1', 1, 'admin', '0Wthje96he0AR76zsRclg1iQ9E8VsNR8tE8xzk45odSBQredcPwYyxjlYh0U', 0, '2017-03-16 14:10:18.000000', '2018-01-30 11:52:11.000000', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_has_permissions`
--

CREATE TABLE `user_has_permissions` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `permission_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_has_roles`
--

CREATE TABLE `user_has_roles` (
  `id` int(11) NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_has_roles`
--

INSERT INTO `user_has_roles` (`id`, `role_id`, `user_id`) VALUES
(1, 1, 1),
(10972, 5, 2),
(13640, 1, 3),
(13641, 2, 3),
(13642, 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `variables`
--

CREATE TABLE `variables` (
  `id` int(11) NOT NULL,
  `key_name` varchar(100) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `variables`
--

INSERT INTO `variables` (`id`, `key_name`, `parent_id`, `active`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'APPOINTMENT_SOURCE', 0, 1, 13460, 13460, '2017-12-22 17:51:58.000000', '2017-12-22 18:06:51.000000'),
(2, 'BILL_BOARD', 1, 1, 13460, 13460, '2017-12-22 17:52:57.000000', '2017-12-22 18:05:03.000000'),
(3, 'FACEBOOK', 1, 1, 13460, 13460, '2017-12-22 17:53:06.000000', '2017-12-22 18:05:26.000000'),
(4, 'LITTLE', 1, 1, 13460, 13460, '2017-12-22 17:53:17.000000', '2017-12-22 18:05:45.000000'),
(5, 'UNKNOWN', 1, 1, 13460, 13460, '2017-12-22 17:53:47.000000', '2017-12-22 18:05:56.000000'),
(6, 'LISTING_SITES', 1, 1, 13460, 13460, '2017-12-22 17:54:14.000000', '2017-12-22 18:05:35.000000'),
(7, 'EXISTING_CUSTOMER', 1, 1, 13460, 13460, '2017-12-22 17:54:23.000000', '2017-12-22 18:05:16.000000'),
(8, 'FRIENDS_N_FAMILY', 1, 1, 13460, NULL, '2017-12-22 18:09:49.000000', '2017-12-22 18:09:49.000000'),
(9, 'MAGAZINE', 1, 1, 13460, NULL, '2017-12-22 18:09:58.000000', '2017-12-22 18:09:58.000000'),
(10, 'METRO', 1, 1, 13460, NULL, '2017-12-22 18:10:03.000000', '2017-12-22 18:10:03.000000'),
(11, 'NEARBUY', 1, 1, 13460, NULL, '2017-12-22 18:10:15.000000', '2017-12-22 18:10:15.000000'),
(12, 'NEWS_PAPER', 1, 1, 13460, NULL, '2017-12-22 18:10:25.000000', '2017-12-22 18:10:25.000000'),
(13, 'PAYTM', 1, 1, 13460, NULL, '2017-12-22 18:10:35.000000', '2017-12-22 18:10:35.000000'),
(14, 'SEARCH_ENGINE', 1, 1, 13460, NULL, '2017-12-22 18:10:41.000000', '2017-12-22 18:10:41.000000'),
(15, 'SMS', 1, 1, 13460, NULL, '2017-12-22 18:10:45.000000', '2017-12-22 18:10:45.000000'),
(16, 'WEBSITE', 1, 1, 13460, NULL, '2017-12-22 18:10:52.000000', '2017-12-22 18:10:52.000000'),
(17, 'SERVICE_VOUCHER', 1, 1, 13460, NULL, '2017-12-22 18:11:03.000000', '2017-12-22 18:11:03.000000'),
(18, 'ADVANTAGE_CLUB', 1, 1, 13460, NULL, '2017-12-22 18:11:24.000000', '2017-12-22 18:11:24.000000'),
(19, 'PINKBOOK', 1, 1, 13460, NULL, '2017-12-22 18:11:39.000000', '2017-12-22 18:11:39.000000'),
(20, 'APPOINTMENT_CHANNEL', 0, 1, 13460, NULL, '2017-12-23 16:14:20.000000', '2017-12-23 16:14:20.000000'),
(21, 'WEBSITE', 20, 0, 13460, 13460, '2017-12-23 16:23:35.000000', '2017-12-23 16:28:34.000000'),
(22, 'GLAMOS', 20, 0, 13460, 13460, '2017-12-23 16:23:42.000000', '2017-12-23 16:27:57.000000'),
(23, 'CALL_CENTER', 20, 0, 13460, 13460, '2017-12-23 16:23:47.000000', '2017-12-23 16:27:44.000000'),
(24, 'CALL_CENTER_INBOUND', 20, 1, 13460, NULL, '2017-12-23 16:23:55.000000', '2017-12-23 16:23:55.000000'),
(25, 'CALL_CENTER_OUTBOUND', 20, 1, 13460, NULL, '2017-12-23 16:24:02.000000', '2017-12-23 16:24:02.000000'),
(26, 'MOBILESITE', 20, 0, 13460, 13460, '2017-12-23 16:26:07.000000', '2017-12-23 16:28:23.000000'),
(27, 'SALON_MANAGER', 20, 1, 13460, NULL, '2017-12-23 16:26:26.000000', '2017-12-23 16:26:26.000000'),
(28, 'LISTING_SITES', 20, 1, 13460, NULL, '2017-12-23 16:26:49.000000', '2017-12-23 16:26:49.000000'),
(29, 'BIGCITY', 1, 0, 13460, 214, '2017-12-23 16:30:01.000000', '2018-01-23 15:55:03.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `corsheaders_corsmodel`
--
ALTER TABLE `corsheaders_corsmodel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `user_has_permissions`
--
ALTER TABLE `user_has_permissions`
  ADD PRIMARY KEY (`user_id`,`permission_id`),
  ADD KEY `user_has_permissions_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_index` (`role_id`),
  ADD KEY `user_foreign` (`user_id`);

--
-- Indexes for table `variables`
--
ALTER TABLE `variables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variables_created_by_ca40484c` (`created_by`),
  ADD KEY `variables_updated_by_96d8eb50` (`updated_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=334;
--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=833;
--
-- AUTO_INCREMENT for table `corsheaders_corsmodel`
--
ALTER TABLE `corsheaders_corsmodel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14377;
--
-- AUTO_INCREMENT for table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13643;
--
-- AUTO_INCREMENT for table `variables`
--
ALTER TABLE `variables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permissi_content_type_id_2f476e4b_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_has_permissions`
--
ALTER TABLE `user_has_permissions`
  ADD CONSTRAINT `user_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_has_permissions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  ADD CONSTRAINT `role_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
