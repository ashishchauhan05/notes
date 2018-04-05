-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 05, 2018 at 04:21 PM
-- Server version: 5.7.19-0ubuntu0.16.04.1
-- PHP Version: 7.1.13-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invzo_test1`
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
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  `comment` varchar(250) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `note_id`, `comment`, `active`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 'group1 edited', 1, 2, '2018-04-05 06:29:25', '2018-04-05 06:42:33'),
(2, 1, 'New comment herer test', 1, 3, '2018-04-05 10:09:37', '2018-04-05 10:09:37'),
(3, 1, 'another comment kfdsd', 1, 3, '2018-04-05 10:11:55', '2018-04-05 10:11:55');

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
-- Table structure for table `group_contacts`
--

CREATE TABLE `group_contacts` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `text` text NOT NULL,
  `public` tinyint(4) NOT NULL DEFAULT '0',
  `url` varchar(100) NOT NULL,
  `created_by` int(11) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `text`, `public`, `url`, `created_by`, `active`, `created_at`, `updated_at`) VALUES
(1, 'note1', 'teskdlfjsd kjlkdfsfas', 1, 'TNUr35', 2, 1, '2018-04-05 08:57:32', '2018-04-05 08:57:32'),
(2, 'note2', 'kjlkj sdfsdlkfjs', 0, 'Rx9VOk', 2, 1, '2018-04-05 09:01:07', '2018-04-05 09:01:07'),
(3, 'Test 3', 'test here teste ', 0, 'FYXmzG', 3, 1, '2018-04-05 09:19:10', '2018-04-05 09:19:10');

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
(2, 'user', '2016-12-12 06:23:12', '2016-12-12 06:23:12');

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
  `role` enum('admin','salon_mgr','customer','owner','user') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user',
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
(1, 'Admin User', 'admin_user', 'admin@admin.com', '9898989898', NULL, '$2y$10$WxqVjhsla2BCrtPKm1npcegH9GUgU5bMgjN5MIe0sFQO83KifUlcS', NULL, NULL, '', '2016-09-30', '0000-00-00', '2b0abee26e3f840da34fa29a204dde28', 1, '1', 1, 'admin', '4U6u3sAUrBwbOQj5yQHigredkPJ9jMRrx68QhkAT13kW0untAMCNQKAlmywF', 0, '2015-09-18 18:42:54.000000', '2017-12-11 13:07:36.000000', NULL),
(2, 'Test User', 'user@admin.com', 'user@user.com', '7045706457', NULL, '$2y$10$WxqVjhsla2BCrtPKm1npcegH9GUgU5bMgjN5MIe0sFQO83KifUlcS', 712654, 'dKHzFoA0fJE:APA91bEvhUw2vNAzIgvYXyLJmiuLeJbdsN5I2ni1SAZnrRz-yt1iXNs6LFF-ThtIloHGiGd1vu8xmYVFEv2DHA_35IRofkLWTQb3MYA3eS9ytvBcY0kLSBEWhSoWoTCbTK5Zbw8aqpCd', 'Whatever', '2016-11-30', '2016-11-30', '5a21d24b4dc24741f950c2f1ff25e1f6', 0, '1', 0, '', 'WeFjhOvs66eLknupjm41mhyGslVlNScUhFqOSSQXT0KtczNA79lZZIGjWuKJ', 0, '2015-09-18 18:42:54.000000', '2018-04-05 15:54:38.000000', NULL),
(3, 'Ashish Chauhan', 'ashish@admin.com', 'ashish@admin.com', '9811657128', NULL, '$2y$10$WxqVjhsla2BCrtPKm1npcegH9GUgU5bMgjN5MIe0sFQO83KifUlcS', 247292, NULL, '', NULL, NULL, 'mfuJjWf4EXFeMesMnr0IwzHVEIEOpWjF', 0, '1', 1, 'admin', 'P53lUBJjylvSevndfgyGsTRZIDclmYc5iDLaM0YL5JxXZaHpljrWgzCXo3DC', 0, '2017-03-16 14:10:18.000000', '2018-04-05 16:05:14.000000', NULL),
(4, 'New User2', 'user2@test.com', 'user2@test.com', '1234567890', NULL, '$2y$10$WxqVjhsla2BCrtPKm1npcegH9GUgU5bMgjN5MIe0sFQO83KifUlcS', NULL, NULL, NULL, NULL, NULL, 'kPWO7tyyB3KhxetMJzXTTlhoFqeiTABn', 0, '1', 0, 'user', 'Dv3gcwHJuPdZDV6JhAusYUEoaLKs3GuqN0yjblxglFR1zgY3de8nk96BjAEK', 0, '2018-04-05 15:57:52.000000', '2018-04-05 16:13:31.000000', NULL);

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
(13640, 1, 3),
(13641, 2, 3),
(13642, 5, 3),
(13643, 2, 2),
(13646, 2, 4);

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
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `corsheaders_corsmodel`
--
ALTER TABLE `corsheaders_corsmodel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_contacts`
--
ALTER TABLE `group_contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city_id` (`contact_id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `corsheaders_corsmodel`
--
ALTER TABLE `corsheaders_corsmodel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `group_contacts`
--
ALTER TABLE `group_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13647;
--
-- AUTO_INCREMENT for table `variables`
--
ALTER TABLE `variables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
