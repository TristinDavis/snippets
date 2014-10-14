// ==UserScript==
// @name        FollowShows Remaining
// @namespace   followshows
// @description Show a number of remaining episodes to watch
// @icon        http://followshows.com/favicon.ico
// @author      vBm <vbm@omertabeyond.com>
// @oujs:author vBm
// @license     The MIT License (MIT)
// @supportURL  https://github.com/vBm/snippets/issues
// @include     http://followshows.com/user/*
// @version     4
// @date        10/08/2014
// @grant       none
// ==/UserScript==

$('#stats').append(
	$('<div>').append(
		$('<span>').attr({
			class: 'addic7ed'
		}),
		$('<div>').attr({
			class: 'title'
		}).text('EPISODES TO WATCH')
	)
);

if (!$('a.btn-follow-user').attr('user')) {
	$.ajax({
		url: '//' + document.location.hostname + '/home/watchlist',
		cache: false,
	}).done(function(data) {
		var totalEpisodesSum, totalEpisodes = [];
		if ($(data).find('.stats').size() !== 0 ) {
			$(data).find('.stats').each(function() {
				totalEpisodes.push(parseInt($(this).text().match(/\d+/)[0], 10));
			});
			totalEpisodesSum = totalEpisodes.reduce(function(a, b) {
				return a + b;
			});
			$('.addic7ed').text(totalEpisodesSum);
		} else {
			$('.addic7ed').text('N/A');
		}
	});
} else {
	$('.addic7ed').text('N/A');
}