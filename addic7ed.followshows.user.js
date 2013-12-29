// ==UserScript==
// @name        FollowShows Subtitles
// @namespace   followshows
// @description Link addic7ed subs
// @author      vBm <vbm@omertabeyond.com>
// @include     http://followshows.com/show/*
// @include     http://www.followshows.com/show/*
// @version     1.7
// @date        29/12/2013
// @grant       none
// ==/UserScript==

var showInfoName = $('div#top-link a')[0].text;
var showInfoSeasonDummy = $('#top-link').find('h1').first().text();
var showInfoSeason = showInfoSeasonDummy.match(/(\d+)/g)[0].replace(/\D/g, "").replace(/^0+/, "");
var showInfoEpisode = showInfoSeasonDummy.match(/(\d+)/g)[1].replace(/\D/g, "").replace(/^0+/g, "");
var showInfoEpisodeName = $('.episode-title').text();

var subtitlesUrl = 'http://www.addic7ed.com/serie/'+showInfoName+'/'+showInfoSeason+'/'+showInfoEpisode+'/'+showInfoEpisodeName;

$('.buttons').append(
	$('<a>').attr({
		class: 'btn btn-success addic7ed',
		target: '_blank'
	}).text(' Addic7ed subs').click(
		function() {
			window.open(subtitlesUrl);
	})
);

$('<i class="fa fa-download"></i>').prependTo('.addic7ed');
