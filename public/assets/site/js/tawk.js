(function(global) {
    global.$_Tawk_AccountKey = '583dda1b8a20fc0cac49c563';
    global.$_Tawk_WidgetId = 'default';
    global.$_Tawk_Unstable = false;
    global.$_Tawk = global.$_Tawk || {};
    (function(global) {
        global.$_Tawk.widgetSettings = {
            "t": "inline",
            "h": 0,
            "w": 0,
            "minh": 0,
            "minw": 0,
            "pos": "br",
            "woc": "max",
            "dsw": false,
            "lc": "en",
            "hwol": false,
            "hwof": false,
            "hab": false,
            "dws": false,
            "hwt": true,
            "thm": {
                "hbg": "#ec2790",
                "htx": "#ffffff",
                "aBblBg": "#ec2790",
                "aBblTx": "#ffffff",
                "vBblBg": "#707070",
                "vBblTx": "#ffffff",
                "topc": 8,
                "btmc": 0
            },
            "bbl": "",
            "mw": "round",
            "dw": "full",
            "wv": 36,
            "ws": null,
            "offlineForm": {
                "shortMessage": "Offline",
                "text": "Sorry to have missed you. Please fill out the form below and we will get back to you as soon as possible.",
                "fields": [{
                    "label": "Name",
                    "isRequired": true,
                    "type": "name",
                    "selections": []
                }, {
                    "label": "Email",
                    "isRequired": true,
                    "type": "email",
                    "selections": []
                }, {
                    "label": "Phone",
                    "isRequired": true,
                    "type": "phone",
                    "selections": []
                }, {
                    "label": "Message",
                    "isRequired": true,
                    "type": "message",
                    "selections": []
                }]
            },
            "prechatForm": null,
            "onlineGreeting": {
                "shortMessage": "Talk to a Glam Expert",
                "longMessage": "Looking to Book your beauty Break?? Let our Experts help you!",
                "actionMessage": "Type here and press enter.."
            },
            "awayGreeting": {
                "shortMessage": "Will be right back",
                "longMessage": "Please leave your email / phone number along with your query, and we will get back to you..."
            }
        };
    })(global);
    (function(b) {
        var a = {
            pluralFormFunction: function(a) {
                return 1 === a ? "one" : "other"
            },
            form: {}
        };
        a.form.SaveButton = {
            message: "Save"
        };
        a.form.SubmitButton = {
            message: "Submit"
        };
        a.form.StartChatButton = {
            message: "Start Chat"
        };
        a.form.CancelButton = {
            message: "Cancel"
        };
        a.form.CloseButton = {
            message: "Close"
        };
        a.form.SendButton = {
            message: "Send"
        };
        a.form.NamePlaceholder = {
            message: "your name.."
        };
        a.form.EmailPlaceholder = {
            message: "your email.."
        };
        a.form.QuestionPlaceholder = {
            message: "your query.."
        };
        a.form.DepartmentsPlaceholder = {
            message: "select department.."
        };
        a.form.MessagePlaceholder = {
            message: "your message.."
        };
        a.form.NameErrorMessage = {
            message: "Name must be provided."
        };
        a.form.EmailErrorMessage = {
            message: "Invalid email address."
        };
        a.form.DepartmentsErrorMessage = {
            message: "Department is required."
        };
        a.form.QuestionErrorMessage = {
            message: "Question is required and must not be longer then 500 characters."
        };
        a.form.MessageErrorMessage = {
            message: "Message is required and must not be longer then 500 characters."
        };
        a.form.NameFormMessage = {
            message: "Please change your name so we can recognize you the next time."
        };
        a.form.EmailTranscriptFormMessage = {
            message: "Please fill out the form below to have this conversation sent to your email address."
        };
        a.form.PreChatFormMessage = {
            message: "Please fill out the form below to start chatting with the next available agent."
        };
        a.form.OfflineFormMessage = {
            message: "Please fill out the form below and we will get back to you as soon as possible."
        };
        a.form.PreChatFormMessageProfile = {
            message: "Please fill out the form below to start chatting with me."
        };
        a.form.OfflineMessageSent = {
            message: "Your message was sent successfully!"
        };
        a.form.OfflineMessageNotSent = {
            message: "Your message was not delivered, please retry"
        };
        a.form.EndChatTitle = {
            message: "Are you sure you want to end this chat?"
        };
        a.form.RequiredErrorMessage = {
            message: "This field is required"
        };
        a.form.PhoneErrorMessage = {
            message: "Invalid phone number"
        };
        a.form.saved = {
            message: "Saved"
        };
        a.form.errorSaving = {
            message: "Unable to save. Please try again"
        };
        a.form.visitButton = {
            message: "Visit tawk.to"
        };
        a.form.SubmittingProcess = {
            message: "Submitting"
        };
        a.form.EndingProcess = {
            message: "Ending"
        };
        a.form.SendingProcess = {
            message: "Sending"
        };
        a.form.SavingProcess = {
            message: "Saving"
        };
        a.form.EmailTranscriptTo = {
            message: "Email transcript to"
        };
        a.form.name = {
            message: "Name"
        };
        a.form.email = {
            message: "Email"
        };
        a.form.department = {
            message: "Department"
        };
        a.form.message = {
            message: "Message"
        };
        a.form.any = {
            message: "Any"
        };
        a.form.phone = {
            message: "Phone"
        };
        a.form.question = {
            message: "Question"
        };
        a.form.saving = {
            message: "Saving.."
        };
        a.form.SubmittedFrom = {
            message: "Submitted From"
        };
        a.rollover = {};
        a.rollover.popOut = {
            message: "Pop out"
        };
        a.rollover.minimize = {
            message: "Minimize"
        };
        a.rollover.resize = {
            message: "Resize"
        };
        a.rollover.resendMessage = {
            message: "Resend message"
        };
        a.rollover.emailTranscriptOption = {
            message: "Email Transcript"
        };
        a.rollover.positiveRating = {
            message: "Rate this conversation with +1"
        };
        a.rollover.negativeRating = {
            message: "Rate this conversation with -1"
        };
        a.rollover.maximize = {
            message: "Maximize"
        };
        a.rollover.end = {
            message: "End Chat"
        };
        a.rollover.uploadFile = {
            message: "Upload File"
        };
        a.transcript = {};
        a.transcript.transcriptSubject = {
            message: "Chat email transcript on #host started on #startedOn",
            vars: ["host", "startedOn"]
        };
        a.transcript.transcriptStartedOn = {
            message: "#dateString, at #time",
            vars: ["dateString", "time"]
        };
        a.transcript.me = {
            message: "Me"
        };
        a.transcript.CONVERSATION_STARTED_ON = {
            message: "Conversation started on"
        };
        a.overlay = {};
        a.overlay.inactive = {
            message: "Click here to reinitiate the chat"
        };
        a.overlay.maintenance = {
            message: "Chat is in maintenance"
        };
        a.overlay.cookiesOff = {
            message: "You can't use this chat because your browser's cookie functionality is turned off. Please turn it on and refresh your browser."
        };
        a.overlay.tawkContent = {
            message: "This widget is powered by tawk.to - a free messaging application that lets you monitor and engage with the visitors on your website."
        };
        a.chat = {};
        a.chat.like = {
            message: "You liked this conversation"
        };
        a.chat.dislike = {
            message: "You disliked this conversation"
        };
        a.chat.remove_rate = {
            message: "You removed your rating for this conversation"
        };
        a.chat.sayButton = {
            message: "Say"
        };
        a.chat.hideButton = {
            message: "Hide Chat"
        };
        a.chat.send_mail = {
            message: "Send Mail"
        };
        a.chat.AGENT_JOIN_CONVERSATION = {
            message: "#n has joined the conversation",
            vars: ["n"]
        };
        a.chat.AGENT_LEFT_CONVERSATION = {
            message: "#n has left the conversation",
            vars: ["n"]
        };
        a.chat.agentIsTyping = {
            message: "#strongStart #n #strongEnd is typing",
            vars: ["n", "strongStart", "strongEnd"]
        };
        a.chat.mobileAgentIsTyping = {
            message: "#n is typing..",
            vars: ["n"]
        };
        a.chat.defaultName = {
            message: "You (change name)"
        };
        a.chat.mobileEnterText = {
            message: "Say something..."
        };
        a.chat.messageQueuedTitile = {
            message: "message queued"
        };
        a.chat.live_chat = {
            message: "Live Chat"
        };
        a.chat.notificationTitle = {
            message: "notification"
        };
        a.chat.departmentIsOffline = {
            message: "Department #strongStart #departmentName #strongEnd is currently offline. You might be served by another department.",
            vars: ["departmentName", "strongStart", "strongEnd"]
        };
        a.chat.departmentIsAway = {
            message: "Department #strongStart #departmentName #strongEnd is currently away.",
            vars: ["departmentName", "strongStart", "strongEnd"]
        };
        a.chat.mobileName = {
            message: "You"
        };
        a.chat.chatEnded = {
            message: "Your chat has ended"
        };
        a.chat.newChat = {
            message: "Start New Chat"
        };
        a.chat.newMessages = {
            message: "New messages"
        };
        a.chat.say_something = {
            message: "Type here and press enter.."
        };
        a.chat.downloadFile = {
            message: "Download File"
        };
        a.chat.limit50 = {
            message: "The maximum file size is 50MB, please upload a smaller file."
        };
        a.chat.limit2 = {
            message: "The maximum file size is 2MB for mobile browsers, please upload a smaller file."
        };
        a.chat.generalUploadError = {
            message: 'Unable to upload file "#fileName", please try again.',
            vars: ["fileName"]
        };
        a.chat.retry = {
            message: "Retry."
        };
        a.chat.dragDropText = {
            message: "Drop files here to upload"
        };
        a.chat.pasted_image_title = {
            message: "Pasted image at #dateTime",
            vars: ["dateTime"]
        };
        a.chat.chat_qm = {
            message: "Chat?"
        };
        a.chat.we_are_live = {
            message: "We are live and ready to chat with you now. Say something to start a live chat."
        };
        a.chat.profile_prechat_text = {
            message: "Please fill out the form below to start chatting with me."
        };
        a.status = {};
        a.status.online = {
            message: "Online"
        };
        a.status.away = {
            message: "Away"
        };
        a.status.offline = {
            message: "Offline"
        };
        a.months = {};
        a.months["0"] = {
            message: "January"
        };
        a.months["1"] = {
            message: "February"
        };
        a.months["2"] = {
            message: "March"
        };
        a.months["3"] = {
            message: "April"
        };
        a.months["4"] = {
            message: "May"
        };
        a.months["5"] = {
            message: "June"
        };
        a.months["6"] = {
            message: "July"
        };
        a.months["7"] = {
            message: "August"
        };
        a.months["8"] = {
            message: "September"
        };
        a.months["9"] = {
            message: "October"
        };
        a.months["10"] = {
            message: "November"
        };
        a.months["11"] = {
            message: "December"
        };
        a.days = {};
        a.days["0"] = {
            message: "Sunday"
        };
        a.days["1"] = {
            message: "Monday"
        };
        a.days["2"] = {
            message: "Tuesday"
        };
        a.days["3"] = {
            message: "Wednesday"
        };
        a.days["4"] = {
            message: "Thursday"
        };
        a.days["5"] = {
            message: "Friday"
        };
        a.days["6"] = {
            message: "Saturday"
        };
        a.menu = {};
        a.menu.change_name = {
            message: "Change Name"
        };
        a.menu.sound_on = {
            message: "Sound On"
        };
        a.menu.sound_off = {
            message: "Sound Off"
        };
        a.menu.about_tawk = {
            message: "About this app"
        };
        a.menu.print_transcript = {
            message: "Print Transcript"
        };
        a.menu.Options = {
            message: "Options"
        };
        a.menu.CloseMenu = {
            message: "Close menu"
        };
        a.menu.AgentList = {
            message: "Agent List"
        };
        a.notifications = {};
        a.notifications.maximum_file_upload_warning = {
            message: "#strongStartWarning :#strongEnd Sorry, file transfer is limited to #strongStart#limitFileNumber#strongEnd files at a time. Please try the following file(s) again :",
            vars: ["strongStart", "strongEnd", "limitFileNumber"]
        };
        a.notifications.maximum_size_upload_warning = {
            message: "#strongStartWarning :#strongEnd Sorry, file transfer is limited to #strongStart#limitFileSize#strongEnd per file. Please compress the following file(s) and try again.",
            vars: ["strongStart", "strongEnd", "limitFileSize"]
        };
        a.notifications.retry = {
            message: "Retry"
        };
        a.chat = a.chat || {};
        a.chat.messageQueuedText = {
            vars: ["strongStart", "strongEnd"],
            pluralVars: ["t"],
            message: {
                one: "Estimated wait time is #strongStart #t minute #strongEnd",
                other: "Estimated wait time is #strongStart #t minutes #strongEnd"
            }
        };
        a.chat.newMessage = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num new message",
                other: "#num new messages"
            }
        };
        b.$_Tawk.language = a;
        b.$_Tawk.languageUpdater && b.$_Tawk.languageUpdater()
    })("undefined" === typeof global ? window : global);

    (function() {
        ! function(x) {
            var p;
            "undefined" != typeof window ? p = window : "undefined" != typeof global ? p = global : "undefined" != typeof self && (p = self);
            p.$__TawkEngine = x()
        }(function() {
            return function p(s, t, c) {
                function g(e, k) {
                    if (!t[e]) {
                        if (!s[e]) {
                            var z = "function" == typeof require && require;
                            if (!k && z) return z(e, !0);
                            if (m) return m(e, !0);
                            throw Error("Cannot find module '" + e + "'");
                        }
                        z = t[e] = {
                            exports: {}
                        };
                        s[e][0].call(z.exports, function(b) {
                            var c = s[e][1][b];
                            return g(c ? c : b)
                        }, z, z.exports, p, s, t, c)
                    }
                    return t[e].exports
                }
                for (var m = "function" ==
                        typeof require && require, k = 0; k < c.length; k++) g(c[k]);
                return g
            }({
                debug: [function(p, s, t) {
                    s.exports = p("n9i2g6")
                }, {}],
                n9i2g6: [function(p, s, t) {
                    s.exports = function() {
                        return function() {}
                    }
                }, {}],
                3: [function(p, s, t) {
                    function c() {}
                    s.exports = function(g, m, k) {
                        function e(c, b) {
                            if (0 >= e.count) throw Error("after called too many times");
                            --e.count;
                            c ? (p = !0, m(c), m = k) : 0 !== e.count || p || m(null, b)
                        }
                        var p = !1;
                        k = k || c;
                        e.count = g;
                        return 0 === g ? m() : e
                    }
                }, {}],
                4: [function(p, s, t) {
                    s.exports = function(c, g, m) {
                        var k = c.byteLength;
                        g = g || 0;
                        m = m || k;
                        if (c.slice) return c.slice(g,
                            m);
                        0 > g && (g += k);
                        0 > m && (m += k);
                        m > k && (m = k);
                        if (g >= k || g >= m || 0 === k) return new ArrayBuffer(0);
                        c = new Uint8Array(c);
                        for (var k = new Uint8Array(m - g), e = 0; g < m; g++, e++) k[e] = c[g];
                        return k.buffer
                    }
                }, {}],
                5: [function(p, s, t) {
                    (function(c) {
                        t.encode = function(g) {
                            g = new Uint8Array(g);
                            var m, k = g.length,
                                e = "";
                            for (m = 0; m < k; m += 3) e += c[g[m] >> 2], e += c[(g[m] & 3) << 4 | g[m + 1] >> 4], e += c[(g[m + 1] & 15) << 2 | g[m + 2] >> 6], e += c[g[m + 2] & 63];
                            2 === k % 3 ? e = e.substring(0, e.length - 1) + "=" : 1 === k % 3 && (e = e.substring(0, e.length - 2) + "==");
                            return e
                        };
                        t.decode = function(g) {
                            var m =
                                0.75 * g.length,
                                k = g.length,
                                e = 0,
                                p, s, b, v;
                            "=" === g[g.length - 1] && (m--, "=" === g[g.length - 2] && m--);
                            for (var t = new ArrayBuffer(m), w = new Uint8Array(t), m = 0; m < k; m += 4) p = c.indexOf(g[m]), s = c.indexOf(g[m + 1]), b = c.indexOf(g[m + 2]), v = c.indexOf(g[m + 3]), w[e++] = p << 2 | s >> 4, w[e++] = (s & 15) << 4 | b >> 2, w[e++] = (b & 3) << 6 | v & 63;
                            return t
                        }
                    })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                }, {}],
                6: [function(p, s, t) {
                    (function(c) {
                        function g(b) {
                            for (var e = 0; e < b.length; e++) {
                                var c = b[e];
                                if (c.buffer instanceof ArrayBuffer) {
                                    var g =
                                        c.buffer;
                                    if (c.byteLength !== g.byteLength) {
                                        var m = new Uint8Array(c.byteLength);
                                        m.set(new Uint8Array(g, c.byteOffset, c.byteLength));
                                        g = m.buffer
                                    }
                                    b[e] = g
                                }
                            }
                        }

                        function m(b, c) {
                            c = c || {};
                            var m = new e;
                            g(b);
                            for (var k = 0; k < b.length; k++) m.append(b[k]);
                            return c.type ? m.getBlob(c.type) : m.getBlob()
                        }

                        function k(b, c) {
                            g(b);
                            return new Blob(b, c || {})
                        }
                        var e = c.BlobBuilder || c.WebKitBlobBuilder || c.MSBlobBuilder || c.MozBlobBuilder,
                            p;
                        try {
                            p = 2 === (new Blob(["hi"])).size
                        } catch (t) {
                            p = !1
                        }
                        var b;
                        if (b = p) try {
                            b = 2 === (new Blob([new Uint8Array([1, 2])])).size
                        } catch (v) {
                            b = !1
                        }
                        var I = e && e.prototype.append && e.prototype.getBlob;
                        c = p ? b ? c.Blob : k : I ? m : void 0;
                        s.exports = c
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {}],
                7: [function(p, s, t) {}, {}],
                8: [function(p, s, t) {
                    function c(g) {
                        if (g) {
                            for (var m in c.prototype) g[m] = c.prototype[m];
                            return g
                        }
                    }
                    s.exports = c;
                    c.prototype.on = c.prototype.addEventListener = function(c, m) {
                        this._callbacks = this._callbacks || {};
                        (this._callbacks[c] = this._callbacks[c] || []).push(m);
                        return this
                    };
                    c.prototype.once = function(c, m) {
                        function k() {
                            e.off(c,
                                k);
                            m.apply(this, arguments)
                        }
                        var e = this;
                        this._callbacks = this._callbacks || {};
                        k.fn = m;
                        this.on(c, k);
                        return this
                    };
                    c.prototype.off = c.prototype.removeListener = c.prototype.removeAllListeners = c.prototype.removeEventListener = function(c, m) {
                        this._callbacks = this._callbacks || {};
                        if (0 == arguments.length) return this._callbacks = {}, this;
                        var k = this._callbacks[c];
                        if (!k) return this;
                        if (1 == arguments.length) return delete this._callbacks[c], this;
                        for (var e, p = 0; p < k.length; p++)
                            if (e = k[p], e === m || e.fn === m) {
                                k.splice(p, 1);
                                break
                            }
                        return this
                    };
                    c.prototype.emit = function(c) {
                        this._callbacks = this._callbacks || {};
                        var m = [].slice.call(arguments, 1),
                            k = this._callbacks[c];
                        if (k)
                            for (var k = k.slice(0), e = 0, p = k.length; e < p; ++e) k[e].apply(this, m);
                        return this
                    };
                    c.prototype.listeners = function(c) {
                        this._callbacks = this._callbacks || {};
                        return this._callbacks[c] || []
                    };
                    c.prototype.hasListeners = function(c) {
                        return !!this.listeners(c).length
                    }
                }, {}],
                9: [function(p, s, t) {
                    s.exports = function(c, g) {
                        var m = function() {};
                        m.prototype = g.prototype;
                        c.prototype = new m;
                        c.prototype.constructor =
                            c
                    }
                }, {}],
                10: [function(p, s, t) {
                    s.exports = p("./lib/")
                }, {
                    "./lib/": 11
                }],
                11: [function(p, s, t) {
                    s.exports = p("./socket");
                    s.exports.parser = p("engine.io-parser")
                }, {
                    "./socket": 12,
                    "engine.io-parser": 20
                }],
                12: [function(p, s, t) {
                    (function(c) {
                        function g(w, e) {
                            if (!(this instanceof g)) return new g(w, e);
                            e = e || {};
                            w && "object" == typeof w && (e = w, w = null);
                            w ? (w = b(w), e.hostname = w.host, e.secure = "https" == w.protocol || "wss" == w.protocol, e.port = w.port, w.query && (e.query = w.query)) : e.host && (e.hostname = b(e.host).host);
                            this.secure = null != e.secure ?
                                e.secure : c.location && "https:" == location.protocol;
                            e.hostname && !e.port && (e.port = this.secure ? "443" : "80");
                            this.agent = e.agent || !1;
                            this.hostname = e.hostname || (c.location ? location.hostname : "localhost");
                            this.port = e.port || (c.location && location.port ? location.port : this.secure ? 443 : 80);
                            this.query = e.query || {};
                            "string" == typeof this.query && (this.query = I.decode(this.query));
                            this.upgrade = !1 !== e.upgrade;
                            this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/";
                            this.forceJSONP = !!e.forceJSONP;
                            this.jsonp = !1 !== e.jsonp;
                            this.forceBase64 = !!e.forceBase64;
                            this.enablesXDR = !!e.enablesXDR;
                            this.timestampParam = e.timestampParam || "t";
                            this.timestampRequests = e.timestampRequests;
                            this.transports = e.transports || ["polling", "websocket"];
                            this.readyState = "";
                            this.writeBuffer = [];
                            this.policyPort = e.policyPort || 843;
                            this.rememberUpgrade = e.rememberUpgrade || !1;
                            this.binaryType = null;
                            this.onlyBinaryUpgrades = e.onlyBinaryUpgrades;
                            this.perMessageDeflate = !1 !== e.perMessageDeflate ? e.perMessageDeflate || {} : !1;
                            !0 === this.perMessageDeflate && (this.perMessageDeflate = {});
                            this.perMessageDeflate &&
                                null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024);
                            this.pfx = e.pfx || null;
                            this.key = e.key || null;
                            this.passphrase = e.passphrase || null;
                            this.cert = e.cert || null;
                            this.ca = e.ca || null;
                            this.ciphers = e.ciphers || null;
                            this.rejectUnauthorized = void 0 === e.rejectUnauthorized ? !0 : e.rejectUnauthorized;
                            var m = "object" == typeof c && c;
                            m.global === m && (e.extraHeaders && 0 < Object.keys(e.extraHeaders).length) && (this.extraHeaders = e.extraHeaders);
                            this.open()
                        }
                        var m = p("./transports"),
                            k = p("component-emitter"),
                            e =
                            p("debug")("engine.io-client:socket"),
                            t = p("indexof"),
                            z = p("engine.io-parser"),
                            b = p("parseuri"),
                            v = p("parsejson"),
                            I = p("parseqs");
                        s.exports = g;
                        g.priorWebsocketSuccess = !1;
                        k(g.prototype);
                        g.protocol = z.protocol;
                        g.Socket = g;
                        g.Transport = p("./transport");
                        g.transports = p("./transports");
                        g.parser = p("engine.io-parser");
                        g.prototype.createTransport = function(b) {
                            e('creating transport "%s"', b);
                            var c = this.query,
                                g = {},
                                k;
                            for (k in c) c.hasOwnProperty(k) && (g[k] = c[k]);
                            g.EIO = z.protocol;
                            g.transport = b;
                            this.id && (g.sid = this.id);
                            return new m[b]({
                                agent: this.agent,
                                hostname: this.hostname,
                                port: this.port,
                                secure: this.secure,
                                path: this.path,
                                query: g,
                                forceJSONP: this.forceJSONP,
                                jsonp: this.jsonp,
                                forceBase64: this.forceBase64,
                                enablesXDR: this.enablesXDR,
                                timestampRequests: this.timestampRequests,
                                timestampParam: this.timestampParam,
                                policyPort: this.policyPort,
                                socket: this,
                                pfx: this.pfx,
                                key: this.key,
                                passphrase: this.passphrase,
                                cert: this.cert,
                                ca: this.ca,
                                ciphers: this.ciphers,
                                rejectUnauthorized: this.rejectUnauthorized,
                                perMessageDeflate: this.perMessageDeflate,
                                extraHeaders: this.extraHeaders
                            })
                        };
                        g.prototype.open = function() {
                            var b;
                            if (this.rememberUpgrade && g.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) b = "websocket";
                            else {
                                if (0 === this.transports.length) {
                                    var e = this;
                                    setTimeout(function() {
                                        e.emit("error", "No transports available")
                                    }, 0);
                                    return
                                }
                                b = this.transports[0]
                            }
                            this.readyState = "opening";
                            try {
                                b = this.createTransport(b)
                            } catch (c) {
                                this.transports.shift();
                                this.open();
                                return
                            }
                            b.open();
                            this.setTransport(b)
                        };
                        g.prototype.setTransport = function(b) {
                            e("setting transport %s", b.name);
                            var c = this;
                            this.transport && (e("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners());
                            this.transport = b;
                            b.on("drain", function() {
                                c.onDrain()
                            }).on("packet", function(b) {
                                c.onPacket(b)
                            }).on("error", function(b) {
                                c.onError(b)
                            }).on("close", function() {
                                c.onClose("transport close")
                            })
                        };
                        g.prototype.probe = function(b) {
                            function c() {
                                if (z.onlyBinaryUpgrades) {
                                    var m = !this.supportsBinary && z.transport.supportsBinary;
                                    B = B || m
                                }
                                B || (e('probe transport "%s" opened', b), K.send([{
                                        type: "ping",
                                        data: "probe"
                                    }]),
                                    K.once("packet", function(c) {
                                        B || ("pong" == c.type && "probe" == c.data ? (e('probe transport "%s" pong', b), z.upgrading = !0, z.emit("upgrading", K), K && (g.priorWebsocketSuccess = "websocket" == K.name, e('pausing current transport "%s"', z.transport.name), z.transport.pause(function() {
                                            B || "closed" == z.readyState || (e("changing transport and sending upgrade packet"), t(), z.setTransport(K), K.send([{
                                                type: "upgrade"
                                            }]), z.emit("upgrade", K), K = null, z.upgrading = !1, z.flush())
                                        }))) : (e('probe transport "%s" failed', b), c = Error("probe error"),
                                            c.transport = K.name, z.emit("upgradeError", c)))
                                    }))
                            }

                            function m() {
                                B || (B = !0, t(), K.close(), K = null)
                            }

                            function k(c) {
                                var g = Error("probe error: " + c);
                                g.transport = K.name;
                                m();
                                e('probe transport "%s" failed because of error: %s', b, c);
                                z.emit("upgradeError", g)
                            }

                            function p() {
                                k("transport closed")
                            }

                            function v() {
                                k("socket closed")
                            }

                            function s(b) {
                                K && b.name != K.name && (e('"%s" works - aborting "%s"', b.name, K.name), m())
                            }

                            function t() {
                                K.removeListener("open", c);
                                K.removeListener("error", k);
                                K.removeListener("close", p);
                                z.removeListener("close",
                                    v);
                                z.removeListener("upgrading", s)
                            }
                            e('probing transport "%s"', b);
                            var K = this.createTransport(b, {
                                    probe: 1
                                }),
                                B = !1,
                                z = this;
                            g.priorWebsocketSuccess = !1;
                            K.once("open", c);
                            K.once("error", k);
                            K.once("close", p);
                            this.once("close", v);
                            this.once("upgrading", s);
                            K.open()
                        };
                        g.prototype.onOpen = function() {
                            e("socket open");
                            this.readyState = "open";
                            g.priorWebsocketSuccess = "websocket" == this.transport.name;
                            this.emit("open");
                            this.flush();
                            if ("open" == this.readyState && this.upgrade && this.transport.pause) {
                                e("starting upgrade probes");
                                for (var b = 0, c = this.upgrades.length; b < c; b++) this.probe(this.upgrades[b])
                            }
                        };
                        g.prototype.onPacket = function(b) {
                            if ("opening" == this.readyState || "open" == this.readyState) switch (e('socket receive: type "%s", data "%s"', b.type, b.data), this.emit("packet", b), this.emit("heartbeat"), b.type) {
                                case "open":
                                    this.onHandshake(v(b.data));
                                    break;
                                case "pong":
                                    this.setPing();
                                    this.emit("pong");
                                    break;
                                case "error":
                                    var c = Error("server error");
                                    c.code = b.data;
                                    this.onError(c);
                                    break;
                                case "message":
                                    this.emit("data", b.data), this.emit("message",
                                        b.data)
                            } else e('packet received with socket readyState "%s"', this.readyState)
                        };
                        g.prototype.onHandshake = function(b) {
                            this.emit("handshake", b);
                            this.id = b.sid;
                            this.transport.query.sid = b.sid;
                            this.upgrades = this.filterUpgrades(b.upgrades);
                            this.pingInterval = b.pingInterval;
                            this.pingTimeout = b.pingTimeout;
                            this.onOpen();
                            "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                        };
                        g.prototype.onHeartbeat = function(b) {
                            clearTimeout(this.pingTimeoutTimer);
                            var e = this;
                            e.pingTimeoutTimer = setTimeout(function() {
                                if ("closed" != e.readyState) e.onClose("ping timeout")
                            }, b || e.pingInterval + e.pingTimeout)
                        };
                        g.prototype.setPing = function() {
                            var b = this;
                            clearTimeout(b.pingIntervalTimer);
                            b.pingIntervalTimer = setTimeout(function() {
                                e("writing ping packet - expecting pong within %sms", b.pingTimeout);
                                b.ping();
                                b.onHeartbeat(b.pingTimeout)
                            }, b.pingInterval)
                        };
                        g.prototype.ping = function() {
                            var b = this;
                            this.sendPacket("ping", function() {
                                b.emit("ping")
                            })
                        };
                        g.prototype.onDrain = function() {
                            this.writeBuffer.splice(0,
                                this.prevBufferLen);
                            this.prevBufferLen = 0;
                            0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                        };
                        g.prototype.flush = function() {
                            "closed" != this.readyState && (this.transport.writable && !this.upgrading && this.writeBuffer.length) && (e("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                        };
                        g.prototype.write = g.prototype.send = function(b, e, c) {
                            this.sendPacket("message", b, e, c);
                            return this
                        };
                        g.prototype.sendPacket =
                            function(b, e, c, g) {
                                "function" == typeof e && (g = e, e = void 0);
                                "function" == typeof c && (g = c, c = null);
                                if ("closing" != this.readyState && "closed" != this.readyState) {
                                    c = c || {};
                                    c.compress = !1 !== c.compress;
                                    b = {
                                        type: b,
                                        data: e,
                                        options: c
                                    };
                                    this.emit("packetCreate", b);
                                    this.writeBuffer.push(b);
                                    if (g) this.once("flush", g);
                                    this.flush()
                                }
                            };
                        g.prototype.close = function() {
                            function b() {
                                m.onClose("forced close");
                                e("socket closing - telling transport to close");
                                m.transport.close()
                            }

                            function c() {
                                m.removeListener("upgrade", c);
                                m.removeListener("upgradeError",
                                    c);
                                b()
                            }

                            function g() {
                                m.once("upgrade", c);
                                m.once("upgradeError", c)
                            }
                            if ("opening" == this.readyState || "open" == this.readyState) {
                                this.readyState = "closing";
                                var m = this;
                                if (this.writeBuffer.length) this.once("drain", function() {
                                    this.upgrading ? g() : b()
                                });
                                else this.upgrading ? g() : b()
                            }
                            return this
                        };
                        g.prototype.onError = function(b) {
                            e("socket error %j", b);
                            g.priorWebsocketSuccess = !1;
                            this.emit("error", b);
                            this.onClose("transport error", b)
                        };
                        g.prototype.onClose = function(b, c) {
                            if ("opening" == this.readyState || "open" == this.readyState ||
                                "closing" == this.readyState) e('socket close with reason: "%s"', b), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", b, c), this.writeBuffer = [], this.prevBufferLen = 0
                        };
                        g.prototype.filterUpgrades = function(b) {
                            for (var c = [], e = 0, g = b.length; e < g; e++) ~t(this.transports, b[e]) && c.push(b[e]);
                            return c
                        }
                    }).call(this, "undefined" !== typeof self ?
                        self : "undefined" !== typeof window ? window : {})
                }, {
                    "./transport": 13,
                    "./transports": 14,
                    "component-emitter": 8,
                    debug: "n9i2g6",
                    "engine.io-parser": 20,
                    indexof: 24,
                    parsejson: 26,
                    parseqs: 27,
                    parseuri: 28
                }],
                13: [function(p, s, t) {
                    function c(c) {
                        this.path = c.path;
                        this.hostname = c.hostname;
                        this.port = c.port;
                        this.secure = c.secure;
                        this.query = c.query;
                        this.timestampParam = c.timestampParam;
                        this.timestampRequests = c.timestampRequests;
                        this.readyState = "";
                        this.agent = c.agent || !1;
                        this.socket = c.socket;
                        this.enablesXDR = c.enablesXDR;
                        this.pfx =
                            c.pfx;
                        this.key = c.key;
                        this.passphrase = c.passphrase;
                        this.cert = c.cert;
                        this.ca = c.ca;
                        this.ciphers = c.ciphers;
                        this.rejectUnauthorized = c.rejectUnauthorized;
                        this.extraHeaders = c.extraHeaders
                    }
                    var g = p("engine.io-parser");
                    p = p("component-emitter");
                    s.exports = c;
                    p(c.prototype);
                    c.prototype.onError = function(c, g) {
                        var e = Error(c);
                        e.type = "TransportError";
                        e.description = g;
                        this.emit("error", e);
                        return this
                    };
                    c.prototype.open = function() {
                        if ("closed" == this.readyState || "" == this.readyState) this.readyState = "opening", this.doOpen();
                        return this
                    };
                    c.prototype.close = function() {
                        if ("opening" == this.readyState || "open" == this.readyState) this.doClose(), this.onClose();
                        return this
                    };
                    c.prototype.send = function(c) {
                        if ("open" == this.readyState) this.write(c);
                        else throw Error("Transport not open");
                    };
                    c.prototype.onOpen = function() {
                        this.readyState = "open";
                        this.writable = !0;
                        this.emit("open")
                    };
                    c.prototype.onData = function(c) {
                        c = g.decodePacket(c, this.socket.binaryType);
                        this.onPacket(c)
                    };
                    c.prototype.onPacket = function(c) {
                        this.emit("packet", c)
                    };
                    c.prototype.onClose =
                        function() {
                            this.readyState = "closed";
                            this.emit("close")
                        }
                }, {
                    "component-emitter": 8,
                    "engine.io-parser": 20
                }],
                14: [function(p, s, t) {
                    (function(c) {
                        var g = p("xmlhttprequest-ssl"),
                            m = p("./polling-xhr"),
                            k = p("./polling-jsonp"),
                            e = p("./websocket");
                        t.polling = function(e) {
                            var p = !1,
                                b = !1,
                                v = !1 !== e.jsonp;
                            c.location && (b = "https:" == location.protocol, (p = location.port) || (p = b ? 443 : 80), p = e.hostname != location.hostname || p != e.port, b = e.secure != b);
                            e.xdomain = p;
                            e.xscheme = b;
                            if ("open" in new g(e) && !e.forceJSONP) return new m(e);
                            if (!v) throw Error("JSONP disabled");
                            return new k(e)
                        };
                        t.websocket = e
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {
                    "./polling-jsonp": 15,
                    "./polling-xhr": 16,
                    "./websocket": 18,
                    "xmlhttprequest-ssl": 19
                }],
                15: [function(p, s, t) {
                    (function(c) {
                        function g() {}

                        function m(e) {
                            k.call(this, e);
                            this.query = this.query || {};
                            b || (c.___eio || (c.___eio = []), b = c.___eio);
                            this.index = b.length;
                            var m = this;
                            b.push(function(b) {
                                m.onData(b)
                            });
                            this.query.j = this.index;
                            c.document && c.addEventListener && c.addEventListener("beforeunload", function() {
                                m.script &&
                                    (m.script.onerror = g)
                            }, !1)
                        }
                        var k = p("./polling"),
                            e = p("component-inherit");
                        s.exports = m;
                        var t = /\n/g,
                            z = /\\n/g,
                            b;
                        e(m, k);
                        m.prototype.supportsBinary = !1;
                        m.prototype.doClose = function() {
                            this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
                            this.form && (this.form.parentNode.removeChild(this.form), this.iframe = this.form = null);
                            k.prototype.doClose.call(this)
                        };
                        m.prototype.doPoll = function() {
                            var b = this,
                                c = document.createElement("script");
                            this.script && (this.script.parentNode.removeChild(this.script),
                                this.script = null);
                            c.async = !0;
                            c.src = this.uri();
                            c.onerror = function(c) {
                                b.onError("jsonp poll error", c)
                            };
                            var e = document.getElementsByTagName("script")[0];
                            e ? e.parentNode.insertBefore(c, e) : (document.head || document.body).appendChild(c);
                            this.script = c;
                            "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                                var b = document.createElement("iframe");
                                document.body.appendChild(b);
                                document.body.removeChild(b)
                            }, 100)
                        };
                        m.prototype.doWrite = function(b, c) {
                            function e() {
                                g();
                                c()
                            }

                            function g() {
                                if (k.iframe) try {
                                    k.form.removeChild(k.iframe)
                                } catch (b) {
                                    k.onError("jsonp polling iframe removal error",
                                        b)
                                }
                                try {
                                    X = document.createElement('<iframe src="javascript:0" name="' + k.iframeId + '">')
                                } catch (c) {
                                    X = document.createElement("iframe"), X.name = k.iframeId, X.src = "javascript:0"
                                }
                                X.id = k.iframeId;
                                k.form.appendChild(X);
                                k.iframe = X
                            }
                            var k = this;
                            if (!this.form) {
                                var m = document.createElement("form"),
                                    p = document.createElement("textarea"),
                                    s = this.iframeId = "eio_iframe_" + this.index,
                                    X;
                                m.className = "socketio";
                                m.style.position = "absolute";
                                m.style.top = "-1000px";
                                m.style.left = "-1000px";
                                m.target = s;
                                m.method = "POST";
                                m.setAttribute("accept-charset",
                                    "utf-8");
                                p.name = "d";
                                m.appendChild(p);
                                document.body.appendChild(m);
                                this.form = m;
                                this.area = p
                            }
                            this.form.action = this.uri();
                            g();
                            b = b.replace(z, "\\\n");
                            this.area.value = b.replace(t, "\\n");
                            try {
                                this.form.submit()
                            } catch (na) {}
                            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                "complete" == k.iframe.readyState && e()
                            } : this.iframe.onload = e
                        }
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {
                    "./polling": 17,
                    "component-inherit": 9
                }],
                16: [function(p, s, t) {
                    (function(c) {
                        function g() {}

                        function m(b) {
                            z.call(this, b);
                            if (c.location) {
                                var e = "https:" == location.protocol,
                                    g = location.port;
                                g || (g = e ? 443 : 80);
                                this.xd = b.hostname != c.location.hostname || g != b.port;
                                this.xs = b.secure != e
                            } else this.extraHeaders = b.extraHeaders
                        }

                        function k(b) {
                            this.method = b.method || "GET";
                            this.uri = b.uri;
                            this.xd = !!b.xd;
                            this.xs = !!b.xs;
                            this.async = !1 !== b.async;
                            this.data = void 0 != b.data ? b.data : null;
                            this.agent = b.agent;
                            this.isBinary = b.isBinary;
                            this.supportsBinary = b.supportsBinary;
                            this.enablesXDR = b.enablesXDR;
                            this.pfx = b.pfx;
                            this.key =
                                b.key;
                            this.passphrase = b.passphrase;
                            this.cert = b.cert;
                            this.ca = b.ca;
                            this.ciphers = b.ciphers;
                            this.rejectUnauthorized = b.rejectUnauthorized;
                            this.extraHeaders = b.extraHeaders;
                            this.create()
                        }

                        function e() {
                            for (var b in k.requests) k.requests.hasOwnProperty(b) && k.requests[b].abort()
                        }
                        var t = p("xmlhttprequest-ssl"),
                            z = p("./polling"),
                            b = p("component-emitter"),
                            v = p("component-inherit"),
                            I = p("debug")("engine.io-client:polling-xhr");
                        s.exports = m;
                        s.exports.Request = k;
                        v(m, z);
                        m.prototype.supportsBinary = !0;
                        m.prototype.request = function(b) {
                            b =
                                b || {};
                            b.uri = this.uri();
                            b.xd = this.xd;
                            b.xs = this.xs;
                            b.agent = this.agent || !1;
                            b.supportsBinary = this.supportsBinary;
                            b.enablesXDR = this.enablesXDR;
                            b.pfx = this.pfx;
                            b.key = this.key;
                            b.passphrase = this.passphrase;
                            b.cert = this.cert;
                            b.ca = this.ca;
                            b.ciphers = this.ciphers;
                            b.rejectUnauthorized = this.rejectUnauthorized;
                            b.extraHeaders = this.extraHeaders;
                            return new k(b)
                        };
                        m.prototype.doWrite = function(b, c) {
                            var e = this.request({
                                    method: "POST",
                                    data: b,
                                    isBinary: "string" !== typeof b && void 0 !== b
                                }),
                                g = this;
                            e.on("success", c);
                            e.on("error",
                                function(b) {
                                    g.onError("xhr post error", b)
                                });
                            this.sendXhr = e
                        };
                        m.prototype.doPoll = function() {
                            I("xhr poll");
                            var b = this.request(),
                                c = this;
                            b.on("data", function(b) {
                                c.onData(b)
                            });
                            b.on("error", function(b) {
                                c.onError("xhr poll error", b)
                            });
                            this.pollXhr = b
                        };
                        b(k.prototype);
                        k.prototype.create = function() {
                            var b = {
                                agent: this.agent,
                                xdomain: this.xd,
                                xscheme: this.xs,
                                enablesXDR: this.enablesXDR
                            };
                            b.pfx = this.pfx;
                            b.key = this.key;
                            b.passphrase = this.passphrase;
                            b.cert = this.cert;
                            b.ca = this.ca;
                            b.ciphers = this.ciphers;
                            b.rejectUnauthorized =
                                this.rejectUnauthorized;
                            var e = this.xhr = new t(b),
                                g = this;
                            try {
                                I("xhr open %s: %s", this.method, this.uri);
                                e.open(this.method, this.uri, this.async);
                                try {
                                    if (this.extraHeaders) {
                                        e.setDisableHeaderCheck(!0);
                                        for (var m in this.extraHeaders) this.extraHeaders.hasOwnProperty(m) && e.setRequestHeader(m, this.extraHeaders[m])
                                    }
                                } catch (p) {}
                                this.supportsBinary && (e.responseType = "arraybuffer");
                                if ("POST" == this.method) try {
                                    this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type",
                                        "text/plain;charset=UTF-8")
                                } catch (s) {}
                                "withCredentials" in e && (e.withCredentials = !0);
                                this.hasXDR() ? (e.onload = function() {
                                    g.onLoad()
                                }, e.onerror = function() {
                                    g.onError(e.responseText)
                                }) : e.onreadystatechange = function() {
                                    if (4 == e.readyState)
                                        if (200 == e.status || 1223 == e.status) g.onLoad();
                                        else setTimeout(function() {
                                            g.onError(e.status)
                                        }, 0)
                                };
                                I("xhr data %s", this.data);
                                e.send(this.data)
                            } catch (v) {
                                setTimeout(function() {
                                    g.onError(v)
                                }, 0);
                                return
                            }
                            c.document && (this.index = k.requestsCount++, k.requests[this.index] = this)
                        };
                        k.prototype.onSuccess =
                            function() {
                                this.emit("success");
                                this.cleanup()
                            };
                        k.prototype.onData = function(b) {
                            this.emit("data", b);
                            this.onSuccess()
                        };
                        k.prototype.onError = function(b) {
                            this.emit("error", b);
                            this.cleanup(!0)
                        };
                        k.prototype.cleanup = function(b) {
                            if ("undefined" != typeof this.xhr && null !== this.xhr) {
                                this.hasXDR() ? this.xhr.onload = this.xhr.onerror = g : this.xhr.onreadystatechange = g;
                                if (b) try {
                                    this.xhr.abort()
                                } catch (e) {}
                                c.document && delete k.requests[this.index];
                                this.xhr = null
                            }
                        };
                        k.prototype.onLoad = function() {
                            var b;
                            try {
                                var c;
                                try {
                                    c = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                                } catch (e) {}
                                if ("application/octet-stream" ===
                                    c) b = this.xhr.response;
                                else if (this.supportsBinary) try {
                                    b = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                } catch (g) {
                                    var k = new Uint8Array(this.xhr.response);
                                    c = [];
                                    for (var m = 0, p = k.length; m < p; m++) c.push(k[m]);
                                    b = String.fromCharCode.apply(null, c)
                                } else b = this.xhr.responseText
                            } catch (s) {
                                this.onError(s)
                            }
                            if (null != b) this.onData(b)
                        };
                        k.prototype.hasXDR = function() {
                            return "undefined" !== typeof c.XDomainRequest && !this.xs && this.enablesXDR
                        };
                        k.prototype.abort = function() {
                            this.cleanup()
                        };
                        c.document && (k.requestsCount =
                            0, k.requests = {}, c.attachEvent ? c.attachEvent("onunload", e) : c.addEventListener && c.addEventListener("beforeunload", e, !1))
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {
                    "./polling": 17,
                    "component-emitter": 8,
                    "component-inherit": 9,
                    debug: "n9i2g6",
                    "xmlhttprequest-ssl": 19
                }],
                17: [function(p, s, t) {
                    function c(b) {
                        var c = b && b.forceBase64;
                        if (!z || c) this.supportsBinary = !1;
                        g.call(this, b)
                    }
                    var g = p("../transport"),
                        m = p("parseqs"),
                        k = p("engine.io-parser");
                    t = p("component-inherit");
                    var e =
                        p("yeast"),
                        T = p("debug")("engine.io-client:polling");
                    s.exports = c;
                    var z = null != (new(p("xmlhttprequest-ssl"))({
                        xdomain: !1
                    })).responseType;
                    t(c, g);
                    c.prototype.name = "polling";
                    c.prototype.doOpen = function() {
                        this.poll()
                    };
                    c.prototype.pause = function(b) {
                        function c() {
                            T("paused");
                            e.readyState = "paused";
                            b()
                        }
                        var e = this;
                        this.readyState = "pausing";
                        if (this.polling || !this.writable) {
                            var g = 0;
                            this.polling && (T("we are currently polling - waiting to pause"), g++, this.once("pollComplete", function() {
                                T("pre-pause polling complete");
                                --g || c()
                            }));
                            this.writable || (T("we are currently writing - waiting to pause"), g++, this.once("drain", function() {
                                T("pre-pause writing complete");
                                --g || c()
                            }))
                        } else c()
                    };
                    c.prototype.poll = function() {
                        T("polling");
                        this.polling = !0;
                        this.doPoll();
                        this.emit("poll")
                    };
                    c.prototype.onData = function(b) {
                        var c = this;
                        T("polling got data %s", b);
                        k.decodePayload(b, this.socket.binaryType, function(b, e, g) {
                            if ("opening" == c.readyState) c.onOpen();
                            if ("close" == b.type) return c.onClose(), !1;
                            c.onPacket(b)
                        });
                        "closed" != this.readyState &&
                            (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : T('ignoring poll - transport state "%s"', this.readyState))
                    };
                    c.prototype.doClose = function() {
                        function b() {
                            T("writing close packet");
                            c.write([{
                                type: "close"
                            }])
                        }
                        var c = this;
                        "open" == this.readyState ? (T("transport open - closing"), b()) : (T("transport not open - deferring close"), this.once("open", b))
                    };
                    c.prototype.write = function(b) {
                        var c = this;
                        this.writable = !1;
                        var e = function() {
                                c.writable = !0;
                                c.emit("drain")
                            },
                            c = this;
                        k.encodePayload(b,
                            this.supportsBinary,
                            function(b) {
                                c.doWrite(b, e)
                            })
                    };
                    c.prototype.uri = function() {
                        var b = this.query || {},
                            c = this.secure ? "https" : "http",
                            g = "";
                        !1 !== this.timestampRequests && (b[this.timestampParam] = e());
                        this.supportsBinary || b.sid || (b.b64 = 1);
                        b = m.encode(b);
                        this.port && ("https" == c && 443 != this.port || "http" == c && 80 != this.port) && (g = ":" + this.port);
                        b.length && (b = "?" + b);
                        var k = -1 !== this.hostname.indexOf(":");
                        return c + "://" + (k ? "[" + this.hostname + "]" : this.hostname) + g + this.path + b
                    }
                }, {
                    "../transport": 13,
                    "component-inherit": 9,
                    debug: "n9i2g6",
                    "engine.io-parser": 20,
                    parseqs: 27,
                    "xmlhttprequest-ssl": 19,
                    yeast: 30
                }],
                18: [function(p, s, t) {
                    (function(c) {
                        function g(b) {
                            b && b.forceBase64 && (this.supportsBinary = !1);
                            this.perMessageDeflate = b.perMessageDeflate;
                            m.call(this, b)
                        }
                        var m = p("../transport"),
                            k = p("engine.io-parser"),
                            e = p("parseqs"),
                            t = p("component-inherit"),
                            z = p("yeast"),
                            b = p("debug")("engine.io-client:websocket"),
                            v = c.WebSocket || c.MozWebSocket,
                            I = v;
                        if (!I && "undefined" === typeof window) try {
                            I = p("ws")
                        } catch (w) {}
                        s.exports = g;
                        t(g, m);
                        g.prototype.name = "websocket";
                        g.prototype.supportsBinary = !0;
                        g.prototype.doOpen = function() {
                            if (this.check()) {
                                var b = this.uri(),
                                    c = {
                                        agent: this.agent,
                                        perMessageDeflate: this.perMessageDeflate
                                    };
                                c.pfx = this.pfx;
                                c.key = this.key;
                                c.passphrase = this.passphrase;
                                c.cert = this.cert;
                                c.ca = this.ca;
                                c.ciphers = this.ciphers;
                                c.rejectUnauthorized = this.rejectUnauthorized;
                                this.extraHeaders && (c.headers = this.extraHeaders);
                                this.ws = v ? new I(b) : new I(b, void 0, c);
                                void 0 === this.ws.binaryType && (this.supportsBinary = !1);
                                this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer";
                                this.addEventListeners()
                            }
                        };
                        g.prototype.addEventListeners = function() {
                            var b = this;
                            this.ws.onopen = function() {
                                b.onOpen()
                            };
                            this.ws.onclose = function() {
                                b.onClose()
                            };
                            this.ws.onmessage = function(c) {
                                b.onData(c.data)
                            };
                            this.ws.onerror = function(c) {
                                b.onError("websocket error", c)
                            }
                        };
                        "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (g.prototype.onData = function(b) {
                            var c = this;
                            setTimeout(function() {
                                    m.prototype.onData.call(c, b)
                                },
                                0)
                        });
                        g.prototype.write = function(e) {
                            function g() {
                                m.emit("flush");
                                setTimeout(function() {
                                    m.writable = !0;
                                    m.emit("drain")
                                }, 0)
                            }
                            var m = this;
                            this.writable = !1;
                            for (var p = e.length, s = 0, t = p; s < t; s++)(function(e) {
                                k.encodePacket(e, m.supportsBinary, function(k) {
                                    if (!v) {
                                        var s = {};
                                        e.options && (s.compress = e.options.compress);
                                        m.perMessageDeflate && ("string" == typeof k ? c.Buffer.byteLength(k) : k.length) < m.perMessageDeflate.threshold && (s.compress = !1)
                                    }
                                    try {
                                        v ? m.ws.send(k) : m.ws.send(k, s)
                                    } catch (t) {
                                        b("websocket closed before onclose event")
                                    }--p ||
                                        g()
                                })
                            })(e[s])
                        };
                        g.prototype.onClose = function() {
                            m.prototype.onClose.call(this)
                        };
                        g.prototype.doClose = function() {
                            "undefined" !== typeof this.ws && this.ws.close()
                        };
                        g.prototype.uri = function() {
                            var b = this.query || {},
                                c = this.secure ? "wss" : "ws",
                                g = "";
                            this.port && ("wss" == c && 443 != this.port || "ws" == c && 80 != this.port) && (g = ":" + this.port);
                            this.timestampRequests && (b[this.timestampParam] = z());
                            this.supportsBinary || (b.b64 = 1);
                            b = e.encode(b);
                            b.length && (b = "?" + b);
                            var k = -1 !== this.hostname.indexOf(":");
                            return c + "://" + (k ? "[" + this.hostname +
                                "]" : this.hostname) + g + this.path + b
                        };
                        g.prototype.check = function() {
                            return !!I && !("__initialize" in I && this.name === g.prototype.name)
                        }
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {
                    "../transport": 13,
                    "component-inherit": 9,
                    debug: "n9i2g6",
                    "engine.io-parser": 20,
                    parseqs: 27,
                    ws: 7,
                    yeast: 30
                }],
                19: [function(p, s, t) {
                    var c = p("has-cors");
                    s.exports = function(g) {
                        var m = g.xdomain,
                            k = g.xscheme;
                        g = g.enablesXDR;
                        try {
                            if ("undefined" != typeof XMLHttpRequest && (!m || c)) return new XMLHttpRequest
                        } catch (e) {}
                        try {
                            if ("undefined" !=
                                typeof XDomainRequest && !k && g) return new XDomainRequest
                        } catch (p) {}
                        if (!m) try {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (s) {}
                    }
                }, {
                    "has-cors": 23
                }],
                20: [function(p, s, t) {
                    (function(c) {
                        function g(b, c, e) {
                            if (!c) return t.encodeBase64Packet(b, e);
                            var g = new FileReader;
                            g.onload = function() {
                                b.data = g.result;
                                t.encodePacket(b, c, !0, e)
                            };
                            return g.readAsArrayBuffer(b.data)
                        }

                        function m(c, e, g) {
                            var k = Array(c.length);
                            g = b(c.length, g);
                            for (var m = function(b, c, g) {
                                    e(c, function(c, h) {
                                        k[b] = h;
                                        g(c, k)
                                    })
                                }, p = 0; p < c.length; p++) m(p, c[p],
                                g)
                        }
                        var k = p("./keys"),
                            e = p("has-binary"),
                            s = p("arraybuffer.slice"),
                            z = p("base64-arraybuffer"),
                            b = p("after"),
                            v = p("utf8"),
                            I = navigator.userAgent.match(/Android/i),
                            w = /PhantomJS/i.test(navigator.userAgent),
                            V = I || w;
                        t.protocol = 3;
                        var y = t.packets = {
                                open: 0,
                                close: 1,
                                ping: 2,
                                pong: 3,
                                message: 4,
                                upgrade: 5,
                                noop: 6
                            },
                            G = k(y),
                            J = {
                                type: "error",
                                data: "parser error"
                            },
                            M = p("blob");
                        t.encodePacket = function(b, e, k, m) {
                            "function" == typeof e && (m = e, e = !1);
                            "function" == typeof k && (m = k, k = null);
                            var p = void 0 === b.data ? void 0 : b.data.buffer || b.data;
                            if (c.ArrayBuffer &&
                                p instanceof ArrayBuffer) {
                                if (e) {
                                    k = b.data;
                                    e = new Uint8Array(k);
                                    k = new Uint8Array(1 + k.byteLength);
                                    k[0] = y[b.type];
                                    for (b = 0; b < e.length; b++) k[b + 1] = e[b];
                                    b = m(k.buffer)
                                } else b = t.encodeBase64Packet(b, m);
                                return b
                            }
                            if (M && p instanceof c.Blob) return e ? V ? b = g(b, e, m) : (e = new Uint8Array(1), e[0] = y[b.type], b = new M([e.buffer, b.data]), b = m(b)) : b = t.encodeBase64Packet(b, m), b;
                            if (p && p.base64) return m("b" + t.packets[b.type] + b.data.data);
                            e = y[b.type];
                            void 0 !== b.data && (e += k ? v.encode(String(b.data)) : String(b.data));
                            return m("" + e)
                        };
                        t.encodeBase64Packet =
                            function(b, e) {
                                var g = "b" + t.packets[b.type];
                                if (M && b.data instanceof c.Blob) {
                                    var k = new FileReader;
                                    k.onload = function() {
                                        var b = k.result.split(",")[1];
                                        e(g + b)
                                    };
                                    return k.readAsDataURL(b.data)
                                }
                                var m;
                                try {
                                    m = String.fromCharCode.apply(null, new Uint8Array(b.data))
                                } catch (p) {
                                    m = new Uint8Array(b.data);
                                    for (var s = Array(m.length), v = 0; v < m.length; v++) s[v] = m[v];
                                    m = String.fromCharCode.apply(null, s)
                                }
                                g += c.btoa(m);
                                return e(g)
                            };
                        t.decodePacket = function(b, c, e) {
                            if ("string" == typeof b || void 0 === b) {
                                if ("b" == b.charAt(0)) return t.decodeBase64Packet(b.substr(1),
                                    c);
                                if (e) try {
                                    b = v.decode(b)
                                } catch (g) {
                                    return J
                                }
                                e = b.charAt(0);
                                return Number(e) == e && G[e] ? 1 < b.length ? {
                                    type: G[e],
                                    data: b.substring(1)
                                } : {
                                    type: G[e]
                                } : J
                            }
                            e = (new Uint8Array(b))[0];
                            b = s(b, 1);
                            M && "blob" === c && (b = new M([b]));
                            return {
                                type: G[e],
                                data: b
                            }
                        };
                        t.decodeBase64Packet = function(b, e) {
                            var g = G[b.charAt(0)];
                            if (!c.ArrayBuffer) return {
                                type: g,
                                data: {
                                    base64: !0,
                                    data: b.substr(1)
                                }
                            };
                            var k = z.decode(b.substr(1));
                            "blob" === e && M && (k = new M([k]));
                            return {
                                type: g,
                                data: k
                            }
                        };
                        t.encodePayload = function(b, c, g) {
                            "function" == typeof c && (g = c, c = null);
                            var k = e(b);
                            if (c && k) return M && !V ? t.encodePayloadAsBlob(b, g) : t.encodePayloadAsArrayBuffer(b, g);
                            if (!b.length) return g("0:");
                            m(b, function(b, e) {
                                t.encodePacket(b, k ? c : !1, !0, function(b) {
                                    e(null, b.length + ":" + b)
                                })
                            }, function(b, c) {
                                return g(c.join(""))
                            })
                        };
                        t.decodePayload = function(b, c, e) {
                            if ("string" != typeof b) return t.decodePayloadAsBinary(b, c, e);
                            "function" === typeof c && (e = c, c = null);
                            var g;
                            if ("" == b) return e(J, 0, 1);
                            g = "";
                            for (var k, m, p = 0, s = b.length; p < s; p++)
                                if (m = b.charAt(p), ":" != m) g += m;
                                else {
                                    if ("" == g || g != (k = Number(g))) return e(J,
                                        0, 1);
                                    m = b.substr(p + 1, k);
                                    if (g != m.length) return e(J, 0, 1);
                                    if (m.length) {
                                        g = t.decodePacket(m, c, !0);
                                        if (J.type == g.type && J.data == g.data) return e(J, 0, 1);
                                        if (!1 === e(g, p + k, s)) return
                                    }
                                    p += k;
                                    g = ""
                                }
                            if ("" != g) return e(J, 0, 1)
                        };
                        t.encodePayloadAsArrayBuffer = function(b, c) {
                            if (!b.length) return c(new ArrayBuffer(0));
                            m(b, function(b, c) {
                                t.encodePacket(b, !0, !0, function(b) {
                                    return c(null, b)
                                })
                            }, function(b, e) {
                                var g = e.reduce(function(b, c) {
                                        var e;
                                        e = "string" === typeof c ? c.length : c.byteLength;
                                        return b + e.toString().length + e + 2
                                    }, 0),
                                    k = new Uint8Array(g),
                                    m = 0;
                                e.forEach(function(b) {
                                    var c = "string" === typeof b,
                                        e = b;
                                    if (c) {
                                        for (var e = new Uint8Array(b.length), h = 0; h < b.length; h++) e[h] = b.charCodeAt(h);
                                        e = e.buffer
                                    }
                                    c ? k[m++] = 0 : k[m++] = 1;
                                    b = e.byteLength.toString();
                                    for (h = 0; h < b.length; h++) k[m++] = parseInt(b[h]);
                                    k[m++] = 255;
                                    e = new Uint8Array(e);
                                    for (h = 0; h < e.length; h++) k[m++] = e[h]
                                });
                                return c(k.buffer)
                            })
                        };
                        t.encodePayloadAsBlob = function(b, c) {
                            m(b, function(b, c) {
                                t.encodePacket(b, !0, !0, function(b) {
                                    var e = new Uint8Array(1);
                                    e[0] = 1;
                                    if ("string" === typeof b) {
                                        for (var g = new Uint8Array(b.length),
                                                k = 0; k < b.length; k++) g[k] = b.charCodeAt(k);
                                        b = g.buffer;
                                        e[0] = 0
                                    }
                                    for (var g = (b instanceof ArrayBuffer ? b.byteLength : b.size).toString(), m = new Uint8Array(g.length + 1), k = 0; k < g.length; k++) m[k] = parseInt(g[k]);
                                    m[g.length] = 255;
                                    M && (b = new M([e.buffer, m.buffer, b]), c(null, b))
                                })
                            }, function(b, e) {
                                return c(new M(e))
                            })
                        };
                        t.decodePayloadAsBinary = function(b, c, e) {
                            "function" === typeof c && (e = c, c = null);
                            for (var g = [], k = !1; 0 < b.byteLength;) {
                                for (var m = new Uint8Array(b), p = 0 === m[0], v = "", z = 1; 255 != m[z]; z++) {
                                    if (310 < v.length) {
                                        k = !0;
                                        break
                                    }
                                    v += m[z]
                                }
                                if (k) return e(J,
                                    0, 1);
                                b = s(b, 2 + v.length);
                                v = parseInt(v);
                                m = s(b, 0, v);
                                if (p) try {
                                    m = String.fromCharCode.apply(null, new Uint8Array(m))
                                } catch (y) {
                                    for (p = new Uint8Array(m), m = "", z = 0; z < p.length; z++) m += String.fromCharCode(p[z])
                                }
                                g.push(m);
                                b = s(b, v)
                            }
                            var h = g.length;
                            g.forEach(function(b, g) {
                                e(t.decodePacket(b, c, !0), g, h)
                            })
                        }
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {
                    "./keys": 21,
                    after: 3,
                    "arraybuffer.slice": 4,
                    "base64-arraybuffer": 5,
                    blob: 6,
                    "has-binary": 22,
                    utf8: 29
                }],
                21: [function(p, s, t) {
                    s.exports = Object.keys ||

                        function(c) {
                            var g = [],
                                m = Object.prototype.hasOwnProperty,
                                k;
                            for (k in c) m.call(c, k) && g.push(k);
                            return g
                        }
                }, {}],
                22: [function(p, s, t) {
                    (function(c) {
                        var g = p("isarray");
                        s.exports = function(m) {
                            function k(e) {
                                if (!e) return !1;
                                if (c.Buffer && c.Buffer.isBuffer(e) || c.ArrayBuffer && e instanceof ArrayBuffer || c.Blob && e instanceof Blob || c.File && e instanceof File) return !0;
                                if (g(e))
                                    for (var m = 0; m < e.length; m++) {
                                        if (k(e[m])) return !0
                                    } else if (e && "object" == typeof e)
                                        for (m in e.toJSON && (e = e.toJSON()), e)
                                            if (Object.prototype.hasOwnProperty.call(e,
                                                    m) && k(e[m])) return !0;
                                return !1
                            }
                            return k(m)
                        }
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {
                    isarray: 25
                }],
                23: [function(p, s, t) {
                    try {
                        s.exports = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                    } catch (c) {
                        s.exports = !1
                    }
                }, {}],
                24: [function(p, s, t) {
                    var c = [].indexOf;
                    s.exports = function(g, m) {
                        if (c) return g.indexOf(m);
                        for (var k = 0; k < g.length; ++k)
                            if (g[k] === m) return k;
                        return -1
                    }
                }, {}],
                25: [function(p, s, t) {
                    s.exports = Array.isArray || function(c) {
                        return "[object Array]" ==
                            Object.prototype.toString.call(c)
                    }
                }, {}],
                26: [function(p, s, t) {
                    (function(c) {
                        var g = /^[\],:{}\s]*$/,
                            m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                            k = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                            e = /(?:^|:|,)(?:\s*\[)+/g,
                            p = /^\s+/,
                            t = /\s+$/;
                        s.exports = function(b) {
                            if ("string" != typeof b || !b) return null;
                            b = b.replace(p, "").replace(t, "");
                            if (c.JSON && JSON.parse) return JSON.parse(b);
                            if (g.test(b.replace(m, "@").replace(k, "]").replace(e, ""))) return (new Function("return " + b))()
                        }
                    }).call(this, "undefined" !==
                        typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {}],
                27: [function(p, s, t) {
                    t.encode = function(c) {
                        var g = "",
                            m;
                        for (m in c) c.hasOwnProperty(m) && (g.length && (g += "&"), g += encodeURIComponent(m) + "=" + encodeURIComponent(c[m]));
                        return g
                    };
                    t.decode = function(c) {
                        var g = {};
                        c = c.split("&");
                        for (var m = 0, k = c.length; m < k; m++) {
                            var e = c[m].split("=");
                            g[decodeURIComponent(e[0])] = decodeURIComponent(e[1])
                        }
                        return g
                    }
                }, {}],
                28: [function(p, s, t) {
                    var c = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        g = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");
                    s.exports = function(m) {
                        var k = m,
                            e = m.indexOf("["),
                            p = m.indexOf("]"); - 1 != e && -1 != p && (m = m.substring(0, e) + m.substring(e, p).replace(/:/g, ";") + m.substring(p, m.length));
                        m = c.exec(m || "");
                        for (var s = {}, b = 14; b--;) s[g[b]] = m[b] || ""; - 1 != e && -1 != p && (s.source = k, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0);
                        return s
                    }
                }, {}],
                29: [function(p, s, t) {
                    (function(c) {
                        (function(g) {
                            function m(b) {
                                for (var c = [], e = 0, g = b.length, m, k; e < g;) m = b.charCodeAt(e++), 55296 <= m && 56319 >= m && e < g ? (k = b.charCodeAt(e++), 56320 == (k & 64512) ? c.push(((m & 1023) << 10) + (k & 1023) + 65536) : (c.push(m), e--)) : c.push(m);
                                return c
                            }

                            function k(b) {
                                if (55296 <= b && 57343 >= b) throw Error("Lone surrogate U+" + b.toString(16).toUpperCase() + " is not a scalar value");
                            }

                            function e() {
                                if (y >= V) throw Error("Invalid byte index");
                                var b = w[y] & 255;
                                y++;
                                if (128 == (b & 192)) return b & 63;
                                throw Error("Invalid continuation byte");
                            }

                            function p() {
                                var b, c, g, m;
                                if (y > V) throw Error("Invalid byte index");
                                if (y == V) return !1;
                                b = w[y] & 255;
                                y++;
                                if (0 == (b & 128)) return b;
                                if (192 == (b & 224)) {
                                    c = e();
                                    b = (b & 31) << 6 | c;
                                    if (128 <= b) return b;
                                    throw Error("Invalid continuation byte");
                                }
                                if (224 == (b & 240)) {
                                    c = e();
                                    g = e();
                                    b = (b & 15) << 12 | c << 6 | g;
                                    if (2048 <= b) return k(b), b;
                                    throw Error("Invalid continuation byte");
                                }
                                if (240 == (b & 248) && (c = e(), g = e(), m = e(), b = (b & 15) << 18 | c << 12 | g << 6 | m, 65536 <= b && 1114111 >= b)) return b;
                                throw Error("Invalid UTF-8 detected");
                            }
                            var z = "object" == typeof t && t,
                                b = "object" ==
                                typeof s && s && s.exports == z && s,
                                v = "object" == typeof c && c;
                            if (v.global === v || v.window === v) g = v;
                            var I = String.fromCharCode,
                                w, V, y, v = {
                                    version: "2.0.0",
                                    encode: function(b) {
                                        b = m(b);
                                        for (var c = b.length, e = -1, g, p = ""; ++e < c;) {
                                            g = b[e];
                                            if (0 == (g & 4294967168)) g = I(g);
                                            else {
                                                var s = "";
                                                0 == (g & 4294965248) ? s = I(g >> 6 & 31 | 192) : 0 == (g & 4294901760) ? (k(g), s = I(g >> 12 & 15 | 224), s += I(g >> 6 & 63 | 128)) : 0 == (g & 4292870144) && (s = I(g >> 18 & 7 | 240), s += I(g >> 12 & 63 | 128), s += I(g >> 6 & 63 | 128));
                                                g = s += I(g & 63 | 128)
                                            }
                                            p += g
                                        }
                                        return p
                                    },
                                    decode: function(b) {
                                        w = m(b);
                                        V = w.length;
                                        y = 0;
                                        b = [];
                                        for (var c; !1 !== (c = p());) b.push(c);
                                        c = b.length;
                                        for (var e = -1, g, k = ""; ++e < c;) g = b[e], 65535 < g && (g -= 65536, k += I(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023), k += I(g);
                                        return k
                                    }
                                };
                            if (z && !z.nodeType)
                                if (b) b.exports = v;
                                else {
                                    g = {}.hasOwnProperty;
                                    for (var G in v) g.call(v, G) && (z[G] = v[G])
                                }
                            else g.utf8 = v
                        })(this)
                    }).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
                }, {}],
                30: [function(p, s, t) {
                    function c(b) {
                        var c = "";
                        do c = m[b % k] + c, b = Math.floor(b / k); while (0 < b);
                        return c
                    }

                    function g() {
                        var e = c(+new Date);
                        return e !==
                            b ? (T = 0, b = e) : e + "." + c(T++)
                    }
                    for (var m = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), k = 64, e = {}, T = 0, z = 0, b; z < k; z++) e[m[z]] = z;
                    g.encode = c;
                    g.decode = function(b) {
                        var c = 0;
                        for (z = 0; z < b.length; z++) c = c * k + e[b.charAt(z)];
                        return c
                    };
                    s.exports = g
                }, {}]
            }, {}, [10])(10)
        })
    })();
    $_TAWK_JSON = {};
    (function() {
        function x(c) {
            return 10 > c ? "0" + c : c
        }

        function p(e) {
            c.lastIndex = 0;
            return c.test(e) ? '"' + e.replace(c, function(c) {
                var b = k[c];
                return "string" === typeof b ? b : "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function s(c, k) {
            var b, t, I, w, V = g,
                y, G = k[c];
            G && "object" === typeof G && (b = G, G = b instanceof Date ? isFinite(b.valueOf()) ? b.getUTCFullYear() + "-" + x(b.getUTCMonth() + 1) + "-" + x(b.getUTCDate()) + "T" + x(b.getUTCHours()) + ":" + x(b.getUTCMinutes()) + ":" + x(b.getUTCSeconds()) + "Z" : null : "function" ===
                typeof b.valueOf ? b.valueOf() : null);
            "function" === typeof e && (G = e.call(k, c, G));
            switch (typeof G) {
                case "string":
                    return p(G);
                case "number":
                    return isFinite(G) ? String(G) : "null";
                case "boolean":
                case "null":
                    return String(G);
                case "object":
                    if (!G) return "null";
                    g += m;
                    y = [];
                    if ("[object Array]" === Object.prototype.toString.apply(G)) {
                        w = G.length;
                        for (b = 0; b < w; b += 1) y[b] = s(b, G) || "null";
                        I = 0 === y.length ? "[]" : g ? "[\n" + g + y.join(",\n" + g) + "\n" + V + "]" : "[" + y.join(",") + "]";
                        g = V;
                        return I
                    }
                    if (e && "object" === typeof e)
                        for (w = e.length, b = 0; b < w; b +=
                            1) "string" === typeof e[b] && (t = e[b], (I = s(t, G)) && y.push(p(t) + (g ? ": " : ":") + I));
                    else
                        for (t in G) Object.prototype.hasOwnProperty.call(G, t) && (I = s(t, G)) && y.push(p(t) + (g ? ": " : ":") + I);
                    I = 0 === y.length ? "{}" : g ? "{\n" + g + y.join(",\n" + g) + "\n" + V + "}" : "{" + y.join(",") + "}";
                    g = V;
                    return I
            }
        }
        var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            g, m, k = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            e;
        $_TAWK_JSON.stringify = function(c, k, b) {
            var p;
            m = g = "";
            if ("number" === typeof b)
                for (p = 0; p < b; p += 1) m += " ";
            else "string" === typeof b && (m = b);
            if ((e = k) && "function" !== typeof k && ("object" !== typeof k || "number" !== typeof k.length)) throw Error("JSON.stringify");
            return s("", {
                "": c
            })
        };
        $_TAWK_JSON.parse = function(c, e) {
            function b(c, g) {
                var k, m, p = c[g];
                if (p && "object" === typeof p)
                    for (k in p) Object.prototype.hasOwnProperty.call(p, k) && (m = b(p, k),
                        void 0 !== m ? p[k] = m : delete p[k]);
                return e.call(c, g, p)
            }
            var g;
            c = String(c);
            t.lastIndex = 0;
            t.test(c) && (c = c.replace(t, function(b) {
                return "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return g = eval("(" + c + ")"), "function" === typeof e ? b({
                "": g
            }, "") : g;
            throw new SyntaxError("JSON.parse");
        }
    })();
    (function(x) {
        "function" !== typeof Array.isArray && (Array.isArray = function(p) {
            return "[object Array]" === Object.prototype.toString.call(p)
        });
        Array.prototype.indexOf || (Array.prototype.indexOf = function(p) {
            for (var t = 0, c = this.length; t < c; t++)
                if (this[t] === p) return t;
            return -1
        });
        x = x.EventEmitter = function() {};
        var p = Array.isArray;
        x.prototype.emit = function(s) {
            var t;
            if ("error" === s && (!this._events || !this._events.error || p(this._events.error) && !this._events.error.length)) {
                if (arguments[1] instanceof Error) throw arguments[1];
                throw Error("Uncaught, unspecified 'error' event.");
            }
            if (!this._events) return !1;
            var c = this._events[s];
            if (!c) return !1;
            if ("function" == typeof c) {
                switch (arguments.length) {
                    case 1:
                        c.call(this);
                        break;
                    case 2:
                        c.call(this, arguments[1]);
                        break;
                    case 3:
                        c.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        t = Array.prototype.slice.call(arguments, 1), c.apply(this, t)
                }
                return !0
            }
            if (p(c)) {
                t = Array.prototype.slice.call(arguments, 1);
                for (var c = c.slice(), g = 0, m = c.length; g < m; g++) c[g].apply(this, t);
                return !0
            }
            return !1
        };
        x.prototype.addListener =
            function(s, t) {
                if ("function" !== typeof t) throw Error("addListener only takes instances of Function");
                this._events || (this._events = {});
                this._events[s] ? p(this._events[s]) ? this._events[s].push(t) : this._events[s] = [this._events[s], t] : this._events[s] = t;
                return this
            };
        x.prototype.on = x.prototype.addListener;
        x.prototype.once = function(p, t) {
            var c = this;
            c.on(p, function m() {
                c.removeListener(p, m);
                t.apply(this, arguments)
            })
        };
        x.prototype.removeListener = function(s, t) {
            if ("function" !== typeof t) throw Error("removeListener only takes instances of Function");
            if (!this._events || !this._events[s]) return this;
            var c = this._events[s];
            if (p(c)) {
                var g = c.indexOf(t);
                if (0 > g) return this;
                c.splice(g, 1);
                0 === c.length && delete this._events[s]
            } else this._events[s] === t && delete this._events[s];
            return this
        };
        x.prototype.removeAllListeners = function(p) {
            p ? p && (this._events && this._events[p]) && (this._events[p] = null) : this._events = {};
            return this
        };
        x.prototype.listeners = function(s) {
            this._events || (this._events = {});
            this._events[s] || (this._events[s] = []);
            p(this._events[s]) || (this._events[s] = [this._events[s]]);
            return this._events[s]
        }
    })(window);
    (function(x) {
        function p(c, g) {
            if (!g.engineIo) throw Error("You must specify engineIo");
            g.timestampRequests = !0;
            g.timestampParam = "__t";
            this.__callbackIndex = 0;
            this.__callbacks = {};
            this.state = t.OPENING;
            this.socket = new g.engineIo(c, g);
            this.debug = !1;
            if (document.getElementById("tawk__dmz")) {
                var m = this;
                x.getSocketTransport = function() {
                    if (m.socket.transport) return m.socket.transport.name
                }
            }
            document.location && "#!tawk-debug" === document.location.hash && (this.debug = !0);
            EventEmitter.call(this);
            this.attachListeners()
        }
        var s, t = {
            OPENING: "opening",
            OPEN: "open",
            CLOSING: "closing",
            CLOSED: "closed"
        };
        for (s in EventEmitter.prototype) "function" === typeof EventEmitter.prototype[s] && Object.prototype.hasOwnProperty.call(EventEmitter.prototype, s) && (p.prototype[s] = EventEmitter.prototype[s]);
        p.prototype.attachListeners = function() {
            var c = this;
            this.socket.on("open", function() {
                c.state = t.OPEN;
                c.emit("connect")
            });
            this.socket.on("close", function(g, m) {
                c.emit("disconnect", g, m);
                c.doClose()
            });
            this.socket.on("error", function(g) {
                c.emit("error",
                    g)
            });
            this.socket.on("message", function(g) {
                c.onMessage(g)
            })
        };
        p.prototype.close = p.prototype.disconnect = function() {
            var c = this;
            this.state === t.OPENING && setTimeout(function() {
                c.close()
            }, 1E3);
            this.state === t.OPEN && (this.state = t.CLOSING, this.clearCallbacks(), this.socket.close())
        };
        p.prototype.doClose = function() {
            this.clearCallbacks();
            this.state = t.CLOSED;
            this.socket.removeAllListeners();
            this.removeAllListeners();
            this.socket = null
        };
        p.prototype.clearCallbacks = function() {
            this.__callbacks = {}
        };
        p.prototype.onMessage =
            function(c) {
                (c = this.decode(c)) && ("__callback__" === c.c ? this.executeCallback(c) : this.emit.apply(this, [c.c].concat(c.p)))
            };
        p.prototype.executeCallback = function(c) {
            var g = this.__callbacks[c.cb];
            delete this.__callbacks[c.cb];
            g.apply(null, c.p)
        };
        p.prototype.decode = function(c) {
            var g;
            this.debug && (console && console.log) && (data = new Date, console.log("received " + data.toUTCString() + " : " + c));
            try {
                g = $_TAWK_JSON.parse(c)
            } catch (m) {
                this.emit("error", m);
                return
            }
            if (g.c)
                if ("error" === g.c || "connect" === g.c || "disconnect" === g.c) this.emit("error",
                    Error("server returned reserved command : `" + g.cmd + "`"));
                else if (g.p && "[object Array]" !== Object.prototype.toString.call(g.p)) this.emit("error", Error("data is expected to be an array"));
            else {
                if ("__callback__" !== g.c) return g;
                c = parseInt(g.cb, 10);
                if (isNaN(c)) this.emit("error", Error("received callback command but there was no valid callback id(`" + c + "`"));
                else {
                    if (this.__callbacks[c]) return g.cb = c, g;
                    this.emit("error", Error("received callback command but callback isnt present (`" + g.cb + "`)"))
                }
            } else this.emit("error",
                Error("no command was sent by the server"))
        };
        p.prototype.send = function() {
            var c = this.encode(arguments);
            this.debug && (console && console.log) && (data = new Date, console.log("send " + data.toUTCString() + " : " + c));
            this.state !== t.OPEN ? this.emit("error", Error("Socket isnt open its state is `" + this.state + "` tried to send `" + c + "`")) : c && this.socket.send(c)
        };
        p.prototype.encode = function(c) {
            var g = {};
            c = Array.prototype.slice.call(c);
            if (c[0]) {
                g.c = c[0];
                "function" === typeof c[c.length - 1] && (g.cb = this.enqueuCallback(c.pop()));
                g.p = c.slice(1);
                var m;
                try {
                    m = $_TAWK_JSON.stringify(g)
                } catch (k) {
                    this.emit("error", k);
                    return
                }
                return m
            }
            this.emit("error", Error("now command specified"))
        };
        p.prototype.enqueuCallback = function(c) {
            this.__callbacks[this.__callbackIndex] = c;
            return this.__callbackIndex++
        };
        x.$__TawkSocket = p
    })(window);
    (function(x) {
        var p, s, t, c, g, m, k = {},
            e = this,
            T = (new Date).getTime(),
            z = e.navigator,
            b = {
                viewHandler: null
            };
        x.startTime = T.toString();
        x.loaded = !1;
        x.connected = !1;
        x.ready = !1;
        "undefined" !== typeof Tawk_LoadStart && ($_Tawk_LoadStart = Tawk_LoadStart);
        try {
            b.ResetStyle = "html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}html,body{height:100%;width:100%}body{background:transparent;height:100%;width:100%;font:13px Helvetica,Arial,sans-serif;position:relative}.clear{clear:both}.clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}";
            b.MaximizedStyle = ".rtl-direction{direction:rtl !important}#tawkchat-maximized-wrapper{width:100%;height:100%;position:relative}#borderWrapper{position:absolute;top:0;bottom:0;z-index:-10;background-color:#e1e1e1;width:100%;height:100%}.noCookies #borderWrapper{background-color:transparent}#innerWrapper{background:#fff;left:2px;position:absolute;right:2px;top:2px;bottom:0;*height:expression(this.parentNode.offsetHeight - 4+'px');*width:expression(this.parentNode.offsetWidth - 4+'px');-webkit-box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px;-moz-box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px;box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px}.embedded #innerWrapper{left:0 !important;right:0 !important;top:0 !important;bottom:0 !important}#headerBoxWrapper{height:45px}#expandableLink{height:5px;width:100%;font-size:0;cursor:s-resize;visibility:hidden;position:absolute;top:56px;z-index:30}#expandableIcon{width:30px;height:4px;margin:0 auto;background:#a1a1a1}#expandableLink.expanded{cursor:n-resize}#headerBox{height:45px;position:relative;z-index:30}.noCookies #headerBox{-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box;border-radius:8px 8px 0 0 !important;-moz-border-radius:8px 8px 0 0 !important;-webkit-border-radius:8px 8px 0 0 !important}.noCookies.embed #headerBox{border-radius:0 !important;-moz-border-radius:0 !important;-webkit-border-radius:0 !important}#agentBar{position:absolute;bottom:32px;top:70px;width:100%;background-color:#eee;display:none;overflow:auto;z-index:10003}.noCookies #headerBoxControlsContainer{float:right;margin-left:0;width:28px}#headerBoxControlsContainer{height:45px;float:left;width:83px;margin-left:-83px}.rtl-direction #headerBoxControlsContainer{margin-left:-100%}#popupLink{float:right;display:inline;margin:15px 6px 0 0;background:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-repeat:no-repeat;background-position:-213px 0;width:20px;height:20px;cursor:pointer}.noCookies #minimizeChat{width:15px;margin:20px 0;cursor:pointer}.noCookies.white #minimizeChat{background-position:-95px 0}.noCookies.black #minimizeChat{background-position:-32px 0}#minimizeLink{display:inline;background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-188px 0;width:20px;height:20px;background-repeat:no-repeat;float:right;margin:15px 6px 0 0;cursor:pointer}#headerAccountStateContainer{float:left;width:100%;height:45px}#headerAccountState{vertical-align:baseline;font-size:17px;padding:0 15px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-right:80px;margin-left:0;line-height:45px}.rtl-direction #headerAccountState{margin-right:0;margin-left:80px}#chatContainerWrapper{position:absolute;bottom:109px;top:3px;width:100%;background-color:#fcfcfc}#chatContainerWrapper.chat-ended{bottom:118px;*height:expression(this.parentNode.offsetHeight - 200+'px')}#chatContainer{overflow:auto;position:absolute;font-size:14px;font-family:Arial;color:#6c6c6c;min-width:278px;left:3px;right:3px;height:100%;overflow-x:hidden}#maxFileNotificationContainer,#maxSizeNotificationContainer{color:#8a6d3b;background-color:#fcf8e3;border:#faebcc 1px solid;margin:5px 10px;padding:5px 10px;border-radius:6px;font-size:13px}.closeButtonContainer{margin:10px auto auto auto;text-align:right}.closeNotification{cursor:pointer;text-transform:uppercase}#maxFileSizeList,#maxFileNumberList{margin:10px}#maxFileSizeList li,#maxFileNumberList li{word-wrap:break-word}#maxFileSizeList a,#maxFileNumberList a{color:#00E}#chatContainer .hidden{display:none}.actionRetry{cursor:pointer;float:right}#actionsContainer{z-index:99998;height:107px;background-color:#fff;border-top:2px solid #e1e1e1;position:absolute;bottom:0;width:100%}#status-message{font-weight:bold;font-style:normal}#resizeBox{width:52px;height:52px;position:absolute;top:0;background-color:#000;z-index:5}body.right #resizeBox{left:0;float:left;-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px}body.left #resizeBox{right:0;float:right;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px}#resizeInnerBox{background-color:#fefefe;width:47px;height:47px}body.right #resizeInnerBox{-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;margin:5px 0 0 5px}body.left #resizeInnerBox{-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px;margin:5px 5px 0 0}#pluginsBar{height:23px;background-color:#c2c2c2;min-width:278px}#ratingContainer{position:absolute;width:38px;margin:0;right:10px;top:10px}.rtl-direction #ratingContainer{right:auto;left:16px;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2)}#ratingContainer a{float:left;margin:0 5px 0 0;width:14px;height:13px;cursor:pointer;background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-repeat:no-repeat}.rtl-direction #ratingContainer a{margin:0 0 0 5px}#ratingContainer a:active,#ratingContainer a:focus{outline:0}#ratePositive{background-position:-145px 0}#rateNegative{background-position:-126px 0}#ratePositive:hover,#ratePositive.selected{background-position:-164px 0}#ratePositive:hover,#rateNegative:hover{transform:scale(1.5,1.5);// This is the enlarged size scale of the image. transition-duration:500ms;transition-timing-function:ease-out;-webkit-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -webkit-transition-duration:500ms;-webkit-transition-timing-function:ease-out;-moz-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -moz-transition-duration:500ms;-moz-transition-timing-function:ease-out;-ms-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -ms-transition-duration:500ms;-ms-transition-timing-function:ease-out;-o-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -o-transition-duration:500ms;-o-transition-timing-function:ease-out}#rateNegative:hover,#rateNegative.selected{background-position:-183px 0}.activeSound{background-position:0 0;background-repeat:no-repeat}.disabledSound{background-position:-21px 0;background-repeat:no-repeat}#textareaWrapper{display:block;height:73px;background-color:#fff}#textareaContainer{height:53px;padding:10px}#chatTextarea{padding:0;margin:0;height:63px;width:100%;overflow:hidden;resize:none;border:0;vertical-align:top;font-size:14px !important;background-color:#fff;color:#000}#chatTextarea:active,#chatTextarea:focus{outline:0}#textareaContainer textarea::-webkit-input-placeholder{color:#b3b3b3;font-style:italic;font-family:Arial}#textareaContainer textarea::-moz-placeholder{color:#b3b3b3;font-style:italic;font-family:Arial}#textareaContainer textarea:-ms-input-placeholder{color:#b3b3b3;font-style:italic;font-family:Arial}#greetingsContainer{margin:7px 45px 0 45px;padding:5px;text-align:center;white-space:pre-wrap;word-wrap:break-word;color:black;font-size:15px !important}#formContainer #greetingsContainer{margin:0 !important}.embedded{width:100%;height:100%}.embedded #headerBox{-webkit-border-top-left-radius:0 !important;-moz-border-radius-topleft:0 !important;border-top-left-radius:0 !important;-webkit-border-top-right-radius:0 !important;-moz-border-radius-topright:0 !important;border-top-right-radius:0 !important}#agentBar.expanded{height:auto;overflow-y:auto;display:block;max-height:153px}#agentList{padding:0 5px}#agentList .agentWrapper{border-radius:0;margin:10px 0}#profileDetail .agentContainer{margin-left:50px}.agentContainer{height:50px}.rtl-direction #profileDetail .agentContainer{margin-right:50px;margin-left:0}#agentBar .agentContainer{height:50px;width:100%;float:left}.agentContainerNoImage{height:45px}.agentWrapper{width:100%;min-width:280px;clear:both;position:relative;-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-topright:10px;border-top-left-radius:10px;border-top-right-radius:10px}#headerBox .agentInformationContainer{padding:10px 0}#agentBar .agentInformationContainer{padding:10px 0;margin-left:50px;margin-right:0}.rtl-direction #agentBar .agentInformationContainer{margin-right:50px;margin-left:0}.agentInformationContainerNoImage{padding-top:13px;padding-bottom:13px;font-size:16px}.agentInformationContainer{font-size:14px}.position-label{font-size:12px}.agentNameCentered{margin-top:8px;font-weight:bold}.noImageAgentProfileDetail{padding-left:5px}.rtl-direction .noImageAgentProfileDetail{padding:0 5px 0 0}.agentInformationContainer p{height:16px;white-space:nowrap;overflow:hidden;box-sizing:border-box;text-overflow:ellipsis}.agentInformationContainer .agentName{font-weight:bold}#headerBox .alias-image{-moz-animation:profileShow .5 ease-in;-webkit-animation:profileShow .5s ease-in;-o-animation:profileShow .5 ease-in;-ms-animation:profileShow .5 ease-in;animation:profileShow .5s ease-in}@-ms-keyframes profileShow{0%{-ms-transform:scale(0)}6.25%{-ms-transform:scale(0.1)}12.5%{-ms-transform:scale(0.2)}18.75%{-ms-transform:scale(0.3)}25%{-ms-transform:scale(0.4)}31.25%{-ms-transform:scale(0.5)}37.5%{-ms-transform:scale(0.6)}43.75%{-ms-transform:scale(0.7)}50%{-ms-transform:scale(0.8)}56.25%{-ms-transform:scale(0.9)}62.5%{-ms-transform:scale(1)}68.75%{-ms-transform:scale(1.1)}75%{-ms-transform:scale(1.2)}81.25%{-ms-transform:scale(1.3)}87.5%{-ms-transform:scale(1.2)}93.75%{-ms-transform:scale(1.1)}100%{-ms-transform:scale(1)}}@-webkit-keyframes profileShow{0%{-webkit-transform:scale(0)}6.25%{-webkit-transform:scale(0.1)}12.5%{-webkit-transform:scale(0.2)}18.75%{-webkit-transform:scale(0.3)}25%{-webkit-transform:scale(0.4)}31.25%{-webkit-transform:scale(0.5)}37.5%{-webkit-transform:scale(0.6)}43.75%{-webkit-transform:scale(0.7)}50%{-webkit-transform:scale(0.8)}56.25%{-webkit-transform:scale(0.9)}62.5%{-webkit-transform:scale(1)}68.75%{-webkit-transform:scale(1.1)}75%{-webkit-transform:scale(1.2)}81.25%{-webkit-transform:scale(1.3)}87.5%{-webkit-transform:scale(1.2)}93.75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@-moz-keyframes profileShow{0%{-moz-transform:scale(0)}6.25%{-moz-transform:scale(0.1)}12.5%{-moz-transform:scale(0.2)}18.75%{-moz-transform:scale(0.3)}25%{-moz-transform:scale(0.4)}31.25%{-moz-transform:scale(0.5)}37.5%{-moz-transform:scale(0.6)}43.75%{-moz-transform:scale(0.7)}50%{-moz-transform:scale(0.8)}56.25%{-moz-transform:scale(0.9)}62.5%{-moz-transform:scale(1)}68.75%{-moz-transform:scale(1.1)}75%{-moz-transform:scale(1.2)}81.25%{-moz-transform:scale(1.3)}87.5%{-moz-transform:scale(1.2)}93.75%{-moz-transform:scale(1.1)}100%{-moz-transform:scale(1)}}@-o-keyframes profileShow{0%{-o-transform:scale(0)}6.25%{-o-transform:scale(0.1)}12.5%{-o-transform:scale(0.2)}18.75%{-o-transform:scale(0.3)}25%{-o-transform:scale(0.4)}31.25%{-o-transform:scale(0.5)}37.5%{-o-transform:scale(0.6)}43.75%{-o-transform:scale(0.7)}50%{-o-transform:scale(0.8)}56.25%{-o-transform:scale(0.9)}62.5%{-o-transform:scale(1)}68.75%{-o-transform:scale(1.1)}75%{-o-transform:scale(1.2)}81.25%{-o-transform:scale(1.3)}87.5%{-o-transform:scale(1.2)}93.75%{-o-transform:scale(1.1)}100%{-o-transform:scale(1)}}@keyframes profileShow{0%{transform:scale(0)}6.25%{transform:scale(0.1)}12.5%{transform:scale(0.2)}18.75%{transform:scale(0.3)}25%{transform:scale(0.4)}31.25%{transform:scale(0.5)}37.5%{transform:scale(0.6)}43.75%{transform:scale(0.7)}50%{transform:scale(0.8)}56.25%{transform:scale(0.9)}62.5%{transform:scale(1)}68.75%{transform:scale(1.1)}75%{transform:scale(1.2)}81.25%{transform:scale(1.3)}87.5%{transform:scale(1.2)}93.75%{transform:scale(1.1)}100%{transform:scale(1)}}#agentBar .alias-image,#headerBox .alias-image{width:40px;height:40px;margin:0;background-repeat:no-repeat;border-radius:20px;margin:5px 0;background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-614px 0;float:left;margin-left:-100%}.rtl-direction #agentBar .alias-image,.rtl-direction #headerBox .alias-image{float:right}.agentChatContainer .messageBody{margin:-12px 0 0 30px;max-width:100%}.rtl-direction .agentChatContainer .messageBody{float:right;margin:-12px 30px 0 0}.agentChatContainer .message{background:#eee;color:#333;margin-right:40px;padding:5px 10px;border-radius:0 15px 15px 15px}.rtl-direction .agentChatContainer .message{margin:0 0 0 40px;border-radius:15px 0 15px 15px}.ie9.rtl-direction .agentChatContainer .message{border-radius:0 15px 15px 15px !important}.agentChatContainer .messageStatusContainer{margin-left:-40px;position:absolute;top:5px;left:100%}.rtl-direction .agentChatContainer .messageStatusContainer{margin:0 -40px 0 0;left:auto;right:100%}.messageContainer.agentChatContainer{margin:10px 0 10px 12px}.rtl-direction .messageContainer.agentChatContainer{margin:10px 8px 10px 0}.messageContainer.visitorChatContainer{margin:10px 12px 10px 0}.rtl-direction .messageContainer.visitorChatContainer{margin:10px 0 10px 12px}.visitorChatContainer .messageBody{margin:2px 0 0 0;float:right;max-width:100%}.rtl-direction .visitorChatContainer .messageBody{float:left}.visitorChatContainer .messageWrapper .message{color:#333;text-align:left;border-radius:15px 0 15px 15px;background:#e5e5e5;margin-left:40px}.rtl-direction .visitorChatContainer .messageWrapper .message{text-align:right;margin:0 40px 0 0;border-radius:0 15px 15px 15px}.ie9.rtl-direction .visitorChatContainer .messageWrapper .message{border-radius:15px 0 15px 15px !important}.visitorChatContainer .messageStatusContainer{position:absolute;right:100%;top:5px;margin-right:-40px}.rtl-direction .visitorChatContainer .messageStatusContainer{right:auto;left:100%;margin:0 0 0 -40px}.messageHead{position:absolute;z-index:10001}.messageHeadLine{position:relative;top:10px;z-index:1}.messageContainer .messageHead .messageTitle{text-align:center;width:100%}.messageBody{line-height:1.5em;margin:5px 0 0 42px;float:left;position:relative}.notification{margin-left:0;width:100%}.ownerNameContainer,.notificationContainer{float:left}.rtl-direction .notificationContainer{direction:rtl !important;float:right}.notificationContainer .message{margin-right:40px;font-size:14px !important;font-style:italic}.rtl-direction .notificationContainer .message{margin:0 0 0 40px}.message{white-space:pre-wrap;word-wrap:break-word}.messageContainer .messageHead.agent .messageTime,.notificationTime{color:#b3b3b3}.notificationTime{width:40px;float:left;margin-left:-40px;text-align:right;font-size:12px !important}.rtl-direction .notificationTime{float:right;margin:0 -40px 0 0;text-align:left}.messageStatusContainer{position:relative;z-index:2;width:40px;float:left}.messageTime{padding:0 2px 0 8px;font-size:11px !important;color:#777;display:none}.rtl-direction .messageTime{padding:0 8px 0 2px}.messageTime.visitor{padding:0 8px 0 2px}.rtl-direction .messageTime.visitor{padding:0 2px 0 8px}.show-time .messageTime{display:block}.messageWrapper{background:0;position:relative;width:100%;float:left}.messageStatus{width:16px;height:16px}.messageStatus:active,.messageStatus:focus{outline:0}.messageStatusContainer.pending .messageStatus{background-image:url('https://static-v.tawk.to/a-v3-34/images/ajax-loader.gif');background-position:0 0;background-repeat:no-repeat;float:right;margin-top:5px;width:13px;height:13px;margin-right:5px}.messageWrapper.pending{font-style:italic}.messageWrapper.error{font-style:italic;color:red;cursor:pointer}.messageWrapper .message{font-size:14px !important;padding:5px 10px}.messageWrapper.error .message{margin:0}.longFormContainer::-webkit-scrollbar-thumb,#chatContainer::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background-color:#d4d4d4}.longFormContainer::-webkit-scrollbar,#chatContainer::-webkit-scrollbar{width:10px}.messageTitle span{text-transform:uppercase;font-weight:bold;padding:0 10px;color:#ccc;background-color:#fff;z-index:1;position:relative}#formContainer{position:absolute;z-index:20;display:none;left:0;right:0;bottom:32px;top:70px;overflow:hidden;background-color:#fcfcfc;*width:expression(this.parentNode.offsetWidth+'px');*height:expression(this.parentNode.offsetHeight - 102+'px');z-index:99999}.noCookies #formContainer{top:45px}.formMessageField{padding:10px 20px;line-height:1.2em;color:#616161;font-size:15px;text-align:center;word-wrap:break-word}.form{margin:0 20px;font-size:13px;color:#a1a1a1;height:100%}.form fieldset{padding:0}.longFormContainer{position:absolute;left:5px;right:5px;bottom:50px;top:0;overflow-y:auto;padding-bottom:10px}.longFormBottomContainer{position:absolute;bottom:0;left:0;right:0}.form .textareaFieldset{padding:0 33px 0 0;margin:0 0 7px 0;position:relative;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;border:1px solid #ccc}.rtl-direction .form .textareaFieldset{padding:0 0 0 33px}.form textarea{resize:none;display:block;height:40px;width:100%;overflow:auto;padding:0 15px;color:#707070;font-size:13px;font-weight:bold;border:0;background-color:#fff;font-family:Arial;margin:13px 0}.form textarea:active,.form textarea:focus,.inputContainer select:active,.inputContainer select:focus{outline:0}.inputContainer{padding:0 15px;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;margin:0 0 7px 0;position:relative}.inputContainer input,.inputContainer select{width:100%;margin:0;border:0;display:block;line-height:1.2em;padding:10px 0;color:#707070;font-family:Arial;font-size:13px;font-weight:bold}.inputContainer input{padding:11px 0}.inputContainer.other-fix{padding:0}.inputContainer select{background-color:#fff;outline:0}#departmentFieldFieldset.safari-fix .inputContainer select{-webkit-appearance:none}#departmentFieldFieldset.safari-fix .inputContainer{position:relative}#departmentFieldFieldset.safari-fix .inputContainer:after{position:absolute;right:24px;top:12px;cursor:pointer;width:10px;height:10px;font-size:10px;padding:0;background:#fff;color:#000;content:'\u25bc';pointer-events:none;cursor:pointer}.inputContainer.error,.form .textareaFieldset.error{border-color:#ef5656;color:#ef5656}.inputContainer.error input,.form .textareaFieldset.error textarea,.inputContainer.error select,.error .form-field-label{color:#ef5656}.inputContainer.error input::-webkit-input-placeholder,.form .textareaFieldset.error textarea::-webkit-input-placeholder{color:#ef5656}.inputContainer.valid,.form .textareaFieldset.valid{border-color:#92ed9d}.inputContainer.valid{padding-right:30px}.inputContainer.selection.valid{padding:0}.inputContainer input:active,.inputContainer input:focus{margin:0;border:0;outline:0}.inputContainer input:active+.form-field-label,.inputContainer input:focus+.form-field-label,.textareaFieldset textarea:active+.form-field-label,.textareaFieldset textarea:focus+.form-field-label{display:block}.inputContainer input:active::-webkit-input-placeholder,.inputContainer input:focus::-webkit-input-placeholder,.textareaFieldset textarea:active::-webkit-input-placeholder,.textareaFieldset textarea:focus::-webkit-input-placeholder{color:transparent !important}.inputContainer input:focus::-moz-placeholder,.inputContainer input:active::-moz-placeholder,.textareaFieldset textarea:focus::-moz-placeholder,.textareaFieldset textarea:active::-moz-placeholder{color:transparent !important;opacity:0 !important}.formErrorContainer{display:none;margin:0 0 7px 15px;color:#ef5656}.rtl-direction .formErrorContainer{margin:0 15px 7px 0}#preChatForm .formErrorContainer,#offlineForm .formErrorContainer{margin:-6px 15px 7px 0}.rtl-direction #preChatForm .formErrorContainer,.rtl-direction #offlineForm .formErrorContainer{margin:-6px 0 7px 15px}#formSavingStatus.errorMessage{color:#ef5656;border:0;visibility:visible}#formSavingStatus{font-size:13px;visibility:hidden;margin:0 auto;max-width:260px}#formSavingStatus img{margin:0 0 0 5px}.formButtonContainer{margin:20px 0 0 0}button{display:inline;zoom:1;vertical-align:baseline;outline:0 none;cursor:pointer;text-align:center;text-decoration:none;overflow:visible;margin:0;padding:7px 15px 8px 15px;font:bold 14px/100% Arial,sans-serif;background-color:#c1c1c1;color:#3d3d3d;border:0;float:left}button::-moz-focus-inner{border:0}button:focus{outline:0}button:active{background-color:#ddd}button:hover{background-color:#a9a9a9}.formButton{width:100%;height:50px}#agentTypingContainer .messageBody{font-size:16px !important;font-weight:bold;min-width:auto;line-height:normal}#offlineOverlay,#inactivityOverlay,#maintenanceOverlay{text-align:center;margin-top:100px;font-size:40px;font-weight:bold;height:auto}#greetingsOverlay{width:100%;height:100%}#greetingsOverlay #greetingsContainer{font-size:14px;color:#777;font-weight:bold}#greetingsWrapper{transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);top:50%;position:absolute;left:0;right:0;*position:static;*margin-top:expression(this.offsetHeight < this.parentNode.offsetHeight ? parseInt((this.parentNode.offsetHeight - this.offsetHeight) / 2)+'px':'0')}#embedArrow{background-position:-318px 0;width:22px;height:26px;background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-repeat:no-repeat;margin:5px auto}.cookieOff #formContainer{display:block;width:100%;height:100%;left:0;right:0;top:0}#formInnerHeight{margin:0 auto;max-width:260px}#tawktoLink{color:#000;font-size:13px;text-decoration:none;line-height:32px;padding-right:3px}#tawktoLink .thin{font-size:11px;font-weight:100}#bottomContainer{text-align:right;left:84px;position:absolute;bottom:0;height:30px;line-height:30px;right:6px;background:#fff;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.noCookies #bottomContainer{position:absolute;bottom:0;text-align:right;height:32px;line-height:32px;background-color:#fcfcfc;right:0;left:0;padding:0 6px;margin:auto;font-weight:700}.noCookies #shortMessage{display:inline-block;padding-left:15px;font-size:17px;line-height:45px}.noCookies #tawktoLink{color:#000;font-weight:700}.rtl-direction #bottomContainer{left:6px;right:auto}.rtl-direction #tawktoLink{margin:0 10px 0 0;padding-right:0;padding-left:3px}#headerBoxControlsContainer .icon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');display:block}#endChat,#minimizeChat,#popoutChat{width:16px;height:16px;margin:14px 5px 15px 5px;display:inline-block}#endChat{margin-right:10px;margin-left:5px}.rtl-direction #endChat{margin-right:5px;margin-left:10px}#endChat .icon{width:11px;height:11px;float:right;margin:2.5px}.black #endChat .icon{background-position:0 0}.white #endChat .icon{background-position:-63px 0}#minimizeChat .icon{width:11px;height:7px;margin:4.5px 2.5px}.black #minimizeChat .icon{background-position:-32px 0}.white #minimizeChat .icon{background-position:-95px 0}#popoutChat .icon{width:10px;height:10px;margin:3px}.black #popoutChat .icon{background-position:-48px 0}.white #popoutChat .icon{background-position:-111px 0}#openMenu{position:absolute;left:10px;bottom:0;color:#bdbdbd;font-size:13px;font-weight:700;text-decoration:none;line-height:28px;z-index:100001;cursor:pointer;*bottom:7px;text-transform:lowercase}.rtl-direction #openMenu{right:10px;left:auto}#options{height:32px;margin-left:84px}.rtl-direction #options{margin:0 84px 0 0}#closeMenu{position:absolute;left:10px;bottom:8px;display:none;cursor:pointer}.rtl-direction #closeMenu{right:10px;left:auto}#closeMenu span{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:0 0;width:11px;height:11px;float:right;margin:2px 5px}.rtl-direction #closeMenu span{float:left}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-556px 0;position:absolute;left:0;right:0}.profileImageContainer .visitorProfileImage{width:28px;height:28px;background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-202px 0;float:left;margin-left:-100%}#tawkToContent{display:none;position:absolute;top:45px;bottom:0;width:100%;background:#fcfcfc;z-index:100001}#tawkToContent .contentContainer{position:absolute;top:0;bottom:43px;width:auto;left:10%;right:10%;*bottom:100px}#tawkToContent .buttonContainer{position:absolute;height:50px;bottom:0;width:100%}#tawkToContent .buttonContainer button{width:50%;height:50px}#tawkHeader{font-size:22px;font-weight:bold;text-align:center;padding:20px 0 12px 0;color:#343434;border-bottom:2px solid #ddd;width:150px;margin:0 auto}#tawkContent{font-size:15px;text-align:center;color:#6c6c6c;margin:12px 30px 0 30px}#tawkImage{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-235px 0;width:78px;height:83px;margin:0 auto}#tawkToContent .wrapper{position:absolute;width:100%;margin:5px 0}#optionsContainer{position:absolute;left:5px;bottom:40px;background:#f2f2f2;border-radius:10px;display:none;z-index:10001}.rtl-direction #optionsContainer{right:5px;left:auto;bottom:40px}#optionsContainer ul{list-style:none;padding:5px;border:2px solid #e6e6e6;border-radius:10px}#optionsContainer li{padding:10px;color:#696969;cursor:pointer;font-size:12px;font-weight:bold;line-height:18px}#optionsContainer li:hover{background:#e0e0e0}#emailTranscriptForm,#changeNameForm,#endChatForm{position:absolute;width:100%;bottom:0;height:164px;margin:0}#endChatForm{height:109px}#emailTranscriptForm #formInnerHeight,#changeNameForm #formInnerHeight,#endChatForm #formInnerHeight{max-width:100%;width:100%;height:100%;background:#fff}#emailTranscriptForm .longFormBottomContainer,#changeNameForm .longFormBottomContainer,#endChatForm .longFormBottomContainer{bottom:0}#emailTranscriptForm .formButton,#changeNameForm .formButton,#endChatForm .formButton{width:50%}#emailTranscriptForm .inputContainer,#changeNameForm .inputContainer,#endChatForm .inputContainer{border:0;margin:0}#offlineForm #messageField{height:85px}#emailTranscriptFormMessageContainer,#changeNameFormMessageContainer{background:#ddd;margin:0;padding:10px;text-align:left}.rtl-direction #emailTranscriptFormMessageContainer,.rtl-direction #changeNameFormMessageContainer{text-align:right}.rtl-direction .longFormBottomContainer #formCancel{float:right}.rtl-direction .longFormBottomContainer #formSubmit{float:left}#submitWrapper{position:absolute;bottom:50px;height:0;width:auto;right:0;background:#000;border-radius:4px 4px 0 0;color:#fff;-webkit-transition:height .25s ease;-moz-transition:height .25s ease;-ms-transition:height .25s ease;-o-transition:height .25s ease;transition:height .25s ease;*height:30px;*display:none}#submitWrapper.visible{height:30px;*display:block}#submitWrapper p{line-height:30px;padding:0 10px;float:left}.rtl-direction #submitWrapper p{float:right}#submitWrapper div{background-image:url('https://static-v.tawk.to/a-v3-34/images/ajax-loader-3.gif');width:16px;height:16px;float:right;margin:7px}#printIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-386px 0;width:18px;height:17px;float:left}#emailIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-409px 0;width:19px;height:16px;float:left}#soundOnIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');width:17px;height:18px;float:left}.activeSound #soundOnIcon{background-position:-364px 0}.disabledSound #soundOnIcon{background-position:-345px 0}#endChatIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-433px 0;width:11px;height:11px;float:left}.optionTitle{margin-left:35px}.rtl-direction .optionTitle{margin:0 35px 0 0}#agentProfileContainer{height:50px !important;cursor:pointer;position:relative;margin-right:80px;margin-left:0;padding-left:5px}.rtl-direction #agentProfileContainer,.rtl-direction #agentListBack{margin-left:80px;margin-right:0;padding:0 5px 0 0}#stickyIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-449px 0;width:15px;height:16px;margin:4px}#waitTimeContainer{margin:20px 7px}#stickyContainer{position:absolute;margin-left:-14px;margin-top:-12px;background-color:#fcfcfc;width:23px;height:24px;padding:2px;top:50%}.rtl-direction #stickyContainer{margin-left:0;margin-right:-14px}#waitTimeContainer .messageWrapper{border:1px solid;border-radius:5px;text-align:center;margin:0 auto;float:none}#waitTimeContainer .message{margin:0;padding:12px 10px 12px 14px;font-size:15px !important;color:#7b7a7a;font-weight:bold}#waitTimeContainer .messageBody{width:100%;position:relative;margin:0;line-height:100%;float:none}#profileDetail{height:50px;position:static;width:100%;float:left}#profileDetailNoImage{height:45px;position:static;margin-left:0}#agentWrapper{height:0;display:none;float:left;width:100%;height:45px}#agentListBack{display:none;cursor:pointer;height:70px}#listBack{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-469px 0;width:7px;height:11px;margin-top:29px;float:left;margin-left:20px;margin-right:20px}.black #listBack{background-position:-481px 0}#agentListBack p{font-size:16px;font-weight:bold;margin-top:25px;float:left;height:20px;line-height:20px}.rtl-direction #listBack,.rtl-direction #agentListBack p{float:right}.rtl-direction #listBack{transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2)}.message-success{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-493px 0;width:16px;height:15px;padding:0 8px}.messageStatusContainer.pending .message-success,.messageStatusContainer.pending .messageTime{display:none}.errorInMessage .messageStatus{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-514px 0;width:16px;height:16px;display:block;float:right;margin-right:5px}#chatPanel{display:none;position:absolute;top:45px;bottom:0;width:100%;z-index:0}#chatEnded{position:absolute;left:0;bottom:32px;height:87px;width:100%;background:#fff;display:none;z-index:10}#chatEnded .title{text-align:center;font-size:14px;margin:10px 0}#chatEnded .buttonContainer{width:100%;height:50px}#newChat{width:50%;height:50px;padding:0;float:left;margin-left:-1px}.rtl-direction #newChat{float:right;margin:0 -1px 0 0}#emailTranscript{width:50%;height:50px;padding:0;float:right;margin-right:-1px}.rtl-direction #emailTranscript{float:left;margin:0 0 0 -1px}.validInputIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-535px 0;width:16px;height:15px;display:none;position:absolute;right:10px;top:50%;margin-top:-7.5px}.rtl-direction .validInputIcon{right:auto;left:10px}#prechatButtonContainer{top:auto}.additionalPadding{padding-right:50px !important}.rtl-direction .additionalPadding{padding-right:10px !important;padding-left:50px !important}#newMessageDivider{margin-top:4px;font-size:.7rem;line-height:.6rem}#newMessageDividerLine{border-top:2px solid #e4c0b6;border-bottom:0;margin:0 0 -1px}#newMessageDividerLabel{background:#fcfcfc;margin:-0.3rem 0;float:right;padding:0 .5rem;color:#e4c0b6}.offlineMessageSuccess{color:#6db626}#newMessageContainer{position:relative;left:-50%;cursor:pointer;display:none}#newMessagesBar{position:absolute;bottom:33px;height:0;width:auto;left:50%;color:#fff;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;visibility:hidden;cursor:pointer;z-index:0}#newMessagesBar.theme-background-color{background-color:transparent !important}#notificationMessageText{font-weight:700}#newMessageArrowDown{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-766px 0;width:16px;height:6px;margin:-1px auto}#newMessagesNotificationLink{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-745px 0;width:16px;height:16px;float:left;margin:7px 7px auto auto}.rtl-direction #newMessagesNotificationLink{float:right;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);transform:rotateY(180deg);margin:7px auto auto 7px}#newMessagesBar.visible{height:27px;z-index:99997;bottom:118px;visibility:visible}#newMessagesBar.visible #newMessageContainer{display:block}#newMessagesBar p{line-height:27px;padding:0 10px;text-align:center;background-color:#81bd1d;border-radius:5px}.uploaded-image{max-width:100%;max-height:220px;display:block}.download-file{color:#3276b1;text-decoration:none;margin-top:3px;display:block}.download-image{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-659px 0;width:16px;height:18px;padding:1px 8px;vertical-align:middle}.progress{height:14px;position:relative;background:#eee;box-shadow:0 1px 0 transparent,0 0 0 1px #e3e3e3 inset;width:200px;margin:5px 0;display:inline-block;vertical-align:middle}.progress-bar{display:block;height:100%;background-color:#71a06a;box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.upload-data{margin:7px 12px 0 20px;min-width:250px}.upload-data span{font-style:italic;margin-right:3px}.upload-icon{background:url('https://static-v.tawk.to/a-v3-34/images/icons.png') no-repeat top left;background-position:-680px 0;width:14px;height:14px;padding:0 7px;vertical-align:middle;margin-right:3px}#uploadFileIcon{background:url('https://static-v.tawk.to/a-v3-34/images/icons.png') no-repeat top left;background-position:-699px 0;width:18px;height:19px;float:left}.image-loader{width:30px;height:30px;background:url('https://static-v.tawk.to/a-v3-34/images/image-load.gif');background-repeat:no-repeat;background-position:center}#nameIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-722px 0;width:18px;height:19px;float:left}.rtl-direction #nameIcon,.rtl-direction #printIcon,.rtl-direction #emailIcon,.rtl-direction #uploadFileIcon,.rtl-direction #soundOnIcon,.rtl-direction #endChatIcon{float:right}.upload-error{margin:5px}.upload-error span{font-size:16px;color:red;font-weight:bold;vertical-align:middle}.drag-over #textareaWrapper:before{text-align:center;margin:0;font-size:25px;height:68px;line-height:68px;color:#ccc;background:#fff;position:absolute;top:0;bottom:0;right:0;left:0;border:3px dashed #ccc;content:'';white-space:pre-line}#drop-text{text-align:center;font-size:25px;height:68px;line-height:68px;color:#ccc;position:absolute;top:2px;bottom:0;right:0;left:0;white-space:pre-line;display:none}.drag-over #drop-text{display:block}#drop-text span{display:inline-block;vertical-align:middle;line-height:normal}.drag-over .drop-text{display:block}.drag-over #ratingContainer{display:none !important}.drag-over #chatTextarea{opacity:0}#upload-form{position:absolute;top:-100000px}#uploadFileOption label{display:block;cursor:pointer}.form-field-label.small{color:#b3b3b3;padding:1px 0 0 0;display:none;font-size:10px;position:absolute;top:0;left:4px;font-weight:bold}.rtl-direction .form-field-label.small{left:auto;right:4px}.form-field-label{color:#707070;font-family:Arial;font-size:13px;font-weight:bold}.selection-label{vertical-align:middle;cursor:pointer}.selection-container{margin:3px}.selections-container{margin:3px 3px 7px 3px}.selections-container.error{border:1px solid #ef5656;border-radius:3px}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.messageContainer,#agentTypingContainer{position:relative;margin:10px 12px}.messageContainer{clear:both}.profileImageContainer{height:28px;float:left;width:28px;margin-left:-100%}.ownerNameContainer{float:left;width:100%}.messageOwnerName{color:#a7a7a7;font-weight:bold;text-decoration:none;font-size:12px !important;margin:0;padding:0;line-height:14px;display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:30px}.rtl-direction .messageOwnerName{margin-left:0;margin-right:30px}.messageOwnerName.visitor{text-align:right;margin-right:0;margin-left:0}.rtl-direction .messageOwnerName.visitor{text-align:left}#chatTableWrapper{display:table;height:100%;width:100%;table-layout:fixed}#chatRowWrapper{display:table-row;vertical-align:bottom}#chatCellWrapper{overflow:auto;position:relative;display:table-cell;vertical-align:bottom}.single-agent .profileImageContainer,.single-agent .agentChatContainer .ownerNameContainer{display:none}.single-agent .agentChatContainer .ownerNameContainer.trigger{display:block}.ownerNameContainer.trigger .messageOwnerName{margin-left:0;margin-right:0}.multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-left:30px;margin-right:0}.rtl-direction .multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-right:30px;margin-left:0}.single-agent .visitorChatContainer .messageBody,.single-agent .messageOwnerName.visitor{margin-right:0;margin-left:0}.single-agent .visitorChatContainer .messageBody,.single-agent .agentChatContainer .messageBody.trigger{margin-top:2px}.single-agent .agentChatContainer .messageBody,.single-agent .agentChatContainer .ownerNameContainer{margin-left:0;margin-right:0;margin-top:0}#agentTypingContainer .agentChatContainer{margin-bottom:5px}.has-profile-image #headerBoxWrapper,.has-profile-image #headerBox,.has-profile-image #agentWrapper,.has-profile-image #headerBoxControlsContainer,.has-profile-image #agentListBack{height:50px}.has-profile-image #endChat,.has-profile-image #popoutChat,.has-profile-image #minimizeChat{margin-top:17px;margin-bottom:17px}.has-profile-image #agentBar,.has-profile-image #chatPanel,.has-profile-image #tawkToContent{top:50px}.has-profile-image #listBack{margin-top:21px}.has-profile-image #agentListLabel{margin-top:17px}.selection-container input{margin:0 3px 0 5px}@keyframes typing{0%{opacity:0}100%{opacity:1}}@-ms-keyframes typing{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes typing{0%{opacity:0}100%{opacity:1}}@-moz-keyframes typing{0%{opacity:0}100%{opacity:1}}@-o-keyframes typing{0%{opacity:0}100%{opacity:1}}.agentTypingIndicator span{-moz-animation:typing 1.2s infinite;-webkit-animation:typing 1.2s infinite;-o-animation:typing 1.2s infinite;-ms-animation:typing 1.2s infinite;animation:typing 1.2s infinite;animation-fill-mode:both;margin:0 1px;font-size:20px;line-height:0}.agentTypingIndicator span:nth-child(2){animation-delay:400ms;-webkit-animation-delay:400ms;-moz-animation-delay:400ms;-ms-animation-delay:400ms;-o-animation-delay:400ms}.agentTypingIndicator span:nth-child(3){animation-delay:800ms;-webkit-animation-delay:800ms;-moz-animation-delay:800ms;-ms-animation-delay:800ms;-o-animation-delay:800ms}.rtl-direction .message{min-width:45px !important}.message a{color:inherit}#formContainer .inputContainer.selection:before{content:\"\";position:absolute;right:14px;top:13px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #707070;z-index:0}#formContainer .inputContainer{background-color:#fff;overflow:hidden;position:relative;height:33px}#formContainer .inputContainer select{position:absolute;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:90%;background:transparent;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;line-height:1;-webkit-appearance:none;-moz-appearance:none;text-indent:.01px;text-overflow:'';-ms-appearance:none}#formContainer .inputContainer select::-ms-expand{display:none}#endChatOption{display:none}";
            b.MinifiedStyle = "@font-face{font-family:'icomoon';src:url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.eot?-7rca1q');src:url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.eot?#iefix-7rca1q') format('embedded-opentype'),url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.ttf?-7rca1q') format('truetype'),url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.woff?-7rca1q') format('woff'),url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.svg?-7rca1q#icomoon') format('svg');font-weight:normal;font-style:normal}.rtl-direction{direction:rtl}.rectangle #tawkchat-minified-wrapper{height:100%;width:100%;*width:expression(this.parentNode.offsetWidth+'px')}.round #tawkchat-minified-wrapper{z-index:999997;bottom:6px}.round #tawkchat-status-text-container{border-radius:50%;height:60px;width:60px;-webkit-box-shadow:0 4px 5px -1px rgba(0,0,0,0.5);-moz-box-shadow:0 4px 5px -1px rgba(0,0,0,0.5);box-shadow:0 4px 5px -1px rgba(0,0,0,0.5)}.round #tawkchat-status-icon.online:before,.round #tawkchat-status-icon.away:before{content:\"\\e96c\"}.round #tawkchat-status-icon.offline:before{font-size:38px;line-height:55px;content:\"\\e904\"}.round #tawkchat-status-icon:before{font-size:28px;font-weight:normal;font-family:'icomoon';display:inline-block;vertical-align:top;width:100%;text-align:center;line-height:60px}.round #tawkchat-status-text-container a#maximizeChat,.round #tawkchat-status-text-container a#maximizeChat #tawkchat-status-icon{height:100%;width:100%;color:inherit;text-decoration:none}.round.center #tawkchat-minified-wrapper{position:absolute}#tawkchat-minified-border{margin:0;border:0 none;padding:0;background-color:#000;filter:alpha(opacity=40);opacity:.4;position:absolute;z-index:999998;border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;width:100%;height:100%;right:0;bottom:0}#tawkchat-minified-container{margin:0;border:0 none;padding:0;cursor:pointer;z-index:999999;position:absolute;top:2px;bottom:0;width:auto;height:auto;left:2px;right:2px;border-bottom:0;-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box;-webkit-box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px;-moz-box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px;box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px}#tawkchat-status-middle{border:0 none;margin:0 auto;font-size:17px;vertical-align:middle;position:absolute;top:50%;left:10px;right:10px;transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);*width:expression(this.parentNode.clientWidth - 20+'px');*top:0;*position:static;*margin-top:10px}#tawkchat-status-text-container{float:left;width:100%;*width:expression(this.parentNode.offsetWidth - 26+'px');*margin-top:expression(this.offsetHeight < this.parentNode.offsetHeight ? parseInt((this.parentNode.offsetHeight - this.offsetHeight) / 2)+'px':'0')}#tawkchat-status-message{border:0 none;margin:0 26px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px;*width:expression(this.parentNode.clientWidth+'px');*margin:0}.rtl-direction #tawkchat-status-message{margin:0 0 0 26px;text-align:right}#tawkchat-chat-bubble{border:0 none;padding:0;margin:0;width:190px;height:65px;position:absolute;top:0;display:none;right:32px}.left #tawkchat-chat-bubble{right:2px}#tawkchat-chat-bubble-text-container{border:0 none;padding:0;margin:0 0 0 -58px;width:111px;height:65px;position:absolute;z-index:10;font-family:Arial;font-style:italic;font-size:14px;top:5px;left:50%;right:auto;text-align:center;overflow:hidden;text-overflow:ellipsis;display:table}.rtl-direction #tawkchat-chat-bubble-text-container{right:50%;left:auto;margin:0 -58px 0 0}#tawkchat-chat-bubble-text{margin:0;display:table-cell;vertical-align:middle;*margin-top:expression(this.offsetHeight < this.parentNode.offsetHeight ? parseInt((this.parentNode.offsetHeight - this.offsetHeight) / 2)+'px':'0')}#tawkchat-chat-bubble-graphics-container{border:0 none;padding:0;margin:0;width:146px;height:85px}#tawkchat-chat-bubble-canvas{width:146px;height:85px;border:0 none;padding:0;margin:0}#tawkchat-minified-agent-container{float:left;width:100%;display:none}#tawkchat-minified-agent-information-wrapper{border:0 none;margin:0 88px 0 0;padding:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left;font-size:17px;*width:100%}.hasImage #tawkchat-minified-agent-information-wrapper{margin-left:60px}#tawkchat-minified-agent-name{border:0 none;padding:0;margin:0;font-weight:bold}.agentNameCentered{margin-top:17px}.agentContainerNoImage{margin-right:26px;margin-left:0}.rtl-direction .agentContainerNoImage{margin-left:19px;margin-right:0}.agentContainer{margin:6px 20px 5px 45px}.rtl-direction .agentContainer{margin-right:45px;margin-left:20px}#tawkchat-minified-agent-position{border:0 none;padding:0;margin:0;font-style:italic}.bottom #tawkchat-chat-indicator{border:0 none;margin:0;position:absolute;top:0;left:26px;right:auto;z-index:1000000;display:none;background:#f77c76;padding:5px 10px;border-radius:15px}.round.left #tawkchat-chat-indicator{left:auto;right:0}.round.right #tawkchat-chat-indicator{right:auto;left:0}.round.bottom #tawkchat-chat-indicator,.round.center #tawkchat-chat-indicator,.round.top #tawkchat-chat-indicator{padding:2px;text-align:center;border-radius:50%;width:18px;height:18px}.rectangle.bottom #tawkchat-chat-indicator:after{content:'';position:absolute;right:48.5px;width:0;height:0;bottom:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #f77c76}.rectangle.left #tawkchat-chat-indicator{left:auto;right:26px}.top #tawkchat-chat-indicator{border:0 none;margin:0;position:absolute;top:8px;left:26px;right:auto;z-index:1000000;display:none;background:#f77c76;padding:5px 10px;border-radius:15px}.rectangle.top #tawkchat-chat-indicator:before{content:'';position:absolute;right:48.5px;width:0;height:0;top:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #f77c76}#tawkchat-chat-indicator.rtl-direction{left:auto;right:26px}#tawkchat-chat-indicator-text{border:0 none;padding:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:13px;font-family:Arial;text-align:center;color:white;z-index:1000001;display:block;margin:2px auto}.noCookies #tawkchat-minified-link-container{float:right}.noCookies #tawkchat-minified-link-container .icon{background-position:-16px 0}#tawkchat-minified-link-container{float:left;width:20px;margin-left:-20px;margin-top:3px;*margin-top:10px;*margin-right:5px}.rtl-direction #tawkchat-minified-link-container{margin-left:-100%}#tawkchat-minified-link-container .icon{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');display:block}#maximizeChat,#popoutChat{width:16px;height:16px;margin:0;z-index:100001}#maximizeChat .icon{width:11px;height:7px;margin:4.5px 2.5px}.black #maximizeChat .icon{background-position:-16px 0}.white #maximizeChat .icon{background-position:-79px 0}#popoutChat .icon{width:10px;height:10px;margin:3px}.black #popoutChat .icon{background-position:-48px 0}.white #popoutChat .icon{background-position:-111px 0}.alias-image{width:40px;height:40px;margin:0;background-repeat:no-repeat;border-radius:20px;margin:5px 0;background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:-614px 0;float:left;margin-left:-100%}.rtl-direction .alias-image{float:right}.small-image .alias-image{background-position:-589px 0;width:20px;height:20px;border-radius:10px}#profileDetail{position:static;width:100%;float:left}.agentInformationContainer p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.position-label{font-size:12px}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.image-bubble-close{background-image:url('https://static-v.tawk.to/a-v3-34/images/icons.png');background-position:0 0;width:11px;height:11px;float:right;margin:2.5px;cursor:pointer;display:block;visibility:hidden}#bubble-image{cursor:pointer}.image-canvas-close{border:0 none;padding:0;margin:0;width:10px;height:13px;position:absolute;right:6px;top:3px;font-size:12px;cursor:pointer;font-family:Arial;z-index:20}.rtl-direction .image-canvas-close{left:6px !important;right:auto !important}.no-border #tawkchat-minified-container{border:none !important;top:0 !important;left:0 !important;right:0 !important}.top .white #maximizeChat .icon{background-position:-95px 0}.top .black #maximizeChat .icon{background-position:-32px 0}.top #tawkchat-minified-container{top:0;border-bottom:1px solid #e3e0e7;border-top:0;border-radius:0 0 8px 8px;-moz-border-radius:0 0 8px 8px;-webkit-border-radius:0 0 8px 8px}.top #tawkchat-chat-indicator{bottom:0;top:auto}.rectangle.top #tawkchat-chat-indicator:after{bottom:auto;border-bottom:8px solid #f77c76;border-top:0;top:-8px}.top #tawkchat-chat-bubble-text-container{margin-top:10px !important}.top #tawkchat-chat-bubble-close{bottom:0 !important;right:0 !important;position:absolute !important}.default.top #tawkchat-chat-bubble-close{bottom:3px !important;right:6px !important;top:auto !important}";
            b.MinifiedMobileStyle = "@font-face{font-family:'icomoon';src:url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.eot?-7rca1q');src:url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.eot?#iefix-7rca1q') format('embedded-opentype'),url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.ttf?-7rca1q') format('truetype'),url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.woff?-7rca1q') format('woff'),url('https://static-v.tawk.to/a-v3-34/fonts/icomoon.svg?-7rca1q#icomoon') format('svg');font-weight:normal;font-style:normal}body{position:relative;font-family:Verdana,Geneva,sans-serif !important;margin:0;font-size:16px;z-index:1000001}#tawkchat-minified-box{border:0 none;padding:0;margin:0;position:relative;width:100%;height:100%;z-index:999995;text-align:left;font-size:16px}.rectangle #tawkchat-minified-wrapper{width:100px;height:37px;bottom:5px}.round #tawkchat-minified-wrapper{bottom:6px;width:48px;height:48px}#tawkchat-minified-wrapper{border:0 none;margin:0;z-index:999997;position:absolute;cursor:pointer}.left #tawkchat-minified-wrapper.indicator-on{left:0 !important}.right #tawkchat-minified-wrapper.indicator-on{left:7px !important}.bottom.rectangle #tawkchat-minified-wrapper{bottom:15px !important}.round #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:50%;border:0 none;-webkit-box-shadow:0 4px 5px -1px rgba(0,0,0,0.5);-moz-box-shadow:0 4px 5px -1px rgba(0,0,0,0.5);box-shadow:0 4px 5px -1px rgba(0,0,0,0.5)}.rectangle #tawkchat-status-text-container{padding:0;position:absolute;z-index:999998;width:100%;height:100%;border-radius:3px;border:0 none;-webkit-box-shadow:0 4px 5px -1px rgba(0,0,0,0.5);-moz-box-shadow:0 4px 5px -1px rgba(0,0,0,0.5);box-shadow:0 4px 5px -1px rgba(0,0,0,0.5)}#tawkchat-status-message{border:0 none;padding:0;text-decoration:none;height:30px;text-align:center;position:absolute;left:21px;right:21px;width:auto}#tawkchat-chat-indicator{border:0 none;margin:0;padding:0;line-height:1em;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');position:absolute;z-index:1000000;display:none;left:0;background-position:-234px 0;width:25px;height:25px}.bottom #tawkchat-chat-indicator,.center #tawkchat-chat-indicator{top:auto}.center.rectangle #tawkchat-chat-indicator{bottom:27px}.bottom.rectangle #tawkchat-chat-indicator{bottom:35px}.round #tawkchat-chat-indicator{bottom:29px}.top #tawkchat-chat-indicator{top:auto}.top.rectangle #tawkchat-chat-indicator{bottom:27px}.left #tawkchat-chat-indicator{left:30px;right:auto}.left.rectangle #tawkchat-chat-indicator{left:82px}.right #tawkchat-chat-indicator{left:0;right:auto}#tawkchat-chat-indicator-text{border:0 none;padding:0;margin:0;overflow:hidden;vertical-align:baseline;font-weight:bold;font-size:16px;font-family:Arial;text-align:center;color:white;height:25px;width:25px;z-index:1000001;display:block;line-height:25px}#status-message{color:inherit;text-decoration:none;font-weight:bold;font-size:16px;vertical-align:middle;display:block;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 5px}#popout{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat;background-position:-219px 0;width:10px;height:10px;margin:10px 0;position:absolute;right:8px}#status-indicator{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');width:12px;height:12px;float:right;background-repeat:no-repeat}.rectangle #tawkchat-status-icon{margin:8px 13px}.round #tawkchat-status-icon{margin:13px}#tawkchat-status-icon{font-family:sans-serif,Verdana;speak:none;font-style:normal;font-weight:bold;font-variant:normal;text-transform:none;line-height:1;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:19px}#tawkchat-status-icon .text{display:inline-block;vertical-align:top;padding:2px 0 2px 7px}#tawkchat-status-icon:before{font-size:21px;font-weight:normal;font-family:'icomoon'}#tawkchat-status-icon.offline:before{font-size:22px}#tawkchat-status-icon.offline{margin:13px 13px 13px 10px}.rectangle #tawkchat-status-icon.offline{margin:8px 13px}#tawkchat-status-icon.offline .text{padding:2px 0 0 9px}#tawkchat-status-icon.offline:before{font-size:28px;line-height:18px;content:\"\\e904\"}#tawkchat-status-icon.online:before,#tawkchat-status-icon.away:before{content:\"\\e96c\"}";
            b.MaximizedMobileStyle = ".rtl-direction{direction:rtl !important}#tawkchat-container.maximized{height:100% !important;width:100% !important}#chatContainer{position:absolute;top:0;bottom:58px;left:0;right:0;background-color:#fcfcfc;overflow-y:auto;color:#6c6c6c}#chatContainer.chat-ended{bottom:87px}#maxFileNotificationContainer,#maxSizeNotificationContainer{color:#8a6d3b;background-color:#fcf8e3;border:#faebcc 1px solid;margin:5px 10px;padding:5px 10px;border-radius:6px;font-size:13px}.closeButtonContainer{margin:10px auto auto auto;text-align:right}.closeNotification{cursor:pointer;text-transform:uppercase}#maxFileSizeList,#maxFileNumberList{margin:10px}#maxFileSizeList li,#maxFileNumberList li{word-wrap:break-word}#maxFileSizeList a,#maxFileNumberList a{color:#00E}#chatContainer .hidden{display:none}.actionRetry{cursor:pointer;float:right}#actionsContainer{position:absolute;bottom:0;left:0;right:0;height:57px;border-top:1px solid #c4c4c4;background-color:#fff;border-bottom:1px solid #c4c4c4}#pluginsBar{height:38px;border-top:1px solid #c4c4c4;border-bottom:1px solid #c4c4c4;background-color:#e1e1e1}#ratingContainer{height:57px;position:absolute;z-index:2;width:88px;right:0}.rtl-direction #ratingContainer{-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);transform:rotateY(180deg);left:0;right:auto}#ratingContainer a{float:left;display:block;width:31px;height:30px;margin:3px 0 0 0}#ratingContainer div{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat;width:34px;height:37px;margin:3px 0 0 10px}#ratePositive div{background-position:-78px 0}#rateNegative div{background-position:0 0}#ratePositive.selected div{background-position:-117px 0}#rateNegative.selected div{background-position:-39px 0}#popOut .icon{margin:0 auto;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-831px 0;width:25px;height:25px}#emailTranscriptOption .icon{background-position:-156px 0;width:38px;height:25px;margin:0 auto;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat}#changeNameOption .icon{background-position:-667px 0;width:24px;height:25px;margin:0 auto;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat}#endChatOption .icon{background-position:-264px 0;width:25px;height:25px;margin:0 auto;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat}#menuOptions .label{margin-left:10px;line-height:25px;vertical-align:middle}.rtl-direction #menuOptions .label{margin:auto 10px auto 0}#formContainer{width:100%;height:auto;position:absolute;top:53px;bottom:30px;background-color:#f1f1f1;display:none;z-index:99999999}.form{font-size:13px;color:#a1a1a1;height:100%}.form fieldset{padding:0 25px 0 0}.rtl-direction .form fieldset{padding:0 0 0 25px}.form textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;resize:none;display:block;height:40px;width:100%;overflow:auto;padding:0 15px;color:#707070;font-size:13px;font-weight:bold;border:0;background:#fff;font-family:Arial;margin:13px 0}.form textarea:active,.form textarea:focus,.inputContainer select:active,.inputContainer select:focus{outline:0}.inputContainer{padding:0 15px;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;margin:0 -25px 7px 0;position:relative}.rtl-direction .inputContainer{margin:0 0 7px -25px}.inputContainer input,.inputContainer select{outline:0 none transparent;background:#fff;width:100%;margin:0;border:0;display:block;line-height:1em;padding:13px 0;color:#707070;font-family:Arial;font-size:13px;font-weight:bold}.inputContainer.other-fix{padding:0}.inputContainer select{background-color:#fff;outline:0}#departmentFieldFieldset.safari-fix .inputContainer select{-webkit-appearance:none}#departmentFieldFieldset.safari-fix .inputContainer{position:relative}#departmentFieldFieldset.safari-fix .inputContainer:after{position:absolute;right:24px;top:12px;cursor:pointer;width:10px;height:10px;font-size:10px;padding:0;background:#fff;color:#000;content:'\u25bc';pointer-events:none;cursor:pointer}.inputContainer.error,.form .textareaFieldset.error{border-color:#ef5656;color:#ef5656}.inputContainer.error input,.form .textareaFieldset.error textarea,.inputContainer.error select{color:#ef5656}.inputContainer.error input::-webkit-input-placeholder,.form .textareaFieldset.error textarea::-webkit-input-placeholder{color:#ef5656}.inputContainer input:active,.inputContainer input:focus{margin:0;border:0;outline:0 none transparent;border:0 none}.formErrorContainer{display:block;margin:-5px 0 5px 0;font-style:italic;color:#ef5656}.formMessageField{padding:20px;line-height:1.2em;color:#616161;font-size:15px;margin:0;word-wrap:break-word}#formSavingStatus.errorMessage{color:#ef5656;border:0;visibility:visible}#formSavingStatus{font-size:13px;visibility:hidden;padding:0 0 0 5px;position:absolute;bottom:55px;left:20px;right:20px}#formSavingStatus img{margin:0 0 0 5px}.formButtonContainer{margin:20px 0 0 0}.rtl-direction #formCancel{float:right}button{display:inline;zoom:1;vertical-align:baseline;outline:0 none;cursor:pointer;text-align:center;text-decoration:none;overflow:visible;margin:0;padding:7px 25px 8px 25px;font:bold 12px/100% Arial,sans-serif;outline:0 none transparent;background:#fafafa;color:#717171;border:1px solid #d3d3d3;border-radius:0}button::-moz-focus-inner{border:0}button:focus{outline:0}button:active{background-color:#ddd}.formButton{height:50px;width:50%}#textareaContainer{position:relative;height:57px}#textareaSubmitContainer{width:60px;height:56px;position:absolute;right:0;display:none}.rtl-direction #textareaSubmitContainer{left:0;right:auto}#textareaSubmitButton{width:0;height:0;border-top:15px solid transparent;border-bottom:15px solid transparent;border-left:15px solid #bfbfbf;position:absolute;right:15px;top:7px}#textareaWrapper{position:absolute;top:12px;left:10px;right:40px}#textareaContainer.symbianPadding #textareaSubmitButton{right:60px}#textareaContainer.symbianPadding #textareaWrapper{left:60px;right:100px}#chatTextarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0 none;outline:0 none transparent;height:29px;resize:none;width:100%;background:#fff;padding:0;font-family:Arial}#chatTextarea:active,#chatTextarea:focus{outline:0 none transparent;border:0 none}#chatTextarea::-webkit-input-placeholder{color:#717171;font-style:italic}#chatTextarea::-moz-placeholder{color:#717171;font-style:italic}#chatTextarea:-ms-input-placeholder{color:#717171;font-style:italic}#chatTextarea:-moz-placeholder{color:#717171;font-style:italic}#chatTableContainer{display:table;height:100%;width:100%;table-layout:fixed}#chatTableContainer.breakWord{word-break:break-all}#chatRowContainer{display:table-row;vertical-align:bottom}#chatCellContainer{overflow:auto;position:relative;display:table-cell;vertical-align:bottom;white-space:pre-wrap;word-break:break-word}.chatLineContainer{margin:20px 0 0 0}.chatLineContainer p{display:block;text-align:center;font-size:13px;color:#999}.chatLineContainer span{z-index:2;position:relative;background:#f1f1f1;padding:0 10px;font-size:13px}.chatLineContainer div{position:relative;top:-6px;z-index:1;border-top:1px solid #fff}#greetingsContainer{margin:15px 40px 0 40px;padding:5px;text-align:center;white-space:pre-wrap;word-wrap:break-word;color:#777;font-size:16px;font-weight:bold}#embedArrow{background-position:-917px 0;width:22px;height:26px;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat;margin:5px auto}#estimatedWaitTimeHeaderText{text-transform:uppercase}#estimatedWaitTimeMessage{color:#707070;margin:15px 0 0 0;font-size:16px;text-align:center;padding:0 10px}#estimatedWaitTimeMessage span,#estimatedWaitTimeMessage b{font-weight:bold}#estimatedWaitTime{display:none}#pluginsBar a{-webkit-tap-highlight-color:rgba(255,255,255,0.5);text-decoration:none}#pluginsBar a.active{background:rgba(255,255,255,0.5)}#textareaWrapper{top:0 !important;bottom:0 !important;right:84px !important}.rtl-direction #textareaWrapper{left:84px !important;right:10px !important}#chatTextarea{height:37px !important;padding-top:18px !important;font-size:16px !important;margin:0}#textareaSubmitButton{border-top:22px solid transparent !important;border-bottom:22px solid transparent !important;border-left:22px solid #bfbfbf !important}.rtl-direction #textareaSubmitButton{border-top:22px solid transparent !important;border-bottom:22px solid transparent !important;border-right:22px solid #bfbfbf;border-left:none !important;right:auto;left:15px}#ratingContainer a{width:44px;height:44px;margin:3px 0 0 0}#ratingContainer div{margin:3px auto !important}#hideButtonContainer{left:103px;right:105px;width:auto}#greetingsWrapper,#formContainer #greetingsWrapper{transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);top:50%;position:absolute;left:0;right:0}#tawkchat-maximized-container-element-no-cookies #chatPanel{background-color:#fff;color:#000;font-size:20px;text-align:center;border-bottom:1px solid #c4c4c4}#tawkchat-maximized-container-element-no-cookies #greetingsWrapper{position:absolute;left:0;right:0;top:50%}#chatPanel{width:100%;position:absolute;bottom:30px;top:53px;overflow:hidden}#emailTranscriptForm,#offlineForm{height:100%}#topBarContainer{border-top:1px solid #c4c4c4;border-bottom:1px solid #c4c4c4;height:51px !important;position:absolute;top:0;width:100%}#siteNameContainer{float:left;width:100%;height:51px}.rtl-direction #siteNameContainer{float:right}#siteName{margin:0 60px;line-height:51px;height:51px;text-align:center;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#backButtonContainer{float:left;width:57px;height:51px;margin-left:-100%}.rtl-direction #backButtonContainer{float:right;margin:auto -100% auto auto}#backButton{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-861px 0;width:23px;height:15px;margin:18.5px 17px}.isPopout #backButton{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-199px 0;width:15px;height:23px;margin:14px 21px}.rtl-direction #backButton{-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.black #backButton{background-position:-861px 0}.white #backButton{background-position:-889px 0}.isPopout.black #backButton{background-position:-647px 0}.isPopout.white #backButton{background-position:-598px 0}#menuButtonContainer{float:left;width:57px;height:51px;margin-left:-57px}.rtl-direction #menuButtonContainer{margin:0 -57px 0 0;float:right}#menuButton{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');width:24px;height:24px;margin:14px 17px}.black #menuButton{background-position:-618px 0}.white #menuButton{background-position:-569px 0}#menuOptions{position:absolute;right:5px;top:53px;border-radius:10px;display:none;z-index:999999999;max-height:270px}.rtl-direction #menuOptions{right:auto;left:5px}#menuScrollable{background:#fff;overflow:auto;padding:5px;border:2px solid #e6e6e6;border-radius:10px;height:100%}#menuOptions ul{list-style:none}#menuOptions li{padding:10px;color:#696969;cursor:pointer;font-size:16px;font-weight:bold;line-height:25px;height:25px}#soundOption .icon{margin:0 auto;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat}#soundOption.on .icon{background-position:-294px 0;width:32px;height:25px}#soundOption.off .icon{background-position:-330px 0;width:18px;height:25px}#menuOptions .iconWrapper{width:40px;height:25px;float:left}.rtl-direction #menuOptions .iconWrapper{float:right;display:inline-block}#printOption .icon{margin:0 auto;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat;background-position:-353px 0;width:25px;height:25px}#submitWrapper{position:absolute;bottom:50px;height:0;width:auto;right:0;background:#000;border-radius:4px 4px 0 0;color:#fff;-webkit-transition:height .25s ease;-moz-transition:height .25s ease;-ms-transition:height .25s ease;-o-transition:height .25s ease;transition:height .25s ease;*height:30px;*display:none}#submitWrapper.visible{height:30px;*display:block}#submitWrapper p{line-height:30px;padding:0 10px;float:left}#submitWrapper div{background-image:url('https://static-v.tawk.to/a-v3-34/images/ajax-loader-3.gif');width:16px;height:16px;float:right;margin:7px}#emailTranscriptForm,#changeNameForm,#endChatForm{position:absolute;width:100%;height:100%;margin:0}#formInnerHeight{position:absolute;top:0;bottom:75px;width:auto;overflow:auto;left:10px;right:10px;padding:0 10px;height:100%}#emailTranscriptForm #formInnerHeight,#changeNameForm #formInnerHeight,#endChatForm #formInnerHeight{width:auto;height:auto}#endChatForm #formInnerHeight{top:auto;text-align:center}#emailTranscriptForm .longFormBottomContainer,#changeNameForm .longFormBottomContainer,#endChatForm .longFormBottomContainer{bottom:0}#emailTranscriptForm .formButton,#changeNameForm .formButton,#endChatForm .formButton{width:50%}#emailTranscriptForm .inputContainer,#changeNameForm .inputContainer,#endChatForm .inputContainer{border:0;margin:0}.longFormBottomContainer{position:absolute;bottom:0;left:0;right:0}.longFormContainer{width:100%;height:100%;overflow:hidden;position:relative}#tawkToContent{display:none;position:absolute;top:53px;bottom:0;width:100%;background:#f1f1f1;z-index:10000000001}#tawkToContent .contentContainer{position:absolute;top:0;bottom:55px;width:auto;left:20px;right:20px;max-width:260px;margin:0 auto}#tawkToContent .buttonContainer{position:absolute;height:50px;bottom:0;width:100%}#tawkToContent .buttonContainer button{width:50%;height:50px}#tawkContent{font-size:15px;text-align:center;color:#6c6c6c;margin-top:12px;direction:ltr !important}#tawkImage{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-412px 0;width:78px;height:83px;margin:0 auto}#tawkToContent .wrapper{position:absolute;width:100%;transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);top:50%}#tawkHeader{font-size:22px;font-weight:bold;text-align:center;padding:20px 0 12px 0;color:#343434;border-bottom:2px solid #ddd;width:150px;margin:0 auto}#chatEnded{position:absolute;left:0;bottom:30px;height:86px;width:100%;background:#fff;display:none;z-index:10000001}#chatEnded .title{text-align:center;font-size:14px;margin:10px 0}#chatEnded .buttonContainer{width:100%;height:50px}#chatEnded button{width:50%;height:50px}.messageTime{padding:0;font-size:12px !important;color:#666}.messageStatusContainer{float:left;width:40px;margin-left:-40px;text-align:center}.messageBody{line-height:1.5em;margin:5px 0 0 42px;position:relative}.ownerNameContainer,.notificationContainer{width:100%}.notificationContainer{float:left}.rtl-direction .notificationContainer{float:right}.message{white-space:pre-wrap;word-wrap:break-word;padding:5px 10px}.messageWrapper{font-size:16px;width:100%;background:0;float:left}.message-success{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-515px 0;width:16px;height:15px;padding:0 8px;margin-top:6.5px}.messageStatusContainer.pending .message-success,.messageStatusContainer.pending .messageTime,.messageStatusContainer.errorInMessage .message-success{display:none}.messageStatusContainer.pending .messageStatus{background-image:url('https://static-v.tawk.to/a-v3-34/images/ajax-loader.gif');background-position:0 0;background-repeat:no-repeat;margin-top:2px;width:13px;height:13px;display:block;float:right}.messageStatusContainer.errorInMessage .messageStatus{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-717px 0;width:26px;height:27px;background-repeat:no-repeat;display:block;float:right}.ownerNameContainer .agentProfileImage{background-position:-748px 0;width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;float:left;margin-left:-100%;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png')}.ownerNameContainer .visitorProfileImage{width:28px;height:28px;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-536px 0;float:left;margin-left:-100%;*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://static-v.tawk.to/a-v3-34/images/mobile-icons.png',sizingMethod='scale')}.notificationContainer .message{margin-right:40px;font-size:14px !important;font-style:italic;padding:0}.rtl-direction .notificationContainer .message{margin:0 0 0 40px}.notificationTime{width:40px;float:left;margin-left:-40px;text-align:right;font-size:12px !important}.rtl-direction .notificationTime{float:right;text-align:left;margin:0 -40px 0 0}.messageContainer .messageHead.agent .messageTime,.notificationTime{color:#b3b3b3}#agentTypingContainer .messageBody{font-size:16px !important;font-weight:bold;min-width:auto;line-height:normal;margin-top:-8px}.messageBody.notification{margin-left:0}#waitTimeContainer .messageBody{width:100%;position:relative;margin:0;line-height:100%}#waitTimeContainer .messageWrapper{border:1px solid;border-radius:5px;width:auto;left:50%;transform:translate(-50%,0);-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-o-transform:translate(-50%,0);-ms-transform:translate(-50%,0);float:left;position:relative}#stickyContainer{position:absolute;margin-left:-14px;margin-top:-12px;background-color:#fcfcfc;width:23px;height:24px;padding:2px;top:50%}#stickyIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-495px 0;width:15px;height:16px;margin:4px}#waitTimeContainer .message{margin:0;padding:12px 10px 12px 14px;font-size:15px !important;color:#7b7a7a;font-weight:bold}#waitTimeContainer{margin:20px}#prechatButtonContainer button{vertical-align:bottom;width:50%}.inputContainer.valid{padding-right:30px}.inputContainer.valid,.form .textareaFieldset div.valid textarea{border-color:#92ed9d}.validInputIcon{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-696px 0;width:16px;height:15px;float:right;display:none;position:absolute;bottom:10px;right:10px}.rtl-direction .validInputIcon{float:left;left:10px;right:auto}.download-file{color:#3276b1;text-decoration:none;margin-top:3px;display:block}.download-image{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-781px 0;width:16px;height:18px;padding:1px 8px;vertical-align:middle}.uploaded-image{max-width:90%;max-height:220px;display:block;margin:0 auto}#uploadFileOption .icon{margin:0 auto;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-repeat:no-repeat;background-position:-802px 0;width:24px;height:25px}#uploadFileOption label{display:block;cursor:pointer}.progress{height:14px;position:relative;background:#eee;box-shadow:0 1px 0 transparent,0 0 0 1px #e3e3e3 inset;width:200px;margin:5px 0;display:inline-block;vertical-align:middle}.progress-bar{display:block;height:100%;background-color:#71a06a;box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.image-loader{width:30px;height:30px;background:url('https://static-v.tawk.to/a-v3-34/images/image-load.gif');background-repeat:no-repeat;background-position:center}.upload-error{margin:5px}.upload-error span{font-size:16px;color:red;font-weight:bold;vertical-align:middle}#upload-form{position:absolute;top:-100000px}.upload-data{margin:7px 12px 0 20px;min-width:250px}.upload-data span{font-style:italic;margin-right:3px}.agentChatContainer .messageBody{margin:-12px 0 0 30px;max-width:100%;float:left}.rtl-direction .agentChatContainer .messageBody{float:right}.agentChatContainer .message{border-radius:0 15px 15px 15px;background:#eee;color:#333;margin-right:50px}.rtl-direction .agentChatContainer .message{border-radius:15px 0 15px 15px;margin:auto auto auto 50px}.agentChatContainer .messageStatusContainer{margin-left:-47px;position:absolute;top:5px;left:100%}.rtl-direction .agentChatContainer .messageStatusContainer{left:auto;right:100%;margin:auto -47px auto auto}.messageContainer.agentChatContainer{margin:10px 0 10px 12px}.rtl-direction .messageContainer.agentChatContainer{margin:10px 12px 10px 0}.messageContainer.visitorChatContainer{margin:10px 12px 10px 0}.rtl-direction .messageContainer.visitorChatContainer{margin:10px 0 10px 12px}.visitorChatContainer .messageBody{margin:2px 0 0 0;float:right;max-width:100%}.rtl-direction .visitorChatContainer .messageBody{float:left}.visitorChatContainer .messageWrapper .message{color:#333;text-align:left;border-radius:15px 0 15px 15px;background:#e5e5e5;margin-left:50px}.rtl-direction .visitorChatContainer .messageWrapper .message{text-align:right;border-radius:0 15px 15px 15px;margin:auto 50px auto 0}.visitorChatContainer .messageStatusContainer{position:absolute;right:100%;top:5px;margin-right:-47px}.rtl-direction .visitorChatContainer .messageStatusContainer{left:100%;right:auto;margin:auto auto auto -47px}.ownerNameContainer{float:left;width:100%}.messageOwnerName{color:#a7a7a7;text-decoration:none;font-size:12px !important;margin-left:42px;margin:0;padding:0;line-height:14px;display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:30px}.messageOwnerName.visitor{text-align:right;margin-right:0;margin-left:0}.single-agent .profileImageContainer,.single-agent .agentChatContainer .ownerNameContainer{display:none}.single-agent .visitorChatContainer .messageBody,.single-agent .messageOwnerName.visitor{margin-right:0}.single-agent .visitorChatContainer .messageBody{margin-top:2px}.single-agent .agentChatContainer .messageBody,.single-agent .agentChatContainer .ownerNameContainer,.single-agent #agentTypingContainer .messageBody{margin-left:0;margin-top:0}#agentTypingContainer .agentChatContainer{margin-bottom:5px}.profileImageContainer{height:28px;float:left;width:28px;margin-left:-100%}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-748px 0;position:absolute;left:0;right:0}.messageContainer,#agentTypingContainer{position:relative;margin:10px 12px;white-space:normal}.inputContainer input:focus+.form-field-label,.textareaFieldset textarea:focus+.form-field-label{display:block}.inputContainer input:active::-webkit-input-placeholder,.inputContainer input:focus::-webkit-input-placeholder,.textareaFieldset textarea:active::-webkit-input-placeholder,.textareaFieldset textarea:focus::-webkit-input-placeholder{color:transparent !important}.inputContainer input:focus::-moz-placeholder,.inputContainer input:active::-moz-placeholder,.textareaFieldset textarea:focus::-moz-placeholder,.textareaFieldset textarea:active::-moz-placeholder{color:transparent !important;opacity:0 !important}.form-field-label.small{color:#b3b3b3;padding:1px 0 0 0;display:none;font-size:10px;position:absolute;top:0;left:4px;font-weight:bold}.rtl-direction .form-field-label.small{right:4px;left:auto}.form-field-label{color:#707070;font-family:Arial;font-size:13px;font-weight:bold}.form .textareaFieldset{padding:0 33px 0 0;margin:0 0 7px 0;position:relative;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;border:1px solid #ccc}.rtl-direction .form .textareaFieldset{padding:0 0 0 33px}.selection-label{vertical-align:middle;cursor:pointer}.selection-container{margin:3px}.selection-container input{margin:0 3px 0 5px}.selections-container{margin:3px 3px 7px 3px}.selections-container.error{border:1px solid #ef5656;border-radius:3px}@keyframes typing{0%{opacity:0}100%{opacity:1}}@-ms-keyframes typing{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes typing{0%{opacity:0}100%{opacity:1}}@-moz-keyframes typing{0%{opacity:0}100%{opacity:1}}@-o-keyframes typing{0%{opacity:0}100%{opacity:1}}.agentTypingIndicator span{-moz-animation:typing 1.2s infinite;-webkit-animation:typing 1.2s infinite;-o-animation:typing 1.2s infinite;-ms-animation:typing 1.2s infinite;animation:typing 1.2s infinite;animation-fill-mode:both;margin:0 1px;font-size:20px;line-height:0}.agentTypingIndicator span:nth-child(2){animation-delay:400ms;-webkit-animation-delay:400ms;-moz-animation-delay:400ms;-ms-animation-delay:400ms;-o-animation-delay:400ms}.agentTypingIndicator span:nth-child(3){animation-delay:800ms;-webkit-animation-delay:800ms;-moz-animation-delay:800ms;-ms-animation-delay:800ms;-o-animation-delay:800ms}.rtl-direction .message{min-width:45px !important}.message a{color:inherit}#newMessageDivider{margin-top:4px;font-size:.7rem;line-height:.6rem}#newMessageDividerLine{border-top:2px solid #e4c0b6;border-bottom:0;margin:0 0 -1px}#newMessageDividerLabel{background:#fcfcfc;margin:-0.3rem 0;float:right;padding:0 .5rem;color:#e4c0b6}#newMessageContainer{position:relative;left:-50%;cursor:pointer;display:none}#newMessagesBar{position:absolute;bottom:33px;height:0;width:auto;left:50%;color:#fff;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;visibility:hidden;cursor:pointer}#newMessagesBar.theme-background-color{background-color:transparent !important}#notificationMessageText{font-weight:700}#newMessageArrowDown{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-965px 0;width:16px;height:6px;margin:-1px auto}#newMessagesNotificationLink{background-image:url('https://static-v.tawk.to/a-v3-34/images/mobile-icons.png');background-position:-944px 0;width:16px;height:16px;float:left;margin:7px 7px auto auto}#newMessagesBar.visible{height:27px;bottom:70px;visibility:visible}#newMessagesBar.visible #newMessageContainer{display:block}#newMessagesBar p{line-height:27px;padding:0 10px;text-align:center;background-color:#81bd1d;border-radius:5px}.rtl-direction #newMessagesNotificationLink{float:right;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);transform:rotateY(180deg);margin:7px auto auto 7px}#bottomContainer{position:absolute;bottom:0;height:30px;line-height:30px;left:0;right:0;text-align:center;background-color:#fff;padding:0 25px;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#tawktoLink{text-decoration:none;color:#000}#tawktoLink .thin{font-size:13px;font-weight:400}#formContainer .inputContainer.selection:before{content:\"\";position:absolute;right:14px;top:13px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #707070;z-index:0}#formContainer .inputContainer{background-color:#fff;overflow:hidden;position:relative;height:33px}#formContainer .inputContainer.selection select{padding:7px 0}#formContainer .inputContainer select{position:absolute;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:90%;background:transparent;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;line-height:1;-webkit-appearance:none;-moz-appearance:none;text-indent:.01px;text-overflow:'';-ms-appearance:none}#formContainer .inputContainer select::-ms-expand{display:none}#endChatOption{display:none}";
            var v = {
                "chat-notification-container": '<div id="__MESSAGE_ID__" class="messageBody notification clearfix"><div class="notificationContainer"><div class="message">__MESSAGE__</div></div><div class="notificationTime">__TIME__</div><div class="clear"></div></div>',
                "chat-resend-link": '<a id="resendMessage-__MESSAGE_ID__" href="javascript:void(0);" class="messageStatus"  title="Resend"></a>',
                "tawk-survey-wrapper": '<div class="surveyContainer"><div class="surveyQuestion">__QUESTION__</div><div class="survey-options-wrapper">__OPTIONS__</div></div>',
                departmentOfflineNotification: '<div class="messageBody notification"><div class="messageWrapper"><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
                "chat-message-container": '__OWNER_TPL__<div class="clearfix"></div><div class="messageBody clearfix">__CONTENT__</div>',
                "chat-message-owner-agent": '<div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__; __IE_IMAGE_SCALE__;" class="agentProfileImage"></div></div>',
                "mobile-agent-typing": '<div id="agentTyping-__MESSAGE_ID__" class="agentChatContainer clearfix"><div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__; __IE_IMAGE_SCALE__;" class="agentProfileImage"></div></div><div class="clearfix"></div><div class="messageBody clearfix"><div class="message agentTypingIndicator"><span>.</span><span>.</span><span>.</span></div></div></div>',
                "chat-message-row": '<div class="messageWrapper __PENDING__"><div class="message">__MESSAGE__</div></div>__MESSAGE_STATUS_ROW__<div class="clear"></div>',
                "chat-message-success": '<span class="message-success"></span>',
                "chat-message-status-row": '    <div class="messageStatusContainer">        <span class="messageTime __TIME_CLASS__">__TIME__</span>    </div>',
                "chat-message-pending-row": '    <div class="messageStatusContainer pending">        <span class="messageStatus"></span>    </div>',
                "survey-option": '<input type="radio" id="__RADIO_ID__" name="__RADIO_NAME__" value="__RADIO_VALUE__" /><label for="__RADIO_ID__">__RADIO_VALUE__</label><br />',
                "file-upload": '<div>__FILE_DISPLAY__<a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><span class="download-image"> </span>__FILE_SIZE__ <span>__FILE_TYPE__</span></a></div>',
                "chat-divider": '    <hr id="newMessageDividerLine">    <span id="newMessageDividerLabel">__NEW_MESSAGES__</span>',
                "default-branding": '<span class="thin">Powered by</span> <b>tawk.to</b>',
                changeNameForm: '<div id="formInnerHeight"><div id="changeNameFormMessageContainer" class="formMessageField">__TITLE__</div><fieldset><div class="inputContainer"><input type="text" id="nameField" value="__NAME__" title="__NAME_PLACEHOLDER__" class="textInput" maxlength="40" placeholder="__NAME_PLACEHOLDER__" /></div></fieldset><div id="nameFieldError" class="formErrorContainer"></div></div><div id="submitWrapper"><div></div></div><div id="formSavingStatus"><span id="savingStatus">__STATUS__</span></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton  theme-background-color theme-text-color">__SAVE_BUTTON__</button></div>',
                emailTranscriptForm: '<div id="formInnerHeight"><div id="emailTranscriptFormMessageContainer" class="formMessageField">Email transcript to:</div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div><div class="clear"></div></div><div id="submitWrapper"><div></div></div><div id="formSavingStatus"><span id="savingStatus">__STATUS__</span></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SEND_BUTTON__</button></div>',
                offlineForm: '<div class="longFormContainer"><div id="formInnerHeight"><div id="offlineFormMessageContainer" class="formMessageField">__TITLE__</div>__FIELDS__<div id="messageFieldError" class="formErrorContainer"></div><div class="clear"></div></div></div><div id="submitWrapper"><p>Submitting</p><div></div></div><div class="longFormBottomContainer">__CLOSE_BUTTON_CONTAINER__<button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SUBMIT_BUTTON__</button></div>',
                preChatForm: '<div class="longFormContainer"><div id="formInnerHeight"><div id="preChatFormMessageContainer" class="formMessageField">__TITLE__</div>__FIELDS__</div></div><div id="submitWrapper"><p>Submitting</p><div></div></div><div id="prechatButtonContainer" class="longFormBottomContainer">__CLOSE_BUTTON_CONTAINER__<button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__START_CHAT_BUTTON__</button><div class="clear"></div></div>',
                departmentSelection: '<fieldset class="__SAFARI__"><label class="form-field-label">__REQUIRED__ __LABEL__</label><div class="inputContainer selection __NON_MODERN__"><select id="__ID__Field" title="__LABEL__">__VALUE__</select></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
                inputTextFieldType: '<fieldset><div class="inputContainer"><input type="__INPUT_TYPE__" id="__ID__Field" title="__LABEL__" value="__VALUE__" class="textInput" maxlength="__MAXLENGTH__"placeholder="__REQUIRED__ __LABEL__" /><label class="form-field-label small">__REQUIRED__ __LABEL__</label><span id="__ID__FieldValid" class="validInputIcon"></span></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
                textAreaFieldType: '<fieldset class="textareaFieldset"><textarea id="__ID__Field" title="__LABEL__" maxlength="__MAXLENGTH__" placeholder="__REQUIRED__ __LABEL__"></textarea><label class="form-field-label small">__REQUIRED__ __LABEL__</label><span id="__ID__FieldValid" class="validInputIcon"></span></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
                selectionsType: '<fieldset><label class="form-field-label">__REQUIRED__ __LABEL__</label><div><div class="selections-container" id="__ID__Container">__VALUE__</div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
                checkboxSelectionType: '<div class="selection-container"><input type="checkbox" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><label class="selection-label" for="__ID__">__VALUE__</label></div>',
                radioSelectionType: '<div class="selection-container"><input type="radio" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><label class="selection-label" for="__ID__">__VALUE__</label></div>',
                "close-form-button": '<button id="formCloseChat" class="declineButton formButton">__CLOSE_BUTTON__</button>',
                inactivityOverlay: "<div>__OVERLAY__</div>",
                maintenanceOverlay: "<div>__OVERLAY__</div>",
                endChatForm: '<div id="formInnerHeight"><div id="endChatFormMessageContainer" class="formMessageField">__TITLE__</div></div><div id="submitWrapper"><div></div></div><div id="formSavingStatus"><span id="savingStatus">__STATUS__</span></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__END_CHAT_BUTTON__</button></div>',
                "tawkchat-minified-iframe-element-rectangle": '<div id="tawkchat-minified-wrapper"><div id="tawkchat-minified-container" class="theme-background-color border-corner"><div id="tawkchat-status-middle"><div id="tawkchat-status-text-container" class="theme-text-color"><p id="tawkchat-status-message"><span id="short-message"></span></p></div><div id="tawkchat-minified-agent-container" class="theme-text-color"><p id="tawkchat-minified-agent-information-wrapper"></p></div><div id="tawkchat-minified-link-container"><a href="javascript:void(0);" id="maximizeChat" title="__MAXIMIZE__"><div class="icon"></div></a></div></div></div></div>',
                "tawkchat-minified-iframe-element-round": '<div id="tawkchat-minified-box"><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><a href="javascript:void(0);" id="maximizeChat" title="__MAXIMIZE__"><div id="tawkchat-status-icon" class="online"></div></a></div></div></div>',
                "tawkchat-chat-bubble-canvas": '<div id="tawkchat-chat-bubble-graphics-container"><canvas id="tawkchat-chat-bubble-canvas"></canvas></div><div id="tawkchat-chat-bubble-close" class="image-canvas-close"></div><div id="tawkchat-chat-bubble-text-container"><p id="tawkchat-chat-bubble-text" class="bubble-text-color"></p></div>',
                "tawkchat-chat-indicator": '<div id="tawkchat-chat-indicator"><p id="tawkchat-chat-indicator-text"></p></div>',
                "tawkchat-chat-bubble-gallery": '<span id="tawkchat-chat-bubble-close" class="image-bubble-close"></span><img src="__IMAGE_SRC__" id="bubble-image" />',
                "tawkchat-agent-details-default": '<p id="tawkchat-minified-agent-name"></p><p id="tawkchat-minified-agent-position"></p>',
                "tawkchat-agent-details": '<span id="tawkchat-minified-agent-name"></span><span id="tawkchat-minified-agent-position"></span>',
                "tawkchat-maximized-wrapper": '<div id="innerWrapper" class="border-corner"><div id="headerBoxWrapper"><div id="headerBox" class="theme-background-color theme-text-color border-corner"><div id="headerAccountStateContainer"><p id="headerAccountState"><span id="shortMessage"></span></p></div><div id="agentWrapper"><div id="agentProfileContainer"></div><div id="agentListBack"><div id="listBack"></div><p id="agentListLabel">__AGENT_LIST__</p></div></div><div id="headerBoxControlsContainer"><a id="minimizeChat" href="javascript:void(0);" title="__MINIMIZE__"><span class="icon"></span></a><a id="popoutChat" href="javascript:void(0);" title="__POPOUT__"><span class="icon"></span></a><a id="endChat" href="javascript:void(0);" title="__END__"><span class="icon"></span></a></div></div></div><div id="agentBar"><div id="agentList" class="__IE6__"></div></div><div id="chatPanel"><div id="chatContainerWrapper"><div id="chatContainer" class="__IE6__">__GREETINGS__<div id="chatTableWrapper"><div id="chatRowWrapper"><div id="chatCellWrapper"><div id="chatWrapper" class="single-agent"><div id="agentTypingContainer" class="__IE6__"></div></div></div></div></div><div id="maxFileNotificationContainer" class="hidden"><div id="maxFileNotificationMessage"></div><div id="maxFileNumberList"></div><div class="closeButtonContainer"><span id="closeNumberNotification" class="closeNotification"></span></div></div><div id="maxSizeNotificationContainer" class="hidden"><div id="maxSizeNotificationMessage"></div><div id="maxFileSizeList"></div><div class="closeButtonContainer"><span id="closeSizeNotification" class="closeNotification"></span></div></div></div></div><div id="actionsContainer" class="__IE6__"><fieldset id="textareaWrapper"><div id="drop-text"><span></span></div><div id="ratingContainer"><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"></a><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"></a></div><div id="textareaContainer" class="additionalPadding"><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div></fieldset><div id="options"><div id="openMenu"></div><div id="closeMenu">&nbsp;<span></span></div></div><div id="optionsContainer" class="hidden"><ul><li id="changeNameOption"><div id="nameIcon"></div><p class="optionTitle"></p></li><li id="printOption"><div id="printIcon"></div><p class="optionTitle"></p></li><li id="emailTranscriptOption"><div id="emailIcon"></div><p class="optionTitle"></p></li><li id="soundOption" class="activeSound"><div id="soundOnIcon"></div><p class="optionTitle" id="soundTitle"></p></li><li id="uploadFileOption"><label for="fileInput"><div id="uploadFileIcon"></div><p class="optionTitle"></p></label></li><li id="endChatOption"><div id="endChatIcon"></div><p class="optionTitle"></p></li></ul></div></div></div><div id="formContainer"></div><div id="newMessagesBar"><div id="newMessageContainer"><p id="newMessagesNotification"><a id="newMessagesNotificationLink" title=""></a><span id="notificationMessageText"></span></p><div id="newMessageArrowDown"></div></div></div><div id="__BOTTOM_CONTAINER__"><a id="__TAWK_TO_LINK__" tabindex="-1"></a></div><div id="tawkToContent"><div class="longFormContainer"><div class="wrapper"><div id="tawkImage"></div><p id="tawkHeader">TAWK.TO</p><p id="tawkContent"></p></div></div><div class="buttonContainer"><button id="cancelTawkRedirect"></button><button id="tawkRedirect" class="theme-background-color theme-text-color"></button></div></div></div>',
                greetingsOverlay: '<div id="greetingsOverlay"><div id="greetingsWrapper"><div id="greetingsContainer"></div><div id="embedArrow"></div></div></div>',
                chatEnded: '<p class="title">__CHAT_ENDED__</p><div class="buttonContainer"><button id="newChat">__START_CHAT__</button><button id="emailTranscript">__EMAIL_TRANCRIPT__</button></div>',
                fileUploadProgress: '<div id="upload-__HANDLE__" class="upload-data"><span class="upload-icon"></span> <span>__FILE_NAME__</span><div class="progress"><div class="progress-bar" role="progressbar" style="width: 0.5%"></div></div></div>',
                "mobile-bottom-opt": '<div id="tawkchat-minified-box" class="bottom-opt"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-text-container" class="theme-background-color"><div id="status-indicator" class="online"></div><div id="tawkchat-status-message" class="theme-text-color"><a id="status-message"></a></div><div id="popout"></div><div class="clear"></div></div></div></div>',
                "mobile-bottom-not-opt": '<div id="tawkchat-minified-box" class="bottom-not-opt"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-text-container" class="theme-background-color"><div id="status-indicator" class="online"></div><div id="tawkchat-status-message" class="theme-text-color"><a id="status-message"></a></div><div id="popout"></div><div class="clear"></div></div></div></div>',
                "mobile-side-not-opt-right": '<div id="tawkchat-minified-box" class="left-corner"><div id="tawkchat-chat-indicator" class="online"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper" class="theme-background-color"><div id="tawkchat-status-text-container"><div id="status-indicator"></div><div id="tawkchat-status-message" class="theme-text-color"><a id="status-message"></a></div><div id="popout"></div><div class="clear"></div></div></div></div>',
                "mobile-side-not-opt-left": '<div id="tawkchat-minified-box" class="right-corner"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper" class="theme-background-color"><div id="tawkchat-status-text-container"><div id="popout"></div><div id="status-indicator" class="online"></div><div class="clear"></div><div id="tawkchat-status-message" class="theme-text-color"><a id="status-message"></a></div></div></div></div>',
                "mobile-side-ie9Less-not-opt": '<div id="tawkchat-minified-box" class="ie9Less"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper" class="wrapperIE9Less theme-background-color"><div id="tawkchat-status-text-container" class="statusContainerIE9Less statusContainerIE9LessNOptimized"><div id="popout"></div><div id="status-indicator" class="online"></div><div id="tawkchat-status-message" class="theme-text-color statusMessageIE9Less statusMessageIE9LessNOptimized"><a id="status-message"></a></div><div class="clear"></div></div></div></div>',
                "mobile-side-ie9Less-opt": '<div id="tawkchat-minified-box" class="ie9Less"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper" class="wrapperIE9Less theme-background-color"><div id="tawkchat-status-text-container" class="statusContainerIE9Less statusContainerIE9LessOptimized"><div id="popout"></div><div id="status-indicator" class="online"></div><div id="tawkchat-status-message" class="theme-text-color statusMessageIE9Less statusMessageIE9LessOptimized"><a id="status-message"></a></div></div></div></div>',
                "mobile-side-opt-right": '<div id="tawkchat-minified-box" class="opt-left-corner"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper" class="theme-background-color"><div id="popout"></div><div id="tawkchat-status-text-container"><div id="status-indicator" class="online"></div><div id="tawkchat-status-message" class="theme-text-color"><a id="status-message"></a></div><div class="clear"></div></div></div></div>',
                "mobile-side-opt-left": '<div id="tawkchat-minified-box" class="opt-right-corner"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper" class="theme-background-color"><div id="popout"></div><div id="tawkchat-status-text-container"><div id="status-indicator" class="online"></div><div id="tawkchat-status-message" class="theme-text-color"><a id="status-message"></a></div><div class="clear"></div></div></div></div>',
                "mobile-bottom-round": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"></div></div></div></div>',
                "mobile-bottom-rectangle": '<div id="tawkchat-minified-box"><div id="tawkchat-chat-indicator"><span id="tawkchat-chat-indicator-text"></span></div><div id="tawkchat-minified-wrapper"><div id="tawkchat-status-text-container" class="theme-background-color theme-text-color"><div id="tawkchat-status-icon" class="online"><div id="tawk-minified-mobile-text" class="text"></div></div></div></div></div>',
                "tawkchat-maximized-container-element": '<div id="topBarContainer" class="theme-background-color theme-text-color"><div id="siteNameContainer"><p id="siteName"></p></div><div id="backButtonContainer" class="button"><div id="backButton"></div></div><div id="menuButtonContainer" class="button"><div id="menuButton"></div></div></div><div id="menuOptions"><div id="menuScrollable"><ul><li id="changeNameOption"><div class="iconWrapper"><div class="icon"></div></div><span class="label"></span></li><li id="emailTranscriptOption"><div class="iconWrapper"><div class="icon"></div></div><span class="label"></span></li><li id="soundOption"><div class="iconWrapper"><div class="icon"></div></div><span id="soundTitle" class="label"></span></li><li id="uploadFileOption"><label for="fileInput"><div class="iconWrapper"><div class="icon"></div></div><span class="label"></span></label></li><li id="popOut"><div class="iconWrapper"><div class="icon"></div></div><span class="label"></span></li><li id="endChatOption"><div class="iconWrapper"><div class="icon"></div></div><span class="label"></span></li></ul></div></div><div id="chatPanel"><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form><div id="chatContainer"><div id="chatTableContainer"><div id="chatRowContainer"><div id="chatCellContainer"><div id="greetingsWrapper"><div id="greetingsContainer"></div><div id="embedArrow"></div></div><div id="chatWrapper" class="single-agent"><div id="agentTypingContainer"></div></div></div></div></div><div id="maxFileNotificationContainer" class="hidden"><div id="maxFileNotificationMessage"></div><div id="maxFileNumberList"></div><div class="closeButtonContainer"><span id="closeNumberNotification" class="closeNotification"></span></div></div><div id="maxSizeNotificationContainer" class="hidden"><div id="maxSizeNotificationMessage"></div><div id="maxFileSizeList"></div><div class="closeButtonContainer"><span id="closeSizeNotification" class="closeNotification"></span></div></div></div><div id="newMessagesBar"><div id="newMessageContainer"><p id="newMessagesNotification"><a id="newMessagesNotificationLink" title=""></a><span id="notificationMessageText"></span></p><div id="newMessageArrowDown"></div></div></div><div id="actionsContainer"><div id="textareaContainer"><div id="textareaWrapper"><textarea id="chatTextarea"></textarea></div><div id="textareaSubmitContainer"><div id="textareaSubmitButton"></div></div><div id="ratingContainer"><a id="ratePositive" href="javascript:void(0);"><div class="touch"></div></a><a id="rateNegative" href="javascript:void(0);"><div class="touch"></div></a></div></div></div></div><div id="tawkToContent"><div class="contentContainer"><div class="wrapper"><div id="tawkImage"></div><p id="tawkHeader">TAWK.TO</p><p id="tawkContent"></p></div></div><div class="buttonContainer"><button id="cancelTawkRedirect"></button><button id="tawkRedirect" class="theme-background-color theme-text-color"></button></div></div><div id="formContainer"></div><div id="__BOTTOM_CONTAINER__"><a id="__TAWK_TO_LINK__" tabindex="-1" href="javascript:void(0);"></a></div>',
                "tawkchat-maximized-container-element-no-cookies": '<div id="topBarContainer" class="theme-background-color theme-text-color"><div id="siteNameContainer"><p id="siteName"></p></div><div id="backButtonContainer" class="button"><div id="backButton"></div></div></div><div id="chatPanel"></div><div id="tawkToContent"><div class="contentContainer"><div class="wrapper"><div id="tawkImage"></div><p id="tawkHeader">TAWK.TO</p><p id="tawkContent"></p></div></div><div class="buttonContainer"><button id="cancelTawkRedirect"></button><button id="tawkRedirect" class="theme-background-color theme-text-color"></button></div></div><div id="formContainer"></div><div id="__BOTTOM_CONTAINER__"><a id="__TAWK_TO_LINK__" tabindex="-1"></a></div>',
                estimatedWaitTime: '<div class="messageBody notification"><div class="messageWrapper"><div id="stickyContainer"><div id="stickyIcon"></div></div><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
                "mobile-first-message-time": '<p id="firstMessageTimeContainer"><span id="firstMessageTime">__CONTENT__</span></p><div id="firstMessageTimeLine"></div>',
                "chat-message-owner-visitor": '<div class="ownerNameContainer"><a class="messageOwnerName visitor" href="#">__NAME__</a></div>',
                "agent-typing": '<div id="agentTyping-__MESSAGE_ID__" class="agentChatContainer clearfix"><div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__; __IE_IMAGE_SCALE__;" class="agentProfileImage"></div></div><div class="clearfix"></div><div class="messageBody clearfix"><div class="message agentTypingIndicator"><span>.</span><span>.</span><span>.</span></div></div></div>',
                "agent-profile": "__AGENT_PROFILE_DETAIL____AGENT_PROFILE_IMAGE__",
                "agent-profile-image": '    <div class="alias-image"></div><div class="alias-image" style="__IMAGE_URL__; __IE_IMAGE_SCALE__;"></div>',
                "agent-profile-description": '<div class="agentContainer"><div class="agentInformationContainer"><p class="__POSITION_CLASS__">__NAME__</p><p class="position-label">__POSITION__</p></div></div>',
                "agent-profile-description-noimage": '<div class="agentContainerNoImage"><div class="agentInformationContainerNoImage"><p class="agentInfoNoImage"><b>__NAME__</b><i>__POSITION__</i></p></div></div>',
                "agent-profile-description-single": '<div class="agentContainer"><div class="agentInformationContainer"><p class="__POSITION_CLASS__">__NAME__&nbsp;-&nbsp;__POSITION__</p></div></div>',
                "wait-time-container": '<div class="messageBody notification"><div class="messageWrapper"><div id="stickyContainer"><div id="stickyIcon"></div></div><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
                "extra-profile": '<div class="alias-image"></div><div class="overlay"></div><p id="totalExtra"></p>'
            };
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var f = Array.prototype.slice.call(arguments, 1),
                    b = this,
                    n = function() {},
                    r = function() {
                        return b.apply(this instanceof n && a ? this : a, f.concat(Array.prototype.slice.call(arguments)))
                    };
                n.prototype = this.prototype;
                r.prototype = new n;
                return r
            });
            Object.keys || (Object.keys = function() {
                var a = Object.prototype.hasOwnProperty,
                    f = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    b = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
                    n = b.length;
                return function(r) {
                    if ("object" !== typeof r && ("function" !== typeof r || null === r)) throw new TypeError("Object.keys called on non-object");
                    var c = [],
                        e;
                    for (e in r) a.call(r, e) && c.push(e);
                    if (f)
                        for (e = 0; e < n; e++) a.call(r, b[e]) && c.push(b[e]);
                    return c
                }
            }());
            Array.prototype.forEach || (Array.prototype.forEach = function(a) {
                if (void 0 === this || null === this) throw new TypeError;
                var f = Object(this),
                    b = f.length >>>
                    0;
                if ("function" !== typeof a) throw new TypeError;
                for (var n = 2 <= arguments.length ? arguments[1] : void 0, r = 0; r < b; r++) r in f && a.call(n, f[r], r, f)
            });
            var I = {
                    undefined: 1,
                    "boolean": 1,
                    number: 1,
                    string: 1
                },
                w = {
                    exportProperty: function(a, f, b) {
                        a[f] = b
                    }
                };
            w.dependencyDetection = function() {
                var a = [];
                return {
                    begin: function(f) {
                        a.push(f && {
                            callback: f,
                            distinctDependencies: []
                        })
                    },
                    end: function() {
                        a.pop()
                    },
                    registerDependency: function(f) {
                        if (!w.isSubscribable(f)) throw Error("Only subscribable things can act as dependencies");
                        if (0 < a.length) {
                            var b =
                                a[a.length - 1];
                            !b || 0 <= w.utils.arrayIndexOf(b.distinctDependencies, f) || (b.distinctDependencies.push(f), b.callback(f))
                        }
                    },
                    ignore: function(f, b, n) {
                        try {
                            return a.push(null), f.apply(b, n || [])
                        } finally {
                            a.pop()
                        }
                    }
                }
            }();
            w.observable = function(a) {
                function f() {
                    if (0 < arguments.length) return f.equalityComparer && f.equalityComparer(b, arguments[0]) || (f.valueWillMutate(), b = arguments[0], f.valueHasMutated()), this;
                    w.dependencyDetection.registerDependency(f);
                    return b
                }
                var b = a;
                w.subscribable.call(f);
                f.peek = function() {
                    return b
                };
                f.valueHasMutated = function() {
                    f.notifySubscribers(b)
                };
                f.valueWillMutate = function() {
                    f.notifySubscribers(b, "beforeChange")
                };
                w.utils.extend(f, w.observable.fn);
                w.exportProperty(f, "peek", f.peek);
                w.exportProperty(f, "valueHasMutated", f.valueHasMutated);
                w.exportProperty(f, "valueWillMutate", f.valueWillMutate);
                return f
            };
            w.subscribable = function() {
                this._subscriptions = {};
                w.utils.extend(this, w.subscribable.fn);
                w.exportProperty(this, "subscribe", this.subscribe);
                w.exportProperty(this, "getSubscriptionsCount", this.getSubscriptionsCount)
            };
            w.subscribable.fn = {
                subscribe: function(a, f, b) {
                    b = b || "change";
                    a = f ? a.bind(f) : a;
                    var n = new w.subscription(this, a, function() {
                        w.utils.arrayRemoveItem(this._subscriptions[b], n)
                    }.bind(this));
                    this._subscriptions[b] || (this._subscriptions[b] = []);
                    this._subscriptions[b].push(n);
                    return n
                },
                notifySubscribers: function(a, f) {
                    f = f || "change";
                    if (this.hasSubscriptionsForEvent(f)) {
                        var b = this._subscriptions[f],
                            n;
                        n = 0;
                        for (var r = this._subscriptions[f].length; n < r; ++n) b = this._subscriptions[f].slice(0), (b = b[n]) && !0 !== b.isDisposed &&
                            b.callback(a)
                    }
                },
                hasSubscriptionsForEvent: function(a) {
                    return this._subscriptions[a] && this._subscriptions[a].length
                },
                getSubscriptionsCount: function() {
                    var a = 0;
                    w.utils.objectForEach(this._subscriptions, function(f, b) {
                        a += b.length
                    });
                    return a
                },
                unsubscribe: function(a, f) {
                    w.utils.arrayRemoveItem(this._subscriptions[f || "change"], a)
                }
            };
            w.isSubscribable = function(a) {
                return null !== a && "function" === typeof a.subscribe && "function" === typeof a.notifySubscribers
            };
            w.subscription = function(a, f, b) {
                this.target = a;
                this.callback =
                    f;
                this.disposeCallback = b;
                w.exportProperty(this, "dispose", this.dispose)
            };
            w.subscription.prototype.dispose = function() {
                this.isDisposed = !0;
                this.disposeCallback()
            };
            w.observable.fn = {
                equalityComparer: function(a, f) {
                    return null === a || typeof a in I ? a === f : !1
                }
            };
            var V = w.observable.protoProperty = "__tw_proto__";
            w.observable.fn[V] = w.observable;
            w.hasPrototype = function(a, f) {
                return null === a || void 0 === a || void 0 === a[V] ? !1 : a[V] === f ? !0 : w.hasPrototype(a[V], f)
            };
            w.isObservable = function(a) {
                return w.hasPrototype(a, w.observable)
            };
            w.utils = {
                arrayIndexOf: function(a, f) {
                    if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, f);
                    for (var b = 0, n = a.length; b < n; b++)
                        if (a[b] === f) return b;
                    return -1
                },
                extend: function(a, f) {
                    if (f)
                        for (var b in f) f.hasOwnProperty(b) && (a[b] = f[b]);
                    return a
                },
                arrayRemoveItem: function(a, f) {
                    var b = w.utils.arrayIndexOf(a, f);
                    0 <= b && a.splice(b, 1)
                },
                objectForEach: function(a, f) {
                    for (var b in a) a.hasOwnProperty(b) && f(b, a[b])
                }
            };
            e.$_Tawk = e.$_Tawk || {};
            e.Tawk_API = e.Tawk_API || {};
            if ("object" === typeof e.$_Tawk_API)
                for (var y in e.$_Tawk_API) e.$_Tawk_API.hasOwnProperty(y) &&
                    (e.Tawk_API[y] = e.$_Tawk_API[y]);
            x.begin = function(a) {
                b.main.begin(a)
            };
            x.init = function(a) {
                b.main.init(a)
            };
            k = {
                onLoad: function() {},
                onStatusChange: function() {},
                onBeforeLoad: function() {},
                onChatMaximized: function() {},
                onChatMinimized: function() {},
                onChatHidden: function() {},
                onChatStarted: function() {},
                onChatEnded: function() {},
                onPrechatSubmit: function() {},
                onOfflineSubmit: function() {},
                onChatMessageVisitor: function() {},
                onChatMessageAgent: function() {},
                onChatMessageSystem: function() {},
                onAgentJoinChat: function() {},
                onAgentLeaveChat: function() {},
                onChatSatisfaction: function() {},
                onVisitorNameChanged: function() {},
                onFileUpload: function() {}
            };
            x.maximize = Tawk_API.maximize = function() {
                x.ready && b.sessionHandler.notifyWindowState("max")
            };
            x.minimize = Tawk_API.minimize = function() {
                x.ready && b.sessionHandler.notifyWindowState("min")
            };
            x.toggle = Tawk_API.toggle = function() {
                x.ready && b.viewHandler.toggleWidget()
            };
            x.popup = Tawk_API.popup = function() {
                x.ready && b.viewHandler.popoutWidget()
            };
            x.getWindowType = Tawk_API.getWindowType = function() {
                if (x.ready) return h.isEmbedded ?
                    "embed" : h.isPopup ? "popup" : "inline"
            };
            x.showWidget = Tawk_API.showWidget = function() {
                x.ready && b.viewHandler.showWidget()
            };
            x.hideWidget = Tawk_API.hideWidget = function() {
                x.ready && b.viewHandler.hideWidget()
            };
            x.toggleVisibility = Tawk_API.toggleVisibility = function() {
                x.ready && b.viewHandler.toggleVisibility()
            };
            x.getStatus = Tawk_API.getStatus = function() {
                if (x.ready) return u.pageStatus()
            };
            x.isChatMaximized = Tawk_API.isChatMaximized = function() {
                if (x.ready) return "max" === u.chatWindowState()
            };
            x.isChatMinimized = Tawk_API.isChatMinimized =
                function() {
                    if (x.ready) return "min" === u.chatWindowState()
                };
            x.isChatHidden = Tawk_API.isChatHidden = function() {
                if (x.ready) return b.viewHandler.isWidgetHidden()
            };
            x.isChatOngoing = Tawk_API.isChatOngoing = function() {
                if (x.ready) return b.chatHandler.isChatOngoing()
            };
            x.isVisitorEngaged = Tawk_API.isVisitorEngaged = function() {
                if (x.ready) return b.chatHandler.isVisitorEngaged()
            };
            x.endChat = Tawk_API.endChat = function() {
                x.ready && b.chatHandler.triggerEndChat()
            };
            x.setForeignKey = Tawk_API.setForeignKey = function(a, f) {
                b.sessionHandler.setForeignKey(a,
                    f)
            };
            x.setConversion = Tawk_API.setConversion = function(a, f) {
                b.sessionHandler.setConversionId(a, f)
            };
            x.addEvent = Tawk_API.addEvent = function(a, f, d) {
                b.sessionHandler.addEvent(a, f, d)
            };
            x.setAttributes = Tawk_API.setAttributes = function(a, f) {
                b.sessionHandler.setAttributes(a, !0, f)
            };
            x.addTags = Tawk_API.addTags = function(a, f) {
                b.sessionHandler.addTags(a, f)
            };
            x.removeTags = Tawk_API.removeTags = function(a, f) {
                b.sessionHandler.removeTags(a, f)
            };
            var G = "",
                J = 0,
                M = !1,
                X = !1,
                na = !1,
                K = null,
                B = null,
                Aa, Ba, Ca, Da, Ea, oa = !0,
                h = {
                    widgetId: "default",
                    isPopup: !1,
                    isEmbedded: !1,
                    soundOn: w.observable(!0),
                    showAgentBar: !0,
                    showWaitTime: !0,
                    showPreChatForm: !1,
                    showOfflineForm: !0,
                    hideWidget: !1,
                    hideWidgetOnLoad: !1,
                    hideWidgetOnOffline: !1,
                    greetings: {},
                    prechatOptions: {},
                    headerBgColor: null,
                    headerTxtColor: null,
                    whiteLabel: w.observable(),
                    mobileWidget: w.observable("round"),
                    desktopWidget: w.observable("full"),
                    chatBubble: w.observable(),
                    chatPosition: w.observable("br"),
                    maximizedDimensions: w.observable({
                        width: 0,
                        height: 0
                    }),
                    minimizedDimensions: w.observable({
                        width: 0,
                        height: 0,
                        position: "br"
                    }),
                    onClickAction: "max",
                    widgetVersion: 0,
                    locale: "en",
                    schedule: null,
                    scheduleTimezone: null,
                    isTopPositioned: function() {
                        return "tr" === this.chatPosition() || "tl" === this.chatPosition()
                    },
                    isBottomPositioned: function() {
                        return "br" === this.chatPosition() || "bl" === this.chatPosition()
                    },
                    isCenterPositioned: function() {
                        return "cr" === this.chatPosition() || "cl" === this.chatPosition()
                    },
                    isRightPositioned: function() {
                        return "cr" === this.chatPosition() || "tr" === this.chatPosition() || "br" === this.chatPosition()
                    },
                    isLeftPositioned: function() {
                        return "cl" ===
                            this.chatPosition() || "tl" === this.chatPosition() || "bl" === this.chatPosition()
                    },
                    isDesktopRectangle: function() {
                        return "min" !== this.desktopWidget()
                    },
                    agentTextBgColor: null,
                    agentTextColor: null,
                    visitorTextBgColor: null,
                    visitorTextColor: null,
                    topCorner: null,
                    bottomCorner: null,
                    maxStyle: w.observable(),
                    minStyle: w.observable(),
                    mobMaxStyle: w.observable(),
                    mobMinStyle: w.observable(),
                    isRTL: w.observable(!1)
                },
                F = {
                    uuid: null,
                    uuidVer: 0,
                    visitorId: "",
                    name: w.observable(),
                    displayName: w.observable(),
                    email: w.observable(),
                    transcriptEmail: "",
                    uuids: []
                },
                P = {
                    pageId: null,
                    tawkId: "",
                    pageName: w.observable(),
                    isStable: !0
                },
                A = {
                    chatSynced: !1,
                    chatBuffer: [],
                    chatVersion: 0,
                    chatDepartment: "any",
                    agents: {},
                    agentProfiles: {},
                    profiles: {},
                    rating: w.observable(0),
                    chatHistory: [],
                    chatOrder: 0,
                    chatEndVersion: 1
                },
                u = {
                    transferKey: "",
                    sessionKey: "",
                    transferedSession: !1,
                    currentVersion: 526,
                    criticalVersion: 0,
                    serverVersion: 0,
                    agentImgUrl: "https://s3.amazonaws.com/tawk-to-pi",
                    visitorAppServer: "https://va.tawk.to",
                    visitorSocketServer: "",
                    chatWindowState: w.observable("min"),
                    pageStatus: w.observable(),
                    pageStatusVersion: 0,
                    prechatFormSubmitted: !1,
                    waitTime: 6E4,
                    chatBubbleClosed: w.observable(!1),
                    restarted: !1,
                    departments: []
                },
                Ia = {
                    chat_sound: "https://static-v.tawk.to/a-v3-34/audio/chat_sound.mp3"
                },
                Ja = {
                    chat_sound: "https://static-v.tawk.to/a-v3-34/audio/chat_sound.ogg"
                },
                Ka = {
                    chat_sound: "https://static-v.tawk.to/a-v3-34/audio/chat_sound.wav"
                },
                La = {
                    chat_sound: "https://static-v.tawk.to/a-v3-34/audio/chat_sound.aac"
                };
            (function() {
                var a = !1,
                    f = /xyz/.test(function() {
                        xyz
                    }) ? /\b_super\b/ : /.*/;
                this.TawkClass = function() {};
                TawkClass.extend = function(b) {
                    function n() {
                        !a && this.init && this.init.apply(this, arguments)
                    }
                    var r = this.prototype;
                    a = !0;
                    var c = new this;
                    a = !1;
                    for (var e in b) c[e] = "function" === typeof b[e] && "function" === typeof r[e] && f.test(b[e]) ? function(a, f) {
                        return function() {
                            var b = this._super;
                            this._super = r[a];
                            var d = f.apply(this, arguments);
                            this._super = b;
                            return d
                        }
                    }(e, b[e]) : b[e];
                    n.prototype = c;
                    n.prototype.constructor = n;
                    n.extend = arguments.callee;
                    return n
                }
            })();
            y = function() {
                this.br = "<br/>";
                this.regAlphaNumeric = /^[a-z0-9\-]{1,50}$/i;
                this.regNameMach = /^V[0-9]{16}$/;
                this.regTrim = /^\s+|\s+$/g;
                this.regDate = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
                this.regEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/i;
                this.regSurvey = /\[option\](.*?)(<br\/>|$)/g;
                this.regSurveyQuestion = /^(.*?)\[option\]/g;
                this.regOption = /\[option\]/g;
                this.regBr = /<br\/>/;
                this.regMatchUrl = RegExp('(?:^(?:(?:[a-z]+:)?//)?(?:\\S+(?::\\S*)?@)?(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)', "i");
                this.regMatchIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\/\?#]+)+)\b/gi;
                this.regEmailMatch = /((mailto:){0,1}[a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)/;
                this.regLineBreaks = /(\r\n|\n|\r)/gm;
                this.decodedAmp = "&";
                this.decodedQuote = '"';
                this.decodedApos = "'";
                this.decodedLess = "<";
                this.decodedGreat = ">";
                this.encodedQuote = "&quot;";
                this.encodedApos = "&#39;";
                this.encodedLess = "&lt;";
                this.encodedGreat = "&gt;";
                this.encodedAmp = "&amp;";
                this.rtlLangTab = ["ar", "he", "fa"];
                this.decodedAmpRegex = RegExp(this.decodedAmp, "g");
                this.decodedQuoteRegex = RegExp(this.decodedQuote, "g");
                this.decodedAposRegex =
                    RegExp(this.decodedApos, "g");
                this.decodedLessRegex = RegExp(this.decodedLess, "g");
                this.decodedGreatRegex = RegExp(this.decodedGreat, "g");
                this.encodedQuoteRegex = RegExp(this.encodedQuote, "g");
                this.encodedAposRegex = RegExp(this.encodedApos, "g");
                this.encodedLessRegex = RegExp(this.encodedLess, "g");
                this.encodedGreatRegex = RegExp(this.encodedGreat, "g");
                this.encodedAmpRegex = RegExp(this.encodedAmp, "g")
            };
            y.prototype.createElement = function(a, f, b, n, r) {
                var c;
                a = a.createElement(f);
                b = b || {};
                for (c in b) a[c] = b[c];
                r && "iframe" !==
                    f && (a.innerHTML = r);
                n && (a.style.cssText = n);
                return a
            };
            y.prototype.getDocument = function(a) {
                return a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document ? a.document : null
            };
            y.prototype.parseQueryString = function(a) {
                var f, b, n, r = {};
                n = (a ? a.replace(/(.*)\?/, "") : e.location.search.substring(1)).split("&");
                a = 0;
                for (f = n.length; a < f; a += 1) b = n[a].split("="), r[b[0]] = b[1];
                return r
            };
            y.prototype.createQueryString = function(a) {
                var f, b = [];
                for (f in a) a.hasOwnProperty(f) && b.push(encodeURIComponent(f) +
                    "=" + encodeURIComponent(a[f]));
                return b.join("&")
            };
            y.prototype.getReloadedScript = function() {
                var a, f, b = document.getElementsByTagName("script"),
                    n = null;
                a = 0;
                for (f = b.length; a < f; a++) b[a].id && -1 !== b[a].id.indexOf("TawkScript") && (n = b[a]);
                return n
            };
            y.prototype.parseApi = function() {
                var a = Tawk_API;
                "function" === typeof a.onBeforeLoad && (k.onBeforeLoad = function() {
                    "function" === typeof a.onBeforeLoad && (a.onBeforeLoad(), delete a.onBeforeLoad)
                });
                "function" === typeof a.onLoad && (k.onLoad = function() {
                    "function" === typeof a.onLoad &&
                        (a.onLoad(), delete a.onLoad)
                });
                "function" === typeof a.onStatusChange && (k.onStatusChange = function(f) {
                    try {
                        a.onStatusChange(f)
                    } catch (b) {}
                });
                "function" === typeof a.onChatMaximized && (k.onChatMaximized = function() {
                    try {
                        a.onChatMaximized()
                    } catch (f) {}
                });
                "function" === typeof a.onChatMinimized && (k.onChatMinimized = function() {
                    try {
                        a.onChatMinimized()
                    } catch (f) {}
                });
                "function" === typeof a.onChatHidden && (k.onChatHidden = function() {
                    try {
                        a.onChatHidden()
                    } catch (f) {}
                });
                "function" === typeof a.onChatStarted && (k.onChatStarted = function() {
                    try {
                        a.onChatStarted()
                    } catch (f) {}
                });
                "function" === typeof a.onChatEnded && (k.onChatEnded = function() {
                    try {
                        a.onChatEnded()
                    } catch (f) {}
                });
                "function" === typeof a.onPrechatSubmit && (k.onPrechatSubmit = function(f) {
                    try {
                        a.onPrechatSubmit(f)
                    } catch (b) {}
                });
                "function" === typeof a.onOfflineSubmit && (k.onOfflineSubmit = function(f) {
                    try {
                        a.onOfflineSubmit(f)
                    } catch (b) {}
                });
                "function" === typeof a.onChatMessageVisitor && (k.onChatMessageVisitor = function(f) {
                    try {
                        a.onChatMessageVisitor(f)
                    } catch (b) {}
                });
                "function" === typeof a.onChatMessageAgent && (k.onChatMessageAgent = function(f) {
                    try {
                        a.onChatMessageAgent(f)
                    } catch (b) {}
                });
                "function" === typeof a.onChatMessageSystem && (k.onChatMessageSystem = function(f) {
                    try {
                        a.onChatMessageSystem(f)
                    } catch (b) {}
                });
                "function" === typeof a.onAgentJoinChat && (k.onAgentJoinChat = function(f) {
                    try {
                        a.onAgentJoinChat(f)
                    } catch (b) {}
                });
                "function" === typeof a.onAgentLeaveChat && (k.onAgentLeaveChat = function(f) {
                    try {
                        a.onAgentLeaveChat(f)
                    } catch (b) {}
                });
                "function" === typeof a.onChatSatisfaction && (k.onChatSatisfaction = function(f) {
                    try {
                        a.onChatSatisfaction(f)
                    } catch (b) {}
                });
                "function" === typeof a.onVisitorNameChanged && (k.onVisitorNameChanged =
                    function(f) {
                        try {
                            a.onVisitorNameChanged(f)
                        } catch (b) {}
                    });
                "function" === typeof a.onFileUpload && (k.onFileUpload = function(f) {
                    try {
                        a.onFileUpload(f)
                    } catch (b) {}
                });
                k.disableSound = !!a.disableSound;
                k.embedded = a.embedded || null;
                k.profileName = a.profileName || null;
                k.visitor = a.visitor || null
            };
            y.prototype.trim = function(a) {
                return this.isString(a) ? String.prototype.trim ? a.trim().toString() : a.replace(this.regTrim, "") : null
            };
            y.prototype.isString = function(a) {
                return void 0 === a || "string" !== typeof a ? !1 : !0
            };
            y.prototype.isEmail =
                function(a) {
                    return this.regEmail.test(a)
                };
            y.prototype.isArray = Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            };
            y.prototype.parseVisitorName = function(a) {
                return this.isGeneratedName(a) ? b.languageParser.translate("chat", "defaultName") : a
            };
            y.prototype.generateRandomString = function(a) {
                var f, b = [];
                a = a || 6;
                for (f = 0; f < a; f++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random())));
                return b.join("")
            };
            y.prototype.computedStyle =
                function(a, f) {
                    var b;
                    if (!a || !f) return null;
                    if (a.currentStyle) b = a.currentStyle[f];
                    else try {
                        b = getComputedStyle(a, null).getPropertyValue(f)
                    } catch (n) {
                        b = "none"
                    }
                    "width" === f && "auto" === b && (b = a.clientWidth);
                    return "" + b
                };
            y.prototype.parseChatTime = function(a) {
                var f = this.getDateFromUTC(a);
                a = f.getHours();
                f = f.getMinutes();
                10 > a && (a = "0" + a);
                10 > f && (f = "0" + f);
                return a + ":" + f
            };
            y.prototype.getDateFromUTC = function(a) {
                if (a instanceof Date) return a;
                a = this.regDate.exec(a);
                return new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6],
                    a[7]))
            };
            y.prototype.rawEncode = function(a) {
                return a.replace(this.decodedAmpRegex, this.encodedAmp).replace(this.decodedQuoteRegex, this.encodedQuote).replace(this.decodedAposRegex, this.encodedApos).replace(this.decodedLessRegex, this.encodedLess).replace(this.decodedGreatRegex, this.encodedGreat)
            };
            y.prototype.rawDecode = function(a) {
                return a.replace(this.encodedQuoteRegex, this.decodedQuote).replace(this.encodedAposRegex, this.decodedApos).replace(this.encodedLessRegex, this.decodedLess).replace(this.encodedGreatRegex,
                    this.decodedGreat).replace(this.encodedAmpRegex, this.decodedAmp)
            };
            y.prototype.getMilliseconds = function(a) {
                a instanceof Date || (a = this.regDate.exec(a), a = new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6], a[7])));
                return a.getTime()
            };
            y.prototype.capitalize = function(a) {
                return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
            };
            y.prototype.getDepartmentStatus = function(a) {
                var f, b, n = u.departments,
                    r = "",
                    c = !0,
                    e = "";
                if ("any" === a) return {
                    status: "",
                    isOnline: !0,
                    name: ""
                };
                f = 0;
                for (b = n.length; f < b; f++)
                    if (n[f].did === a) {
                        c =
                            "online" === n[f].st;
                        r = n[f].st;
                        e = n[f].n;
                        break
                    }
                return {
                    status: r,
                    isOnline: c,
                    name: e
                }
            };
            y.prototype.getElementsByClassName = function(a, f) {
                var b, n, r, c;
                if (a.getElementsByClassName) return a.getElementsByClassName(f);
                r = a.getElementsByTagName("*");
                c = [];
                b = 0;
                for (n = r.length; b < n; b++) - 1 !== r[b].className.indexOf(f) && c.push(r[b]);
                return c
            };
            y.prototype.insertBeaconIframe = function() {
                M || this.insertStaticIframe("https://va.tawk.to/update/" + P.pageId + "/" + $_Tawk_WidgetId + "?v=" + (new Date).getTime() + "&$_tawk_beacon=true")
            };
            y.prototype.insertStaticIframe =
                function(a) {
                    var f = document.createElement("iframe");
                    f.style.display = "none";
                    f.src = a;
                    document.body && document.body.appendChild(f)
                };
            y.prototype.insertScript = function(a, f, b) {
                var n = document.getElementsByTagName("script")[0],
                    r = document.createElement("script");
                r.async = !0;
                r.src = a;
                r.charset = "UTF-8";
                r.setAttribute("crossorigin", "*");
                f && (r.id = f);
                b ? n.parentNode.insertBefore(r, n) : n.parentNode.appendChild(r)
            };
            y.prototype.isPlaceholderSupported = function() {
                return "placeholder" in document.createElement("input")
            };
            y.prototype.togglePlaceholderText =
                function(a, f) {
                    b.eventHandler.listen(a, "focus", function(a) {
                        this.value === f && (this.value = "")
                    }, "inputfocus");
                    b.eventHandler.listen(a, "blur", function() {
                        "" === this.value && (this.value = f)
                    }, "inputblur")
                };
            y.prototype.redraw = function(a) {
                var f = a.style.display;
                a.style.display = "none";
                a.style.display = f
            };
            y.prototype.isTouchDevice = function() {
                try {
                    return document.createEvent("TouchEvent"), !0
                } catch (a) {
                    return !1
                }
            };
            y.prototype.shadeColor = function(a, f) {
                var b = "#",
                    n, r;
                a = String(a).replace(/[^0-9a-f]/gi, "");
                6 > a.length && (a = a.charAt(0) +
                    a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
                f = f || 0;
                for (r = 0; 6 > r; r += 2) n = parseInt(a[r] + "" + a[r + 1], 16), n = Math.round(Math.min(Math.max(0, n + n * f), 255)).toString(16), b += ("00" + n).substring(n.length);
                return b
            };
            y.prototype.getContrast = function(a) {
                a = a.replace("#", "");
                6 > a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
                return 8388607.5 < parseInt(a, 16) ? "white" : "black"
            };
            y.prototype.getElementsByTagName = function(a, f) {
                for (var b = [], n = a.getElementsByTagName(f), r = 0; r <
                    n.length; r++) b.push(n[r]);
                return b
            };
            y.prototype.chatElementInView = function(a) {
                var f = b.viewHandler.chatContainer.getElementById("chatContainer");
                return a.offsetTop >= f.scrollTop && a.offsetTop <= f.scrollTop + f.offsetHeight ? !0 : !1
            };
            y.prototype.formatFileSize = function(a) {
                var f = "Bytes KB MB GB TB PB EB ZB YB".split(" ");
                a = parseInt(a, 10);
                if (!a) return "0Bytes";
                for (var b = 1; b < f.length; b++)
                    if (a < Math.pow(1024, b)) return Math.round(100 * (a / Math.pow(1024, b - 1))) / 100 + f[b - 1];
                return a
            };
            y.prototype.isFileInputSupported = function() {
                if (z.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
                var a = document.createElement("input");
                a.type = "file";
                return !a.disabled
            };
            y.prototype.escapeTemplateReplacement = function(a, f) {
                for (var b = 0; b < f.length; b++) {
                    var n = f[b],
                        r = n.textReplace;
                    "string" === typeof r && (r = r.replace(/\$/g, "$$$"));
                    a = a.replace(n.placeholder, r)
                }
                return a
            };
            y.prototype.getGenericStyle = function(a) {
                return ["outline                     : " + (a.outline ? a.outline : "none") + " !important; ", "visibility                  : " + (a.visibility ? a.visibility : "visible") + " !important; ", "resize                      : " +
                    (a.resize ? a.resize : "none") + " !important; ", "box-shadow                  : " + (a.boxshadow ? a.boxshadow : "none") + " !important; ", "overflow                    : " + (a.overflow ? a.overflow : "visible") + " !important; ", "background                  : " + (a.background ? a.background : "none") + " !important; ", "opacity                     : " + (a.opacity ? a.opacity : "1") + " !important; ", "filter                      : alpha(opacity=" + (a.opacity ? 100 * a.opacity : "100") + ") !important; ", "-ms-filter                  : progid:DXImageTransform.Microsoft.Alpha(Opacity" +
                    (a.opacity ? a.opacity : "1") + ") !important; ", "-moz-opacity                : " + (a.opacity ? a.opacity : "1") + " !important; ", "-khtml-opacity              : " + (a.opacity ? a.opacity : "1") + " !important; ", "top                         : " + (a.top ? a.top : "auto") + " !important; ", "right                       : " + (a.right ? a.right : "auto") + " !important; ", "bottom                      : " + (a.bottom ? a.bottom : "auto") + " !important; ", "left                        : " + (a.left ? a.left : "auto") + " !important; ", "position                    : " +
                    (a.position ? a.position : "absolute") + " !important; ", "border                      : " + (a.border ? a.border : "0") + " !important; ", "min-height                  : " + (a.minheight ? a.minheight : "auto") + " !important; ", "min-width                   : " + (a.minwidth ? a.minwidth : "auto") + " !important; ", "max-height                  : " + (a.maxheight ? a.maxheight : "none") + " !important; ", "max-width                   : " + (a.maxwidth ? a.maxwidth : "none") + " !important; ", "padding                     : " + (a.padding ? a.padding :
                        "0") + " !important; ", "margin                      : " + (a.margin ? a.margin : "0") + " !important; ", "-moz-transition-property    : " + (a.transition ? a.transition : "none") + " !important; ", "-webkit-transition-property : " + (a.transition ? a.transition : "none") + " !important; ", "-o-transition-property      : " + (a.transition ? a.transition : "none") + " !important; ", "transition-property         : " + (a.transition ? a.transition : "none") + " !important; ", "transform                   : " + (a.transform ? a.transform : "none") + " !important; ",
                    "-webkit-transform           : " + (a.transform ? a.transform : "none") + " !important; ", "-ms-transform               : " + (a.transform ? a.transform : "none") + " !important; ", "width                       : " + (a.width ? a.width : "auto") + " !important; ", "height                      : " + (a.height ? a.height : "auto") + " !important; ", "display                     : " + (a.display ? a.display : "block") + " !important; ", "z-index                     : " + (a.zindex ? a.zindex : "none") + " !important; ", "background-color            : " +
                    (a.backgroundcolor ? a.backgroundcolor : "transparent") + " !important; ", "cursor                      : " + (a.cursor ? a.cursor : "auto") + " !important; ", "float                       : " + (a["float"] ? a["float"] : "none") + " !important; "
                ].join("")
            };
            y.prototype.isGeneratedName = function(a) {
                return this.regNameMach.test(a)
            };
            y.prototype.getRotateStyling = function(a, f) {
                var b = "rotate(" + a + "deg) translateZ(0px)";
                return {
                    transform: b,
                    "-moz-transform": b,
                    "-webkit-transform": b,
                    "-o-transform": b,
                    "-ms-transform": b,
                    "transform-origin": f,
                    "-moz-transform-origin": f,
                    "-webkit-transform-origin": f,
                    "-o-transform-origin": f,
                    "-ms-transform-origin": f
                }
            };
            y.prototype.blurElements = function(a) {
                for (var f = 0; f < a.length; f++) a[f].blur()
            };
            y.prototype.transformGreetings = function(a) {
                for (var f = /\[([^)]+)\]/, b = /\(([^)]+)\)/, n = /\[[^\]\(\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b){1}[^\]\(\)]+\)/i, r = "_blank", c = a, e, h; null !== (e = n.exec(c)) && (h = f.exec(e[0]), e = b.exec(e[0]), e[0].indexOf("(mailto:") || (r = "_top"), c = c.replace(h[0] + e[0], '<a target="' + r + '" href="' +
                        e[1] + '" class="link">' + h[1] + "</a>"), c !== a););
                return c
            };
            y.prototype.checkWhiteLabelLink = function(a, f) {
                var d = 1E4 * Math.random(),
                    n = this,
                    r = b.viewHandler.chatContainer,
                    c, e;
                this.checkWhiteLabelRef = setTimeout(function() {
                    if (f.label !== a.innerHTML || f.url && f.url !== a.href || !f.url && a.href || f.id !== a.id || !r.getElementById(a.id) || f.cssText !== a.style.cssText) n.whiteLabelUnexpectedIssueLogged || (b.loggingHandler.logIncident("White label element has changed unexpectedly", {
                        pageId: F.uuid
                    }), n.whiteLabelUnexpectedIssueLogged = !0), a.id = f.id, a.innerHTML = f.label, a.style.cssText = f.cssText, null !== f.url ? a.href = f.url : a.removeAttribute("href"), !r.getElementById(f.parentElem.id) && f.grandParentName && (c = r.getElementById(f.grandParentName), f.siblingName && (e = r.getElementById(f.siblingName)) && c && c.insertBefore(f.parentElem, e)), c = r.getElementById(f.parentElem.id), !r.getElementById(a.id) && c && c.appendChild(a);
                    n.checkWhiteLabelLink(a, f)
                }, d)
            };
            y.prototype.applyWhiteLabelSettings = function(a, f) {
                clearTimeout(this.checkWhiteLabelRef);
                null !==
                    f.url ? (a.href = f.url, f.url = a.href) : a.removeAttribute("href");
                a.innerHTML = f.label;
                a.target = "_blank";
                a.style.cssText += ";color:" + f.textColor + " !important";
                f.cssText = a.style.cssText;
                this.checkWhiteLabelLink(a, f)
            };
            y.prototype.transformLabel = function(a) {
                for (var f = /\*([^*]+)\*/, b = /\_([^_]+)\_/, n = /\*([^*]+)\*|\_([^_]+)\_*/, r = a, c, e; n.exec(r) && (c = f.exec(r), e = b.exec(r), c && (r = r.replace(c[0], "<b>" + c[1] + "</b>")), e && (r = r.replace(e[0], "<i>" + e[1] + "</i>")), r !== a););
                return r
            };
            y.prototype.getRandomName = function() {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(52 *
                    Math.random()) + this.generateRandomString() + "-" + (new Date).getTime()
            };
            y.prototype.insertRandomTagsBeforeAndAfter = function(a, f, b) {
                var n = Math.floor(3 * Math.random() + 1),
                    r;
                for (r = 0; r < n; r++) {
                    var c = document.createElement(b);
                    c.id = q.getRandomName();
                    f.insertBefore(c, a)
                }
                n = Math.floor(3 * Math.random() + 1);
                for (r = 0; r < n; r++) a = document.createElement(b), a.id = q.getRandomName(), f.appendChild(a)
            };
            Inheritance_Manager = {
                extend: function(a, f) {
                    function b() {}
                    b.prototype = f.prototype;
                    a.prototype = new b;
                    a.prototype.constructor = a;
                    a.prototype.parent =
                        f.prototype;
                    a.baseConstructor = f;
                    a.superClass = f.prototype
                }
            };
            var q = new y;
            "undefined" !== typeof module && module.exports && (module.exports.Utils = y);
            var Ma = [{
                    string: z.userAgent,
                    subString: "Edge",
                    identity: "explorer",
                    versionSearch: "Edge"
                }, {
                    string: z.userAgent,
                    subString: "Trident/7.0",
                    identity: "explorer",
                    versionSearch: "rv"
                }, {
                    string: z.userAgent,
                    subString: "(Opera|OPR)",
                    identity: "opera",
                    versionSearch: "Version"
                }, {
                    string: z.userAgent,
                    subString: "Chrome",
                    identity: "chrome",
                    versionSearch: "Chrome"
                }, {
                    string: z.userAgent,
                    subString: "Mobile Safari",
                    identity: "android",
                    versionSearch: "Version"
                }, {
                    string: z.userAgent,
                    subString: "Firefox",
                    identity: "firefox",
                    versionSearch: "Firefox"
                }, {
                    string: z.userAgent,
                    subString: "MSIE",
                    identity: "explorer",
                    versionSearch: "MSIE"
                }, {
                    string: z.userAgent,
                    subString: "IEMobile",
                    identity: "explorer",
                    versionSearch: "IEMobile"
                }, {
                    string: z.userAgent,
                    subString: "Safari",
                    identity: "safari",
                    versionSearch: "Version"
                }, {
                    string: z.userAgent,
                    subString: "Gecko",
                    identity: "mozilla",
                    versionSearch: "rv"
                }],
                Na = [{
                    string: z.userAgent,
                    subString: "Windows Phone",
                    identity: "windows_phone"
                }, {
                    string: z.platform,
                    subString: "Win",
                    identity: "windows"
                }, {
                    string: z.platform,
                    subString: "Mac",
                    identity: "mac"
                }, {
                    string: z.userAgent,
                    subString: "iPhone",
                    identity: "iphone"
                }, {
                    string: z.userAgent,
                    subString: "Android",
                    identity: "android"
                }, {
                    string: z.platform,
                    subString: "Linux",
                    identity: "linux"
                }, {
                    string: z.userAgent,
                    subString: "iPad",
                    identity: "ipad"
                }],
                Ha = {
                    google: "q",
                    yahoo: "p",
                    baidu: "wd",
                    yandex: "text",
                    bing: "q",
                    soso: "w",
                    ask: "q",
                    aol: "q",
                    sogou: "query",
                    mywebsearch: "searchfor",
                    youdao: "q",
                    lycos: "q",
                    infospace: "q",
                    blekko: "q",
                    info: "q",
                    dogpile: "q",
                    duckduckgo: "q",
                    webcrawler: "q"
                },
                ba = {
                    src: "about:blank",
                    border: "0",
                    cellspacing: "0",
                    frameBorder: "0",
                    scrolling: "no",
                    horizontalscrolling: "no",
                    verticalscrolling: "no",
                    allowTransparency: "true"
                },
                Fa = {
                    nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
                    blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
                    chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) Mobile/],
                    ie: [/(IEMobile)[ \/](\d+)\.(\d+)/],
                    firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
                    operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
                    opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/,
                        /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/
                    ],
                    safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
                    uc: [/(UCBrowser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
                    "android2.3": [/(Android) 2\.3(?:[.\-]([a-z0-9]+))?/],
                    android2: [/(Android) 2\.(\d+)(?:[.\-]([a-z0-9]+))?/],
                    android: [/Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; WOWMobile (.+) Build/,
                        /Android[\- ][\d]+\.[\d]+\-update1; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}\-[A-Za-z]{0,2};(.+) Build/, /Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[\- ][\d]+\.[\d]+; (.+) Build/
                    ]
                };
            y = function() {
                this.versionSearchString = this.browserObj = null;
                this.init()
            };
            y.prototype.init = function() {
                var a = this.getBrowserVersion();
                B = this.getMobileBrowser();
                J = a.version;
                G = a.vendor;
                Aa = this.hasHtmlAudio("mp3");
                Ba = this.hasHtmlAudio("ogg");
                Ca = this.hasHtmlAudio("wav");
                Da = this.hasHtmlAudio("aac");
                Ea = void 0;
                Ea = Aa || Ba || Ca || Da;
                oa = q.isPlaceholderSupported();
                "explorer" === G && (M = !0, 6 === J ? X = !0 : 8 <= J && 9 > J && (na = !0))
            };
            y.prototype.getBrowserVersion = function() {
                return this.browserObj ? this.browserObj : this.browserObj = {
                    vendor: this.searchString(Ma) || "other",
                    version: this.searchVersion(z.userAgent) || this.searchVersion(z.appVersion) || "other",
                    os: this.searchString(Na) ||
                        "other",
                    plugins: this.getPlugins()
                }
            };
            y.prototype.getPlugins = function() {
                var a, b, d = [];
                a = 0;
                for (b = z.plugins.length; a < b; a++) z.plugins[a].name && d.push(z.plugins[a].name);
                return d
            };
            y.prototype.searchString = function(a) {
                var b, d, n;
                for (b = 0; b < a.length; b++)
                    if (d = a[b].string, n = RegExp(a[b].subString), this.versionSearchString = a[b].versionSearch || a[b].identity, n.test(d)) return a[b].identity
            };
            y.prototype.searchVersion = function(a) {
                var b = a.indexOf(this.versionSearchString);
                if (-1 !== b) return parseFloat(a.substring(b + this.versionSearchString.length +
                    1))
            };
            y.prototype.getMobileBrowser = function() {
                for (var a = !1, b = z.userAgent, d = Object.keys(Fa), n = 0; !a && n < d.length;) {
                    for (var r = d[n], c = 0; c < Fa[r].length; c++)
                        if (b.match(Fa[r][c])) {
                            a = r;
                            break
                        }
                    n++
                }
                return a
            };
            y.prototype.getReferredSearchEngine = function() {
                var a, b, d = "";
                if (document.referrer && (b = this.getHostname(document.referrer)))
                    for (a in b = b.toLowerCase(), Ha)
                        if (0 <= b.indexOf(a)) {
                            queryString = this.getQuerystring(document.referrer, Ha[a]);
                            "blekko" === a && "" === queryString && (queryString = this.getQuerystring(document.referrer.replace("/ws/",
                                "/?q="), "q"));
                            d = a;
                            break
                        }
                return d
            };
            y.prototype.getQuerystring = function(a, b) {
                var d;
                b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                d = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
                return null === d || !q.isArray(d) || 2 > d.length ? null : d[1] ? unescape(d[1].replace(/\+/g, " ")) : null
            };
            y.prototype.getHostname = function(a) {
                a = a.match(/^(?:f|ht)tp(?:s)?:\/\/([^/]+)/im);
                return null === a || !q.isArray(a) || 2 > a.length ? null : a[1] ? a[1].toString() : null
            };
            y.prototype.hasHtmlAudio = function(a) {
                var b = document.createElement("audio");
                try {
                    if (!b.canPlayType ||
                        "no" === b.canPlayType("audio/" + a) || "" === b.canPlayType("audio/" + a)) return !1
                } catch (d) {
                    return !1
                }
                return !0
            };
            b.browserData = new y;
            y = function() {
                this.unloading = !1
            };
            y.prototype.logPerformance = function(a) {
                this.postForm("log-performance/v3", $_TAWK_JSON.stringify(a))
            };
            y.prototype.logIncident = function(a, b) {
                var d = c.getBrowserData();
                d.visitorId = F.visitorId || "";
                d.message = a;
                d.data = b;
                this.log("warning", d)
            };
            y.prototype.log = function(a, b) {
                var d;
                b && a && (b.uiVersion = "v3", b.buildVersion = "526", b.buildCommit = "73059c4730ce7b48935f84ca8ec54ef6fe985032",
                    d = {
                        type: a,
                        data: b
                    }, this.postForm("log", $_TAWK_JSON.stringify(d)))
            };
            y.prototype.postForm = function(a, b) {
                var d, n, r;
                n = document.createElement("iframe");
                if (!document.body) return !1;
                n.src = "about:blank";
                n.style.cssText = ";display:none !important;";
                document.body.appendChild(n);
                try {
                    d = q.getDocument(n)
                } catch (c) {
                    return !1
                }
                M && (d.open(), d.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><iframe name="form-receiver" id="form-receiver"></iframe></body></html>'),
                    d.close());
                n = d.createElement("form");
                n.method = "POST";
                n.action = "https://va.tawk.to/" + a;
                n.enctype = "application/x-www-form-urlencoded";
                n.acceptCharset = "UTF-8";
                r = d.createElement("input");
                r.type = "text";
                r.name = "logData";
                r.value = b;
                n.appendChild(r);
                M && (n.target = "form-receiver");
                d.body.appendChild(n);
                n.submit();
                n.parentNode.removeChild(n)
            };
            e.onbeforeunload = function() {
                this.unloading = !0
            };
            e.onunload = function() {
                this.unloading = !0
            };
            var aa = function() {
                this.originalErrorHandlerFn = e.onerror;
                this.beaconSent = !1
            };
            aa.prototype.getBrowserData =
                function() {
                    var a = b.browserData.getBrowserVersion();
                    return {
                        site: e.location.href,
                        browser: a.vendor || "",
                        version: a.version || "",
                        os: a.os || "",
                        plugins: a.plugins || ""
                    }
                };
            aa.prototype.handleError = function(a, f, d, n) {
                var r;
                if (!(f && d || "Script error." !== a && "Script error" !== a)) {
                    if (this.beaconSent) return !1;
                    this.beaconSent = !0;
                    q.insertBeaconIframe();
                    return !1
                }
                if ("string" !== typeof f || -1 === f.indexOf("tawk.to") && -1 === f.indexOf("tawk.js")) return !1;
                r = this.getBrowserData();
                r.visitorId = F.visitorId || "";
                r.message = a || "";
                r.file = f ||
                    "";
                r.line = d || "";
                r.stack = n || "";
                r.stack = r.stack.replace(q.regLineBreaks, "");
                b.loggingHandler.log("error", r);
                if (this.beaconSent) return !0;
                q.insertBeaconIframe();
                return this.beaconSent = !0
            };
            c = new aa;
            e.onerror = function(a, b, d) {
                var n;
                if (!c) return !1;
                n = c.handleError(a, b, d);
                return "function" === typeof c.originalErrorHandlerFn ? c.originalErrorHandlerFn(a, b, d) : n
            };
            aa = function() {
                this.events = {}
            };
            aa.prototype.attachEvent = function(a, b, d) {
                var n = this,
                    r = function(b) {
                        d.call(a, n.getEvent(b))
                    };
                a.attachEvent("on" + b, r);
                return r
            };
            aa.prototype.listen = function(a, b, d, n) {
                var r;
                if (n) {
                    this.events[n] && (r = this.events[n], this.events[n] = null, this.removeEventHandler(r.element, r.eventName, r.eventListener));
                    if (a.addEventListener) a.addEventListener(b, d, !1);
                    else if (document.attachEvent) d = this.attachEvent(a, b, d);
                    else return null;
                    this.events[n] = {
                        element: a,
                        eventName: b,
                        eventListener: d
                    };
                    return d
                }
            };
            aa.prototype.cancelEvent = function(a) {
                document.attachEvent && (a = this.getEvent(a));
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            };
            aa.prototype.removeEventHandler =
                function(a, b, d) {
                    document.removeEventListener ? a.removeEventListener(b, d, !1) : a.detachEvent("on" + b, d)
                };
            aa.prototype.getEvent = function(a) {
                var b = a || e.event;
                if (!b)
                    for (a = this.getEvent.caller; a && (!(b = a.arguments[0]) || Event != b.constructor);) a = a.caller;
                return b
            };
            aa.prototype.clearEvents = function() {
                var a = this;
                Object.keys(this.events).forEach(function(b) {
                    b = a.events[b];
                    a.removeEventHandler(b.element, b.eventName, b.eventListener)
                });
                this.events = {}
            };
            aa.prototype.getTargetElement = function(a) {
                document.attachEvent &&
                    (a = this.getEvent(a));
                a = a.target || a.srcElement;
                3 === a.nodeType && (a = a.parentNode);
                return a
            };
            var Oa = {
                    keypressTimer: 0,
                    previousValue: 0,
                    initElement: function(a, f) {
                        var d = this;
                        this.previousValue = "";
                        b.eventHandler.listen(a, "focus", function(b) {
                            d.startWatching(b, a, f)
                        }, a.id + "focus");
                        b.eventHandler.listen(a, "blur", function(a) {
                            d.stopWatching()
                        }, a.id + "blur");
                        b.eventHandler.listen(a, "keyup", function(b) {
                            d.detectChange(b, a, f)
                        }, a.id + "keyup")
                    },
                    startWatching: function(a, b, d) {
                        var n = this;
                        this.stopWatching();
                        this.keypressTimer =
                            setInterval(function() {
                                n.detectChange(a, b, d)
                            }, 100)
                    },
                    stopWatching: function() {
                        0 != this.keypressTimer && (clearInterval(this.keypressTimer), this.keypressTimer = 0)
                    },
                    detectChange: function(a, b, d) {
                        b = b.value || "";
                        if (this.previousValue === b) return !1;
                        d(a, b);
                        this.previousValue = b
                    }
                },
                L = function() {
                    this.hasCORS = ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof XDomainRequest) && function() {
                        var a;
                        if ("undefined" !== typeof XDomainRequest) return "https" === location.protocol;
                        try {
                            a = new XMLHttpRequest
                        } catch (b) {
                            return !1
                        }
                        return void 0 !==
                            a.withCredentials
                    }()
                };
            L.prototype.jsonpLoad = function(a) {
                var b = document.getElementsByTagName("script")[0],
                    d = document.createElement("script"),
                    n = !1;
                d.src = a;
                d.async = !0;
                d.charset = "UTF-8";
                d.onload = d.onreadystatechange = function() {
                    n || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (n = !0, d.onload = d.onreadystatechange = null, d && d.parentNode && d.parentNode.removeChild(d))
                };
                b.parentNode.insertBefore(d, b);
                return {
                    type: "jsonp",
                    req: d
                }
            };
            L.prototype.jsonp = function(a, b, d) {
                var n;
                b = b || {};
                b = "?" +
                    q.createQueryString(b);
                n = "$_Tawk_json" + ++this.counter;
                d && (e[n] = function(a) {
                    d(a);
                    try {
                        delete e[n]
                    } catch (b) {}
                    e[n] = null
                });
                return this.jsonpLoad(a + b + (d ? "callback=" + n : ""))
            };
            L.prototype.xhrRequest = function(a, b, d) {
                var n = this.getRequestObject();
                if (!n) return this.jsonp(a, b);
                b = b || {};
                n.onerror = d;
                n.open("POST", a, !0);
                n.withCredentials = !0;
                n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                n.onreadystatechange = function() {
                    n.passed || 4 !== n.readyState || (n.passed = !0, 200 === n.status && d(null, n.responseText))
                };
                n.send(q.createQueryString(b));
                return {
                    type: "xhr",
                    req: n
                }
            };
            L.prototype.getRequestObject = function() {
                if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest;
                if ("undefined" !== typeof XDomainRequest) return new XDomainRequest
            };
            L.prototype.abort = function(a) {
                a && ("xhr" === a.type ? a.req.abort() : (a = a.req) && a.parentNode && a.parentNode.removeChild(a))
            };
            var pa = new L,
                L = function() {
                    this.isCookieEnabled = this.checkCookieEnabled();
                    this.alphaNumericReg = /[^0-9a-zA-Z]/g;
                    this.hasSessionStorage = this.isCookieEnabled &&
                        !!e.sessionStorage;
                    this.clearOldCookies("TawkCookie")
                };
            L.prototype.setHTTPCookie = function(a, b, d, n) {
                var r = "";
                d || (d = new Date, d.setTime(d.getTime() + 31536E7), r = "; expires=" + d.toGMTString());
                document.cookie = a + "=" + b + r + "; path=/" + (n ? ";domain=" + n : "")
            };
            L.prototype.getHTTPCookie = function(a) {
                var b, d, n = [],
                    r = a + "=",
                    c = document.cookie.split(";");
                a = 0;
                for (b = c.length; a < b; a++) {
                    for (d = c[a];
                        " " === d.charAt(0);) d = d.substring(1, d.length);
                    0 === d.indexOf(r) && n.push(d.substring(r.length, d.length))
                }
                return n
            };
            L.prototype.setSessionStorage =
                function(a, b) {
                    if (this.hasSessionStorage && sessionStorage.setItem) try {
                        sessionStorage.setItem(a, b)
                    } catch (d) {}
                };
            L.prototype.getSessionStorage = function(a) {
                return this.hasSessionStorage && sessionStorage.getItem ? sessionStorage.getItem(a) : null
            };
            L.prototype.setWindowName = function(a) {
                e.name && 0 !== e.name.indexOf("TawkWindowName-") || (e.name = "TawkWindowName-" + a)
            };
            L.prototype.getWindowName = function() {
                var a, b, d;
                if (!e.name) return null;
                if (0 !== e.name.indexOf("TawkWindowName-")) {
                    d = e.name.substring(0, 5);
                    b = d.length;
                    if (6 >
                        b)
                        for (a = 0, b = 6 - b; a < b; a++) d += "0";
                    return d.replace(/[^0-9a-zA-Z]/g, "0").replace(" ", "0")
                }
                return e.name.substring(15, 21)
            };
            L.prototype.handleWindowId = function() {
                var a = this.getSessionStorage("TawkWindowName");
                "null" === a && (a = null);
                a || this.hasSessionStorage || (a = this.getWindowName());
                "null" === a && (a = null);
                a || (a = q.generateRandomString(), this.hasSessionStorage ? this.setSessionStorage("TawkWindowName", a) : this.setWindowName(a));
                K = a
            };
            L.prototype.storeUUID = function() {
                var a = this;
                u.transferedSession || F.uuids && 0 < F.uuids.length &&
                    F.uuids.forEach(function(b) {
                        var d = (b.isExact ? "e::" : "p::") + b.domain + "::" + b.uuid + "::" + F.uuidVer;
                        a.isCookieEnabled && a.setHTTPCookie("__tawkuuid", d, !1, b.domain)
                    });
                this.handleWindowId();
                this.storeSessionInformation()
            };
            L.prototype.getSessionInformation = function() {
                var a;
                this.sessionInformation && (a = this.sessionInformation);
                a || (a = this.getHTTPCookie("Tawk_" + P.pageId)[0]);
                return this.parseSessionInformation(a)
            };
            L.prototype.storeSessionInformation = function(a) {
                a ? a = u.visitorSocketServer + "::" + b.viewHandler.indicator.unansweredMessages :
                    (a = this.getSessionInformation()[1] || 0, b.main.previousSessionKey !== u.sessionKey && (a = 0), a = u.visitorSocketServer + "::" + a);
                this.setHTTPCookie("Tawk_" + P.pageId, a, !1);
                this.sessionInformation = a
            };
            L.prototype.parseSessionInformation = function(a) {
                var b = [];
                a && (b = a.split("::"), 1 >= b.length && (b = a.split("||")));
                return b
            };
            L.prototype.clearOldCookies = function(a) {
                document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            };
            L.prototype.checkCookieEnabled = function() {
                var a = z.cookieEnabled ? !0 : !1;
                "undefined" != typeof z.cookieEnabled ||
                    a || (document.cookie = "testcookie", a = -1 != document.cookie.indexOf("testcookie") ? !0 : !1);
                return a
            };
            L.prototype.getStoredUUID = function() {
                var a;
                this.isCookieEnabled && (a = this.getHTTPCookie("__tawkuuid"));
                return a && 0 < a.length ? a : []
            };
            var W = new L,
                Pa = function(a) {
                    var b;
                    "symbian" === B ? this.play = function() {} : ("safari" === B ? (b = document.createElement("audio"), b.src = a, b.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;", document.body.appendChild(b)) : b = new Audio(a),
                        b.addEventListener("timeupdate", function() {
                            0.2 <= b.currentTime && b.pause()
                        }, !1), b.load(), this.soundEl = b, this.play = function() {
                            try {
                                b.currentTime = 0, b.autoplay = !0, b.load(), b.play()
                            } catch (a) {}
                        })
                },
                Qa = function(a, b, d) {
                    this.sourcePath = a;
                    this.buffer = null;
                    this.name = b;
                    this.audioPlayer = d;
                    this.source = null;
                    this.volume = 1;
                    this.play = function() {
                        if (this.buffer) {
                            var a = this.audioPlayer.audioContext.createGain();
                            a.gain.value = this.volume;
                            this.source = this.audioPlayer.audioContext.createBufferSource();
                            this.source.buffer = this.buffer;
                            this.source.connect(a);
                            a.connect(this.audioPlayer.audioContext.destination);
                            this.source.start(0)
                        }
                    };
                    this.loadBuffer = function() {
                        var a = new XMLHttpRequest,
                            b = this;
                        a.open("GET", b.sourcePath, !0);
                        a.responseType = "arraybuffer";
                        a.onload = function() {
                            b.audioPlayer.audioContext.decodeAudioData(a.response, function(a) {
                                a && (b.buffer = a, b.audioPlayer.isReadyForInit || (b.audioPlayer.eventUsedForInit = b.name, b.audioPlayer.isReadyForInit = !0))
                            }, function(a) {
                                throw Error(a);
                            })
                        };
                        a.onerror = function(a) {
                            throw Error("BufferLoader: XHR error for " +
                                b.sourcePath);
                        };
                        a.send()
                    };
                    this.loadBuffer()
                },
                L = function() {
                    this.sounds = {};
                    this.audioContext = null;
                    this.isReadyForInit = !1;
                    this.eventUsedForInit = null
                };
            L.prototype.initAudioPlayer = function() {
                var a, f = {};
                if (Ea) {
                    this.audioContext || (/Firefox/.test(z.userAgent) || "undefined" === typeof AudioBuffer || void 0 === e.AudioContext && void 0 === e.webkitAudioContext) || (e.AudioContext = e.AudioContext || e.webkitAudioContext, this.audioContext = new AudioContext);
                    Ba ? f = Ja : Aa && !/Edge/.test(z.userAgent) ? f = Ia : Da ? f = La : Ca && (f = Ka);
                    for (a in f) this.sounds[a] =
                        this.audioContext ? new Qa(f[a], a, this) : new Pa(f[a]);
                    if (this.audioContext) {
                        var d = this,
                            n;
                        initSourceFunction = function() {
                            d.isReadyForInit && d.eventUsedForInit && (d.sounds[d.eventUsedForInit].volume = 0, d.sounds[d.eventUsedForInit].play(), d.sounds[d.eventUsedForInit].source.stop(0), d.sounds[d.eventUsedForInit].volume = 1, e.removeEventListener("touchstart", initSourceFunction, !1), n.removeEventListener("touchstart", initSourceFunction, !1))
                        };
                        if (B && "ontouchstart" in e) {
                            if (a = h.isPopup ? b.viewHandler.chatContainer.elementReferrer :
                                b.viewHandler.maximizedWidget.container.elementReferrer) n = a.contentWindow ? a.contentWindow : a.contentDocument.defaultView, n.addEventListener("touchstart", initSourceFunction, !1);
                            e.addEventListener("touchstart", initSourceFunction, !1)
                        }
                    }
                }
            };
            L.prototype.play = function(a) {
                k.disableSound || h.soundOn() && this.sounds[a] && this.sounds[a].play()
            };
            var Ra = {
                    init: function() {
                        this.iframeContainerName = q.getRandomName();
                        b.languageParser.language = x.language;
                        this.message = '<div id="formContainer" style="display: block;"><div id="greetingsOverlay"><div id="greetingsWrapper"><div id="greetingsContainer">' +
                            b.languageParser.translate("overlay", "cookiesOff") + "</div></div></div></div>";
                        B ? this.showMobileFix() : (this.showDesktopFix(), this.iframeContainer.restyle("display", "block"))
                    },
                    showDesktopFix: function() {
                        var a, f;
                        a = q.getContrast(h.headerTxtColor);
                        var d = this;
                        this.iframeContainer = new D(d.iframeContainerName, q.getGenericStyle({
                            display: "none",
                            right: "10px",
                            bottom: "0px",
                            zindex: "2000000000",
                            position: "fixed"
                        }));
                        if (h.isEmbedded) {
                            var n, r = "100%",
                                c = "100%";
                            n = document.getElementById(k.embedded);
                            if (!n) return;
                            n.appendChild(this.iframeContainer.buildView());
                            if (h.maximizedDimensions().width || h.maximizedDimensions().height) r = h.maximizedDimensions().width + "px", c = h.maximizedDimensions().height + "px";
                            else {
                                f = parseInt(q.computedStyle(n, "width").replace("px", ""), 10);
                                n = parseInt(q.computedStyle(n, "height").replace("px", ""), 10);
                                if (!f || 280 > f) r = "280px";
                                if (!n || 330 > n) c = "330px"
                            }
                            this.iframeContainer.restyle("width", r);
                            this.iframeContainer.restyle("height", c)
                        } else document.body.appendChild(this.iframeContainer.buildView());
                        if (h.isEmbedded || h.isPopup) f = '<div id="tawkchat-maximized-wrapper"><div id="borderWrapper"></div><div id="headerBoxWrapper"><div class="theme-background-color theme-text-color" id="headerBox"><div id="shortMessage">' +
                            b.languageParser.translate("chat", "live_chat") + "</div></div></div>" + this.message + '<div id="bottomContainer"><a id="tawktoLink" href="https://www.tawk.to/?utm_source=magento&utm_medium=link&utm_campaign=signup" target="_blank"><span class="thin">Powered by</span> tawk.to</a></div>', h.isPopup ? (a = document.getElementsByTagName("head")[0], r = document.createDocumentFragment(), c = q.createElement(document, "style", {
                                    type: "text/css"
                                }), n = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + h.maxStyle()), c.styleSheet ?
                                c.styleSheet.cssText = n.nodeValue : c.appendChild(n), r.appendChild(c), a.appendChild(r), this.maximizedContainer = new D(q.getRandomName(), q.getGenericStyle({
                                    width: "100%",
                                    height: "100%"
                                })), document.getElementById(this.iframeContainerName).appendChild(this.maximizedContainer.buildView()), this.maximizedContainer.elementReferrer.innerHTML = f, this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%")) : (this.maximizedContainer = new U(q.getRandomName(), q.getGenericStyle({
                                zindex: "999999",
                                height: "100%",
                                width: "100%",
                                position: "static"
                            }), ba, "iframe"), document.getElementById(this.iframeContainerName).appendChild(this.maximizedContainer.buildView()), this.maximizedContainer.buildIframe(b.MaximizedStyle + h.maxStyle()), this.maximizedContainer.documentRef.body.classList.add("noCookies"), this.maximizedContainer.documentRef.body.classList.add(a), this.maximizedContainer.documentRef.body.classList.add("embed"), this.maximizedContainer.documentRef.body.innerHTML = f, this.iframeContainer.restyle("position",
                                "static"), k.onLoad());
                        else if (this.maximizedContainer = new U(q.getRandomName(), q.getGenericStyle({
                                zindex: "999999",
                                display: "none",
                                height: "400px",
                                width: "320px",
                                position: "static"
                            }), ba, "iframe"), this.minimizedContainer = new U(q.getRandomName(), q.getGenericStyle({
                                zindex: "1000001",
                                bottom: "0px",
                                display: "none",
                                height: "40px",
                                width: "320px",
                                maxheight: "40px",
                                maxwidth: "320px",
                                right: "0px",
                                minheight: "40px",
                                minwidth: "320px",
                                position: "fixed"
                            }), ba, "iframe"), this.minimizedContainer.template = v["tawkchat-minified-iframe-element-rectangle"],
                            f = '<div id="tawkchat-maximized-wrapper"><div id="borderWrapper"></div><div id="headerBoxWrapper"><div class="theme-background-color theme-text-color" id="headerBox"><div id="shortMessage">' + b.languageParser.translate("chat", "live_chat") + '</div><div id="headerBoxControlsContainer"><div id="minimizeChat" class="icon"></div></div></div></div>' + this.message + '<div id="bottomContainer"><a id="tawktoLink" href="https://www.tawk.to/?utm_source=magento&utm_medium=link&utm_campaign=signup" target="_blank"><span class="thin">Powered by</span> tawk.to</a></div>',
                            document.getElementById(this.iframeContainerName).appendChild(this.minimizedContainer.buildView()), document.getElementById(this.iframeContainerName).appendChild(this.maximizedContainer.buildView()), this.minimizedContainer.buildIframe(b.MinifiedStyle + h.minStyle()), this.maximizedContainer.buildIframe(b.MaximizedStyle + h.maxStyle()), this.maximizedContainer.documentRef.body.classList.add("noCookies"), this.maximizedContainer.documentRef.body.classList.add(a), this.minimizedContainer.documentRef.body.classList.add("noCookies"),
                            this.minimizedContainer.documentRef.body.classList.add(a), this.maximizedContainer.documentRef.body.innerHTML = f, this.maximizedContainer.getElementById("formContainer").style.display = "block", this.minimizedContainer.restyle("display", "block"), this.minimizedContainer.attachUserEventListener("click", function(a) {
                                d.minimizedContainer.restyle("display", "none");
                                d.maximizedContainer.restyle("display", "block");
                                b.eventHandler.cancelEvent(a)
                            }, "tawkchat-minified-wrapper", "minifiedclick"), this.maximizedContainer.attachUserEventListener("click",
                                function(a) {
                                    d.minimizedContainer.restyle("display", "block");
                                    d.maximizedContainer.restyle("display", "none");
                                    b.eventHandler.cancelEvent(a)
                                }, "minimizeChat", "minlinkclick"), a = this.minimizedContainer.getElementById("short-message")) a.innerHTML = b.languageParser.translate("chat", "live_chat")
                    },
                    showMobileFix: function() {
                        if (h.isPopup) {
                            var a = document.getElementsByTagName("head")[0],
                                f = document.createDocumentFragment(),
                                d = q.createElement(document, "style", {
                                    type: "text/css"
                                }),
                                n = document.createTextNode(b.ResetStyle +
                                    "" + b.MaximizedMobileStyle);
                            d.styleSheet ? d.styleSheet.cssText = n.nodeValue : d.appendChild(n);
                            f.appendChild(d);
                            a.appendChild(f);
                            this.iframeContainer = new D(self.iframeContainerName, q.getGenericStyle({
                                display: "block",
                                right: "0px",
                                bottom: "0px",
                                zindex: "2000000000",
                                position: "fixed"
                            }));
                            this.iframeContainer.restyle("width", "100%");
                            this.iframeContainer.restyle("height", "100%");
                            document.getElementById(this.iframeContainerName).innerHTML = '<div id="mainContainer" style="display: block">' + this.message + "</div>"
                        } else if (b.main.initRenderer(B),
                            b.formHandler = new S, b.viewHandler.begin(), b.viewHandler.show(), a = b.viewHandler.chatContainer.getElementById("chatPanel")) a.innerHTML = '<div id="greetingsWrapper">' + b.languageParser.translate("overlay", "cookiesOff") + "</div>"
                    }
                },
                Ga = function() {
                    var a = this;
                    this.uploads = {};
                    b.eventEmitter.on("fileUploadProgress", function(a) {
                        b.viewHandler.updateFileProgress(a)
                    });
                    b.eventEmitter.on("fileUploadFinished", function(f) {
                        a.uploads[f.handle] && (delete a.uploads[f.handle], b.viewHandler.fileUploaded(f.handle), b.chatHandler.sendFileMessage(f))
                    });
                    b.eventEmitter.on("fileUploadError", function(f) {
                        var d = a.uploads[f.handle];
                        d && b.viewHandler.handleUploadError(null, d, f.handle)
                    })
                };
            Ga.prototype.getUploadHandler = function(a) {
                var b = "https://upload.tawk.to/upload/handle?_t=" + (new Date).getTime(),
                    d;
                "XDomainRequest" in e && null !== e.XDomainRequest ? (d = new XDomainRequest, d.onload = function() {
                        var b = new ActiveXObject("Microsoft.XMLDOM"),
                            f = $.parseJSON(this.responseText);
                        b.async = !1;
                        if (null === f || "undefined" === typeof f) f = $.parseJSON(this.firstChild.textContent);
                        a(f)
                    }) :
                    (d = new XMLHttpRequest, d.onreadystatechange = function() {
                        4 === this.readyState && (200 <= this.status && 400 > this.status ? a(JSON.parse(this.responseText)) : a(!0))
                    });
                d.open("GET", b);
                d.onerror = function() {
                    a(!0)
                };
                d.send();
                d = null
            };
            Ga.prototype.uploadFile = function(a, b, d, n, r) {
                var c, e = "https://upload.tawk.to/upload/visitor-chat/visitor?handle=" + a + "&visitorSessionId=" + u.sessionKey;
                this.uploads[a] = d;
                if (n) {
                    var h;
                    a += "-iframe";
                    try {
                        h = document.createElement("iframe")
                    } catch (g) {
                        return r(!0)
                    }
                    h.setAttribute("src", "about:blank");
                    h.setAttribute("name", a);
                    h.setAttribute("id", a);
                    h.setAttribute("width", "0");
                    h.setAttribute("height", "0");
                    h.setAttribute("border", "0");
                    h.setAttribute("style", "width: 0; height: 0; border: none; display: none !important;");
                    b.setAttribute("target", a);
                    b.setAttribute("action", e);
                    document.body.appendChild(h);
                    try {
                        c = q.getDocument(h)
                    } catch (k) {
                        return !1
                    }
                    "explorer" === G && (c.open(), c.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body></body></html>'),
                        c.close());
                    b.submit()
                } else {
                    if (52428800 < b.size) return r(!0, "limit50");
                    if (B && 2097152 < b.size) return r(!0, "limit2");
                    c = new FormData;
                    c.append("upload", b, b.name || b.filename);
                    b = pa.getRequestObject();
                    b.open("POST", e);
                    b.onload = function() {
                        return r($_TAWK_JSON.parse(this.responseText))
                    };
                    b.onerror = function() {
                        return r(!0)
                    };
                    b.send(c)
                }
            };
            var ka = function() {
                this.chatWindowStates = {
                    min: !0,
                    max: !0
                };
                this.selfOrigin = this.socket = null;
                this.forceDisconnected = this.banned = this.ready = this.disconnect = !1;
                this.clearRegisterRetryTimeout =
                    null
            };
            ka.prototype = new EventEmitter;
            ka.prototype.init = function() {
                var a, f = this,
                    d = (new Date).getTime();
                this.forceDisconnected = this.disconnect = x.connected = !1;
                this.removeAllListeners();
                this.socket && (this.socket.removeAllListeners(), this.socket.disconnect());
                null === K && W.handleWindowId();
                null !== K && "null" !== K || b.loggingHandler.logIncident("windowId is null", {
                    windowId: K,
                    type: typeof K
                });
                a = {
                    k: u.sessionKey,
                    u: F.uuid,
                    uv: F.uuidVer,
                    a: P.pageId,
                    cver: A.chatVersion,
                    pop: h.isPopup,
                    w: K,
                    jv: u.currentVersion,
                    asver: u.pageStatusVersion,
                    ust: $_Tawk_Unstable,
                    p: h.isPopup ? P.pageName() : document.title,
                    r: document.referrer
                };
                a.p && 255 < a.p.length && (a.p = a.p.substring(0, 255));
                this.socket = new $__TawkSocket("wss://" + u.visitorSocketServer + "/", {
                    engineIo: $__TawkEngine,
                    path: "/s",
                    query: a,
                    forceJSONP: "symbian" === B || "android" === B || "safari" === B && 7 > J || M && 9 >= J && "https" !== location.protocol
                });
                this.socket.on("disconnect", function() {
                    f.disconnectHandler()
                });
                this.socket.on("error", function(a) {
                    var d, c = "socket on error";
                    if (a instanceof Error) {
                        d = {
                            toString: a.toString(),
                            stack: a.stack,
                            lineNumber: a.lineNumber,
                            fileName: a.fileName
                        };
                        if (b.loggingHandler.unloading && -1 === d.toString.indexOf("post")) return;
                        "TransportError" === a.type && (d.description = a.description); - 1 !== d.toString.indexOf("post") && (c = "socket post error")
                    } else d = a;
                    b.loggingHandler.logIncident(c, d);
                    f.socket.disconnect();
                    f.disconnectHandler()
                });
                this.socket.on("connect", function() {
                    f.disconnect = !1
                });
                this.socket.on("ready", function(a, r, e) {
                    if (!b) return f.disconnectSocket();
                    f.selfOrigin = a;
                    x.connected = !0;
                    f.ready || (x.loaded = !0, "undefined" !== typeof $_Tawk_LoadStart && b.loggingHandler.logPerformance({
                        socket: (new Date).getTime() - d,
                        register: g.registerTime,
                        widget: (new Date).getTime() - $_Tawk_LoadStart,
                        script: (new Date).getTime() - T,
                        download: T - $_Tawk_LoadStart
                    }));
                    f.ready = !0;
                    try {
                        b.eventEmitter.emit("syncConversation", r)
                    } catch (h) {
                        c.handleError("Unable to emit syncConversation", h.fileName, h.lineNumber, h.stack)
                    }
                    try {
                        b.eventEmitter.emit("pageStatusUpdated", e)
                    } catch (k) {
                        c.handleError("Unable to emit pageStatusUpdated", k.fileName, k.lineNumber,
                            k.stack)
                    }
                    try {
                        b.eventEmitter.emit("socketReady")
                    } catch (m) {
                        c.handleError("Unable to emit socketReady", m.fileName, m.lineNumber, m.stack)
                    }
                    clearTimeout(f.clearRegisterRetryTimeout);
                    f.clearRegisterRetryTimeout = setTimeout(function() {
                        f.disconnect || g.resetRetryCount();
                        f.clearRegisterRetryTimeout = null
                    }, 5E3)
                });
                this.socket.on("remoteDisconnect", function(a) {
                    a = a || {};
                    if ("BANNED" === a.msg) {
                        f.banned = !0;
                        try {
                            f.socket.disconnect()
                        } catch (d) {
                            c.handleError("Unable to emit disconnect socket on ban", d.fileName, d.lineNumber,
                                d.stack)
                        }
                        b.main.hideWidget()
                    } else f.socket.disconnect(), f.disconnectHandler()
                });
                this.addEventListeners()
            };
            ka.prototype.addEventListeners = function() {
                function a(a, f) {
                    try {
                        b.eventEmitter.emit(a, f)
                    } catch (r) {
                        c.handleError("Unable to emit socket event : " + a + " with data : " + $_TAWK_JSON.stringify(f), r.fileName, r.lineNumber, r.stack)
                    }
                }
                var f = this;
                this.socket.on("visitorChatWindowState", function(b) {
                    f.selfOrigin !== b.origin && a("windowStateUpdated", b)
                });
                this.socket.on("visitorDataUpdate", function(b) {
                    f.selfOrigin !==
                        b.origin && a("visitorDataUpdate", b)
                });
                this.socket.on("visitorSound", function(a) {
                    a.origin !== f.selfOrigin && b.chatHandler.toggleSound(!!a.sdo)
                });
                this.socket.on("visitorMessage", function(b) {
                    f.selfOrigin !== b.origin && a("incomingMessage", b)
                });
                this.socket.on("visitorConversationPresenceUpdate", function(b) {
                    a("incomingMessage", b)
                });
                this.socket.on("pageStatus", function(b) {
                    a("pageStatusUpdated", b)
                });
                this.socket.on("newCriticalUpdate", function(a) {
                    a = a || 0;
                    a != u.criticalVersion && b.main.criticalRefresh(a, !0)
                });
                this.socket.on("newUnstableCriticalUpdate",
                    function(a) {
                        a = a || 0;
                        $_Tawk_Unstable && a != u.criticalVersion && b.main.criticalRefresh(a, !0)
                    });
                this.socket.on("visitorPopupFocus", function(b) {
                    b = b || {};
                    a("visitorPopupFocus", !!b.hasFocus)
                });
                this.socket.on("chatBubbleClosed", function(b) {
                    b.origin !== f.selfOrigin && a("chatBubbleClosed", b)
                });
                this.socket.on("agentIsTyping", function(b) {
                    a("agentIsTyping", b)
                });
                this.socket.on("agentStopedTyping", function(b) {
                    a("agentStopedTyping", b)
                });
                this.socket.on("pageDisable", function() {
                    a("removeWidget")
                });
                this.socket.on("widgetScheduleUpdate",
                    function(b) {
                        a("scheduleUpdate", b)
                    });
                this.socket.on("uploadProgress", function(b) {
                    a("fileUploadProgress", b)
                });
                this.socket.on("uploadFinished", function(b) {
                    a("fileUploadFinished", b)
                });
                this.socket.on("uploadError", function(b) {
                    a("fileUploadError", b)
                });
                this.on("notifyWindowState", function(a) {
                    f.chatWindowStates[a] && f.socket.send("chatWindowState", a)
                });
                this.on("notifyChatBubbleClosed", function() {
                    f.socket.send("chatBubbleClose")
                });
                this.on("notifyMessagePreview", function(a) {
                    f.socket.send("messagePreview", a,
                        (new Date).getTime())
                });
                this.on("sendChatMessage", function(a, b) {
                    f.socket.send("chatMessage", a, b)
                });
                this.on("notifyNameChange", function(a, b) {
                    f.socket.send("saveNameChangeForm", a, b)
                });
                this.on("notifyEmailTranscript", function(a, b) {
                    f.socket.send("saveTranscriptEmailForm", a, b)
                });
                this.on("notifyEndChatTranscript", function(a, b) {
                    f.socket.send("sendTranscript", a, b)
                });
                this.on("notifyOfflineMessage", function(a, b) {
                    f.socket.send("saveOfflineForm", a, b)
                });
                this.on("notifyPrechat", function(a, b) {
                    f.socket.send("savePrechatForm",
                        a, b)
                });
                this.on("setRating", function(a) {
                    f.socket.send("visitorRating", a)
                });
                this.on("toggleSound", function(a) {
                    f.socket.send("visitorSound", a)
                });
                this.on("notifyWidgetResized", function() {
                    f.socket.send("chatWindowResize")
                });
                this.on("popupOnFocus", function(a) {
                    f.socket.send("visitorPopupFocus", a)
                });
                this.on("visitorConnectionCount", function(a) {
                    f.socket.send("getVisitorConnectionCount", a)
                });
                this.on("notifySocketStatusUpdate", function(a) {
                    f.socket.send("socketStatusUpdate", a)
                });
                this.on("saveForeignKey", function(a,
                    b) {
                    f.socket.send("saveForeignKey", a, b)
                });
                this.on("saveConversion", function(a, b) {
                    f.socket.send("saveConversion", a, b)
                });
                this.on("submitMultipleOptions", function(a, b) {
                    f.socket.send("saveMultipleOptions", a, b)
                });
                this.on("endVisitorChat", function(a, b) {
                    f.socket.send("endChat", b)
                });
                this.on("fileUploadMessage", function(a, b) {
                    f.socket.send("fileUploadMessage", a, b)
                });
                this.on("addEvent", function(a, b) {
                    f.socket.send("addEvent", a, b)
                });
                this.on("setAttributes", function(a, b) {
                    f.socket.send("setAttributes", a, b)
                });
                this.on("addTags",
                    function(a, b) {
                        f.socket.send("addTags", a, b)
                    });
                this.on("removeTags", function(a, b) {
                    f.socket.send("removeTags", a, b)
                })
            };
            ka.prototype.disconnectSocket = function() {
                this.forceDisconnected = !0;
                this.socket && (this.socket.disconnect(), this.disconnectHandler())
            };
            ka.prototype.disconnectHandler = function() {
                x.connected = !1;
                this.socket.removeAllListeners();
                this.removeAllListeners();
                this.banned || (this.forceDisconnected || this.disconnect) || (this.disconnect = !0, g.retryRegister())
            };
            var D = function(a, b, d, n, r) {
                var c = this;
                this.elementId =
                    a || "";
                this.style = b || "";
                this.tagName = n || "div";
                this.childViews = [];
                this.template = a && v[a] ? v[a] : "";
                this.elementReferrer = null;
                this.documentRef = r || document;
                this.attributes = {};
                this.isVisible = !1;
                this.classNames = [];
                "iframe" === n && (this.isIframe = !0);
                this.elementId && (this.attributes.id = this.elementId);
                d && Object.keys(d).forEach(function(a) {
                    c.attributes[a] = d[a]
                })
            };
            D.prototype.addChildViews = function(a) {
                var b = this;
                a.forEach(function(a) {
                    b.childViews.push(a)
                })
            };
            D.prototype.buildView = function(a) {
                this.documentRef = a ||
                    this.documentRef;
                this.elementReferrer = q.createElement(this.documentRef, this.tagName, this.attributes, this.style, this.template);
                this.elementReferrer.className += this.classNames.join(" ");
                this.isIframe || this.buildChildViews();
                return this.elementReferrer
            };
            D.prototype.buildChildViews = function(a) {
                var b = this;
                this.childViews.length && (this.documentRef = a || this.documentRef, this.childViews.forEach(function(a) {
                    b.elementReferrer.appendChild(a.buildView(b.documentRef))
                }))
            };
            D.prototype.restyle = function(a, b) {
                -1 ===
                    b.indexOf("!important") && (b += " !important");
                this.elementReferrer ? this.elementReferrer.style.cssText += ";" + a + ":" + b : this.style += ";" + a + ":" + b
            };
            D.prototype.attachUserEventListener = function(a, f, d, n) {
                var r;
                if (r = d ? this.getElementById(d) : this.elementReferrer) d = a.split(" "), 1 < d.length ? d.forEach(function(a) {
                    b.eventHandler.listen(r, a, f, a + n)
                }) : b.eventHandler.listen(r, a, f, n)
            };
            D.prototype.toggle = function() {
                this.isVisible ? (this.restyle("display", "none !important"), this.isVisible = !1) : (this.restyle("display", "block !important"),
                    this.isVisible = !0)
            };
            D.prototype.getElementById = function(a) {
                return this.elementReferrer ? this.documentRef.getElementById(a) : null
            };
            D.prototype.insertHtml = function(a) {
                this.elementReferrer.innerHTML = a
            };
            D.prototype.clear = function() {
                this.elementReferrer && (this.elementReferrer.outerHTML = "", this.elementReferrer = null)
            };
            D.prototype.addClass = function(a) {
                this.classNames.push(a);
                this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
            };
            D.prototype.removeClass = function(a) {
                for (; - 1 !== this.classNames.indexOf(a);) this.classNames.splice(this.classNames.indexOf(a),
                    1);
                this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
            };
            D.prototype.hide = function() {
                this.restyle("display", "none !important");
                this.isVisible = !1
            };
            D.prototype.show = function() {
                this.restyle("display", "block !important");
                this.isVisible = !0
            };
            D.prototype.insertCssFile = function(a, f) {
                var d = this.documentRef.getElementsByTagName("head")[0],
                    n = this.documentRef.createDocumentFragment(),
                    r = q.createElement(this.documentRef, "style", {
                        type: "text/css"
                    }),
                    c = this.documentRef.createTextNode(f ?
                        a : b.ResetStyle + "" + a);
                n.appendChild(r);
                d.appendChild(n);
                r.styleSheet ? r.styleSheet.cssText = c.nodeValue : r.appendChild(c)
            };
            D.prototype.massRestyle = function(a) {
                for (var b in a) this.restyle(b, a[b])
            };
            var U = function() {
                D.apply(this, arguments)
            };
            U.prototype = new D;
            U.prototype.constructor = U;
            U.prototype.parent = D.prototype;
            U.prototype.buildIframe = function(a) {
                this.documentRef = q.getDocument(this.elementReferrer);
                this.documentRef.open();
                this.documentRef.writeln('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head><body></body></html>');
                this.documentRef.close();
                this.insertCssFile(a);
                this.insertContent();
                this.buildChildViews()
            };
            U.prototype.insertContent = function() {
                this.documentRef.body.innerHTML = this.template
            };
            U.prototype.buildChildViews = function() {
                var a = this;
                this.childViews.forEach(function(b) {
                    a.documentRef.body.appendChild(b.buildView(a.documentRef))
                })
            };
            var ca = function(a) {
                this.template = (this.elementId = (this.formData = a) ? a.id : null) && v[this.elementId] ? v[this.elementId] : "";
                this.elementReferrer = null;
                this.documentRef = document;
                this.attributes = {
                    className: "form"
                };
                this.elementId && (this.attributes.id = this.elementId)
            };
            ca.prototype.buildForm = function() {
                this.formData.additionalFields = [];
                this.insertTranslatedTexts()
            };
            ca.prototype.buildView = function(a) {
                this.documentRef = a || this.documentRef;
                return this.elementReferrer = q.createElement(this.documentRef, "div", this.attributes, null, this.template)
            };
            ca.prototype.addPlaceholderText = function(a, f, d, n, r) {
                r = RegExp("__" + a.toUpperCase() + "_PLACEHOLDER__", "gm");
                a.toUpperCase();
                a = RegExp("__" + a.toUpperCase() + "__",
                    "gm");
                var c = b.languageParser.translate("form", d + "Placeholder");
                oa || f || (f = c);
                c && c !== d + "Placeholder" || (c = f, f = "");
                if (n) return q.escapeTemplateReplacement(n, [{
                    placeholder: r,
                    textReplace: c
                }, {
                    placeholder: a,
                    textReplace: f
                }]);
                this.template = q.escapeTemplateReplacement(this.template, [{
                    placeholder: r,
                    textReplace: c
                }, {
                    placeholder: a,
                    textReplace: f
                }])
            };
            ca.prototype.addPlaceholderHandler = function() {
                var a, f = this;
                oa || (a = this.formData.fields) && a.forEach(function(a) {
                    var n, r, c;
                    "input" !== a.type || a.isEnabled && !a.isEnabled() ||
                        (c = a.getValue ? a.getValue() : "", "input" === a.type && q.isArray(c) ? c.forEach(function(b, c) {
                            n = f.documentRef.getElementById(a.fieldName + c);
                            r = b;
                            q.togglePlaceholderText(n, r);
                            "textarea" !== n.tagName.toLowerCase() || q.trim(n.value) || (n.value = r)
                        }) : a.hiddenIE8 || (n = f.documentRef.getElementById(a.fieldName + "Field"), r = b.languageParser.translate("form", a.languageKey + "Placeholder"), q.togglePlaceholderText(n, r), "textarea" !== n.tagName.toLowerCase() || q.trim(n.value) || (n.value = r)))
                })
            };
            ca.prototype.insertTranslatedTexts = function() {
                var a =
                    this,
                    f = "";
                (this.formData.fields || []).forEach(function(b) {
                    var f;
                    f = b.getValue ? b.getValue() : "";
                    a.addPlaceholderText(b.fieldName, f, b.languageKey, null, b.labelText)
                });
                this.template = q.escapeTemplateReplacement(this.template, [{
                    placeholder: "__TITLE__",
                    textReplace: this.formData.getTitle ? this.formData.getTitle() : b.languageParser.translate("form", this.formData.title)
                }, {
                    placeholder: "__OVERLAY__",
                    textReplace: b.languageParser.translate("overlay", this.formData.overlayMessage)
                }, {
                    placeholder: "__CANCEL_BUTTON__",
                    textReplace: b.languageParser.translate("form",
                        "CancelButton")
                }, {
                    placeholder: "__SAVE_BUTTON__",
                    textReplace: b.languageParser.translate("form", "SaveButton")
                }, {
                    placeholder: "__SEND_BUTTON__",
                    textReplace: b.languageParser.translate("form", "SendButton")
                }, {
                    placeholder: "__SUBMIT_BUTTON__",
                    textReplace: b.languageParser.translate("form", "SubmitButton")
                }, {
                    placeholder: "__START_CHAT_BUTTON__",
                    textReplace: b.languageParser.translate("form", "StartChatButton")
                }, {
                    placeholder: "__END_CHAT_BUTTON__",
                    textReplace: b.languageParser.translate("rollover", "end")
                }, {
                    placeholder: "__SUBMITTING_INDICATOR__",
                    textReplace: b.languageParser.translate("form", "SubmittingProcess")
                }, {
                    placeholder: "__ENDING_INDICATOR__",
                    textReplace: b.languageParser.translate("form", "EndingProcess")
                }, {
                    placeholder: "__SENDING_INDICATOR__",
                    textReplace: b.languageParser.translate("form", "SendingProcess")
                }, {
                    placeholder: "__SAVING_INDICATOR__",
                    textReplace: b.languageParser.translate("form", "SavingProcess")
                }, {
                    placeholder: "__EMAIL_TRANSCRIPT_TO__",
                    textReplace: b.languageParser.translate("form", "EmailTranscriptTo")
                }, {
                    placeholder: /__STATUS__/gm,
                    textReplace: b.languageParser.translate("form", "saving")
                }, {
                    placeholder: /__IE6__/gm,
                    textReplace: X ? "-ie6" : ""
                }, {
                    placeholder: /__SAFARI__/gm,
                    textReplace: "safari" === G ? "safari-fix" : ""
                }]);
                this.template = "safari" === G || "chrome" === G || "firefox" === G || "mozilla" === G || M && 8 <= J ? this.template.replace("__NON_MODERN__", "") : this.template.replace("__NON_MODERN__", "other-fix");
                B && (f = q.escapeTemplateReplacement(v["close-form-button"], [{
                    placeholder: "__CLOSE_BUTTON__",
                    textReplace: b.languageParser.translate("form", "CloseButton")
                }]));
                this.template = q.escapeTemplateReplacement(this.template, [{
                    placeholder: "__CLOSE_BUTTON_CONTAINER__",
                    textReplace: f
                }])
            };
            var Z = function(a, b) {
                ca.apply(this, [a]);
                this.formName = b
            };
            Z.prototype = new ca;
            Z.prototype.constructor = Z;
            Z.prototype.parent = ca.prototype;
            Z.prototype.buildForm = function() {
                var a, f = [];
                a = "preChatForm" == this.formName ? "prechat" : "offline";
                this.formData.additionalFields = [];
                this.insertTranslatedTexts();
                if (null === this.formData.dynamicFields) {
                    for (var d = 0, n = h[a + "Options"].fields.length; d < n; d++) {
                        var r = {},
                            c = h[a + "Options"].fields[d];
                        c.id = a + d;
                        r.label = c.label;
                        r.instantValidation = !1;
                        r.isRequired = c.isRequired;
                        r.fieldName = a + d;
                        r.fieldType = c.type;
                        r.validation = "isValidString";
                        "name" === c.type ? (r.valueMaxLength = 40, r.getValue = b.visitorHandler.getNameValue, r.languageKey = "Name") : "email" === c.type ? (r.valueMaxLength = 150, r.getValue = b.visitorHandler.getEmailValue, r.validation = "isValidEmail", r.languageKey = "Email") : "message" === c.type || "textArea" === c.type ? r.valueMaxLength = 500 : "inputText" === c.type ? r.valueMaxLength = 150 :
                            "department" === c.type ? r.getValue = b.sessionHandler.getDeparmentOptions : "choice" === c.type || "option" === c.type ? (r.type = "options", r.selections = c.selections) : "phone" === c.type && (r.valueMaxLength = 20, r.validation = "isValidPhone", r.languageKey = "Phone");
                        r.isRequired && !r.languageKey && (r.languageKey = "Required");
                        f.push(r)
                    }
                    this.formData.dynamicFields = f
                }
                this.generateDynamicFields()
            };
            Z.prototype.generateDynamicFields = function() {
                for (var a = "", b = RegExp("__LABEL__", "gm"), d = RegExp("__ID__", "gm"), n = RegExp("__MAXLENGTH__",
                        "gm"), r = 0, c = this.formData.dynamicFields.length; r < c; r++) {
                    var e, h = "",
                        g = this.formData.dynamicFields[r];
                    if ("name" === g.fieldType || "email" === g.fieldType || "phone" === g.fieldType || "inputText" === g.fieldType) e = v.inputTextFieldType, e = "email" === g.fieldType ? e.replace("__INPUT_TYPE__", "email") : e.replace("__INPUT_TYPE__", "text");
                    else if ("message" === g.fieldType || "textArea" === g.fieldType) e = v.textAreaFieldType;
                    else if ("department" === g.fieldType) e = v.departmentSelection;
                    else if ("choice" === g.fieldType || "option" === g.fieldType) e =
                        v.selectionsType, h = "choice" === g.fieldType ? this.generateCheckboxOptions(g.fieldName, g.selections) : this.generateRadioOptions(g.fieldName, g.selections);
                    e && (e = e.replace(b, g.label), e = e.replace(d, g.fieldName), e = e.replace(n, g.valueMaxLength), e = g.isRequired ? e.replace(/__REQUIRED__/gm, "*") : e.replace(/__REQUIRED__/gm, ""), g.getValue && ("department" === g.fieldType ? (h = this.generateDropDownOptions(g.getValue(), g.isRequired)) || (e = "") : h = g.getValue()), e = e.replace("__VALUE__", h), a += e)
                }
                this.template = this.template.replace("__FIELDS__",
                    a)
            };
            Z.prototype.generateDropDownOptions = function(a, b) {
                var d = "";
                if (0 === a.length) return !1;
                b || (d += '<option value="0"></option>');
                for (var n = 0, r = a.length; n < r; n++) d += '<option value="' + a[n].value + '"' + (a[n].selected ? 'selected="selected"' : "") + ">" + a[n].text + "</option>";
                return d
            };
            Z.prototype.generateRadioOptions = function(a, b) {
                for (var d = "", n = v.radioSelectionType, r = 0, c = b.length; r < c; r++) d += n.replace(/__ID__/gm, a + "radio" + r).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[r]);
                return d
            };
            Z.prototype.generateCheckboxOptions =
                function(a, b) {
                    for (var d = "", n = v.checkboxSelectionType, r = 0, c = b.length; r < c; r++) d += n.replace(/__ID__/gm, a + "check" + r).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[r]);
                    return d
                };
            Z.prototype.updateName = function(a) {
                for (var f, d = 0, n = this.formData.dynamicFields.length; d < n; d++) {
                    var c = this.formData.dynamicFields[d];
                    if ("name" === c.fieldType) {
                        f = b.viewHandler.chatContainer.getElementById(c.fieldName + "Field");
                        break
                    }
                }
                f && (f.value = a)
            };
            Z.prototype.updateEmail = function(a) {
                for (var f, d = 0, n = this.formData.dynamicFields.length; d <
                    n; d++) {
                    var c = this.formData.dynamicFields[d];
                    if ("email" === c.fieldType) {
                        f = b.viewHandler.chatContainer.getElementById(c.fieldName + "Field");
                        break
                    }
                }
                f && (f.value = a)
            };
            Z.prototype.addPlaceholderHandler = function() {
                var a;
                if (!oa)
                    for (var b = 0, d = this.formData.dynamicFields.length; b < d; b++) a = this.formData.dynamicFields[b], "department" !== a.fieldType && ("choice" !== a.fieldType && "option" !== a.fieldType) && (this.formData.dynamicFields[b].placeholderText = (a.isRequired ? "* " : "") + a.label, a = this.documentRef.getElementById(a.fieldName +
                        "Field"), q.togglePlaceholderText(a, this.formData.dynamicFields[b].placeholderText), q.trim(a.value) || (a.value = this.formData.dynamicFields[b].placeholderText))
            };
            var la = function(a) {
                var f = this;
                this.container = a;
                this.unansweredMessages = 0;
                this.popUpHasFocus = !1;
                b.eventEmitter.on("visitorPopupFocus", function(a) {
                    f.isPopupFocused = a;
                    f.hide()
                })
            };
            la.prototype.initIndicator = function() {
                var a = W.getSessionInformation()[1];
                if (a = a ? parseInt(a, 10) : 0) this.unansweredMessages = a - 1, this.show()
            };
            la.prototype.show = function() {
                var a,
                    f, d;
                "max" === u.chatWindowState() && !h.isPopup || this.isPopupFocused && !b.viewHandler.popoutWin.closed || (99 > this.unansweredMessages && this.unansweredMessages++, W.storeSessionInformation(!0), h.isPopup && this.unansweredMessages ? this.updatePopoutTitle() : this.container && this.container.elementReferrer && (a = this.container.getElementById("tawkchat-chat-indicator"), f = this.container.getElementById("tawkchat-chat-indicator-text"), d = b.viewHandler.iframeContainer.getElementById("tawkchat-minified-iframe-element"), f &&
                    (B || !h.isDesktopRectangle() ? f.innerHTML = this.unansweredMessages : f.innerHTML = b.languageParser.translate("chat", "newMessage", {
                        num: this.unansweredMessages
                    })), a && "block" !== a.style.display && (a.style.display = "block", a.style.visibility = "hidden", b.viewHandler.handleIndicatorToggle(!0), b.viewHandler.showWidget(), this.container.show(), d && (b.viewHandler.chatContainer.hide(), d.style.display = "block"))))
            };
            la.prototype.updatePopoutTitle = function() {
                var a = "",
                    a = u.pageStatus(),
                    b = "";
                B || ((a = m.getShortMessage(a)) || (a =
                    ""), 0 < this.unansweredMessages && (b = "(" + this.unansweredMessages + ")"), document.title = b + a + (P.pageName() ? " - " + q.rawDecode(P.pageName()) : ""))
            };
            la.prototype.hide = function() {
                var a, f;
                this.unansweredMessages = 0;
                W.storeSessionInformation(!0);
                h.isPopup ? this.updatePopoutTitle() : this.container && this.container.elementReferrer && (a = this.container.getElementById("tawkchat-chat-indicator"), f = this.container.getElementById("tawkchat-chat-indicator-text"), a && "block" === a.style.display && (a.style.display = "none", b.viewHandler.handleIndicatorToggle(),
                    B || this.container.hide()), f && (f.innerHTML = ""))
            };
            var H = TawkClass.extend({
                init: function() {
                    this.chatContainer = null;
                    this.removeAgentNotification = !1;
                    this.lastRadioButton = null;
                    this.clickEvent = "click";
                    this.isPopupFocused = !1;
                    this.indicator = null;
                    this.newMessageNotSeen = !1;
                    this.notSeenMessages = [];
                    this.lastMessageTime = this.lastFocusedElement = null;
                    this.unseenMessageNumber = 0;
                    this.retryUploadList = this.removeDividerTimeout = null;
                    this.tawktoLinkName = q.getRandomName();
                    this.bottomContainerName = q.getRandomName()
                },
                show: function() {},
                appendAgent: function() {},
                removeAgent: function() {},
                clearAgentFooter: function() {},
                handleAcknowledgment: function(a) {
                    var f, d, n, c, e, h, g, k, m = this.chatContainer;
                    if (m && a.messageId && (c = m.getElementById(a.messageId))) {
                        n = c.parentNode;
                        d = 0;
                        for (var p = c.childNodes.length; d < p; d++) {
                            var s = c.childNodes[d]; - 1 !== s.className.indexOf("messageBody") && (f = q.getElementsByClassName(s, "messageWrapper"), k = q.getElementsByClassName(s, "messageStatusContainer"))
                        }
                        f && (f.length && k && k.length) && (k = k[0], f = f[0], a.error ? k && (n = v["chat-resend-link"].replace("__MESSAGE_ID__",
                            a.messageId), f.className = "messageWrapper error", k.className = "messageStatusContainer errorInMessage", k.innerHTML = n, e = q.rawDecode(f.childNodes[0].textContent || f.childNodes[0].innerText), g = b.eventHandler.listen(k, b.viewHandler.clickEvent, function(d) {
                            b.eventHandler.cancelEvent(d);
                            b.chatHandler.sendMessageToServer(e, a.messageId);
                            if (h = m.getElementById("errorFor" + a.messageId)) f.className = "messageWrapper pending";
                            k.className = "messageStatusContainer pending";
                            k.childNodes[0].innerHTML = '<span class="messageStatus"></span>';
                            b.eventHandler.removeEventHandler(f, "click", g)
                        }, "resend" + a.messageId + "click")) : (d = b.chatHandler.messages[a.order], b.viewHandler.addWaitTime(), n.removeChild(c), b.chatHandler.prepareMessage(d, !0, !1, !0)))
                    }
                },
                handleEndChat: function() {},
                clearAgents: function() {},
                handleRestartChat: function() {},
                appendMessage: function(a, f) {
                    var d, n, r, e = a.reDisplay ? a.reDisplay : !1;
                    d = !1;
                    var g = null,
                        k = a.message,
                        m = a.time,
                        p = a.senderType,
                        s = this.chatContainer.documentRef,
                        t = this.ifScrollbarDown(),
                        v = s.getElementById("chatWrapper"),
                        y = "messageId-" +
                        (new Date).getTime().toString() + Object.keys(b.chatHandler.messages).length,
                        w = X ? "messageContainer-ie6" : "messageContainer clearfix",
                        m = q.parseChatTime(m);
                    1 >= A.chatOrder && this.hideEmbeddedGreetings();
                    !u.prechatFormSubmitted && h.showPreChatForm && (u.prechatFormSubmitted = !0, "preChatForm" === b.formHandler.currentForm && b.formHandler.closeForm());
                    "a" === p ? (d = this.parseSurvey(k, y), k = d.message, d = d.isSurvey, b.chatHandler.handleAgentStoppedTyping(a.data.rsc)) : b.chatHandler.visitorHasMessaged || "s" === p || (b.chatHandler.visitorHasMessaged = !0);
                    a.data && a.data.file && (k = this.parseUploadedFile(a.data.file));
                    "c" === a.type && (r = q.escapeTemplateReplacement(f["chat-message-row"], [{
                        placeholder: "__MESSAGE_STATUS_ROW__",
                        textReplace: f["chat-message-status-row"]
                    }, {
                        placeholder: /__MESSAGE_ID__/gm,
                        textReplace: y
                    }, {
                        placeholder: "__MESSAGE__",
                        textReplace: k
                    }, {
                        placeholder: "__PENDING__",
                        textReplace: a.isPending ? "pending" : ""
                    }]), w = "v" === p ? w + " visitorChatContainer " : w + " agentChatContainer ");
                    g = new D(y, null, {
                        className: w
                    }, null, s);
                    this.lastMessageTime = a.isPending ?
                        this.lastMessageTime : m;
                    "c" === a.type ? (b.chatHandler.lastMessageOwner = "s" === p ? "server" : a.isPending ? b.chatHandler.lastMessageOwner : a.ownerId, "a" === p || "s" === p ? ("a" === p && (b.chatHandler.agentHasMessaged = !0, this.removeWaitTime()), n = q.escapeTemplateReplacement(f["chat-message-owner-agent"], [{
                            placeholder: "__NAME__",
                            textReplace: a.name
                        }])) : n = q.isGeneratedName(F.name()) && f["chat-message-owner-visitor"] ? q.escapeTemplateReplacement(f["chat-message-owner-visitor"], [{
                            placeholder: "__NAME__",
                            textReplace: a.name
                        }]) :
                        "", n = q.escapeTemplateReplacement(f["chat-message-container"], [{
                            placeholder: "__OWNER_TPL__",
                            textReplace: n
                        }, {
                            placeholder: "__CONTENT__",
                            textReplace: r
                        }]), "s" === p && (n = n.replace("ownerNameContainer", "ownerNameContainer trigger"), n = n.replace("messageBody", "messageBody trigger"))) : "n" === a.type && (b.chatHandler.lastMessageOwner = "notif", n = f["chat-notification-container"], n = q.escapeTemplateReplacement(f["chat-notification-container"], [{
                            placeholder: "__MESSAGE_ID__",
                            textReplace: y
                        }, {
                            placeholder: "__MESSAGE__",
                            textReplace: k
                        },
                        {
                            placeholder: "__TIME__",
                            textReplace: m
                        }
                    ]));
                    g.template = n;
                    g.buildView();
                    try {
                        v.insertBefore(g.elementReferrer, s.getElementById("agentTypingContainer")), b.eventHandler.listen(g.elementReferrer, "mouseover", function() {
                            g.elementReferrer.className = w + " show-time"
                        }, y + "mouseover"), b.eventHandler.listen(g.elementReferrer, "mouseout", function() {
                            g.elementReferrer.className = w
                        }, y + "mouseout")
                    } catch (x) {
                        c.handleError("Chat wrapper is null to append message : " + $_TAWK_JSON.stringify(a), x.fileName, x.lineNumber, x.stack)
                    }
                    a.dontPlaySound ||
                        ("v" === p || a.isPending) || this.popoutWin && !this.popoutWin.closed || b.audioPlayer.play("chat_sound");
                    t && this.scrollToBottom();
                    !e && ("v" !== p && !t) && (this.setDivider(y, f["chat-divider"], g), this.unseenMessageNumber && (r = this.chatContainer.documentRef.getElementById("newMessagesBar"))) && (this.chatContainer.getElementById("notificationMessageText").innerHTML = b.languageParser.translate("chat", "newMessage", {
                        num: this.unseenMessageNumber
                    }));
                    t && this.scrollToBottom();
                    d && this.addSurveyHandlers(y);
                    return y
                },
                parseSurvey: function(a,
                    b) {
                    var d, n, c, e, h, g, k = a.match(q.regSurvey),
                        m = "";
                    if (!k) return {
                        message: a,
                        isSurvey: !1
                    };
                    e = a.match(q.regSurveyQuestion);
                    h = "survey-" + (new Date).getTime();
                    d = 0;
                    for (n = k.length; d < n; d++) c = k[d].replace(q.regOption, ""), c = c.replace(q.regBr, ""), c = q.trim(c), g = h + d, m += q.escapeTemplateReplacement(v["survey-option"], [{
                        placeholder: /__RADIO_ID__/gm,
                        textReplace: g
                    }, {
                        placeholder: "__RADIO_NAME__",
                        textReplace: b
                    }, {
                        placeholder: /__RADIO_VALUE__/gm,
                        textReplace: c
                    }]);
                    return {
                        message: q.escapeTemplateReplacement(v["tawk-survey-wrapper"], [{
                            placeholder: "__QUESTION__",
                            textReplace: e[0].replace(q.regOption, "")
                        }, {
                            placeholder: "__OPTIONS__",
                            textReplace: m
                        }]),
                        isSurvey: !0
                    }
                },
                updateViewByStatus: function(a) {
                    b.formHandler.closeForm();
                    if (h.isPopup) {
                        var f = m.getShortMessage(a);
                        document.title = f ? k.profileName + " - " + f : k.profileName
                    }
                    "online" === a || "away" === a ? (h.showPreChatForm && !u.prechatFormSubmitted && b.formHandler.openForm("preChatForm"), this.showWidget(), s && s.toggleBubble()) : "offline" === a && (h.hideWidgetOnOffline ? this.hideWidget() : (b.formHandler.openForm("offlineForm"),
                        this.showWidget()), s && s.toggleBubble())
                }
            });
            H.prototype.resetView = function() {};
            H.prototype.styleAgentBar = function() {};
            H.prototype.expandAgentList = function() {};
            H.prototype.hideWidget = function() {};
            H.prototype.showWidget = function() {};
            H.prototype.toggleWidget = function() {
                B && b.viewHandler.maximize()
            };
            H.prototype.popoutWidget = function() {
                B && b.viewHandler.popup()
            };
            H.prototype.handleIndicatorToggle = function() {};
            H.prototype.begin = function() {};
            H.prototype.getViewportDimensions = function(a) {
                var b, d = {};
                a ? (a = e, b =
                    document) : (a = p.container.elementReferrer, b = p.container.documentRef);
                if ("undefined" !== typeof a.innerWidth) return d.height = a.innerHeight, d.width = a.innerWidth, d;
                if ("undefined" !== typeof b.documentElement && "undefined" !== typeof b.documentElement.clientWidth && 0 !== b.documentElement.clientWidth) return d.height = b.documentElement.clientHeight, d.width = b.documentElement.clientWidth, d;
                d.height = b.getElementsByTagName("body")[0].clientHeight;
                d.width = b.getElementsByTagName("body")[0].clientWidth;
                return d
            };
            H.prototype.getActualViewportDimensions =
                function() {
                    var a = this.getViewportDimensions(!0);
                    return {
                        width: this.isVerticalScrollbar() ? a.width - this.getScrollerWidth() : a.width,
                        height: this.isHorizontalScrollbar() ? a.height - this.getScrollerWidth() : a.height
                    }
                };
            H.prototype.isVerticalScrollbar = function() {
                return this.getViewportDimensions(!0).height < document.body.scrollHeight
            };
            H.prototype.isHorizontalScrollbar = function() {
                var a = this.getViewportDimensions(!0).width;
                return document.documentElement && a < document.documentElement.scrollWidth || a < document.body.scrollWidth
            };
            H.prototype.getScrollerWidth = function() {
                var a = null,
                    b = null,
                    d = 0,
                    a = 0,
                    a = document.createElement("div");
                a.style.cssText = "position: absolute; top: -10000px; left: -10000px; width: 100px; height: 50px; overflow: hidden";
                b = document.createElement("div");
                b.style.cssText = "width: 100%; height: 200px";
                a.appendChild(b);
                document.body.appendChild(a);
                d = b.offsetWidth;
                a.style.overflow = "auto";
                a = b.offsetWidth;
                document.body.removeChild(document.body.lastChild);
                return d - a
            };
            H.prototype.addSurveyHandlers = function(a) {
                var f,
                    d = this;
                this.chatContainer && (f = this.chatContainer.getElementById(a), f = q.getElementsByTagName(f, "input"), f.forEach(function(f, c) {
                    f.id && d.chatContainer.attachUserEventListener("click", function(a) {
                        d.lastRadioButton !== f.id && (d.lastRadioButton = f.id, b.chatHandler.sendMessage(f.value))
                    }, f.id, "survey" + a + c + "click")
                }))
            };
            H.prototype.ifScrollbarDown = function() {
                var a, f, d;
                if (!this.chatContainer || !this.chatContainer.elementReferrer) return !1;
                a = this.chatContainer.getElementById("chatContainer");
                d = this.chatContainer.getElementById("chatPanel");
                if (a && d) {
                    if (b.formHandler.currentForm) return d.style.display = "block", f = a.offsetHeight + 10, a = 30 > a.scrollHeight - (a.scrollTop + f), d.style.display = "none", a;
                    f = a.offsetHeight + 10;
                    return 30 > a.scrollHeight - (a.scrollTop + f)
                }
            };
            H.prototype.scrollToBottom = function() {
                if (this.chatContainer && this.chatContainer.elementReferrer) {
                    var a = this.chatContainer.getElementById("chatContainer"),
                        b = this.chatContainer.getElementById("chatPanel");
                    if (a) {
                        var d = a.style.display,
                            n = b.style.display;
                        "none" === d && (a.style.display = "block");
                        "none" ===
                        n && (b.style.display = "block");
                        this.chatContainer.getElementById("chatContainer").scrollTop = 1E8;
                        "none" === d && (a.style.display = d);
                        "none" === n && (b.style.display = n)
                    }
                }
            };
            H.prototype.isChatScrollbar = function() {
                var a;
                if (this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("chatContainer"))) return a.scrollHeight > this.getViewportDimensions(h.isPopup).height - 139
            };
            H.prototype.addWaitTime = function() {
                var a, f, d, n;
                n = B ? v.estimatedWaitTime : v["wait-time-container"];
                var c = this.chatContainer;
                b.chatHandler.agentHasMessaged || (!h.showWaitTime || c.getElementById("waitTimeContainer")) || (a = c.getElementById("chatWrapper"), f = Math.ceil(u.waitTime / 6E4), f = b.languageParser.translate("chat", "messageQueuedText", {
                    t: f,
                    strongStart: "<b>",
                    strongEnd: "</b>"
                }), d = X ? "<center><span>" + b.languageParser.translate("chat", "messageQueuedTitile") + "</span></center>" : "<span>" + b.languageParser.translate("chat", "messageQueuedTitile") + "</span>", n = q.escapeTemplateReplacement(n, [{
                    placeholder: "__TITLE__",
                    textReplace: d
                }, {
                    placeholder: "__MESSAGE__",
                    textReplace: f
                }]), f = new D("waitTimeContainer", null, null, null, c.documentRef), f.template = n, f.buildView(), (n = c.getElementById("departmentOfflineNotification")) ? a.insertBefore(f.elementReferrer, n.nextSibling) : a.insertBefore(f.elementReferrer, a.firstChild), this.waitTimeUpdater(!0), "explorer" === G && 9 > J && (c.documentRef.body.className = c.documentRef.body.className))
            };
            H.prototype.removeWaitTime = function() {
                var a;
                this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("waitTimeContainer")) &&
                    (a.parentNode.removeChild(a), "explorer" === G && 9 > J && (p.container.documentRef.body.className = p.container.documentRef.body.className))
            };
            H.prototype.waitTimeUpdater = function(a) {
                var b, d, n = this;
                if (this.chatContainer && this.chatContainer.elementReferrer && (d = this.chatContainer.getElementById("waitTime")) && !(6E4 >= u.waitTime)) {
                    b = u.waitTime % 6E4 || 6E4;
                    if (a) return setTimeout(function() {
                        n.waitTimeUpdater()
                    }, b);
                    u.waitTime -= b;
                    d.innerHTML = Math.ceil(u.waitTime / 6E4);
                    setTimeout(function() {
                        n.waitTimeUpdater()
                    }, 6E4)
                }
            };
            H.prototype.appendAgentIsTypingElement =
                function(a) {
                    var f, d, n, c, e = this.ifScrollbarDown(),
                        h = A.agentProfiles[a];
                    this.chatContainer && (n = (f = h && h.pi ? u.agentImgUrl + "/" + h.pi : "default") ? "url('" + f + "')" : "transparent", c = "explorer" === G && 9 > J ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + f + "',sizingMethod='scale');" : "", "transparent" !== n && (c += "background-position:0 0;background-size:28px 28px"), B ? (d = b.languageParser.translate("chat", "mobileAgentIsTyping", h), f = v["mobile-agent-typing"]) : (h.strongStart = "<b>", h.strongEnd = "</b>", d = b.languageParser.translate("chat",
                        "agentIsTyping", h), f = v["agent-typing"]), f = q.escapeTemplateReplacement(f, [{
                        placeholder: "__MESSAGE_ID__",
                        textReplace: a
                    }, {
                        placeholder: "__MESSAGE__",
                        textReplace: d
                    }, {
                        placeholder: /__NAME__/gm,
                        textReplace: h.n
                    }, {
                        placeholder: "__IMAGE_URL__",
                        textReplace: n
                    }, {
                        placeholder: "__IE_IMAGE_SCALE__",
                        textReplace: c
                    }]), this.chatContainer.getElementById("agentTypingContainer").innerHTML += f, e && this.scrollToBottom())
                };
            H.prototype.removeAgentTypingElement = function(a) {
                this.chatContainer && (a = this.chatContainer.getElementById("agentTyping-" +
                    a)) && a.parentNode.removeChild(a)
            };
            H.prototype.changeRating = function(a) {
                var f, d;
                this.chatContainer && (f = this.chatContainer.getElementById("ratePositive"), d = this.chatContainer.getElementById("rateNegative"), f.className = "", d.className = "", 0 > a ? (d.className = "selected", a = b.languageParser.translate("chat", "dislike")) : 0 < a ? (f.className = "selected", a = b.languageParser.translate("chat", "like")) : a = b.languageParser.translate("chat", "remove_rate"), b.viewHandler.appendMessage({
                    message: a,
                    type: "n",
                    time: new Date,
                    senderType: "v",
                    ownerId: F.visitorId
                }))
            };
            H.prototype.printChatTranscript = function() {
                var a, f = b.chatHandler.prepareMessagesForPrinting(),
                    f = '<!DOCTYPE html><html lang="' + h.locale + '"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body>' + f + '<script type="text/javascript">var printSuccess = false; try{if (document.execCommand) {printSuccess = document.execCommand("print", false, null);} if(!printSuccess){window.print();}}catch(e){window.print();}\x3c/script></body></html>';
                a = document.createElement("iframe");
                a.style.cssText = "position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;";
                document.body.appendChild(a);
                if (a = q.getDocument(a)) a.open(), a.writeln(f), a.close()
            };
            H.prototype.notifiyDepartmentIsNotOnline = function(a, f) {
                var d, n, c = this.chatContainer;
                c && (d = c.getElementById("chatWrapper")) && (n = q.escapeTemplateReplacement(v.departmentOfflineNotification, [{
                    placeholder: "__TITLE__",
                    textReplace: X ? "<span>" + b.languageParser.translate("chat", "notificationTitle") + "</span>" : "<center><span>" + b.languageParser.translate("chat",
                        "notificationTitle") + "</span></center>"
                }, {
                    placeholder: "__MESSAGE__",
                    textReplace: b.languageParser.translate("chat", "offline" === f ? "departmentIsOffline" : "departmentIsAway", {
                        departmentName: a,
                        strongStart: "<b>",
                        strongEnd: "</b>"
                    })
                }]), elem = q.createElement(c.documentRef, "div", {
                    id: "departmentOfflineNotification",
                    className: "messageContainer"
                }, null, n), d.insertBefore(elem, d.firstChild))
            };
            H.prototype.setDivider = function(a, f, d) {
                var n, c, e, g, k = this;
                this.chatContainer.documentRef.getElementById("newMessageDivider") ?
                    0 < this.unseenMessageNumber && this.unseenMessageNumber++ : (c = this.chatContainer.documentRef.getElementById(a), g = this.chatContainer.documentRef.getElementById("chatWrapper"), e = new D("newMessageDivider"), this.newMessageNotSeen || !b.formHandler.currentForm && (h.isEmbedded || h.isPopup || "min" !== u.chatWindowState()) && q.chatElementInView(c) || (this.newMessageNotSeen = !0, n = this.chatContainer.documentRef.getElementById("newMessagesBar"), this.unseenMessageNumber = 1, n && (n.className = "visible", this.chatContainer.getElementById("newMessagesNotificationLink").title =
                        b.languageParser.translate("chat", "newMessages"), b.eventHandler.listen(n, this.clickEvent, function() {
                            k.unseenMessageNumber = 0;
                            k.scrollToSeeMessage(a)
                        }, "newmessagedivider"))), !b.formHandler.currentForm && (h.isEmbedded || h.isPopup || "min" !== u.chatWindowState()) && q.chatElementInView(c) || this.notSeenMessages.push(c), e.template = q.escapeTemplateReplacement(f, [{
                        placeholder: /__NEW_MESSAGES__/gm,
                        textReplace: b.languageParser.translate("chat", "newMessages").toUpperCase()
                    }]), e.buildView(), g.insertBefore(e.elementReferrer,
                        d.elementReferrer))
            };
            H.prototype.removeDivider = function() {
                var a, b = this;
                clearTimeout(this.removeDividerTimeout);
                this.removeDividerTimeout = setTimeout(function() {
                    (a = b.chatContainer.documentRef.getElementById("newMessageDivider")) && a.parentNode.removeChild(a)
                }, 2E3)
            };
            H.prototype.scrollToSeeMessage = function(a) {
                var b = this.chatContainer.documentRef.getElementById("chatContainer");
                (a = this.chatContainer.documentRef.getElementById(a)) && b && (b.scrollTop = a.offsetTop - b.offsetHeight + 40)
            };
            H.prototype.checkUnseenMessages =
                function() {
                    var a;
                    if (!this.newMessageNotSeen || !this.notSeenMessages.length) return !1;
                    for (var b = 0; b < this.notSeenMessages.length; b++) q.chatElementInView(this.notSeenMessages[b]) && (this.notSeenMessages.splice(b, 1), b--);
                    if (!this.notSeenMessages.length || B && this.ifScrollbarDown()) this.newMessageNotSeen = !1, (a = this.chatContainer.documentRef.getElementById("newMessagesBar")) && setTimeout(function() {
                        a.className = ""
                    }, 250), this.removeDivider()
                };
            H.prototype.parseUploadedFile = function(a) {
                var f = "https://tawk.link/" +
                    a.name,
                    d = this,
                    n = v["file-upload"];
                if (-1 !== ["jpeg", "png", "gif"].indexOf(a.type) && 2E6 >= a.size) {
                    var c = new Image;
                    c.onload = function() {
                        var b = q.createElement(d.chatContainer.documentRef, "a", {
                                href: f,
                                target: "_blank"
                            }),
                            n = d.chatContainer.getElementById("placeholder-" + a.name),
                            e = d.ifScrollbarDown();
                        n && (b.appendChild(c), b.className = "clearfix", n.parentNode.insertBefore(b, n), n.parentNode.removeChild(n), e && d.scrollToBottom())
                    };
                    c.setAttribute("src", f);
                    c.setAttribute("class", "uploaded-image");
                    n = q.escapeTemplateReplacement(n, [{
                        placeholder: "__FILE_DISPLAY__",
                        textReplace: '<div class="image-loader" id="placeholder-' + a.name + '"></div>'
                    }]);
                    showDetails = !1
                } else n = -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(a.mimeType) ? q.escapeTemplateReplacement(n, [{
                    placeholder: "__FILE_DISPLAY__",
                    textReplace: '<video width="auto" height="auto" controls style="display: block; max-width: 420px; width: 100%;"><source src="' + f + '" type="' + a.mimeType + '"></source></video>'
                }]) : -1 !== ["audio/mp3", "audio/ogg"].indexOf(a.mimeType) ? q.escapeTemplateReplacement(n, [{
                    placeholder: "__FILE_DISPLAY__",
                    textReplace: '<audio controls style="display: block; max-width : 220px;"><source src="' + f + '" type="' + a.mimeType + '"></source></audio>'
                }]) : n.replace("__FILE_DISPLAY__", "");
                return n = q.escapeTemplateReplacement(n, [{
                        placeholder: "__FILE_NAME__",
                        textReplace: a.fileName
                    }, {
                        placeholder: "__DOWNLOAD_URL__",
                        textReplace: f
                    }, {
                        placeholder: "__DOWNLOAD_TEXT__",
                        textReplace: b.languageParser.translate("chat", "downloadFile")
                    }, {
                        placeholder: "__FILE_SIZE__",
                        textReplace: q.formatFileSize(a.size)
                    },
                    {
                        placeholder: "__FILE_TYPE__",
                        textReplace: a.type
                    }
                ])
            };
            H.prototype.startUpload = function(a, f, d) {
                var n, c, e, h = this,
                    g = v.fileUploadProgress,
                    k = this.ifScrollbarDown();
                d = d || function() {};
                e = this.chatContainer.getElementById("fileInput");
                n = f ? e.value.replace(/^.*\\/, "") : a.name || a.fileName;
                c = q.getElementsByClassName(h.chatContainer.elementReferrer, "upload-error");
                if (c.length)
                    for (var m = 0; m < c.length; m++) c[m].parentNode.removeChild(c[m]);
                b.fileUploadHandler.getUploadHandler(function(c) {
                    var r;
                    c.handle ? (r = c.handle, g =
                        q.escapeTemplateReplacement(g, [{
                            placeholder: "__HANDLE__",
                            textReplace: r
                        }, {
                            placeholder: "__FILE_NAME__",
                            textReplace: q.rawEncode(n)
                        }]), h.chatContainer.getElementById("chatWrapper").innerHTML += g, 1 >= A.chatOrder && (B ? b.viewHandler.hideEmbeddedGreetings() : h.hideEmbeddedGreetings()), k && h.scrollToBottom(), b.fileUploadHandler.uploadFile(r, a, n, f, function(b, c) {
                            b.success ? d() : (h.handleUploadError(a, n, r, f, c), e.value = "")
                        })) : (h.handleUploadError(a, n, r, f), e.value = "")
                })
            };
            H.prototype.handleUploadError = function(a, f, d, n,
                c) {
                var e = this.ifScrollbarDown(),
                    h = this,
                    g = document.createElement("a"),
                    k = document.createElement("div");
                c = c || "generalUploadError";
                f = "<span>!</span> " + b.languageParser.translate("chat", c, {
                    fileName: q.rawEncode(f)
                });
                k.setAttribute("class", "upload-error");
                k.innerHTML = f;
                if (a || n) {
                    if (d) {
                        f = this.chatContainer.getElementById("upload-" + d);
                        if (!f) return;
                        f.parentNode.removeChild(f);
                        if (a && !(n || c && "generalUploadError" !== c)) {
                            g.innerHTML = b.languageParser.translate("chat", "retry");
                            g.setAttribute("href", "javascript:void(0);");
                            g.setAttribute("id", "retry-" + d);
                            k.appendChild(g);
                            var m;
                            m = b.eventHandler.listen(g, this.clickEvent, function() {
                                b.eventHandler.removeEventHandler(g, this.clickEvent, m);
                                k.parentNode.removeChild(k);
                                h.startUpload(a)
                            }, "retry-" + d)
                        }
                    }
                    this.chatContainer.getElementById("chatContainer").appendChild(k);
                    e && this.scrollToBottom()
                }
            };
            H.prototype.updateFileProgress = function(a) {
                var b = this.chatContainer.getElementById("upload-" + a.handle);
                b && (b.getElementsByClassName("progress-bar")[0].style.width = a.progress + "%")
            };
            H.prototype.fileUploaded =
                function(a) {
                    (a = this.chatContainer.getElementById("upload-" + a)) && a.parentNode.removeChild(a)
                };
            H.prototype.retryUploadFile = function(a) {
                var b = this,
                    d, n;
                this.retryUploadList[a] && this.startUpload(this.retryUploadList[a], null, function() {
                    d = b.chatContainer.getElementById(a);
                    n = d.parentNode;
                    n.removeChild(d);
                    n.parentNode.removeChild(n);
                    delete b.retryUploadList[a];
                    Object.keys(b.retryUploadList).length || b.chatContainer.getElementById("maxFileNotificationContainer").classList.add("hidden");
                    d = null
                })
            };
            H.prototype.checkUploadFileWarning =
                function(a, f) {
                    var d = this.chatContainer.getElementById("maxFileNotificationContainer"),
                        n = this.chatContainer.getElementById("maxSizeNotificationContainer"),
                        c = this.chatContainer.getElementById("maxFileSizeList"),
                        e = this.chatContainer.getElementById("maxFileNumberList"),
                        h = this,
                        g;
                    if (f.length) {
                        g = "<ul>";
                        this.retryUploadList = {};
                        for (var k = 0; k < f.length; k++) this.retryUploadList["retry_upload_" + k] = f[k], g += "<li>" + f[k].name + ' <a id="retry_upload_' + k + '" class="actionRetry">' + b.languageParser.translate("notifications",
                            "retry") + "</a></li>";
                        e.innerHTML = g + "</ul>";
                        g = q.getElementsByClassName(e, "actionRetry");
                        for (e = 0; e < g.length; e++) g[e].addEventListener(h.clickEvent, function() {
                            this.classList.add("hidden");
                            h.retryUploadFile(this.id)
                        });
                        d.classList.remove("hidden")
                    }
                    if (a.length) {
                        g = "<ul>";
                        for (d = 0; d < a.length; d++) g += "<li>" + a[d].name + "</li>";
                        c.innerHTML = g + "</ul>";
                        n.classList.remove("hidden")
                    }
                    g && this.scrollToBottom()
                };
            H.prototype.applyWhiteLabelSettings = function() {
                var a, b, d;
                this.chatContainer && (a = this.chatContainer.documentRef.getElementById(this.tawktoLinkName),
                    b = this.chatContainer.documentRef.getElementById(this.bottomContainerName), d = {
                        id: this.tawktoLinkName,
                        parentElem: b,
                        siblingName: b.nextSibling ? b.nextSibling.id : null,
                        grandParentName: b.parentNode.id
                    }, h.whiteLabel() ? (d.url = h.whiteLabel().url || null, d.label = q.transformLabel(q.rawEncode(h.whiteLabel().label)), d.textColor = h.whiteLabel().textColor || "#000000") : (d.url = "javascript:void(0);", d.label = v["default-branding"]), q.insertRandomTagsBeforeAndAfter(b, b.parentNode, "div"), q.insertRandomTagsBeforeAndAfter(a, a.parentNode,
                        "a"), q.applyWhiteLabelSettings(a, d))
            };
            var S = function() {
                var a = this;
                this.currentForm = "";
                this.formView = null;
                this.forms = {
                    nameForm: {
                        id: "changeNameForm",
                        title: "NameFormMessage",
                        fields: [{
                            fieldName: "name",
                            valueMaxLength: 40,
                            languageKey: "Name",
                            getValue: b.visitorHandler.getNameValue,
                            validation: "isValidString",
                            type: "input",
                            isRequired: !0
                        }],
                        publish: "notifyNameChange",
                        afterSave: b.visitorHandler.setNameFromForm,
                        resize: "164px"
                    },
                    emailTranscriptForm: {
                        id: "emailTranscriptForm",
                        title: "EmailTranscriptFormMessage",
                        fields: [{
                            fieldName: "name",
                            valueMaxLength: 40,
                            languageKey: "Name",
                            getValue: b.visitorHandler.getNameValue,
                            validation: "isValidString",
                            type: "input",
                            hiddenIE8: !0,
                            isRequired: !0
                        }, {
                            fieldName: "transcriptEmail",
                            valueMaxLength: 150,
                            languageKey: "Email",
                            getValue: b.visitorHandler.getTranscriptEmailValue,
                            validation: "isValidEmail",
                            type: "input",
                            instantValidation: !1,
                            isRequired: !0
                        }],
                        saveFunc: "requestEmailTranscript",
                        afterSave: b.visitorHandler.setTranscriptValue,
                        resize: "164px"
                    },
                    offlineForm: {
                        id: "offlineForm",
                        getTitle: function() {
                            return q.transformGreetings(h.offlineOptions.text)
                        },
                        dynamicFields: null,
                        saveFunc: "submitOfflineForm",
                        afterSave: a.handleOfflineForm,
                        dontCloseForm: !0
                    },
                    preChatForm: {
                        id: "preChatForm",
                        getTitle: function() {
                            return h.prechatOptions.text ? q.transformGreetings(h.prechatOptions.text) : h.isEmbedded && "page" === $_Tawk_WidgetId && pageType && "profile" === pageType ? b.languageParser.translate("form", "PreChatFormMessageProfile") : b.languageParser.translate("form", "PreChatFormMessage")
                        },
                        dynamicFields: null,
                        saveFunc: "submitPrechatForm",
                        afterSave: a.handlePrechatForm,
                        dontCloseForm: !1
                    },
                    inactivityOverlay: {
                        id: "inactivityOverlay",
                        overlayMessage: "inactive",
                        otherEvent: {
                            eventName: "click",
                            elementName: "inactivityOverlay",
                            executedFunc: b.main.criticalRefresh
                        }
                    },
                    maintenanceOverlay: {
                        id: "maintenanceOverlay",
                        overlayMessage: "maintenance"
                    },
                    endChatForm: {
                        id: "endChatForm",
                        publish: "endVisitorChat",
                        afterSave: a.handleChatEnded,
                        dontCloseForm: !1,
                        resize: "109px",
                        getTitle: function() {
                            return b.languageParser.translate("form", "EndChatTitle")
                        }
                    }
                };
                b.eventEmitter.on("localeChanged", function() {
                    var b = a.currentForm;
                    b && (a.closeForm(), a.openForm(b))
                });
                F.displayName.subscribe(function(b) {
                    !a.currentForm || "preChatForm" !== a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateName(b)
                });
                F.email.subscribe(function(b) {
                    !a.currentForm || "preChatForm" !== a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateEmail(b)
                })
            };
            S.prototype.openForm = function(a) {
                var f = this,
                    d = b.viewHandler.chatContainer.getElementById("formContainer"),
                    n = this.forms[a];
                n && (this.currentForm !== a && d) && (this.formView = null, this.formView = "preChatForm" ===
                    a || "offlineForm" === a ? new Z(n, a) : new ca(n), this.formView.buildForm(), this.currentForm = a, this.formView.buildView(b.viewHandler.chatContainer.documentRef), d.innerHTML = "", d.appendChild(this.formView.elementReferrer), d.style.display = "block", this.attachEventListeners(), this.formView.addPlaceholderHandler(), B || (n.resize ? (d.style.height = n.resize, d.style.top = "auto") : (d.style.height = "auto", d.style.top = "45px")), b.eventHandler.listen(e, "resize", function() {
                        f.resize()
                    }, "windowresizeform"), this.resize(), q.redraw(d),
                    b.eventEmitter.emit("formOpened"))
            };
            S.prototype.resize = function() {
                var a, f, d, n, c;
                null !== this.formView && B && (n = b.viewHandler.chatContainer.getElementById("formContainer"), d = b.viewHandler.chatContainer.getElementById("formInnerHeight"), c = b.viewHandler.chatContainer.getElementById("topBarContainer"), n && (a = q.getElementsByClassName(n, "formMessageField"), f = q.getElementsByClassName(n, "longFormContainer"), a && (a.length && f && f.length) && (longFormBottomContainerHeight = q.getElementsByClassName(n, "longFormBottomContainer")[0].clientHeight,
                    f[0].style.height = b.viewHandler.iframeContainer.clientHeight - c.clientHeight - longFormBottomContainerHeight + "px"), !d || "android" !== B && "android2" !== B && "android2.3" !== B || (d.style.overflow = "hidden", b.viewHandler.addOverflowScroll(d))))
            };
            S.prototype.closeForm = function() {
                var a = b.viewHandler.chatContainer.getElementById("formContainer"),
                    f = b.viewHandler.chatContainer.getElementById("submitWrapper");
                a && (this.formView = null, this.currentForm = "", a.innerHTML = "", a.style.display = "none", f && (f.className = ""), b.eventEmitter.emit("formClosed"))
            };
            S.prototype.attachEventListeners = function() {
                var a = this,
                    f = this.formView.formData,
                    d = b.viewHandler.chatContainer.getElementById("formCancel"),
                    n = b.viewHandler.chatContainer.getElementById("formSubmit"),
                    c = b.viewHandler.chatContainer.getElementById("formCloseChat"),
                    e = this.formView.formData.fields || [];
                this.formView.formData.dynamicFields && (e = this.formView.formData.dynamicFields);
                d && b.eventHandler.listen(d, b.viewHandler.clickEvent, function() {
                    a.closeForm()
                }, "formcancelclick");
                n && b.eventHandler.listen(n, b.viewHandler.clickEvent,
                    function() {
                        a.submitForm()
                    }, "formsubmitclick");
                c && b.eventHandler.listen(c, b.viewHandler.clickEvent, function() {
                    b.viewHandler.maximizedWidget ? (b.viewHandler.maximizedWidget.container.hide(), b.viewHandler.isMaximized = !1, b.viewHandler.show()) : b.main.hideWidget()
                }, "formcloseclick");
                B && b.eventHandler.listen(b.viewHandler.chatContainer.getElementById("formContainer"), b.viewHandler.clickEvent, function(a) {
                    var f = a.target,
                        f = f && f.tagName ? f.tagName.toLowerCase() : null;
                    (!f || "input" !== f && "select" !== f && "textarea" !==
                        f) && b.eventHandler.cancelEvent(a)
                }, "formclick");
                e.forEach(function(f) {
                    if (!f.disabled) {
                        var d = b.viewHandler.chatContainer.getElementById(f.fieldName + "Field"),
                            n = b.viewHandler.chatContainer.getElementById(f.fieldName + "FieldError"),
                            c = b.languageParser.translate("form", f.languageKey + "Placeholder"),
                            e = b.viewHandler.chatContainer.getElementById(f.fieldName + "FieldValid");
                        if (d) {
                            if (f.instantValidation)
                                if (-1 === (" " + d.parentNode.className + " ").indexOf("valid") && -1 === (" " + d.parentNode.className + " ").indexOf("error")) {
                                    var r =
                                        d.value;
                                    if (r = c === r ? null : q.trim(r)) a[f.validation](r, f.valueMaxLength, f.isRequired) ? (n.innerHTML = "", n.style.display = "none", d.parentNode.className += " valid", e && (e.style.display = "block")) : (n.innerHTML = b.languageParser.translate("form", f.languageKey + "ErrorMessage"), n.style.display = "block", d.parentNode.className += " error")
                                } else d.parentNode.className = d.parentNode.className.replace(" valid", ""), d.parentNode.className = d.parentNode.className.replace(" error", "");
                            "textarea" !== d.nodeName.toLowerCase() && b.eventHandler.listen(d,
                                "keypress",
                                function(b) {
                                    13 === b.keyCode && a.submitForm()
                                }, "formkeypress" + f.fieldName);
                            "options" === f.type && f.instantValidation && (d.parentNode.style.paddingRight = "15px", b.eventHandler.listen(d, "change", function(r) {
                                r = c === d.value ? null : q.trim(d.value);
                                r = a[f.validation](r, f.valueMaxLength, f.isRequired);
                                d.parentNode.className = d.parentNode.className.replace(" error", "");
                                r ? (n.innerHTML = "", n.style.display = "none", -1 === (" " + d.parentNode.className + " ").indexOf("valid") && (d.parentNode.className += " valid", -1 < (" " +
                                    d.parentNode.className + " ").indexOf("other-fix") && (d.parentNode.style.paddingRight = "0px")), e && (e.style.display = "block")) : (n.innerHTML = b.languageParser.translate("form", f.languageKey + "ErrorMessage"), n.style.display = "block", d.parentNode.className += " error", d.parentNode.className = d.parentNode.className.replace(" valid", ""), e && (e.style.display = "none"))
                            }, "formselectchange" + f.fieldName));
                            b.eventHandler.listen(d, "keydown", function(r) {
                                setTimeout(function() {
                                    var r;
                                    f.instantValidation ? (r = c === d.value ? null : q.trim(d.value),
                                        r = a[f.validation](r, f.valueMaxLength, f.isRequired), d.parentNode.className = d.parentNode.className.replace(" error", ""), r ? (n.innerHTML = "", n.style.display = "none", -1 === (" " + d.parentNode.className + " ").indexOf("valid") && (d.parentNode.className += " valid"), e && (e.style.display = "block")) : (n.innerHTML = b.languageParser.translate("form", f.languageKey + "ErrorMessage"), n.style.display = "block", d.parentNode.className += " error", d.parentNode.className = d.parentNode.className.replace(" valid", ""), e && (e.style.display =
                                            "none"))) : "" !== n.innerHTML && (n.innerHTML = "", n.style.display = "none", d.parentNode.className = d.parentNode.className.replace(" error", ""))
                                }, 1)
                            }, "formkeydown" + f.fieldName)
                        }
                    }
                });
                if (f.otherEvent) {
                    var h = f.otherEvent;
                    (f = b.viewHandler.chatContainer.getElementById(h.elementName)) && b.eventHandler.listen(f, h.eventName, function(a) {
                        h.executedFunc()
                    }, "formother")
                }
            };
            S.prototype.submitForm = function() {
                var a, f = this,
                    d = b.viewHandler.chatContainer.getElementById("formSubmit"),
                    n = b.viewHandler.chatContainer.getElementById("formCancel"),
                    e = b.viewHandler.chatContainer.getElementById("formCloseChat"),
                    h = b.viewHandler.chatContainer.getElementById("submitWrapper");
                h.innerHTML = '<p id="submitWrapperMessage">' + b.languageParser.translate("form", "SubmittingProcess") + '</p><div id="submitWrapperIcon"></div>';
                h.className = "visible";
                a = this.validateForm();
                if (null === a) h.className = "";
                else {
                    d.setAttribute("disabled", "disabled");
                    n && n.setAttribute("disabled", "disabled");
                    e && e.setAttribute("disabled", "disabled");
                    if (this.formView.formData.publish) return b.socketManager.sendToConnector(this.formView.formData.publish,
                        a,
                        function(b, d) {
                            a.serverData = d;
                            f.handleAfterSave(b, a)
                        });
                    if (this.formView.formData.saveFunc) try {
                        b.eventEmitter.emit(this.formView.formData.saveFunc, a, function(b, d) {
                            a.serverData = d;
                            f.handleAfterSave(b, a)
                        })
                    } catch (g) {
                        c.handleError("Unable to emit form handler save func : " + saveFunc + " with data : " + $_TAWK_JSON.stringify(a), g.fileName, g.lineNumber, g.stack)
                    }
                }
            };
            S.prototype.handleAfterSave = function(a, f) {
                var d, n, c, e, h;
                if (b && b.formHandler.formView && b.formHandler.formView.formData) {
                    d = b.formHandler.formView.formData.afterSave;
                    n = b.viewHandler.chatContainer.getElementById("formSubmit");
                    c = b.viewHandler.chatContainer.getElementById("formCancel");
                    e = b.viewHandler.chatContainer.getElementById("formCloseChat");
                    b.viewHandler.chatContainer.getElementById("submitWrapper");
                    h = b.viewHandler.chatContainer.getElementById("messageField");
                    n.removeAttribute("disabled");
                    c && c.removeAttribute("disabled");
                    e && e.removeAttribute("disabled");
                    if (a) return this.updateFormStatus(a);
                    d && d(f);
                    this.formView.formData.dontCloseForm ? this.updateFormStatus() :
                        this.closeForm();
                    h && (h.parentNode.className = h.parentNode.className.replace(" valid", ""))
                }
            };
            S.prototype.updateFormStatus = function(a) {
                var f, d, n;
                b.viewHandler.chatContainer && (f = b.viewHandler.chatContainer.getElementById("formSavingStatus"), d = b.viewHandler.chatContainer.getElementById("savingStatus"), n = b.viewHandler.chatContainer.getElementById("submitWrapper"), f && d ? a ? (f.className = "errorMessage", d.innerHTML = b.languageParser.translate("form", "errorSaving"), a = q.getElementsByClassName(b.viewHandler.chatContainer.documentRef,
                    "longFormContainer"), a.length && (a[0].scrollTop = 999999999999)) : (f.className = "", d.innerHTML = b.languageParser.translate("form", "saved")) : this.currentForm && "offlineForm" === this.currentForm ? (a ? (n.className = "visible", n.innerHTML = "<p>" + b.languageParser.translate("form", "OfflineMessageNotSent") + "</p>") : n.innerHTML = "<p>" + b.languageParser.translate("form", "OfflineMessageSent") + "</p>", setTimeout(function() {
                    n.className = ""
                }, 3E3)) : n.className = "")
            };
            S.prototype.validateForm = function() {
                var a, f = {},
                    d = 0,
                    n = this;
                if (this.formView) return a =
                    this.formView.formData.fields || [], this.formView.formData.dynamicFields && (a = this.formView.formData.dynamicFields), a.forEach(function(a) {
                        var c, e, h, g;
                        "additionalQuestion" === a.fieldName && a.getValue && q.isArray(a.getValue()) ? (f.additionalQuestion = {}, a.getValue().forEach(function(d, n) {
                            (e = b.viewHandler.chatContainer.getElementById(a.fieldName + n)) && (f.additionalQuestion[n] = d === e.value ? null : q.trim(e.value))
                        })) : "choice" === a.fieldType || "option" === a.fieldType ? (g = b.viewHandler.chatContainer.documentRef.getElementsByName(a.fieldName +
                            "group"), h = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"), c = b.viewHandler.chatContainer.getElementById(a.fieldName + "Container"), g = "choice" === a.fieldType ? n.getSelectedCheckbox(g, a.isRequired) : n.getSelectedRadio(g, a.isRequired), h.innerHTML = "", h.style.display = "none", c.className = c.className.replace("error", ""), null === g ? (d++, g = !1, h.innerHTML = b.languageParser.translate("form", a.languageKey + "ErrorMessage"), h.style.display = "block", c.className += " error") : f[a.fieldName] = g) : (e = b.viewHandler.chatContainer.getElementById(a.fieldName +
                            "Field"), h = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"), e && (c = a.placeholderText === e.value ? null : q.trim(e.value), g = n[a.validation](c, a.valueMaxLength, a.isRequired), h.innerHTML = "", h.style.display = "none", e.parentNode.className = e.parentNode.className.replace("error", ""), g ? f[a.fieldName] = c : (d++, h.innerHTML = b.languageParser.translate("form", a.languageKey + "ErrorMessage"), h.style.display = "block", e.parentNode.className += " error")))
                    }), 0 < d ? null : f
            };
            S.prototype.isValidString = function(a,
                b, d) {
                return d || a ? !(!a || !q.isString(a) || b && !(b && a.length <= b)) : !0
            };
            S.prototype.isValidEmail = function(a, b, d) {
                return d || a ? !!(a && q.isEmail(a) && q.isString(a) && a.length <= b) : !0
            };
            S.prototype.isValidDepartment = function(a, b, d) {
                var n;
                b = u.departments;
                if (!(d || a && "0" !== a)) return !0;
                for (n in b)
                    if (b[n].did === a) return !0;
                return !1
            };
            S.prototype.getSelectedCheckbox = function(a, b) {
                for (var d = [], n = 0, c = a.length; n < c; n++) a[n].checked && d.push(a[n].value);
                return !d.length && b ? null : d
            };
            S.prototype.getSelectedRadio = function(a, b) {
                for (var d =
                        "", n = 0, c = a.length; n < c; n++)
                    if (a[n].checked) {
                        d = a[n].value;
                        break
                    }
                return !d && b ? null : d
            };
            S.prototype.isValidPhone = function(a, b, d) {
                if (!d && !a) return !0;
                "+" === a.charAt(0) && (a = a.replace("+", ""));
                return !!(a.length && 7 <= a.length && a.match(/[0-9]/im))
            };
            S.prototype.handleOfflineForm = function(a) {
                var f, d = a.serverData,
                    n = b.viewHandler.chatContainer ? b.viewHandler.chatContainer.getElementById("messageField") : null,
                    c = b.viewHandler.chatContainer ? b.viewHandler.chatContainer.getElementById("messageFieldError") : null;
                b.visitorHandler.setNameValue(d);
                b.visitorHandler.setEmailValue(d);
                a = b.languageParser.translate("placeholders", "visitor_name") + " :\r\n" + d.name + "\r\n\r\n";
                a += b.languageParser.translate("form", "email") + " :\r\n" + d.email + "\r\n\r\n";
                a += d.message + "\r\n\r\n";
                if (0 < d.questions.length)
                    for (i = 0, l = d.questions.length; i < l; i++) a += d.questions[i].label + " :\r\n" + d.questions[i].answer + "\r\n\r\n";
                b.chatHandler.sendMessage(a, !0, function(a) {
                    b.formHandler.updateFormStatus(a.error);
                    b.viewHandler.handleAcknowledgment(a);
                    !a.error && n && (n.value = "", c.style.display =
                        "block", c.innerHTML = '<p class="offlineMessageSuccess">' + b.languageParser.translate("form", "OfflineMessageSent") + "</p>");
                    if (!a.error)
                        for (f = b.formHandler.formView.formData.fields || [], b.formHandler.formView.formData.dynamicFields && (f = b.formHandler.formView.formData.dynamicFields), a = 0; a < f.length; a++) {
                            var d, e = f[a];
                            if ("name" !== e.fieldType && "email" !== e.fieldType)
                                if ("choice" === e.fieldType)
                                    for (var h = 0; h < e.selections.length; h++) {
                                        if (d = b.viewHandler.chatContainer.getElementById(e.fieldName + "check" + h)) d.checked = !1
                                    } else if ("option" === e.fieldType)
                                        for (h = 0; h < e.selections.length; h++) {
                                            if (d = b.viewHandler.chatContainer.getElementById(e.fieldName + "radio" + h)) d.checked = !1
                                        } else if (d = b.viewHandler.chatContainer.getElementById(e.fieldName + "Field")) d.value = ""
                        }
                })
            };
            S.prototype.handlePrechatForm = function(a) {
                a = q.getDepartmentStatus(a.department);
                a.isOnline || b.viewHandler.notifiyDepartmentIsNotOnline(a.name, a.status);
                b.formHandler.formView.formData.dontCloseForm = !1
            };
            S.prototype.handleChatEnded = function(a) {
                b.formHandler.formView.formData.dontCloseForm = !1;
                b.chatHandler.endChat(a.serverData.chatEndVersion)
            };
            var O = TawkClass.extend({
                init: function() {
                    var a = this,
                        b = h.minimizedDimensions().width,
                        d = h.minimizedDimensions().height;
                    this.shown = this.inDocument = !1;
                    h.isDesktopRectangle() ? (this.frameHeight = d + "px", this.frameWidth = b + "px", this.container = new U(q.getRandomName(), q.getGenericStyle({
                        zindex: "1000001",
                        position: "fixed",
                        bottom: "0px",
                        display: "none",
                        height: this.frameHeight,
                        width: this.frameWidth,
                        maxheight: this.frameHeight,
                        maxwidth: this.frameWidth,
                        minheight: "40px",
                        minwidth: "126px"
                    }), ba, "iframe"), this.container.template = v["tawkchat-minified-iframe-element-rectangle"], this.chatIndicator = new U(q.getRandomName(), q.getGenericStyle({
                        zindex: "1000003",
                        margin: "0px",
                        width: this.frameWidth,
                        height: "37px",
                        position: "fixed",
                        display: "none",
                        bottom: d + "px",
                        left: "100%",
                        maxheight: "37px",
                        maxwidth: this.frameWidth,
                        minheight: "37px",
                        minwidth: this.frameWidth
                    }), ba, "iframe")) : (this.frameHeight = "66px", this.frameWidth = "61px", this.container = new U(q.getRandomName(), q.getGenericStyle({
                        zindex: "1000001",
                        position: "fixed",
                        bottom: "0px",
                        display: "none",
                        height: this.frameHeight,
                        width: this.frameWidth,
                        maxheight: this.frameHeight,
                        maxwidth: this.frameWidth,
                        minheight: this.frameHeight,
                        minwidth: this.frameWidth
                    }), ba, "iframe"), this.container.template = v["tawkchat-minified-iframe-element-round"], this.chatIndicator = new U(q.getRandomName(), q.getGenericStyle({
                        zindex: "1000003",
                        margin: "0px",
                        width: "60px",
                        height: "22px",
                        position: "fixed",
                        display: "none",
                        bottom: "57px",
                        left: "100%",
                        maxheight: "22px",
                        maxwidth: "60px",
                        minheight: "22px",
                        minwidth: "60px"
                    }), ba, "iframe"));
                    this.bubbleContainer = new U(q.getRandomName(), q.getGenericStyle({
                        zindex: "1000000",
                        width: "146px",
                        height: "85px",
                        position: "fixed",
                        display: "none",
                        bottom: d + 2 + "px",
                        right: "20px",
                        maxheight: "85px",
                        maxwidth: "146px",
                        minheight: "85px",
                        minwidth: "146px"
                    }), ba, "iframe");
                    36 > d - 6 && (this.agentDetails = "tawkchat-agent-details");
                    h.minimizedDimensions.subscribe(function(b) {
                        a.frameHeight = b.height + "px";
                        a.frameWidth = b.width + "px";
                        a.widgetDimensionsUpdated()
                    });
                    u.pageStatus.subscribe(function(b) {
                        a.updateGreetings(b);
                        a.updateStatus(b)
                    });
                    u.chatBubbleClosed.subscribe(function(b) {
                        a.bubbleContainer.clear()
                    });
                    h.chatBubble.subscribe(function() {
                        a.bubbleSettingsChanged()
                    });
                    h.isRTL.subscribe(function() {
                        a.bubbleSettingsChanged()
                    });
                    h.desktopWidget.subscribe(function() {
                        b = h.minimizedDimensions().width;
                        d = h.minimizedDimensions().height;
                        "min" === h.desktopWidget() ? (a.frameHeight = "66px", a.frameWidth = "61px", a.container.template = v["tawkchat-minified-iframe-element-round"], a.container.massRestyle(q.getGenericStyle({
                            zindex: "1000001",
                            position: "fixed",
                            bottom: "0px",
                            display: "none",
                            height: a.frameHeight,
                            width: a.frameWidth,
                            maxheight: a.frameHeight,
                            maxwidth: a.frameWidth,
                            minheight: a.frameHeight,
                            minwidth: a.frameWidth
                        })), a.chatIndicator.massRestyle(q.getGenericStyle({
                            zindex: "1000003",
                            margin: "0px",
                            width: "60px",
                            height: "22px",
                            position: "fixed",
                            display: "none",
                            bottom: "57px",
                            left: "100%",
                            maxheight: "22px",
                            maxwidth: "60px",
                            minheight: "22px",
                            minwidth: "60px"
                        })), a.bubbleContainer = null) : (a.frameHeight = d + "px", a.frameWidth = b + "px", a.container.template = v["tawkchat-minified-iframe-element-rectangle"],
                            a.container.massRestyle(q.getGenericStyle({
                                zindex: "1000001",
                                position: "fixed",
                                bottom: "0px",
                                display: "none",
                                height: a.frameHeight,
                                width: a.frameWidth,
                                maxheight: a.frameHeight,
                                maxwidth: a.frameWidth,
                                minheight: "40px",
                                minwidth: "126px"
                            })), a.chatIndicator.massRestyle(q.getGenericStyle({
                                zindex: "1000003",
                                margin: "0px",
                                width: a.frameWidth,
                                height: "37px",
                                position: "fixed",
                                display: "none",
                                bottom: d + "px",
                                left: "100%",
                                maxheight: "37px",
                                maxwidth: a.frameWidth,
                                minheight: "37px",
                                minwidth: a.frameWidth
                            })));
                        36 > d - 6 && (a.agentDetails =
                            "tawkchat-agent-details");
                        a.buildView();
                        a.updateStatus()
                    })
                },
                buildView: function() {
                    var a;
                    this.container && (this.chatIndicator.buildIframe(b.MinifiedStyle + h.minStyle()), a = q.getElementsByTagName(this.chatIndicator.documentRef, "body")[0], a.innerHTML = v["tawkchat-chat-indicator"], this.container.buildIframe(b.MinifiedStyle + h.minStyle()), this.bubbleContainer && (h.chatBubble() && this.bubbleContainer.elementReferrer ? this.bubbleContainer.buildIframe(b.MinifiedStyle + h.minStyle()) : this.bubbleContainer.clear()), this.widgetDimensionsUpdated(),
                        this.updateGreetings(), this.attachEvents(), this.inDocument = !0)
                },
                attachEvents: function() {
                    this.container && (this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        "max" === h.onClickAction ? b.sessionHandler.notifyWindowState("max") : b.viewHandler.popoutWidget();
                        b.eventHandler.cancelEvent(a)
                    }, "tawkchat-minified-wrapper", "minifiedclick"), this.container.attachUserEventListener("mousedown", function(a) {
                            b.viewHandler.lastFocusedElement = e.document.activeElement
                        }, "tawkchat-minified-wrapper",
                        "minifiedWidgetMouseDown"), this.attachBubbleEvents())
                },
                createCanvasChatBubble: function() {},
                createVMLChatBubble: function() {}
            });
            O.prototype.updateStatus = function(a) {
                var f;
                a || (a = u.pageStatus());
                if (this.container && a) {
                    if (f = this.container.getElementById("tawkchat-status-icon")) f.className = a;
                    if (f = this.container.getElementById("tawk-minified-mobile-text")) f.innerHTML = "online" === a || "away" === a ? "Chat" : "Mail";
                    try {
                        b.eventEmitter.emit("resizeIframeHeight")
                    } catch (d) {
                        c.handleError("Unable to emit resizeIframeHeight",
                            d.fileName, d.lineNumber, d.stack)
                    }
                }
            };
            O.prototype.attachBubbleEvents = function() {
                h.isDesktopRectangle() && this.bubbleContainer && this.bubbleContainer.attachUserEventListener(b.viewHandler.clickEvent, b.sessionHandler.closeBubble, "tawkchat-chat-bubble-close", "bubblecloseclick")
            };
            O.prototype.hide = function() {
                this.container && (this.shown = !1, this.container.restyle("display", "none !important"), this.toggleBubble())
            };
            O.prototype.show = function() {
                this.container && (this.shown = !0, this.container.restyle("display", "block !important"),
                    this.toggleBubble())
            };
            O.prototype.widgetDimensionsUpdated = function() {
                this.container && (minWidth = h.minimizedDimensions().width, minHeight = h.minimizedDimensions().height, this.container.massRestyle({
                    height: minHeight + "px !important",
                    "min-height": minHeight + "px !important",
                    "max-height": minHeight + "px !important",
                    width: minWidth + "px !important",
                    "min-width": minWidth + "px !important",
                    "max-width": minWidth + "px !important"
                }), this.widgetPositonChanged(), this.bubbleSettingsChanged(), this.calculateIndicatorPositioning())
            };
            O.prototype.bubbleSettingsChanged = function() {
                var a = h.chatBubble();
                if (!a && this.bubbleContainer) return this.bubbleContainer.clear();
                b && (b.viewHandler && b.viewHandler.iframeContainer && b.viewHandler.iframeContainer.elementReferrer && h.isDesktopRectangle()) && (a && (a.type && "default" !== a.type || this.bubbleContainer.elementReferrer && this.bubbleContainer.insertCssFile(".bubble-text-color{color:" + (h.chatBubble() ? h.chatBubble().fgc : "#ffffff") + ";}", !0), a && !this.bubbleContainer.elementReferrer && (b.viewHandler.iframeContainer.elementReferrer.appendChild(this.bubbleContainer.buildView()),
                    this.bubbleContainer.buildIframe(b.MinifiedStyle + h.minStyle()))), this.createBubble(), this.attachBubbleEvents())
            };
            O.prototype.updateGreetings = function(a) {
                var b;
                a || (a = u.pageStatus());
                this.container && a && (b = this.container.getElementById("short-message")) && (a = m.getShortMessage(a), null !== a && (b.innerHTML = a))
            };
            O.prototype.clear = function() {
                this.container.clear();
                this.container = null
            };
            O.prototype.widgetPositonChanged = function() {
                var a = "",
                    b = M && 10 > J,
                    d = {},
                    n;
                h.isCenterPositioned() ? (n = h.isDesktopRectangle() ? -0.5 *
                    h.minimizedDimensions().width + 0.5 * h.minimizedDimensions().height + "px !important" : "15px !important", h.isRightPositioned() ? (a = "center right", h.isDesktopRectangle() && (d = q.getRotateStyling("-90", "50%")), d.right = n, d.left = "auto !important", b && (d.right = h.minimizedDimensions().height - h.minimizedDimensions().width + "px !important", d.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)")) : (a = "center left", h.isDesktopRectangle() && (d = q.getRotateStyling("90", "50%")), d.left = n, d.right = "auto !important",
                        b && (d.left = "0px !important", d.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)")), d.top = "50% !important", d.bottom = "auto !important", d.margin = b ? -0.5 * h.minimizedDimensions().width + "px 0 0 0 !important" : -0.5 * h.minimizedDimensions().height + "px 0 0 0 !important") : (d = q.getRotateStyling("0", "0"), d.margin = "0px !important", h.isTopPositioned() ? (d.top = h.isDesktopRectangle() ? "0 !important" : "15px !important", d.bottom = "auto !important", a = " top ") : (d.top = "auto !important", d.bottom = h.isDesktopRectangle() ?
                    "0 !important" : "10px !important", a = " bottom "), h.isRightPositioned() ? (a += " right ", d.right = h.isDesktopRectangle() ? "10px !important" : "15px !important", d.left = "auto !important") : (a += " left ", d.left = h.isDesktopRectangle() ? "10px !important" : "15px !important", d.right = "auto !important"), b && (d.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=0)"));
                this.container.documentRef.body.className = a + " " + (h.isDesktopRectangle() ? "rectangle" : "round");
                this.container.massRestyle(d)
            };
            O.prototype.createBubble =
                function() {
                    var a;
                    this.bubbleContainer && (this.bubbleContainer.elementReferrer && !h.hideWidget && h.chatBubble && !u.chatBubbleClosed()) && (h.chatBubble().type && "default" !== h.chatBubble().type ? this.createImageBubble() : this.createDefaultBubble(), a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-close"), this.bubbleContainer.attachUserEventListener("mouseover", function() {
                        a && (a.style.visibility = "visible")
                    }, null, "bubbleHover"), this.bubbleContainer.attachUserEventListener("mouseout", function() {
                        a && (a.style.visibility =
                            "hidden")
                    }, null, "bubbleOut"), this.bubbleContainer.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        "max" === h.onClickAction ? b.sessionHandler.notifyWindowState("max") : b.viewHandler.popoutWidget();
                        b.eventHandler.cancelEvent(a)
                    }, "bubble-image", "bubbleContainerClick"), this.toggleBubble())
                };
            O.prototype.calculateBubblePositioning = function(a, b, d, n, c, e, g) {
                var k = h.minimizedDimensions().width;
                h.minimizedDimensions();
                var m = {};
                q.getElementsByTagName(this.bubbleContainer.documentRef, "body");
                var p = M &&
                    10 > J;
                if (h.isCenterPositioned()) {
                    var s;
                    s = p && 0 !== e ? -0.5 * a : -0.5 * b;
                    0 === e ? (k = 0.5 * (k - b), centerPosition = d + "px !important") : (k = 0.5 * (k - a), centerPosition = -1 * (0.5 * (a - b) - d) + "px !important");
                    m = q.getRotateStyling(e, "49%");
                    h.isRightPositioned() ? (m.right = centerPosition, m.left = "auto !important", p && 0 !== e && (m.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)", m.right = d - (a - b) + "px !important")) : (m.left = centerPosition, m.right = "auto !important", p && 0 !== e && (m.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)",
                        m.left = d + "px !important"));
                    m.top = "50% !important";
                    m.bottom = "auto !important";
                    e = s - k + n
                } else m = q.getRotateStyling("0", "0"), e = "0", h.isTopPositioned() ? (m.top = n + "px !important", m.bottom = "auto !important", g += " top ") : (m.bottom = n + "px !important", m.top = "auto !important", g += " bottom "), h.isRightPositioned() ? (m.right = d + "px !important", m.left = "auto !important", g += " right ") : (m.left = d + "px !important", m.right = "auto !important", g += " left ");
                m.width = a + "px !important";
                m["max-width"] = a + "px !important";
                m["min-width"] =
                    a + "px !important";
                m.height = b + "px !important";
                m["max-height"] = b + "px !important";
                m["min-height"] = b + "px !important";
                m["z-index"] = (0 === c ? "1000000" : "1000002") + " !important";
                m.margin = e + "px 0 0 0 !important";
                this.bubbleContainer.massRestyle(m);
                this.bubbleContainer.documentRef.body.className += g
            };
            O.prototype.createDefaultBubble = function() {
                var a, b, d, n = 0;
                a = 0;
                a = !!document.createElement("canvas").getContext;
                var c = " default ";
                b = M && 9 > J;
                if (a || b) b = q.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0],
                    b.innerHTML = v["tawkchat-chat-bubble-canvas"], a ? this.createCanvasChatBubble() : this.createVMLChatBubble(), a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-text"), a.innerHTML = h.chatBubble().txt, a.style.color = h.chatBubble().fgc, h.isCenterPositioned() ? (h.isRightPositioned() ? (d = -90, n -= 10, h.isRTL() && (n = h.minimizedDimensions().width - 146)) : (d = 90, n = h.minimizedDimensions().width - 146 + 10, h.isRTL() && (n = 0)), a = h.minimizedDimensions().height + 2) : (n = h.minimizedDimensions().height + 2, a = !h.isRightPositioned() &&
                        !h.isRTL() || h.isRightPositioned() && h.isRTL() ? h.minimizedDimensions().width - 146 + 16 : 0), h.isRTL() && (c += " rtl-direction"), this.calculateBubblePositioning(146, 85, a, n, 0, d, c)
            };
            O.prototype.createImageBubble = function() {
                var a, b, d;
                d = q.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0];
                var n = h.chatBubble(),
                    c = n.height + 16;
                "gallery" === n.type ? (a = " gallery ", b = "https://static-v.tawk.to/a-v3-34/images/bubbles/" + n.name + ".png") : (a = " upload ", b = "https://tawk.link/" + h.chatBubble().name);
                d.innerHTML = q.escapeTemplateReplacement(v["tawkchat-chat-bubble-gallery"], [{
                    placeholder: "__IMAGE_SRC__",
                    textReplace: b
                }]);
                h.isTopPositioned() || h.isCenterPositioned() ? (b = n.topOffset, h.isCenterPositioned() && 0 === n.rotate && (b -= 16)) : b = n.bottomOffset;
                d = h.isRightPositioned() ? n.rightOffset : n.leftOffset;
                h.isCenterPositioned() && 0 !== n.rotate && (d = "gallery" === n.type ? d - 3 : d + 2);
                this.calculateBubblePositioning(n.width, c, d, b, n.zIndex, n.rotate, a)
            };
            O.prototype.toggleBubble = function() {
                h.chatBubble && (this.bubbleContainer && this.bubbleContainer.elementReferrer) && (this.shown && "offline" !== u.pageStatus() ?
                    this.bubbleContainer.restyle("display", "block !important") : this.bubbleContainer.restyle("display", "none !important"))
            };
            O.prototype.agentBarChanged = function(a) {
                var b, d, n, c, e, g, k, m = {};
                h.hideWidget || (this.container.massRestyle({
                    height: a + "px !important",
                    "min-height": a + "px !important",
                    "max-height": a + "px !important"
                }), g = M && 10 > J, closeIconWidth = 16, minWidth = h.minimizedDimensions().width, minHeight = h.minimizedDimensions().height, b = h.chatBubble(), d = a - minHeight, k = b.rotate, b.type && "default" !== b.type ? (n = b.topOffset,
                    c = b.bottomOffset, bubbleWidth = b.width, bubbleContainerHeight = b.height + closeIconWidth, e = h.isRightPositioned() ? b.rightOffset : b.leftOffset) : (bubbleWidth = 146, bubbleContainerHeight = 85, h.isCenterPositioned() ? (e = minHeight + 2, k = h.isRightPositioned() ? -90 : 90) : (n = minHeight + 2, c = minHeight + 2, e = h.isRightPositioned() ? 0 : minWidth - bubbleWidth + closeIconWidth)), h.isCenterPositioned() && h.isDesktopRectangle() ? (n = -0.5 * minWidth + 0.5 * a + "px !important", e += d, d = 0 === k ? e + "px !important" : -1 * (0.5 * (bubbleWidth - bubbleContainerHeight) -
                    e) + "px !important", h.isRightPositioned() ? (this.container.restyle("right", n), this.chatIndicator.restyle("right", -0.5 * minWidth + 18.5 + a + "px !important"), m.right = d, g && (this.container.restyle("right", a - minWidth + "px !important"), this.chatIndicator.restyle("right", 37 - minWidth + a + "px !important"), 0 !== k && (m.right = e - (bubbleWidth - bubbleContainerHeight) + "px !important"))) : h.isCenterPositioned() || (this.container.restyle("left", n), this.chatIndicator.restyle("left", -0.5 * minWidth + 18.5 + a + "px !important"), m.left = d, g &&
                    (this.container.restyle("left", "0px !important"), this.chatIndicator.restyle("left", 37 - minWidth + a + "px !important"), 0 !== b.rotate && (m.left = e + "px !important"))), g ? this.container.restyle("margin", -0.5 * minWidth + "px 0 0 0 !important") : this.container.restyle("margin", -0.5 * a + "px 0 0 0 !important")) : !h.isCenterPositioned() && h.isDesktopRectangle() && (h.isTopPositioned() ? (this.chatIndicator.restyle("top", a + "px !important"), m.top = n + d + "px !important") : (this.chatIndicator.restyle("bottom", a + "px !important"), m.bottom =
                    c + d + "px !important")), this.bubbleContainer && (this.bubbleContainer.elementReferrer && h.chatBubble && !u.chatBubbleClosed()) && this.bubbleContainer.massRestyle(m))
            };
            O.prototype.calculateIndicatorPositioning = function() {
                var a = {},
                    b = h.minimizedDimensions().width,
                    d = h.isDesktopRectangle() ? 37 : 22;
                h.minimizedDimensions();
                var n = h.minimizedDimensions().height,
                    c = h.isDesktopRectangle() ? 10 : 15,
                    g = "",
                    k = M && 10 > J;
                h.isCenterPositioned() ? (centerPosition = (h.isDesktopRectangle() ? -0.5 * b + 0.5 * d + n : c) + "px !important", h.isRightPositioned() ?
                    (h.isDesktopRectangle() && (a = q.getRotateStyling(-90, "49%")), a.right = centerPosition, a.left = "auto !important", c = "right", k && (h.isDesktopRectangle() && (a.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"), a.right = d - b + n + "px !important")) : (h.isDesktopRectangle() && (a = q.getRotateStyling(90, "49%")), a.left = centerPosition, a.right = "auto !important", c = "left", k && (h.isDesktopRectangle() && (a.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"), a.left = n + "px !important")), h.isDesktopRectangle() ?
                    a.top = "50% !important" : (n = Math.max(document.documentElement.clientHeight, e.innerHeight || 0), a.top = n / 2 - h.minimizedDimensions().width / 2 + 3 + "px !important"), a.bottom = "auto !important", g += " bottom " + c, a.margin = k ? -0.5 * b + "px 0 0 0 !important" : -0.5 * d + "px 0 0 0 !important") : (h.isTopPositioned() ? (g += " top ", a.top = (h.isDesktopRectangle() ? n : 10) + "px !important", a.bottom = "auto !important") : (g += " bottom ", a.top = "auto !important", a.bottom = (h.isDesktopRectangle() ? n : 57) + "px !important"), h.isRightPositioned() ? (g += " right ",
                    a.right = c + "px !important", a.left = "auto !important") : (g += " left ", a.left = c + "px !important", a.right = "auto !important"));
                a.width = b + "px !important";
                a["max-width"] = b + "px !important";
                a["min-width"] = b + "px !important";
                a.height = d + "px !important";
                a["max-height"] = d + "px !important";
                a["min-height"] = d + "px !important";
                this.chatIndicator.documentRef.body.className += " " + g + " " + (h.isDesktopRectangle() ? "rectangle" : "round");
                this.chatIndicator.massRestyle(a)
            };
            var ta = O.extend({
                init: function() {
                    var a = this;
                    this._super(this);
                    b.eventEmitter.on("localeChanged", function() {
                        a.setLinkTitle()
                    });
                    h.isRTL.subscribe(function() {
                        a.addClassName()
                    })
                },
                buildView: function() {
                    this._super(this);
                    this.addClassName();
                    this.setLinkTitle()
                },
                attachEvents: function() {
                    this.container && this._super()
                },
                createCanvasChatBubble: function() {
                    var a, b, d, n, c, e, g, k, m, p, q, s, t, u, v, y, w, x = 5,
                        z = h.chatBubble().bgc;
                    if (a = this.bubbleContainer.getElementById("tawkchat-chat-bubble-canvas")) h.chatPosition(), a.width = "146", a.height = "85", c = a.getContext("2d"), c.clearRect(0, 0, 134,
                            63), c.fillStyle = z, h.isTopPositioned() ? (x = 16, e = 68, t = x + 3, s = 81, u = 6, v = !1, a = 1.1, b = 1.9, d = 1.6, n = 0.85) : (e = x = 6, t = x + 63 - 3, s = 55, u = 79, v = !0, a = 0.9, b = 0.1, d = 0.4, n = 1.15), h.isRTL() ? (w = 10, g = w + 2, k = w + 5, m = w - 2, p = w - 2, q = w + 5, s = 81, h.isTopPositioned() ? (y = v, d = 0.2, n = 1.45) : (y = !v, d = 0.6, n = 1.85)) : (w = 2, g = w + 134 - 2, k = w + 134 - 5, m = w + 134 + 2, p = w + 134 + 2, q = w + 134 - 5, y = v), c.beginPath(), c.moveTo(w + 8, x), c.lineTo(68, x), c.lineTo(w + 134 - 8, x), c.quadraticCurveTo(w + 134, x, w + 134, x + 8), c.lineTo(w + 134, x + 63 - 8), c.quadraticCurveTo(w + 134, x + 63, w + 134 - 8, x + 63), c.lineTo(w +
                            8, x + 63), c.quadraticCurveTo(w, x + 63, w, x + 63 - 8), c.lineTo(w, x + 8), c.quadraticCurveTo(w, x, w + 8, x), c.strokeStyle = "#e3e0e7", c.lineWidth = 2, c.stroke(), c.closePath(), c.fill(), c.beginPath(), c.arc(68, t, 10, Math.PI * a, Math.PI * b, v), c.strokeStyle = "#e3e0e7", c.lineWidth = 2, c.stroke(), c.fill(), c.beginPath(), c.arc(s, u, 5, 0, 2 * Math.PI, !1), c.strokeStyle = "#e3e0e7", c.lineWidth = 2, c.stroke(), c.closePath(), c.fill(), c.beginPath(), c.arc(g, e + 5, 10, Math.PI * d, Math.PI * n, y), c.strokeStyle = "#e3e0e7", c.lineWidth = 2, c.stroke(), c.closePath(), c.fillStyle =
                        z, c.fill(), c.beginPath(), c.moveTo(k, e + 1.5), c.lineTo(m, e + 8), c.closePath(), c.lineWidth = 2, c.strokeStyle = h.chatBubble().fgc, c.stroke(), c.beginPath(), c.moveTo(p, e + 1.5), c.lineTo(q, e + 8), c.closePath(), c.lineWidth = 2, c.strokeStyle = h.chatBubble().fgc, c.stroke()
                },
                createVMLChatBubble: function() {
                    var a, b, d, c, e, g = "",
                        k = 0,
                        m = 5,
                        p = h.chatBubble().bgc,
                        q = this.bubbleContainer.getElementById("tawkchat-chat-bubble-graphics-container");
                    q && (h.chatPosition(), this.bubbleContainer.documentRef.namespaces.add("v", "urn:schemas-microsoft-com:vml",
                            "#default#VML"), h.isTopPositioned() ? (m = 15, a = 70) : a = m = 5, h.isRTL() ? (k = 10, b = "90px", d = "0px", c = k - 6 + "," + (a + 1.5) + '" to="' + (k + 2) + "," + (a + 8), e = k + 2 + "," + (a + 1.5) + '" to="' + (k - 6) + "," + (a + 8)) : (k = 0, b = "53px", d = "123px", c = k + 136 - 6 + "," + (a + 1.5) + '" to="' + (k + 136 + 2) + "," + (a + 8), e = k + 136 + 2 + "," + (a + 1.5) + '" to="' + (k + 136 - 6) + "," + (a + 8)), g = '<v:group style="left: 0px; width: 136px; height: 65px; position: absolute; top: 0px; antialias: true" coordsize = "136,65"><v:shape style="width: 136px; height: 65px; position: absolute;" coordorigin="0 0" coordsize="136 65"',
                        g += 'path="', g += "m" + (k + 8) + "," + m, g += "l" + (k + 136 - 8) + "," + m, g += "c" + (k + 136 - 4) + "," + m + "," + (k + 136) + "," + (m + 4) + "," + (k + 136) + "," + (m + 8), g += "l" + (k + 136) + "," + (m + 65 - 8), g += "c" + (k + 136) + "," + (m + 65 - 4) + "," + (k + 136 - 4) + "," + (m + 65) + "," + (k + 136 - 8) + "," + (m + 65), g += "l" + (k + 8) + "," + (m + 65), g += "c" + (k + 4) + "," + (m + 65) + "," + k + "," + (m + 65 - 4) + "," + k + "," + (m + 65 - 8), g += "l" + k + "," + (m + 8), g += "c" + k + "," + (m + 4) + "," + (k + 4) + "," + m + "," + (k + 8) + "," + m, g += 'e x">', g += '<v:fill color="' + p + '"/>', g += '<v:stroke weight="2" opacity="0" color="' + p + '"/>', g += "</v:shape>", h.isTopPositioned() ?
                        (g += '<v:oval style="width:20px; height:20px; position: absolute; left: 65px; top: 9px;" fillcolor="' + p + '" strokeweight="0" strokecolor="' + p + '"> </v:oval>', g += '<v:oval style="width:10px;height:10px; position: absolute; left: ' + b + '; top: 0px;" fillcolor="' + p + '" strokeweight="0" strokecolor="' + p + '"> </v:oval>') : (g += "<v:shape ", g += 'style="width: 10px; height: 10px; position: absolute; left: 75px; top: 67px;" coordorigin="10 20" coordsize="10 10"', g += 'path="', g += "M0,20", g += "C0,35, 25,35, 25,20", g += 'e x">',
                            g += '<v:fill color="' + p + '"/>', g += '<v:stroke weight="2" opacity="0" color="' + p + '"/>', g += "</v:shape>", g += '<v:oval style="width:10px;height:10px; position: absolute; left: ' + b + '; top: 74px;" fillcolor="' + p + '" strokeweight="0" strokecolor="' + p + '"> </v:oval>'), g += '<v:oval style="width:20px;height:20px; position: absolute; left: ' + d + "; top: " + (a - 5) + 'px;" fillcolor="' + p + '" strokeweight="0" strokecolor="' + p + '"> </v:oval>', g += '<v:line from="' + c + '" strokeweight="2" strokecolor="' + h.chatBubble().fgc + '"></v:line>',
                        g += '<v:line from="' + e + '" strokeweight="2" strokecolor="' + h.chatBubble().fgc + '"></v:line>', g += "</v:group>", q.innerHTML = g)
                }
            });
            ta.prototype.setLinkTitle = function() {
                this.container && this.container.getElementById("maximizeChat").setAttribute("title", b.languageParser.translate("rollover", "maximize"))
            };
            ta.prototype.chatEnded = function() {
                var a = this.container.getElementById("tawkchat-minified-agent-container"),
                    b = this.container.getElementById("tawkchat-status-text-container"),
                    d = this.container.getElementById("tawkchat-minified-link-container");
                a && b && (a.innerHTML = "", a.style.display = "none", b.style.display = "block", d.style.marginTop = "0px")
            };
            ta.prototype.addClassName = function() {
                var a;
                a = h.isRTL() ? " rtl-direction" : " ltr-direction";
                this.container && this.container.elementReferrer && (this.container.getElementById("tawkchat-minified-wrapper").className = q.getContrast(h.headerTxtColor) + a);
                this.chatIndicator && this.chatIndicator.elementReferrer && (this.chatIndicator.getElementById("tawkchat-chat-indicator").className = a)
            };
            var R = TawkClass.extend({
                init: function(a,
                    f) {
                    var d = this;
                    this.inDocument = !1;
                    this.maxNumberFileUpload = 5;
                    d.maxSizeFileUpload = 52428800;
                    this.frameWidth = h.maximizedDimensions().width + "px";
                    this.frameHeight = h.maximizedDimensions().height + "px";
                    this.container = h.isPopup ? new D(q.getRandomName(), "display: none;") : new U(q.getRandomName(), q.getGenericStyle({
                        zindex: "999999",
                        position: "static",
                        display: "none",
                        height: this.frameHeight,
                        width: this.frameWidth
                    }), ba, "iframe");
                    this.wrapper = new D("tawkchat-maximized-wrapper");
                    this.wrapper.template = this.wrapper.template.replace(/__IE6__/gm,
                        X ? "ie6" : "");
                    b.MaximizedStyle = b.MaximizedStyle.replace(/#tawktoLink/g, "#" + a);
                    b.MaximizedStyle = b.MaximizedStyle.replace(/#bottomContainer/g, "#" + f);
                    this.wrapper.template = this.wrapper.template.replace(/__TAWK_TO_LINK__/gm, a);
                    this.wrapper.template = this.wrapper.template.replace(/__BOTTOM_CONTAINER__/gm, f);
                    M && 10 > J && this.wrapper.addClass("ie9");
                    this.chatTextarea = new D("chatTextarea", null, null, "textarea");
                    this.container.addChildViews([this.wrapper]);
                    h.maximizedDimensions.subscribe(function(a) {
                        h.isEmbedded ||
                            h.isPopup || (d.frameHeight = a.height + "px", d.frameWidth = a.width + "px", d.container.restyle("height", d.frameHeight + " !important"), d.container.restyle("width", d.frameWidth + " !important"))
                    });
                    u.pageStatus.subscribe(function(a) {
                        d.updateGreetings(a)
                    });
                    h.soundOn.subscribe(function() {
                        d.toggleSound()
                    });
                    b.eventEmitter.on("localeChanged", function() {
                        d.container && d.updateGreetings()
                    });
                    h.isRTL.subscribe(function() {
                        d.addClassName()
                    });
                    F.name.subscribe(function() {
                        if (!q.isGeneratedName(F.name()))
                            for (var a = d.container.documentRef.getElementsByClassName("messageOwnerName visitor"),
                                    b = 0; b < a.length; b++) a[b].style.display = "none"
                    })
                },
                buildView: function() {
                    h.isPopup || this.container.buildIframe(b.MaximizedStyle + h.maxStyle());
                    this.container.documentRef.getElementById("textareaContainer").appendChild(this.chatTextarea.buildView(this.container.documentRef));
                    h.isEmbedded || h.isPopup ? this.restyleEmbed() : "br" == h.chatPosition() ? this.container.documentRef.body.className = "right" : this.container.documentRef.body.className = "left";
                    this.addClassName();
                    this.updateGreetings();
                    this.toggleSound();
                    this.attachEvents();
                    q.redraw(this.container.elementReferrer);
                    this.inDocument = !0
                },
                attachEvents: function() {
                    var a = this;
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        b.eventHandler.cancelEvent(a);
                        b.sessionHandler.notifyWindowState("min")
                    }, "minimizeChat", "minlinkclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function() {
                        b.viewHandler.popoutWidget()
                    }, "popoutChat", "poplinkclick");
                    this.chatTextarea.attachUserEventListener("keydown", function(a) {
                            b.chatHandler.sendTextPreview(a)
                        },
                        null, "chatinputkeydown");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        var d = b.eventHandler.getTargetElement(a); - 1 !== d.className.indexOf("messageOwnerName") && -1 !== d.className.indexOf("visitor") && (b.formHandler.openForm("nameForm"), b.eventHandler.cancelEvent(a))
                    }, "chatWrapper", "chatWrapperclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                            b.formHandler.openForm("emailTranscriptForm");
                            a.closeMenu();
                            b.eventHandler.cancelEvent(f)
                        }, "emailTranscriptOption",
                        "emailclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        b.chatHandler.changeRating(1);
                        b.eventHandler.cancelEvent(a)
                    }, "ratePositive", "ratepveclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        b.chatHandler.changeRating(-1);
                        b.eventHandler.cancelEvent(a)
                    }, "rateNegative", "ratenveclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                            b.viewHandler.printChatTranscript();
                            a.closeMenu();
                            b.eventHandler.cancelEvent(f)
                        },
                        "printOption", "printclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        b.eventHandler.cancelEvent(a);
                        b.chatHandler.toggleSound()
                    }, "soundOption", "soundclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        b.eventHandler.cancelEvent(a);
                        b.viewHandler.expandAgentList(a)
                    }, "expandableIcon", "expandclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                            a.container.getElementById("maxFileNotificationContainer").classList.add("hidden")
                        },
                        "closeNumberNotification", "closeNumberNotification");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                        a.container.getElementById("maxSizeNotificationContainer").classList.add("hidden")
                    }, "closeSizeNotification", "closeSizeNotification");
                    this.container.attachUserEventListener("mousedown", function(a) {
                        !(a = e.document.activeElement) || "input" !== a.tagName.toLowerCase() && "textarea" !== a.tagName.toLowerCase() || (b.viewHandler.lastFocusedElement = a)
                    }, "innerWrapper", "maximizedWidgetMouseDown");
                    this.container.attachUserEventListener("change", function(f) {
                        b.eventHandler.cancelEvent(f);
                        a.closeMenu();
                        var d = b.eventHandler.getTargetElement(f),
                            c = 0,
                            g = 0,
                            h = [],
                            k = [],
                            m = function() {
                                g++;
                                g === c && (d.value = "")
                            };
                        if (void 0 === e.FormData) a.container.getElementById("upload-form")[0].value && (c = 1, b.viewHandler.startUpload(a.container.getElementById("upload-form"), !0, m));
                        else if ((f = d.files) && f.length) {
                            for (var p = 0; p < f.length; p++) f[p].size > a.maxSizeFileUpload ? h.push(f[p]) : p >= a.maxNumberFileUpload ? k.push(f[p]) : b.viewHandler.startUpload(f[p],
                                null, m);
                            b.viewHandler.checkUploadFileWarning(h, k)
                        }
                    }, "fileInput", "fileInputChanged");
                    this.container.attachUserEventListener("dragover", function(b) {
                        b.preventDefault();
                        b.stopPropagation && b.stopPropagation();
                        a.wrapper.addClass("drag-over")
                    }, "innerWrapper", "textareaContainerDragOver");
                    this.container.attachUserEventListener("dragleave", function(b) {
                        b.preventDefault();
                        b.stopPropagation && b.stopPropagation();
                        a.wrapper.removeClass("drag-over")
                    }, "innerWrapper", "textareaContainerDragLeave");
                    this.container.attachUserEventListener("dragend",
                        function(b) {
                            b.preventDefault();
                            b.stopPropagation && b.stopPropagation();
                            a.wrapper.removeClass("drag-over")
                        }, "innerWrapper", "textareaContainerDragEnd");
                    this.container.attachUserEventListener("drop", function(f) {
                        f.preventDefault();
                        f.stopPropagation && f.stopPropagation();
                        a.wrapper.removeClass("drag-over");
                        f = f.target.files || f.dataTransfer.files;
                        var d = 0,
                            c = [],
                            e = [],
                            g = function() {
                                d++
                            };
                        if (f && 0 !== f.length) {
                            for (var h = 0; h < f.length; h++) f[h].size > a.maxSizeFileUpload ? c.push(f[h]) : h >= a.maxNumberFileUpload ? e.push(f[h]) :
                                b.viewHandler.startUpload(f[h], null, g);
                            b.viewHandler.checkUploadFileWarning(c, e)
                        }
                    }, "innerWrapper", "textareaContainerDrop");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        b.formHandler.openForm("nameForm");
                        a.closeMenu();
                        b.eventHandler.cancelEvent(f)
                    }, "changeNameOption", "changenameclick");
                    this.container.attachUserEventListener("paste", function(a) {
                        var d, c = !1,
                            e = null;
                        if ((d = (a.originalEvent || a).clipboardData) && (d = d.items) && d.length) {
                            for (var g = 0; g < d.length; g++) {
                                if ("text/plain" ===
                                    d[g].type) {
                                    c = !0;
                                    break
                                }
                                if (-1 !== d[g].type.indexOf("image")) {
                                    var h = d[g].getAsFile();
                                    null !== h && (e = h, e.name = b.languageParser.translate("chat", "pasted_image_title", {
                                        dateTime: q.parseChatTime(new Date)
                                    }))
                                }
                            }
                            e && !c && (b.viewHandler.startUpload(e, null), a.preventDefault())
                        }
                    }, "chatTextarea", "chatTextareaPaste")
                },
                toggleSound: function() {
                    this.container.getElementById("soundOption").className = h.soundOn() ? "activeSound" : "disabledSound"
                }
            });
            R.prototype.hide = function() {
                this.container.restyle("display", "none !important")
            };
            R.prototype.show = function() {
                this.container.restyle("display", "block !important")
            };
            R.prototype.restyleEmbed = function() {
                var a = document.getElementById(k.embedded);
                this.wrapper.addClass("embedded");
                this.container.getElementById("headerBoxControlsContainer").outerHTML = "";
                if (h.isEmbedded) return a ? b.viewHandler.onEmbeddedWindowResize() : void 0;
                this.container.restyle("width", "100% !important");
                this.container.restyle("height", "100% !important")
            };
            R.prototype.updateGreetings = function(a) {
                var f, d, c, e;
                if (this.container.elementReferrer) {
                    if (f =
                        this.container.getElementById("drop-text")) f.childNodes[0].innerHTML = b.languageParser.translate("chat", "dragDropText");
                    if (a = a || u.pageStatus()) f = this.container.getElementById("shortMessage"), d = this.container.getElementById("greetingsContainer"), f && (this.chatTextarea && d) && (c = m.getShortMessage(a), e = m.getLongMessage(a), null !== c && null !== e && (f.innerHTML = c, d.innerHTML = e, "online" === a && h.onlineGreeting && (a = q.rawDecode(h.onlineGreeting.actionMessage), oa ? this.chatTextarea.elementReferrer.placeholder = a : (this.chatTextarea.elementReferrer.value =
                        a, q.togglePlaceholderText(this.chatTextarea.elementReferrer, a)))))
                }
            };
            R.prototype.addClassName = function() {
                this.wrapper && this.wrapper.elementReferrer && (h.isRTL() ? (this.wrapper.addClass("rtl-direction"), this.wrapper.removeClass("ltr-direction")) : (this.wrapper.addClass("ltr-direction"), this.wrapper.removeClass("rtl-direction")))
            };
            R.prototype.toggleEndChatOption = function(a) {
                var b = this.container.getElementById("endChatOption");
                b && (b.style.display = a ? "block" : "none")
            };
            var qa = R.extend({
                init: function() {
                    var a =
                        this;
                    this._super.apply(this, arguments);
                    this.wrapper.template = this.wrapper.template.replace("__GREETINGS__", v.greetingsOverlay);
                    b.eventEmitter.on("formClosed", function() {
                        var f = a.container.getElementById("chatPanel");
                        if (f)
                            if (h.showPreChatForm && !u.prechatFormSubmitted) b.formHandler.openForm("preChatForm");
                            else if (f.style.display = "block", b.viewHandler.newMessageNotSeen && b.viewHandler.checkUnseenMessages(), !B && a.container.getElementById("chatTextarea") && "max" === u.chatWindowState()) {
                            var d = q.getDocument(q.getDocument(e).getElementById(a.container.elementId));
                            if (d && d.getElementById("chatTextarea")) try {
                                setTimeout(function() {
                                    d.getElementById("chatTextarea").focus()
                                }, 0)
                            } catch (c) {}
                        }
                    });
                    b.eventEmitter.on("formOpened", function() {
                        a.container && a.container.getElementById("chatPanel") && (a.container.getElementById("chatPanel").style.display = "none")
                    });
                    b.eventEmitter.on("localeChanged", function() {
                        a.insertText();
                        a.setLinkTitle();
                        a.toggleSound()
                    })
                },
                buildView: function() {
                    this._super(this);
                    this.container.documentRef.getElementById("chatTableWrapper").style.display = "none";
                    this.setLinkTitle();
                    this.insertText();
                    this.wrapper && this.wrapper.addClass(q.getContrast(h.headerTxtColor));
                    this.attachEvents()
                },
                insertText: function() {
                    var a;
                    if (this.container) {
                        this.container.getElementById("tawkContent").innerHTML = b.languageParser.translate("overlay", "tawkContent");
                        this.container.getElementById("cancelTawkRedirect").innerHTML = b.languageParser.translate("form", "CancelButton");
                        this.container.getElementById("tawkRedirect").innerHTML = b.languageParser.translate("form", "visitButton");
                        this.container.getElementById("printOption").childNodes[1].innerHTML =
                            b.languageParser.translate("menu", "print_transcript");
                        this.container.getElementById("emailTranscriptOption").childNodes[1].innerHTML = b.languageParser.translate("rollover", "emailTranscriptOption");
                        this.container.getElementById("endChatOption").childNodes[1].innerHTML = b.languageParser.translate("rollover", "end");
                        this.container.getElementById("closeMenu").innerHTML = b.languageParser.translate("menu", "CloseMenu") + "&nbsp;<span></span>";
                        this.container.getElementById("openMenu").innerHTML = b.languageParser.translate("menu",
                            "Options");
                        this.container.getElementById("agentListLabel").innerHTML = b.languageParser.translate("menu", "AgentList");
                        this.container.getElementById("changeNameOption").childNodes[1].innerHTML = b.languageParser.translate("menu", "change_name");
                        this.container.getElementById("maxFileNotificationMessage").innerHTML = b.languageParser.translate("notifications", "maximum_file_upload_warning", {
                            strongStart: "<strong>",
                            strongEnd: "</strong>",
                            limitFileNumber: "5"
                        });
                        this.container.getElementById("maxSizeNotificationMessage").innerHTML =
                            b.languageParser.translate("notifications", "maximum_size_upload_warning", {
                                strongStart: "<strong>",
                                strongEnd: "</strong>",
                                limitFileSize: "50mb"
                            });
                        a = q.getElementsByClassName(this.container.getElementById("chatContainer"), "closeNotification");
                        for (var f = 0; f < a.length; f++) a[f].innerHTML = b.languageParser.translate("form", "CloseButton");
                        a = this.container.getElementById("uploadFileOption");
                        q.isFileInputSupported ? a.childNodes[0].childNodes[1].innerHTML = b.languageParser.translate("rollover", "uploadFile") : a.parentNode.removeChild(a)
                    }
                },
                attachEvents: function() {
                    var a = this,
                        f = null;
                    this.container.attachUserEventListener("scroll", function(a) {
                        null !== f && clearTimeout(f);
                        f = setTimeout(function() {
                            !b.formHandler.currentForm && (b.viewHandler.newMessageNotSeen && ("max" === u.chatWindowState() || h.isEmbedded || h.isPopup)) && b.viewHandler.checkUnseenMessages()
                        }, 300)
                    }, "chatContainer", "chatScroll");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                            h.whiteLabel() || (a.container.getElementById("tawkToContent").style.display = "block")
                        },
                        b.viewHandler.tawktoLinkName, "tawktoclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                        a.container.getElementById("tawkToContent").style.display = "none"
                    }, "cancelTawkRedirect", "cancelTawkRedirectclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                            a.container.getElementById("tawkToContent").style.display = "none";
                            e.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + P.pageId)
                        }, "tawkRedirect",
                        "tawkRedirectClicn");
                    this.chatTextarea.attachUserEventListener("keydown", function(f) {
                        var c = b.eventHandler.getTargetElement(f);
                        setTimeout(function() {
                            c.value ? (a.container.getElementById("ratingContainer").style.display = "none", a.container.getElementById("textareaContainer").className = "") : (a.container.getElementById("ratingContainer").style.display = "block", a.container.getElementById("textareaContainer").className = "additionalPadding")
                        }, 0)
                    }, null, "chatinputfocus");
                    this.chatTextarea.attachUserEventListener("blur",
                        function(f) {
                            b.eventHandler.getTargetElement(f).value || (a.container.getElementById("ratingContainer").style.display = "block", a.container.getElementById("textareaContainer").className = "additionalPadding")
                        }, null, "chatinputblur");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                        a.container.getElementById("optionsContainer").style.display = "block";
                        a.container.getElementById("closeMenu").style.display = "block";
                        try {
                            b.target.style.display = "none"
                        } catch (f) {
                            a.container.getElementById("openMenu").style.display =
                                "none"
                        }
                    }, "openMenu", "openMenuclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                        a.closeMenu()
                    }, "closeMenu", "closeMenuclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        b.formHandler.openForm("emailTranscriptForm");
                        a.closeMenu();
                        b.eventHandler.cancelEvent(f)
                    }, "emailTranscriptOption", "emailclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                            b.formHandler.openForm("endChatForm");
                            a.closeMenu();
                            b.eventHandler.cancelEvent(f)
                        },
                        "endChatOption", "endChatOptionClicked");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        "preChatForm" === b.formHandler.currentForm || "offlineForm" === b.formHandler.currentForm || "none" === a.container.getElementById("chatTableWrapper").style.display ? (b.eventHandler.cancelEvent(f), b.sessionHandler.notifyWindowState("min")) : (b.formHandler.openForm("endChatForm"), a.closeMenu(), b.eventHandler.cancelEvent(f))
                    }, "endChat", "endChatclick");
                    this._super(this)
                },
                toggleSound: function() {
                    this._super();
                    this.container.getElementById("soundTitle").innerHTML = h.soundOn() ? b.languageParser.translate("menu", "sound_on") : b.languageParser.translate("menu", "sound_off")
                }
            });
            qa.prototype.closeMenu = function() {
                this.container.getElementById("optionsContainer").style.display = "none";
                this.container.getElementById("openMenu").style.display = "block";
                this.container.getElementById("closeMenu").style.display = "none"
            };
            qa.prototype.setLinkTitle = function() {
                this.container && (this.container.getElementById("ratePositive").setAttribute("title",
                    b.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title", b.languageParser.translate("rollover", "negativeRating")), h.isEmbedded || h.isPopup || (this.container.getElementById("minimizeChat").setAttribute("title", b.languageParser.translate("rollover", "minimize")), this.container.getElementById("popoutChat").setAttribute("title", b.languageParser.translate("rollover", "popOut")), this.container.getElementById("endChat").setAttribute("title",
                    b.languageParser.translate("rollover", "end"))))
            };
            qa.prototype.chatEnded = function() {
                var a, f = this,
                    d = this.container.getElementById("agentWrapper"),
                    c = this.container.getElementById("endChat"),
                    e = this.container.getElementById("agentBar"),
                    g = this.container.getElementById("agentList"),
                    h = this.container.getElementById("headerAccountStateContainer"),
                    k = this.container.getElementById("chatContainerWrapper"),
                    m = this.container.getElementById("agentProfileContainer"),
                    p = this.container.getElementById("options");
                a = new D("chatEnded");
                a.template = q.escapeTemplateReplacement(a.template, [{
                    placeholder: "__CHAT_ENDED__",
                    textReplace: b.languageParser.translate("chat", "chatEnded")
                }, {
                    placeholder: "__START_CHAT__",
                    textReplace: b.languageParser.translate("chat", "newChat")
                }, {
                    placeholder: "__EMAIL_TRANCRIPT__",
                    textReplace: b.languageParser.translate("rollover", "emailTranscriptOption")
                }]);
                a.restyle("display", "block");
                this.container.getElementById("innerWrapper").appendChild(a.buildView());
                this.container.attachUserEventListener(b.viewHandler.clickEvent,
                    function(a) {
                        b.formHandler.openForm("emailTranscriptForm");
                        f.closeMenu();
                        b.eventHandler.cancelEvent(a)
                    }, "emailTranscript", "emailTranscript");
                this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                    f.chatStarted();
                    b.chatHandler.startNewChat()
                }, "newChat", "newChat");
                d && (d.style.display = "none");
                m && (m.innerHTML = "");
                e && (e.style.display = "none");
                g && (g.innerHTML = "");
                h && (h.style.display = "block");
                c && (c.style.visibility = "hidden");
                k && (k.className += " chat-ended");
                p && (p.style.display = "none")
            };
            qa.prototype.chatStarted = function() {
                var a = this.container.getElementById("chatEnded"),
                    b = this.container.getElementById("endChat"),
                    d = this.container.getElementById("chatContainerWrapper"),
                    c = this.container.getElementById("options");
                a && a.parentNode.removeChild(a);
                b && (b.style.visibility = "visible");
                d && (d.className = d.className.replace("chat-ended", ""));
                c && (c.style.display = "block")
            };
            var E = H.extend({
                init: function() {
                    var a = this,
                        f = function() {
                            a.dragElement && (h.isRTL() ? a.dragElement.massRestyle({
                                left: "96px !important",
                                right: "0px !important"
                            }) : a.dragElement.massRestyle({
                                left: "0px ",
                                right: "96px !important"
                            }))
                        };
                    this._super(this);
                    this.iframeXOffsetPosition = 10;
                    this.startY = this.startX = this.iframeYOffsetPosition = 0;
                    this.dragElement = new D(q.getRandomName(), q.getGenericStyle({
                        height: "45px",
                        top: "1px",
                        backgroundcolor: "#fff",
                        zindex: "999997",
                        cursor: "move",
                        opacity: "0"
                    }) + 'width: expression(this.parentNode.offsetWidth - 306 + "px") !important;');
                    f();
                    this.overlayElement = new D(null, q.getGenericStyle({
                        left: "0px",
                        top: "0px",
                        zindex: "1000001",
                        cursor: "move",
                        width: "100%",
                        height: "100%",
                        display: "none",
                        "float": "left"
                    }));
                    this.iframeContainer = new D(q.getRandomName(), q.getGenericStyle({
                        display: "none",
                        bottom: "0",
                        minwidth: "0",
                        minheight: "0",
                        right: "10px",
                        zindex: M && 9 > J ? "none" : "2000000000",
                        position: "fixed"
                    }));
                    this.resizeFromLeft = new D(q.getRandomName(), q.getGenericStyle({
                        height: "100%",
                        left: "0px",
                        right: "96px",
                        top: "0px",
                        zindex: "999998",
                        cursor: "w-resize",
                        width: "6px"
                    }));
                    this.resizeFromRight = new D(q.getRandomName(), q.getGenericStyle({
                        height: "100%",
                        width: "6px",
                        right: "0px",
                        top: "0px",
                        zindex: "999998",
                        cursor: "e-resize"
                    }));
                    this.resizeFromTop = new D(q.getRandomName(), q.getGenericStyle({
                        height: "6px",
                        width: "100%",
                        right: "0px",
                        top: "0px",
                        zindex: "999998",
                        cursor: "n-resize"
                    }));
                    this.resizeFromBottom = new D(q.getRandomName(), q.getGenericStyle({
                        height: "6px",
                        width: "100%",
                        right: "0px",
                        bottom: "0px",
                        zindex: "999998",
                        cursor: "s-resize"
                    }));
                    this.resizeTopLeft = new D(q.getRandomName(), q.getGenericStyle({
                        height: "12px",
                        width: "12px",
                        left: "0px",
                        top: "0px",
                        zindex: "999998",
                        cursor: "nw-resize"
                    }));
                    this.resizeTopRight = new D(q.getRandomName(), q.getGenericStyle({
                        height: "12px",
                        width: "12px",
                        right: "0px",
                        top: "0px",
                        zindex: "999998",
                        cursor: "ne-resize"
                    }));
                    this.resizeBottomLeft = new D(q.getRandomName(), q.getGenericStyle({
                        height: "12px",
                        width: "12px",
                        bottom: "0px",
                        left: "0px",
                        zindex: "999998",
                        cursor: "sw-resize"
                    }));
                    this.resizeBottomRight = new D(q.getRandomName(), q.getGenericStyle({
                        height: "12px",
                        width: "12px",
                        bottom: "0px",
                        right: "0px",
                        zindex: "999999",
                        cursor: "se-resize"
                    }));
                    p = new qa(this.tawktoLinkName, this.bottomContainerName);
                    this.iframeContainer.addChildViews([p.container]);
                    h.isPopup || h.isEmbedded || (s = new ta, this.indicator = new la(s.chatIndicator), this.iframeContainer.addChildViews([s.container, s.chatIndicator, s.bubbleContainer, this.dragElement, this.resizeFromLeft, this.resizeFromRight, this.resizeFromTop, this.resizeFromBottom, this.resizeTopLeft, this.resizeTopRight, this.resizeBottomLeft, this.resizeBottomRight, this.overlayElement]));
                    this.chatContainer = p.container;
                    this.iframeContainer.buildView();
                    u.pageStatus.subscribe(function(b) {
                        a.updateViewByStatus(b)
                    });
                    A.rating.subscribe(function(b) {
                        a.changeRating(b)
                    });
                    h.isPopup || h.isEmbedded || u.chatWindowState.subscribe(function(b) {
                        "max" === b ? a.maximizeWidget() : a.minimizeWidget()
                    });
                    h.minStyle.subscribe(function() {
                        s && s.container.elementReferrer && (s.container.insertCssFile(h.minStyle(), !0), s.container.documentRef.getElementById("tawkchat-minified-wrapper").className = q.getContrast(h.headerTxtColor))
                    });
                    h.maxStyle.subscribe(function() {
                        p && p.container.elementReferrer && (p.container.insertCssFile(h.maxStyle(), !0), p.wrapper.removeClass("black"),
                            p.wrapper.removeClass("white"), p.wrapper.addClass(q.getContrast(h.headerTxtColor)))
                    });
                    h.isRTL.subscribe(function() {
                        f()
                    });
                    b.chatHandler.hasChatStarted.subscribe(function(a) {
                        p.toggleEndChatOption(a)
                    })
                },
                show: function() {
                    p.hide();
                    h.isEmbedded || h.isPopup ? (this.iframeContainer.restyle("position", "static"), this.iframeContainer.restyle("right", ""), this.iframeContainer.restyle("left", ""), this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%"), p.show()) : (this.indicator.initIndicator(),
                        X && this.fixContainerBorder(), b.main.maximize ? this.maximizeWidget() : this.minimizeWidget());
                    this.updateViewByStatus(u.pageStatus());
                    this._super();
                    q.redraw(this.iframeContainer.elementReferrer)
                },
                showEmbeddedGreetings: function() {},
                hideEmbeddedGreetings: function() {}
            });
            E.prototype.maximizeWidget = function() {
                this.indicator && this.indicator.hide();
                if ("max" !== h.onClickAction) return this.popoutWidget();
                h.hideWidgetOnOffline && "offline" === u.pageStatus() && b.formHandler.openForm("offlineForm");
                (h.hideWidgetOnLoad ||
                    h.hideWidgetOnOffline) && this.showWidget();
                this.iframeContainer.restyle("bottom", this.iframeYOffsetPosition + "px");
                "br" === h.chatPosition() || "tr" === h.chatPosition() || "cr" === h.chatPosition() ? (this.iframeContainer.restyle("right", this.iframeXOffsetPosition + "px"), this.iframeContainer.restyle("left", "auto")) : (this.iframeContainer.restyle("left", this.iframeXOffsetPosition + "px"), this.iframeContainer.restyle("right", "auto"));
                p.show();
                s && s.container && s.hide();
                k.onChatMaximized();
                this.wasScrollbarDown && this.scrollToBottom();
                b.viewHandler.newMessageNotSeen && b.viewHandler.checkUnseenMessages();
                if (!B && this.chatContainer.getElementById("chatTextarea")) {
                    var a = q.getDocument(q.getDocument(e).getElementById(p.container.elementId));
                    if (a && a.getElementById("chatTextarea")) try {
                        setTimeout(function() {
                            a.getElementById("chatTextarea").focus()
                        }, 0)
                    } catch (f) {}
                }
            };
            E.prototype.minimizeWidget = function() {
                var a;
                if (!h.isPopup && !h.isEmbedded) {
                    p.container.elementReferrer.blur();
                    p.hide();
                    b.viewHandler.lastFocusedElement && setTimeout(function() {
                            b.viewHandler.lastFocusedElement.focus()
                        },
                        0);
                    if (h.hideWidgetOnLoad) return this.hideWidget();
                    this.wasScrollbarDown = this.ifScrollbarDown();
                    this.iframeYOffsetPosition = parseInt(this.iframeContainer.elementReferrer.style.bottom.replace("px", ""), 10);
                    a = "br" == h.chatPosition() ? parseInt(this.iframeContainer.elementReferrer.style.right.replace("px", ""), 10) : parseInt(this.iframeContainer.elementReferrer.style.left.replace("px", ""), 10);
                    isNaN(a) || (this.iframeXOffsetPosition = a);
                    "br" === h.chatPosition() || "tr" === h.chatPosition() || "cr" === h.chatPosition() ? (this.iframeContainer.restyle("bottom",
                        "0px"), this.iframeContainer.restyle("right", "0px"), this.iframeContainer.restyle("left", "auto")) : (this.iframeContainer.restyle("bottom", "0px"), this.iframeContainer.restyle("left", "0px"), this.iframeContainer.restyle("right", "auto"));
                    s.show();
                    k.onChatMinimized()
                }
            };
            E.prototype.popoutWidget = function() {
                this.indicator.hide();
                this.popoutWin && !this.popoutWin.closed && this.popoutWin.focus ? this.popoutWin.focus() : (this.popoutWin = e.open("https://tawk.to/" + P.tawkId + "/popout/" + $_Tawk_WidgetId + "/?$_tawk_popout=true&$_tawk_sk=" +
                    u.sessionKey + "&$_tawk_tk=" + u.transferKey + "&v=" + u.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"), u.chatWindowState("min"))
            };
            E.prototype.toggleWidget = function() {
                var a = u.chatWindowState();
                u.chatWindowState("min" === a ? "max" : "min")
            };
            E.prototype.removeBubble = function() {
                try {
                    b.eventEmitter.emit("notifyBubbleClosed")
                } catch (a) {
                    c.handleError("Unable to emit notifyBubbleClosed", a.fileName, a.lineNumber, a.stack)
                }
            };
            E.prototype.insertPopupStyle = function() {
                var a =
                    document.getElementsByTagName("head")[0],
                    f = document.createDocumentFragment(),
                    d = q.createElement(document, "style", {
                        type: "text/css"
                    }),
                    c;
                c = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + h.maxStyle());
                d.styleSheet ? d.styleSheet.cssText = c.nodeValue : d.appendChild(c);
                f.appendChild(d);
                a.appendChild(f);
                document.body.className = "popup"
            };
            E.prototype.begin = function() {
                var a = this,
                    f = document.getElementById(k.embedded),
                    d;
                b.main.started || (this.iframeContainer && (d = document.getElementById(this.iframeContainer.elementId)),
                    d && d.parentNode.removeChild(d), h.isEmbedded && f ? (f.appendChild(this.iframeContainer.elementReferrer), b.eventHandler.listen(e, "resize", function() {
                        a.onEmbeddedWindowResize()
                    }, "windowresize")) : (document.body.appendChild(this.iframeContainer.elementReferrer), h.isPopup ? this.insertPopupStyle() : (s.buildView(), this.dragElement.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b)
                    }, null, "dragfocus"), this.resizeFromLeft.attachUserEventListener("mousedown", function(b) {
                            a.onHeaderMouseDown(b, "left")
                        },
                        null, "resizeLeftfocus"), this.resizeFromRight.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b, "right")
                    }, null, "resizeRightfocus"), this.resizeFromTop.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b, null, "top")
                    }, null, "resizeTopfocus"), this.resizeFromBottom.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b, null, "bottom")
                    }, null, "resizeBottomfocus"), this.resizeTopLeft.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b, "left",
                            "top")
                    }, null, "resizeTopLeftfocus"), this.resizeTopRight.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b, "right", "top")
                    }, null, "resizeTopRightfocus"), this.resizeBottomLeft.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b, "left", "bottom")
                    }, null, "resizeBottomLeftfocus"), this.resizeBottomRight.attachUserEventListener("mousedown", function(b) {
                        a.onHeaderMouseDown(b, "right", "bottom")
                    }, null, "resizeBottomRightfocus"), b.eventHandler.listen(e, "resize", function() {
                            a.onWindowResize()
                        },
                        "windowresize"))), p.buildView(), "br" != h.chatPosition() && this.iframeContainer.restyle("left", "10px"))
            };
            E.prototype.fixContainerBorder = function() {
                var a, f = this;
                this.iframeContainer.restyle("position", "absolute");
                b.eventHandler.listen(e, "scroll", function() {
                    clearTimeout(a);
                    f.iframeContainer.restyle("bottom", "0px");
                    f.iframeContainer.restyle("visibility", "hidden");
                    f.iframeContainer.restyle("visibility", "visible");
                    a = setTimeout(function() {
                        document.body.className = document.body.className;
                        document.body.style.visibility =
                            "hidden";
                        document.body.style.visibility = "visible"
                    }, 50)
                }, "windowscroll")
            };
            E.prototype.hideWidget = function() {
                this.iframeContainer.hide();
                k.onChatHidden()
            };
            E.prototype.showWidget = function() {
                this.scrollToBottom();
                this.iframeContainer.show()
            };
            E.prototype.toggleVisibility = function() {
                this.scrollToBottom();
                this.iframeContainer.toggle()
            };
            E.prototype.isWidgetHidden = function() {
                return !this.iframeContainer.isVisible
            };
            E.prototype.onDragMove = function(a) {
                this.setChatWindowXPosition(a.clientX);
                this.setChatWindowYPosition(a.clientY)
            };
            E.prototype.onHeaderMouseUp = function() {
                this.overlayElement.restyle("display", "none !important");
                this.resetFrameDimensions();
                this.isResized && (this.isResized = !1, b.socketManager.sendToConnector("notifyWidgetResized"));
                b.eventHandler.removeEventHandler(document, "mousemove", this.mouseMovehandler);
                b.eventHandler.removeEventHandler(document, "mouseup", this.mouseUpHandler)
            };
            E.prototype.onHeaderMouseDown = function(a, f, d) {
                var c = this,
                    g = b.eventHandler.getTargetElement(a);
                g.id !== this.resizeFromLeft.elementId && g.id !==
                    this.resizeFromRight.elementId && g.id !== this.resizeFromTop.elementId && g.id !== this.resizeFromBottom.elementId && g.id !== this.resizeTopLeft.elementId && g.id !== this.resizeBottomLeft.elementId && g.id !== this.resizeTopRight.elementId && g.id !== this.resizeBottomRight.elementId && g.id !== this.dragElement.elementId || (1 === a.button && !e.event && !p.documentRef.event || 1 < a.button) || (b.eventHandler.cancelEvent(a), this.overlayElement.restyle("display", "block !important"), a = this.getActualViewportDimensions(), this.actualViewPortWidth =
                        a.width, this.actualViewPortHeight = a.height, this.startOffsetY = this.startOffsetX = 0, this.mouseMovehandler = g.id === this.dragElement.elementId ? b.eventHandler.listen(document, "mousemove", function(a) {
                            c.onDragMove(a);
                            c.redrawIE()
                        }, "dragmove") : b.eventHandler.listen(document, "mousemove", function(a) {
                            c.setResizedDimensions(a, f, d);
                            c.isResized = !0;
                            c.redrawIE()
                        }, "dragmove"), this.mouseUpHandler = b.eventHandler.listen(document, "mouseup", function(a) {
                            c.onHeaderMouseUp(a)
                        }, "dragleave"))
            };
            E.prototype.redrawIE = function() {
                "explorer" ===
                G && (this.iframeContainer.restyle("visibility", "hidden !important"), this.iframeContainer.restyle("visibility", "visible !important"))
            };
            E.prototype.setResizedDimensions = function(a, f, d) {
                var c, e = this.iframeContainer.elementReferrer;
                parseInt(p.frameWidth.replace("px", ""), 10);
                parseInt(p.frameHeight.replace("px", ""), 10);
                var g = this.ifScrollbarDown();
                this.isRight && "undefined" !== typeof this.isRight || (this.isRight = h.isRightPositioned());
                this.startX = a.clientX;
                this.startY = a.clientY;
                if (f) {
                    c = this.isRight ? "right" :
                        "left";
                    var k = parseInt(q.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
                        m = parseInt(e.style[c].replace("px", "")),
                        s = this.isRight ? this.actualViewPortWidth - a.clientX : a.clientX,
                        s = 0 > s ? 0 : s;
                    this.isRight && "right" === f || !this.isRight && "left" === f ? (f = k - (s - m), 280 > f ? f = 280 : (s > this.actualViewPortWidth - f - 1 && (s = this.actualViewPortWidth - f - 1), e.style.cssText += ";" + c + ":" + s + "px !important", this.startOffsetX = f)) : this.startOffsetX = f = this.isRight ? this.actualViewPortWidth - a.clientX - m : a.clientX -
                        m;
                    280 <= f && 0 < this.actualViewPortWidth - (f + parseInt(e.style[c].replace("px", ""), 10)) && this.setWidth(f)
                }
                d && ("bottom" === d ? (d = parseInt(e.style.bottom.replace("px", "")), a = this.actualViewPortHeight - a.clientY, 0 > a && (a = 0), d = parseInt(q.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10) - (a - d), 330 > d ? d = 330 : (a > this.actualViewPortHeight - d - 1 && (a = this.actualViewPortHeight - d - 1), e.style.cssText += ";bottom:" + a + "px !important", this.startOffsetY = d)) : (startOffsetY = parseInt(e.style.bottom.replace("px",
                    ""), 10), d = this.actualViewPortHeight - a.clientY - startOffsetY, this.startOffsetY = this.startY - startOffsetY), 330 <= d && 0 < this.actualViewPortHeight - (d + parseInt(e.style.bottom.replace("px", ""), 10)) && this.setHeight(d));
                g && this.scrollToBottom();
                b && b.formHandler && b.formHandler.resize()
            };
            E.prototype.setChatWindowXPosition = function(a) {
                var b, d, c = parseInt(p.frameWidth.replace("px", ""), 10);
                "undefined" === typeof this.isRight && (this.isRight = h.isRightPositioned());
                this.isRight ? (b = "right", d = parseInt(this.iframeContainer.elementReferrer.style.right,
                    10)) : (b = "left", d = -parseInt(this.iframeContainer.elementReferrer.style.left, 10));
                this.startOffsetX || (this.startOffsetX = a + d);
                a = this.isRight ? this.startOffsetX - a : a - this.startOffsetX;
                20 > a ? a = 0 : 20 > this.actualViewPortWidth - (a + c) && (a = this.actualViewPortWidth - c);
                this.iframeContainer.restyle(b, a + "px !important")
            };
            E.prototype.setChatWindowYPosition = function(a) {
                var b, d, c = parseInt(p.frameHeight.replace("px", ""), 10);
                "auto" === this.iframeContainer.elementReferrer.style.bottom ? (styleKey = "top", b = -parseInt(this.iframeContainer.elementReferrer.style.top,
                    10), d = !1) : (styleKey = "bottom", b = parseInt(this.iframeContainer.elementReferrer.style.bottom, 10), d = !0);
                this.startOffsetY || (this.startOffsetY = a + b);
                a = d ? this.startOffsetY - a : a - this.startOffsetY;
                20 > a ? a = 0 : 20 > this.actualViewPortHeight - (a + c) && (a = this.actualViewPortHeight - c);
                this.iframeContainer.restyle(styleKey, a + "px !important")
            };
            E.prototype.onWindowResize = function() {
                var a = this;
                clearTimeout(this.resizeTimeout);
                this.wasScrollbarDown = this.ifScrollbarDown();
                this.resizeTimeout = setTimeout(function() {
                        a.onWindowResizeTimeout()
                    },
                    100)
            };
            E.prototype.onWindowResizeTimeout = function() {
                var a = this.getActualViewportDimensions(),
                    b = a.width,
                    a = a.height,
                    d = this.iframeContainer.elementReferrer,
                    c = this.isBottom ? parseInt(d.style.bottom.replace("px", ""), 10) : parseInt(d.style.top.replace("px", ""), 10),
                    e = this.isRight ? parseInt(d.style.right.replace("px", ""), 10) : parseInt(d.style.left.replace("px", ""), 10),
                    g = parseInt(p.frameWidth.replace("px", ""), 10),
                    h = parseInt(p.frameHeight.replace("px", ""), 10);
                g + e > b && (e = b - g, 0 > e && (g += e, e = 0, this.setWidth(g)), this.isRight ?
                    d.style.right = e + "px" : d.style.left = e + "px");
                h + c > a && (c = a - h, 0 > c && (h += c, c = 0, this.setHeight(h)), this.isBottom ? d.style.bottom = c + "px" : d.style.top = c + "px");
                this.wasScrollbarDown && this.scrollToBottom();
                this.resetFrameDimensions()
            };
            E.prototype.setWidth = function(a) {
                if (!a || 300 > a) a = 300;
                X && this.dragElement.restyle("width", a - 102 + "px !important");
                this.chatContainer.restyle("width", a + "px !important")
            };
            E.prototype.setHeight = function(a) {
                if (!a || 350 > a) a = 350;
                this.chatContainer.restyle("height", a + "px !important")
            };
            E.prototype.onEmbeddedWindowResize =
                function() {
                    null === this.isWidgetElementDimensionsNull && this.setWidgetElementDimensions();
                    this.isWidgetElementDimensionsNull ? (this.setWidth(h.maximizedDimensions().width), this.setHeight(h.maximizedDimensions().height)) : (this.chatContainer.restyle("width", "100%"), this.chatContainer.restyle("height", "100%"))
                };
            E.prototype.setWidgetElementDimensions = function() {
                var a = document.getElementById(k.embedded);
                this.isWidgetElementDimensionsNull = 280 > a.clientWidth || 330 > a.clientHeight ? !0 : !1
            };
            E.prototype.resetFrameDimensions =
                function() {
                    var a = parseInt(q.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
                        b = parseInt(q.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10);
                    p.frameWidth = a + "px";
                    p.frameHeight = b + "px"
                };
            E.prototype.isWidgetElementDimensionsNull = null;
            E.prototype.styleAgentBar = function() {
                var a, f = this.chatContainer;
                if (f) {
                    a = f.getElementById("agentWrapper");
                    try {
                        0 < b.agents.agentsCount ? (f.getElementById("headerAccountStateContainer").style.display = "none", a.style.display =
                            "block") : (f.getElementById("headerAccountStateContainer").style.display = "block", a.style.display = "none")
                    } catch (d) {
                        c.handleError("headerAccountStateContainer is null", d.fileName, d.lineNumber, d.stack)
                    }
                }
            };
            E.prototype.expandAgentList = function(a) {
                var b, d;
                if (d = this.chatContainer) b = d.getElementById("agentBar"), d = d.getElementById("expandableLink"), 1 === a.button && !e.event || 1 < a.button || (-1 === b.className.indexOf("expanded") ? (b.className += " expanded", d.className = "expanded") : (b.className = b.className.replace("expanded",
                    ""), d.className = ""), this.styleAgentBar())
            };
            E.prototype.resetView = function() {
                var a, b, d, c, e, g;
                if (g = this.chatContainer) a = g.getElementById("chatWrapper"), d = g.getElementById("agentList"), e = g.getElementById("agentBar"), c = g.getElementById("expandableLink"), g = g.getElementById("headerAccountStateContainer"), a && (b = a.lastChild, a.innerHTML = "", a.appendChild(b)), d && (d.innerHTML = ""), e && (a = e.parentNode.childNodes[0], e.className = "", a && -1 !== a.className.indexOf("agentWrapper") && a.parentNode.removeChild(a)), c && (c.style.visibility =
                    "hidden", c.className = ""), g && (g.style.display = "block"), this.showEmbeddedGreetings(), this.show()
            };
            E.prototype.handleIndicatorToggle = function(a) {
                s && (s.container && s.chatIndicator) && (a = s.chatIndicator.getElementById("tawkchat-chat-indicator"), a.style.visibility = "visible")
            };
            var ua = E.extend({
                init: function() {
                    this._super(this);
                    this.mainAgent = null
                },
                appendMessage: function(a) {
                    var b, d, c = {
                            "chat-message-row": v["chat-message-row"],
                            "chat-resend-link": v["chat-resend-link"],
                            "chat-message-owner-agent": v["chat-message-owner-agent"],
                            "chat-message-owner-visitor": v["chat-message-owner-visitor"],
                            "chat-message-container": v["chat-message-container"],
                            "chat-notification-container": v["chat-notification-container"],
                            "chat-message-status-row": v["chat-message-status-row"],
                            "chat-divider": v["chat-divider"]
                        },
                        e = q.parseChatTime(a.time);
                    "a" === a.senderType ? (d = (b = (d = A.agentProfiles[a.ownerId]) && d.pi ? u.agentImgUrl + "/" + A.agentProfiles[a.ownerId].pi : "") ? "url('" + b + "')" : "transparent", b = "explorer" === G && 9 > J ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                        b + "',sizingMethod='scale');" : "", "transparent" !== d && (b += "background-position:0 0;background-size:28px 28px"), c["chat-message-owner-agent"] = c["chat-message-owner-agent"].replace("__IMAGE_URL__", d).replace("__IE_IMAGE_SCALE__", b)) : "s" === a.senderType && (c["chat-message-owner-agent"] = c["chat-message-owner-agent"].replace("__IMAGE_URL__", "").replace("__IE_IMAGE_SCALE__", ""));
                    c["chat-message-status-row"] = a.isPending ? v["chat-message-pending-row"] : c["chat-message-status-row"].replace("__TIME__", e).replace("__TIME_CLASS__",
                        "v" === a.senderType ? "visitor" : "agent");
                    return this._super(a, c)
                },
                showEmbeddedGreetings: function() {
                    var a;
                    p.container && (a = p.container.getElementById("greetingsOverlay"), chatWrapper = p.container.getElementById("chatTableWrapper"), a && chatWrapper && (chatWrapper.style.display = "none", a.style.display = "block", this._super(this)))
                },
                hideEmbeddedGreetings: function() {
                    var a, b;
                    p.container && (a = p.container.getElementById("greetingsOverlay"), b = p.container.getElementById("chatTableWrapper"), a && b && (a.style.display = "none",
                        b.style.display = "table", this._super(this)))
                },
                appendAgent: function(a) {
                    var f, d, c, e, g, h, k = this;
                    e = this.chatContainer;
                    f = e.getElementById("agentProfileContainer");
                    var m = e.getElementById("agentList");
                    d = e.getElementById("chatWrapper");
                    e && (f && m) && (b.agents.agentsCount++, 1 === b.agents.agentsCount ? (this.mainAgent = a, this.renderAgentHeader(a.pid), this.renderAgentMinimizedWidget(a.pid), d.className = "single-agent") : (p.container.getElementById("profileDetailNoImage") && (this.renderAgentHeader(this.mainAgent.pid), this.renderAgentMinimizedWidget(this.mainAgent.pid)),
                            this.changeDragElementSize(50), d.className = "multi-agent", this.expandAgentList = b.eventHandler.listen(f, "click", function(a) {
                                k.openAgentList()
                            }, "expandClick")), f = v["agent-profile"], d = v["agent-profile-image"], c = v["agent-profile-description"], e = new D("agentProfile-" + a.pid, null, {
                            className: "agentWrapper clearfix"
                        }, null, e.documentRef), g = a.pi ? u.agentImgUrl + "/" + a.pi : "", h = (h = "explorer" === G && 9 > J) ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + g + "',sizingMethod='scale');" : "", g = g ? "background-image : url('" +
                        g + "'); background-size : 40px 40px; background-position : 0px 0px;" : "", c = q.escapeTemplateReplacement(c, [{
                            placeholder: "__POSITION_CLASS__",
                            textReplace: a.pst ? "agentName" : "agentNameCentered"
                        }, {
                            placeholder: "__POSITION__",
                            textReplace: a.pst
                        }, {
                            placeholder: "__NAME__",
                            textReplace: a.n
                        }]), d = d.replace("__PROFILE_ID__", a.pid).replace("__IMAGE_URL__", g).replace("__IE_IMAGE_SCALE__", h), e.template = q.escapeTemplateReplacement(f, [{
                            placeholder: "__AGENT_PROFILE_DETAIL__",
                            textReplace: c
                        }, {
                            placeholder: "__AGENT_PROFILE_IMAGE__",
                            textReplace: d
                        }, {
                            placeholder: "__ID__",
                            textReplace: ""
                        }]), m.appendChild(e.buildView()), this.styleAgentBar())
                },
                changeDragElementSize: function(a) {
                    h.isRTL() ? this.dragElement.restyle("right", a + "px !important") : this.dragElement.restyle("left", a + "px !important")
                },
                removeAgent: function(a) {
                    var f, d;
                    if (d = p.container.elementReferrer ? p.container : null) b.agents.agentsCount--, f = d.getElementById("agentProfileContainer"), d = d.getElementById("agentProfile-" + a), 0 === b.agents.agentsCount ? (this.clearAgentHeader(), this.clearAgentFooter(),
                        this.changeDragElementSize(0)) : 1 === b.agents.agentsCount && (b.eventHandler.removeEventHandler(f, "click", this.expandAgentList), this.changeDragElementSize(0)), 0 < b.agents.agentsCount && this.mainAgent.pid === a && (this.mainAgent = A.agentProfiles[Object.keys(A.agentProfiles)[0]], this.renderAgentHeader(this.mainAgent.pid), this.renderAgentMinimizedWidget(this.mainAgent.pid)), d && d.parentNode.removeChild(d), 1 === b.agents.agentsCount && (this.renderAgentHeader(this.mainAgent.pid), this.renderAgentMinimizedWidget(this.mainAgent.pid));
                    this.styleAgentBar();
                    d = this.chatContainer;
                    f = d.getElementById("agentProfileContainer");
                    h.chatPosition();
                    a = h.minimizedDimensions().height;
                    h.minimizedDimensions();
                    h.chatBubble();
                    d.getElementById("agentList");
                    f && 0 === b.agents.agentsCount && (this.clearAgentHeader(), this.clearAgentFooter(), s && s.agentBarChanged(a))
                },
                renderAgentHeader: function(a) {
                    var f, d;
                    d = "";
                    var c = this.chatContainer,
                        e = c.getElementById("agentProfileContainer");
                    c && (e && a) && (a = A.agentProfiles[a], f = a.pi ? u.agentImgUrl + "/" + a.pi : "", this.clearAgentHeader(),
                        this.addProfileDetail(a), f || 1 < b.agents.agentsCount) && (d = "background-image : url('" + f + "'); background-size : 40px 40px; background-position : 0px 0px;", "explorer" === G && 9 > J && (d += "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + f + "',sizingMethod='scale');"), c.getElementById("innerWrapper").className = "border-corner has-profile-image ", c.getElementById("headerBoxControlsContainer") && this.dragElement.restyle("height", "50px !important"), f = new D("profileFallbackImage", null, {
                            className: "alias-image"
                        },
                        null, c.documentRef), d = new D("profileImage-" + a.pid, d, {
                        className: "alias-image"
                    }, null, c.documentRef), e.appendChild(f.buildView()), e.appendChild(d.buildView()))
                },
                clearAgentHeader: function() {
                    var a = this.chatContainer,
                        b = a.getElementById("agentProfileContainer");
                    b.innerHTML = "";
                    a.getElementById("innerWrapper").className = "border-corner";
                    a.getElementById("headerBoxControlsContainer") && this.dragElement.restyle("height", "45px !important");
                    b.style.height = "45px"
                },
                renderAgentMinimizedWidget: function(a) {
                    var f, d, c,
                        e, g, k, m, p = s && s.container && s.container.elementReferrer ? s.container : null;
                    if (p && (this.chatContainer && a) && (e = A.agentProfiles[a], a = p.getElementById("tawkchat-minified-agent-container"), d = p.getElementById("tawkchat-status-text-container"), c = p.getElementById("tawkchat-minified-link-container"), m = p.getElementById("tawkchat-chat-indicator"), h.chatBubble(), f = h.minimizedDimensions().height, h.minimizedDimensions(), chatIndicatorHeight = 37, heightDifference = 60 - f, a)) {
                        this.clearAgentFooter();
                        f = e.pi ? u.agentImgUrl + "/" +
                            e.pi : "";
                        g = new D("profileDetail", null, null, null, p.documentRef);
                        f || 1 < b.agents.agentsCount ? g.template = q.escapeTemplateReplacement(v["agent-profile-description"], [{
                            placeholder: "__POSITION_CLASS__",
                            textReplace: e.pst ? "agentName" : "agentNameCentered"
                        }, {
                            placeholder: "__POSITION__",
                            textReplace: e.pst
                        }, {
                            placeholder: "__NAME__",
                            textReplace: e.n
                        }]) : (k = e.pst ? "&nbsp-&nbsp" + e.pst : "", g.template = q.escapeTemplateReplacement(v["agent-profile-description-noimage"], [{
                            placeholder: "__POSITION__",
                            textReplace: k
                        }, {
                            placeholder: "__NAME__",
                            textReplace: e.n
                        }]));
                        a.appendChild(g.buildView());
                        if (f || 1 < b.agents.agentsCount) 0 < heightDifference && s.agentBarChanged(60), g = "background-image : url('" + f + "'); background-position: 0; background-size: 40px 40px;", "explorer" === G && 9 > J && (g += "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + f + "',sizingMethod='scale');"), e = new D("profileImage-" + e.pid, g, {
                                className: "alias-image"
                            }, null, p.documentRef), fallbackView = new D("profileFallbackImage", null, {
                                className: "alias-image"
                            }, null, p.documentRef),
                            a.appendChild(fallbackView.buildView()), a.appendChild(e.buildView());
                        a.style.display = "block";
                        d.style.display = "none";
                        f || 1 < b.agents.agentsCount ? (c.style.marginTop = "17px", na && (a.style.marginTop = "2px")) : na && (a.style.marginTop = "10px");
                        m && "block" === m.style.display && b.viewHandler.handleIndicatorToggle(!0)
                    }
                },
                clearAgentFooter: function() {
                    var a, b, d;
                    (d = s && s.container && s.container.elementReferrer ? s.container : null) && (this.chatContainer && h.isDesktopRectangle()) && (a = d.getElementById("tawkchat-minified-agent-container"),
                        b = d.getElementById("tawkchat-status-text-container"), d = d.getElementById("tawkchat-minified-link-container"), s.agentBarChanged(h.minimizedDimensions().height), a.innerHTML = "", a.style.display = "none", b.style.display = "block", d.style.marginTop = na ? "10px" : "3px")
                },
                handleEndChat: function() {
                    p.chatEnded();
                    s && s.container && s.chatEnded();
                    this.clearAgentHeader();
                    h.isEmbedded || (h.isPopup ? (b.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function() {
                            1 < e.history.length ? e.history.back() : e.close()
                        }, 200)) :
                        b.sessionHandler.notifyWindowState("min"))
                },
                handleRestartChat: function() {
                    b.formHandler.closeForm();
                    p.chatStarted()
                }
            });
            ua.prototype.addProfileDetail = function(a) {
                var f, d, c, e = this.chatContainer.getElementById("agentProfileContainer");
                a.pi || 1 < b.agents.agentsCount ? (f = new D("profileDetail", null, null, null, this.chatContainer.documentRef), c = v["agent-profile-description"], f.template = q.escapeTemplateReplacement(c, [{
                    placeholder: "__POSITION_CLASS__",
                    textReplace: a.pst ? "agentName" : "agentNameCentered"
                }, {
                    placeholder: "__POSITION__",
                    textReplace: a.pst
                }, {
                    placeholder: "__NAME__",
                    textReplace: a.n
                }])) : (f = new D("profileDetailNoImage", null, {
                    className: "noImageAgentProfileDetail"
                }, null, this.chatContainer.documentRef), d = a.pst ? "&nbsp-&nbsp" + a.pst : "", c = v["agent-profile-description-noimage"], f.template = q.escapeTemplateReplacement(c, [{
                    placeholder: "__POSITION__",
                    textReplace: d
                }, {
                    placeholder: "__NAME__",
                    textReplace: a.n
                }]));
                e.appendChild(f.buildView())
            };
            ua.prototype.openAgentList = function() {
                var a = this;
                this.chatContainer.getElementById("agentProfileContainer").style.display =
                    "none";
                this.chatContainer.getElementById("agentListBack").style.display = "block";
                this.chatContainer.getElementById("agentBar").style.display = "block";
                b.eventHandler.listen(this.chatContainer.getElementById("agentListBack"), "click", function(b) {
                    a.closeAgentList()
                }, "backClick")
            };
            ua.prototype.closeAgentList = function() {
                this.chatContainer.getElementById("agentProfileContainer").style.display = "block";
                this.chatContainer.getElementById("agentListBack").style.display = "none";
                this.chatContainer.getElementById("agentBar").style.display =
                    "none"
            };
            var fa = function() {
                var a = this;
                this.setDimensions();
                this.clickToPopout = this.setPopoutHref = this.isMoving = !1;
                this.clickEvent = "touchend";
                this.container = new U(q.getRandomName(), q.getGenericStyle({
                    width: a.minifiedBoxWidth + "px",
                    height: a.minifiedBoxHeight + "px",
                    minwidth: a.minifiedBoxWidth + "px",
                    minheight: a.minifiedBoxHeight + "px",
                    maxwidth: a.minifiedBoxWidth + "px",
                    maxheight: a.minifiedBoxHeight + "px",
                    zindex: "1000000",
                    display: "none"
                }), ba, "iframe");
                u.pageStatus.subscribe(function(b) {
                    a.updateStatus(b)
                });
                h.chatPosition.subscribe(function(b) {
                    a.updateWidgetPosition()
                });
                h.mobMinStyle.subscribe(function() {
                    a.container && a.container.elementReferrer && a.container.insertCssFile(h.mobMinStyle(), !0)
                })
            };
            fa.prototype.setDimensions = function() {
                "rectangle" === h.mobileWidget() ? (this.minifiedBoxWidth = 103, this.minifiedBoxHeight = 68) : (this.minifiedBoxWidth = 49, this.minifiedBoxHeight = 54)
            };
            fa.prototype.buildView = function() {
                this.container.buildIframe(b.MinifiedMobileStyle + h.mobMinStyle());
                this.updateStatus();
                this.attachEvents();
                this.updateWidgetPosition()
            };
            fa.prototype.updateStatus = function(a) {
                var f;
                a || (a = u.pageStatus());
                if (this.container && a) {
                    if (f = this.container.getElementById("tawkchat-status-icon")) f.className = a;
                    if (f = this.container.getElementById("tawk-minified-mobile-text")) f.innerHTML = "online" === a || "away" === a ? "Chat" : "Mail";
                    try {
                        b.eventEmitter.emit("resizeIframeHeight")
                    } catch (d) {
                        c.handleError("Unable to emit resizeIframeHeight", d.fileName, d.lineNumber, d.stack)
                    }
                }
            };
            fa.prototype.attachEvents = function() {
                var a = this;
                this.container.attachUserEventListener(b.viewHandler.clickEvent, function() {
                    a.isMoving ||
                        b.sessionHandler.notifyWindowState("max");
                    a.isMoving = !1
                }, "tawkchat-minified-box", "mobpclick");
                this.container.attachUserEventListener("touchmove", function() {
                    a.isMoving = !0
                }, "tawkchat-minified-box", "mobpmove")
            };
            fa.prototype.show = function() {
                this.container.restyle("display", "block")
            };
            fa.prototype.updateWidgetPosition = function() {
                var a = "";
                this.container && this.container.elementReferrer && (a = h.isCenterPositioned() ? a + " center " : h.isTopPositioned() ? a + " top " : a + " bottom ", a = h.isRightPositioned() ? a + " right " : a +
                    " left ", a += " " + h.mobileWidget() + " ", this.container.documentRef.body.className = a)
            };
            var Q = TawkClass.extend({
                init: function() {
                    var a = this;
                    this.container = new U(q.getRandomName(), q.getGenericStyle({
                        width: "100%",
                        height: "100%",
                        zindex: "1000000",
                        display: "none",
                        position: "static",
                        top: "0",
                        bottom: "0",
                        overflow: "hidden",
                        "max-width": "none",
                        "max-height": "none",
                        border: "0 none",
                        padding: "0",
                        margin: "0"
                    }), ba, "iframe");
                    this.wrapper = W.isCookieEnabled ? new D("tawkchat-maximized-container-element") : new D("tawkchat-maximized-container-element-no-cookies");
                    this.container.addChildViews([this.wrapper]);
                    this.maxNumberFileUpload = 5;
                    this.maxSizeFileUpload = 2097152;
                    this.isScrollbarDown = !0;
                    this.scrollTimeout = null;
                    u.pageStatus.subscribe(function(b) {
                        a.updateGreetings(b)
                    });
                    b.eventEmitter.on("formOpened", function() {
                        a.container && a.container.getElementById("chatPanel") && (a.container.getElementById("chatPanel").style.display = "none")
                    });
                    b.eventEmitter.on("formClosed", function() {
                        a.container && a.container.getElementById("chatPanel") && (a.container.getElementById("chatPanel").style.display =
                            "block")
                    });
                    h.isRTL.subscribe(function(b) {
                        a.wrapper && (b ? a.wrapper.addClass("rtl-direction") : a.wrapper.addClass("ltr-direction"))
                    })
                },
                buildView: function() {
                    b.MaximizedMobileStyle = b.MaximizedMobileStyle.replace(/#tawktoLink/g, "#" + b.viewHandler.tawktoLinkName);
                    b.MaximizedMobileStyle = b.MaximizedMobileStyle.replace(/#bottomContainer/g, "#" + b.viewHandler.bottomContainerName);
                    this.wrapper.template = this.wrapper.template.replace(/__TAWK_TO_LINK__/gm, b.viewHandler.tawktoLinkName);
                    this.wrapper.template = this.wrapper.template.replace(/__BOTTOM_CONTAINER__/gm,
                        b.viewHandler.bottomContainerName);
                    this.container.buildIframe(b.ResetStyle + "" + b.MaximizedMobileStyle + h.mobMaxStyle());
                    this.updateGreetings();
                    this.attachEvents();
                    this.wrapper.addClass("iphone");
                    h.isRTL() ? this.wrapper.addClass("rtl-direction") : this.wrapper.addClass("ltr-direction")
                },
                attachEvents: function() {
                    var a = this;
                    this.container.attachUserEventListener("touchstart", function(b) {
                        a.isScrolling = !1
                    }, "menuOptions", "startMenuOptionsTouchEvent");
                    this.container.attachUserEventListener("touchend", function(b) {
                        a.isScrolling = !1
                    }, "menuOptions", "endMenuOptionsTouchEvent");
                    this.container.attachUserEventListener("touchmove", function(b) {
                        a.isScrolling = !0
                    }, "menuOptions", "moveMenuOptionsTouchEvent");
                    this.container.attachUserEventListener("focus", function(f) {
                        a.isScrollbarDown && setTimeout(function() {
                            b.viewHandler.scrollToBottom()
                        }, 500)
                    }, "chatTextarea", "chatinputfocus");
                    b.eventHandler.listen(e, "resize", function() {
                        a.isScrollbarDown && b.viewHandler.scrollToBottom()
                    }, "mobileresize");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent,
                        function(a) {
                            b.chatHandler.changeRating(1);
                            b.eventHandler.cancelEvent(a)
                        }, "ratePositive", "ratepveclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        b.chatHandler.changeRating(-1);
                        b.eventHandler.cancelEvent(a)
                    }, "rateNegative", "ratenveclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        var d = a.container.getElementById("chatTextarea");
                        b.eventHandler.cancelEvent(f);
                        b.chatHandler.sendMessage(d.value);
                        d.value = ""
                    }, "textareaSubmitButton", "submitclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        a.container.getElementById("maxFileNotificationContainer").classList.add("hidden");
                        b.eventHandler.cancelEvent(f)
                    }, "closeNumberNotification", "closeNumberNotification");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        a.container.getElementById("maxSizeNotificationContainer").classList.add("hidden");
                        b.eventHandler.cancelEvent(f)
                    }, "closeSizeNotification", "closeSizeNotification");
                    this.container.attachUserEventListener("scroll",
                        function() {
                            clearTimeout(a.scrollTimeout);
                            a.scrollTimeout = setTimeout(function() {
                                a.isScrollbarDown = b.viewHandler.ifScrollbarDown();
                                !b.formHandler.currentForm && (b.viewHandler.newMessageNotSeen && (b.viewHandler.isMaximized || h.isPopup)) && b.viewHandler.checkUnseenMessages()
                            }, 200)
                        }, "chatContainer", "mobilechatscroll");
                    this.container.attachUserEventListener("change", function(f) {
                        b.eventHandler.cancelEvent(f);
                        a.toggleMenu();
                        var d = b.eventHandler.getTargetElement(f),
                            c = 0,
                            g = 0,
                            h = [],
                            k = [],
                            m = function() {
                                g++;
                                g === c && (d.value =
                                    "")
                            };
                        if (void 0 === e.FormData) c = 1, b.viewHandler.startUpload(a.container.getElementById("upload-form"), !0, m);
                        else if ((f = d.files) && f.length) {
                            for (var p = 0; p < f.length; p++) f[p].size > a.maxSizeFileUpload ? h.push(f[p]) : p >= a.maxNumberFileUpload ? k.push(f[p]) : b.viewHandler.startUpload(f[p], null, m);
                            b.viewHandler.checkUploadFileWarning(h, k)
                        }
                    }, "fileInput", "fileInputChanged")
                }
            });
            Q.prototype.show = function() {
                this.container.restyle("display", "block");
                b.viewHandler.newMessageNotSeen && b.viewHandler.checkUnseenMessages()
            };
            Q.prototype.updateGreetings = function(a) {
                var b, d;
                if ((a = a || u.pageStatus()) && this.container.elementReferrer) {
                    if (!h.isPopup) {
                        b = this.container.getElementById("siteName");
                        if (!b) return;
                        d = m.getShortMessage(a);
                        if (!d) return;
                        b.innerHTML = d
                    }
                    if (a = m.getLongMessage(a))
                        if (b = this.container.getElementById("greetingsContainer")) b.innerHTML = a
                }
            };
            Q.prototype.toggleEndChatOption = function(a) {
                var b = this.container.getElementById("endChatOption");
                b && (b.style.display = a ? "block" : "none")
            };
            var da = Q.extend({
                init: function() {
                    var a =
                        this;
                    this.hasChatStarted = !1;
                    this._super(this);
                    b.eventEmitter.on("formOpened", function() {
                        a.container && ("preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm || a.toggleMenuContainer(!1))
                    });
                    b.eventEmitter.on("formClosed", function() {
                        a.container && (b.chatHandler.hasChatEnded || (!b.viewHandler.isMaximized || a.container.getElementById("chatEnded")) || (a.hasChatStarted = !0), a.toggleMenuContainer(!0))
                    });
                    h.soundOn.subscribe(function() {
                        a.toggleSound()
                    });
                    P.pageName.subscribe(function(b) {
                        a.container &&
                            (a.container.getElementById("siteName") && h.isPopup) && (a.container.getElementById("siteName").innerHTML = b)
                    });
                    b.eventEmitter.on("localeChanged", function() {
                        b.languageParser.language.chat.defaultName = b.languageParser.language.chat.mobileName;
                        a.container && (a.insertText(), a.toggleSound())
                    })
                },
                buildView: function() {
                    this._super(this);
                    this.toggleSound();
                    this.insertText();
                    this.wrapper.addClass(q.getContrast(h.headerTxtColor));
                    b.languageParser && b.languageParser.language && (b.languageParser.language.chat.defaultName =
                        b.languageParser.language.chat.mobileName);
                    this.attachEvents()
                },
                attachEvents: function() {
                    var a = this,
                        f = this.container.getElementById("chatTextarea"),
                        d = this.container.getElementById("menuOptions");
                    this._super(this);
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        a.isScrolling || (a.toggleMenu(), b.formHandler.openForm("nameForm"), b.eventHandler.cancelEvent(f))
                    }, "changeNameOption", "changenameclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        b.eventHandler.cancelEvent(f);
                        d && (d.style.display = "none");
                        b.formHandler.currentForm && "preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm ? b.formHandler.closeForm() : "block" === a.container.getElementById("tawkToContent").style.display ? a.container.getElementById("tawkToContent").style.display = "none" : h.isPopup ? e.close() : (b.sessionHandler.notifyWindowState("min"), b.viewHandler.maximizedWidget.container.hide(), b.viewHandler.isMaximized = !1, b.viewHandler.show())
                    }, "backButtonContainer", "backclick");
                    f && Oa.initElement(f,
                        function(f, d) {
                            a.toggleSubmitButton(d);
                            b.chatHandler.sendTextPreview(f)
                        });
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                        a = b.eventHandler.getTargetElement(a);
                        "menuButton" === a.id || ("menuButtonContainer" === a.id || d.contains(a)) || (d.style.display = "none")
                    }, "tawkchat-maximized-container-element", "mainclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        a.toggleMenu();
                        b.eventHandler.cancelEvent(f)
                    }, "menuButtonContainer", "menuclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent,
                        function(f) {
                            a.isScrolling || (a.toggleMenu(), b.formHandler.openForm("emailTranscriptForm"), b.eventHandler.cancelEvent(f))
                        }, "emailTranscriptOption", "emailtranscriptclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        a.isScrolling || (a.toggleMenu(), b.viewHandler.printChatTranscript(), b.eventHandler.cancelEvent(f))
                    }, "printOption", "printclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                        a.isScrolling || h.whiteLabel() || (W.isCookieEnabled ? a.container.getElementById("tawkToContent").style.display =
                            "block" : "nokia" === B ? e.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + P.pageId, "", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no") : e.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + P.pageId))
                    }, b.viewHandler.tawktoLinkName, "tawktoclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                        a.isScrolling || (a.container.getElementById("tawkToContent").style.display =
                            "none")
                    }, "cancelTawkRedirect", "cancelTawkRedirectclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(b) {
                        a.isScrolling || (a.container.getElementById("tawkToContent").style.display = "none", "nokia" === B ? e.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + P.pageId, "", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no") : e.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" +
                            P.pageId))
                    }, "tawkRedirect", "tawkRedirectClick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        a.isScrolling || (b.eventHandler.cancelEvent(f), b.chatHandler.toggleSound())
                    }, "soundOption", "soundclick");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent, function(f) {
                        a.isScrolling || (a.toggleMenu(), b.formHandler.openForm("endChatForm"), b.eventHandler.cancelEvent(f))
                    }, "endChatOption", "endChatOptionClicked");
                    this.container.attachUserEventListener(b.viewHandler.clickEvent,
                        function(f) {
                            a.isScrolling || (b.viewHandler.popup(), b.eventHandler.cancelEvent(f))
                        }, "popOut", "popOutOptionClicked")
                }
            });
            da.prototype.toggleMenu = function() {
                var a = this.container.getElementById("menuOptions");
                a && (a.style.display = "block" === a.style.display ? "none" : "block")
            };
            da.prototype.toggleMenuContainer = function(a) {
                var b, d;
                !this.container || !this.hasChatStarted && a || (d = this.container.getElementById("menuOptions"), (b = this.container.getElementById("menuButtonContainer")) && d && (b.style.display = a ? "block" : "none",
                    a || (d.style.display = "none")))
            };
            da.prototype.toggleSound = function() {
                W.isCookieEnabled && (this.container.getElementById("soundOption").className = h.soundOn() ? "on" : "off", this.container.getElementById("soundTitle").innerHTML = h.soundOn() ? b.languageParser.translate("menu", "sound_on") : b.languageParser.translate("menu", "sound_off"))
            };
            da.prototype.chatEnded = function() {
                var a, f = this,
                    d = this.container.getElementById("chatContainer");
                this.hasChatStarted = !1;
                a = new D("chatEnded");
                a.template = q.escapeTemplateReplacement(a.template, [{
                    placeholder: "__CHAT_ENDED__",
                    textReplace: b.languageParser.translate("chat", "chatEnded")
                }, {
                    placeholder: "__START_CHAT__",
                    textReplace: b.languageParser.translate("chat", "newChat")
                }, {
                    placeholder: "__EMAIL_TRANCRIPT__",
                    textReplace: b.languageParser.translate("rollover", "emailTranscriptOption")
                }]);
                a.restyle("display", "block");
                this.container.documentRef.getElementById("tawkchat-maximized-container-element").appendChild(a.buildView());
                this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                    b.formHandler.openForm("emailTranscriptForm");
                    b.eventHandler.cancelEvent(a)
                }, "emailTranscript", "emailTranscript");
                this.container.attachUserEventListener(b.viewHandler.clickEvent, function(a) {
                    f.chatStarted();
                    b.chatHandler.startNewChat()
                }, "newChat", "newChat");
                d && (d.className += " chat-ended");
                this.toggleMenuContainer(!1)
            };
            da.prototype.chatStarted = function() {
                var a = this.container.getElementById("chatEnded"),
                    f = this.container.getElementById("chatContainer");
                a && a.parentNode.removeChild(a);
                f && (f.className = f.className.replace("chat-ended", ""));
                h.showPreChatForm ?
                    (u.prechatFormSubmitted = !1, b.formHandler.openForm("preChatForm")) : this.hasChatStarted = !0;
                this.toggleMenuContainer(!0)
            };
            da.prototype.toggleSubmitButton = function(a) {
                var b = this.container.getElementById("ratingContainer"),
                    d = this.container.getElementById("textareaSubmitContainer");
                a && this.isSubmitShown || !a && !this.isSubmitShown || (a ? (b.style.display = "none", d.style.display = "block", this.isSubmitShown = !0) : (d.style.display = "none", b.style.display = "block", this.isSubmitShown = !1))
            };
            da.prototype.insertText = function() {
                var a;
                this.container.getElementById("cancelTawkRedirect").innerHTML = b.languageParser.translate("form", "CancelButton");
                this.container.getElementById("tawkRedirect").innerHTML = b.languageParser.translate("form", "visitButton");
                this.container.getElementById("tawkContent").innerHTML = b.languageParser.translate("overlay", "tawkContent");
                if (W.isCookieEnabled) {
                    this.container.getElementById("chatTextarea").placeholder = b.languageParser.translate("chat", "mobileEnterText");
                    this.container.getElementById("changeNameOption").childNodes[1].innerHTML =
                        b.languageParser.translate("menu", "change_name");
                    this.container.getElementById("emailTranscriptOption").childNodes[1].innerHTML = b.languageParser.translate("rollover", "emailTranscriptOption");
                    this.container.getElementById("endChatOption").childNodes[1].innerHTML = b.languageParser.translate("rollover", "end");
                    this.container.getElementById("popOut").childNodes[1].innerHTML = b.languageParser.translate("rollover", "popOut");
                    this.container.getElementById("maxFileNotificationMessage").innerHTML = b.languageParser.translate("notifications",
                        "maximum_file_upload_warning", {
                            strongStart: "<strong>",
                            strongEnd: "</strong>",
                            limitFileNumber: "5"
                        });
                    this.container.getElementById("maxSizeNotificationMessage").innerHTML = b.languageParser.translate("notifications", "maximum_size_upload_warning", {
                        strongStart: "<strong>",
                        strongEnd: "</strong>",
                        limitFileSize: "2mb"
                    });
                    listElem = q.getElementsByClassName(this.container.getElementById("chatContainer"), "closeNotification");
                    for (a = 0; a < listElem.length; a++) listElem[a].innerHTML = b.languageParser.translate("form", "CloseButton");
                    a = this.container.getElementById("uploadFileOption");
                    q.isFileInputSupported ? a.childNodes[0].childNodes[1].innerHTML = b.languageParser.translate("rollover", "uploadFile") : a.parentNode.removeChild(a)
                }
            };
            var C = function(a) {
                var f = this;
                arguments.length && (this.browser = a, this.metaContent = this.getMetaContent(), this.landscape = !1, this.zoom = 1, this.resizeTimeout = this.hasKeyboard = this.minAndMaxScalesAreEqual = this.hasViewportHeightWidth = this.hasInitialScale = !1, this.removeAgentNotification = !0, this.clickEvent = "touchend",
                    this.hasChatStarted = this.isMaximized = this.isBottomWidget = !1, this.originalDocumentStyle = null, this.isTherePreChat = h.showPreChatForm, this.noZoomMetaTag = null, this.isIndicatorOn = !1, this.scrollTop = this.scrollLeft = 0, this.shapeChanged(), this.minifiedWidget = new fa, this.maximizedWidget = new da, this.iframeContainer = new D("tawkchat-container", "border: 0 none !important; padding: 0 !important; margin: 0 !important; z-index: 999999999 !important; overflow : visible !important; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important; width : auto !important; height : auto !important"),
                    this.indicator = new la(this.minifiedWidget.container), this.iframeContainer.addChildViews([this.minifiedWidget.container, this.maximizedWidget.container]), "#max-widget" === e.location.hash && (e.history ? e.history.replaceState({}, document.title, ".") : e.location.hash = ""), this.iframeContainer.buildView(), this.chatContainer = this.maximizedWidget.container, b.eventEmitter.on("resizeIframeHeight", function() {
                        f.resizeIframeHeight()
                    }), b.eventEmitter.on("visitorPopupFocus", function(a) {
                        f.isPopupFocused = a
                    }), e.onpopstate =
                    function(a) {
                        !h.isPopup && (f.isMaximized && "#max-widget" !== e.location.hash) && u.chatWindowState("min")
                    }, u.chatWindowState.subscribe(function(a) {
                        h.isPopup || (f.hideWidget(), "max" === a ? (e.history.pushState ? e.history.pushState(null, null, "#max-widget") : e.location.hash = "max-widget", f.maximize()) : ("#max-widget" === e.location.hash , f.isMaximized = !1, f.show()))
                    }), u.pageStatus.subscribe(function(a) {
                        f.updateViewByStatus(a)
                    }), h.mobileWidget.subscribe(function() {
                        f.renderBottomWidget();
                        f.minifiedWidget.buildView()
                    }),
                    h.chatPosition.subscribe(function() {
                        f.updateWidgetPosition()
                    }), A.rating.subscribe(function(a) {
                        f.changeRating(a)
                    }), h.mobMaxStyle.subscribe(function() {
                        f.chatContainer.insertCssFile(h.mobMaxStyle());
                        f.maximizedWidget.wrapper.removeClass("white");
                        f.maximizedWidget.wrapper.removeClass("black");
                        f.maximizedWidget.wrapper.addClass(q.getContrast(h.headerTxtColor))
                    }), h.mobileWidget.subscribe(function(a) {
                        f.shapeChanged();
                        f.minifiedWidget.container.massRestyle({
                            width: f.minifiedBoxWidth + "px !important",
                            height: f.minifiedBoxHeight +
                                "px !important",
                            "min-width": f.minifiedBoxWidth + "px !important",
                            "min-height": f.minifiedBoxHeight + "px !important",
                            "max-width": f.minifiedBoxWidth + "px !important",
                            "max-height": f.minifiedBoxHeight + "px !important"
                        })
                    }), b.chatHandler.hasChatStarted.subscribe(function(a) {
                        f.maximizedWidget.toggleEndChatOption(a)
                    }))
            };
            C.prototype = new H;
            C.prototype.constructor = C;
            C.prototype.parent = H.prototype;
            C.prototype.begin = function() {
                document.body.appendChild(this.iframeContainer.elementReferrer);
                if ("symbian" === this.browser ||
                    "ie" === this.browser || "opera" === this.browser || "android2.3" === this.browser) this.clickEvent = "click";
                this.minifiedWidget.buildView();
                this.maximizedWidget.buildView();
                this.chatContainer = this.maximizedWidget.container;
                this.noZoomMetaTag = document.createElement("meta");
                this.noZoomMetaTag.name = "viewport";
                this.parent.begin.call(this);
                if (q.isTouchDevice() && ("android" === B || "android2" === B || "android2.3" === B)) {
                    var a = this.chatContainer.getElementById("chatContainer"),
                        f = this.chatContainer.getElementById("menuScrollable");
                    this.addOverflowScroll(a);
                    this.addOverflowScroll(f);
                    a.style.overflow = "hidden";
                    f.style.overflow = "hidden"
                }
                b.audioPlayer.initAudioPlayer()
            };
            C.prototype.shapeChanged = function() {
                (this.isMinifiedRound = "round" === h.mobileWidget() ? !0 : !1) ? (this.defaultWidth = 49, this.defaultHeight = 54, this.minifiedBoxWidth = 49, this.minifiedBoxHeight = 54) : (this.defaultWidth = 103, this.defaultHeight = 68, this.minifiedBoxWidth = 103, this.minifiedBoxHeight = 68)
            };
            C.prototype.handleEndChat = function() {
                this.maximizedWidget.chatEnded();
                this.chatContainer.hide();
                this.isMaximized = !1;
                this.iframeContainer.restyle("right", "0px");
                this.show()
            };
            C.prototype.show = function() {
                var a = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
                this.isMaximized ? (this.iframeContainer.massRestyle({
                    left: "0px",
                    top: "0px",
                    right: "0px",
                    bottom: "0px"
                }), this.isMobileOptimizedWebsite() || null === this.noZoomMetaTag || (this.metaContent || "" !== this.noZoomMetaTag.content ? this.metaContent && !this.hasNoScale && a && a.setAttribute("content", this.metaContent + ", user-scalable=no") :
                    (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no", this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag))), this.isVisibilityToggled || (this.iframeContainer.show(), this.chatContainer.show()), this.minifiedWidget.container.hide(), "max" !== u.chatWindowState() && b.sessionHandler.notifyWindowState("max"), b.viewHandler.newMessageNotSeen && setTimeout(function() {
                    b.viewHandler.checkUnseenMessages()
                }, 0)) : (this.isMobileOptimizedWebsite() ||
                    (this.metaContent && !this.hasNoScale ? a && a.setAttribute("content", this.metaContent) : this.noZoomMetaTag.parentNode && (this.noZoomMetaTag.content = "", document.getElementsByTagName("head")[0].removeChild(this.noZoomMetaTag))), q.blurElements(this.maximizedWidget.container.documentRef.body.getElementsByTagName("input")), q.blurElements(this.maximizedWidget.container.documentRef.body.getElementsByTagName("textarea")), this.isVisibilityToggled || (this.minifiedWidget.container.show(), this.showWidget()), this.resetOriginalStyle(),
                    this.indicator.initIndicator(), "min" !== u.chatWindowState() && b.sessionHandler.notifyWindowState("min"), this.resizeHandler());
                this.isVisibilityToggled || (this.updateViewByStatus(u.pageStatus()), this.parent.show.call(this))
            };
            C.prototype.hideWidget = function() {
                this.isMaximized ? (this.isPopupFocused && b.socketManager.sendToConnector("popupOnFocus", !1), this.chatContainer.hide()) : (null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle), this.minifiedWidget.container.hide());
                this.iframeContainer.hide()
            };
            C.prototype.showWidget = function() {
                this.iframeContainer.show();
                if (this.isMaximized) this.scrollLeft = void 0 !== e.pageXOffset ? e.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, this.scrollTop = void 0 !== e.pageYOffset ? e.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, this.scrollToBottom(), this.originalDocumentStyle = this.iframeContainer.documentRef.body.style.cssText, this.iframeContainer.documentRef.body.style.setProperty("height",
                    "100%", "important"), this.iframeContainer.documentRef.body.style.setProperty("min-height", "100%", "important"), this.iframeContainer.documentRef.body.style.setProperty("max-height", "100%", "important"), this.iframeContainer.documentRef.body.style.setProperty("width", "100%", "important"), this.iframeContainer.documentRef.body.style.setProperty("min-width", "100%", "important"), this.iframeContainer.documentRef.body.style.setProperty("max-width", "100%", "important"), this.iframeContainer.documentRef.body.style.setProperty("overflow",
                    "hidden", "important"), this.iframeContainer.documentRef.body.style.setProperty("position", "fixed", "important"), this.maximizedWidget.container.show();
                else {
                    if (h.hideWidgetOnLoad) {
                        this.hideWidget();
                        return
                    }
                    this.minifiedWidget.container.show();
                    this.resizeIframeHeight();
                    null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle, this.originalDocumentStyle = null, e.scrollTo(this.scrollLeft, this.scrollTop))
                }
                this.iframeContainer.show()
            };
            C.prototype.init =
                function() {
                    this.checkMetaContent();
                    this.addResizeEvents();
                    this.resizeHandler()
                };
            C.prototype.getZoom = function() {
                this.zoom = screen.width / e.innerWidth
            };
            C.prototype.addResizeEvents = function(a) {
                var f, d = this;
                f = function(a) {
                    d.resizeHandler()
                };
                b.eventHandler.listen(e, "resize", f, "mobileresize");
                b.eventHandler.listen(e, "scroll", f, "mobilescroll");
                a && b.eventHandler.listen(e, "touchmove", f)
            };
            C.prototype.checkMetaContent = function() {
                var a, b = {},
                    d = this.metaContent;
                if (d) {
                    for (var d = d.replace(/ /g, ""), d = d.split(","), c =
                            0, e = d.length; c < e; c++) a = d[c].split("="), b[a[0]] = a[1];
                    this.hasInitialScale = "1.0" === b["initial-scale"];
                    this.hasViewportHeightWidth = !(!b.width && !b.height);
                    this.minAndMaxScalesAreEqual = b["minimum-scale"] && b["maximum-scale"] && b["minimum-scale"] === b["maximum-scale"];
                    this.initialAndMaxScalesAreEqual = b["initial-scale"] && b["maximum-scale"] && b["initial-scale"] === b["maximum-scale"];
                    this.hasNoScale = "no" === b["user-scalable"] || "0" === b["user-scalable"]
                }
            };
            C.prototype.ifScrollbarDown = function() {
                if (this.isMaximized) return this.parent.ifScrollbarDown.call(this);
                var a, b;
                if (!document) return !1;
                if (a = document.body) return b = document.documentElement.clientHeight + 10, scrollTop = a.scrollTop || document.documentElement.scrollTop, 80 > a.scrollHeight - (scrollTop + b)
            };
            C.prototype.resizeHandler = function() {
                var a = this;
                "offline" === u.pageStatus() && h.hideWidgetOnOffline || this.isMaximized || (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    var b = a.isLandscape(),
                        d = a.ifScrollbarDown();
                    "offline" === u.pageStatus() && h.hideWidgetOnOffline || (a.landscape !== b && d && setTimeout(function() {
                            a.scrollToBottom()
                        },
                        200), a.landscape = b, a.isMobileOptimizedWebsite() && "opera" !== B && "android2.3" !== B || (a.getZoom(), a.renderMinifiedBox()))
                }, 100))
            };
            C.prototype.getMetaContent = function() {
                var a, b, d = document.getElementsByTagName("meta"),
                    c = "";
                a = 0;
                for (b = d.length; a < b; a++) d[a].getAttribute("name") && "viewport" === d[a].getAttribute("name").toLowerCase() && (c = d[a].getAttribute("content"));
                return c
            };
            C.prototype.isLandscape = function() {
                return screen.height < screen.width || e.innerHeight < e.innerWidth
            };
            C.prototype.isMobileOptimizedWebsite =
                function() {
                    this.checkMetaContent();
                    return this.minAndMaxScalesAreEqual && (this.hasViewportHeightWidth || this.hasNoScale) || this.initialAndMaxScalesAreEqual
                };
            C.prototype.scaleContent = function(a, b) {
                if (!this.isMaximized) {
                    var d = this.minifiedBoxHeight,
                        c = this.minifiedBoxWidth,
                        e = this.minifiedWidget.container.getElementById("tawkchat-minified-box"),
                        g = "scale(" + a + ")",
                        g = "-moz-transform : " + g + "; -webkit-transform : " + g + "; -o-transform : " + g + "; -ms-transform : " + g + "; transform : " + g + ";";
                    a && e && (d = Math.ceil(d * a), c =
                        Math.ceil(c * a), this.minifiedWidget.container.massRestyle({
                            height: d + "px !important",
                            width: c + "px !important",
                            "min-height": d + "px !important",
                            "min-width": c + "px !important",
                            "max-height": d + "px !important",
                            "max-width": c + "px !important"
                        }), e.style.cssText += g + "-moz-transform-origin : bottom left; -webkit-transform-origin : bottom left; -o-transform-origin : bottom left; -ms-transform-origin : bottom left; transform-origin : bottom left");
                    this.updateWidgetPosition(d)
                }
            };
            C.prototype.popup = function() {
                this.indicator.hide();
                this.chatContainer.hide();
                this.isMaximized = !1;
                this.show();
                this.chatContainer.getElementById("menuOptions").style.display = "none";
                if (this.myWin && !this.myWin.closed) return this.myWin.focus();
                this.myWin = "nokia" === B ? e.open("https://m.tawk.to/" + P.tawkId + "/popout/" + $_Tawk_WidgetId + "/?$_tawk_popout=true&$_tawk_sk=" + u.sessionKey + "&$_tawk_tk=" + u.transferKey + "&v=" + u.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no") : e.open("https://m.tawk.to/" + P.tawkId +
                    "/popout/" + $_Tawk_WidgetId + "/?$_tawk_popout=true&$_tawk_sk=" + u.sessionKey + "&$_tawk_tk=" + u.transferKey + "&v=" + u.serverVersion)
            };
            C.prototype.maximize = function() {
                "firefox" === B && !this.isMobileOptimizedWebsite() || "pop" === h.onClickAction ? this.popup() : (this.hasChatStarted || (h.showPreChatForm = this.isTherePreChat), this.indicator.hide(), this.minifiedWidget.container.hide(), this.originalIframeContainerStyle || (this.originalIframeContainerStyle = this.iframeContainer.elementReferrer.style.cssText), this.iframeContainer.restyle("margin",
                    "0px !important"), this.isMaximized = !0, this.show())
            };
            C.prototype.resetOriginalStyle = function() {
                this.originalIframeContainerStyle && (this.iframeContainer.elementReferrer.style.cssText = this.originalIframeContainerStyle)
            };
            C.prototype.resizeIframeHeight = function() {
                var a;
                !this.isMaximized && (this.iframeContainer && this.minifiedWidget.container.elementReferrer && this.isIEWidget) && (a = this.minifiedWidget.container.getElementById("tawkchat-status-text-container").offsetHeight, this.minifiedWidget.container.restyle("height",
                    a + "px"), this.iframeContainer.restyle("marginTop", "-" + a / 2 + "px"), this.iframeContainer.restyle("height", a + "px"))
            };
            C.prototype.renderBottomWidget = function() {
                this.isMaximized || (this.isBottomWidget = !0, this.minifiedWidget.container.template = v["mobile-bottom-" + h.mobileWidget()], this.iframeContainer.restyle("position", "fixed"), this.updateWidgetPosition())
            };
            C.prototype.handleIndicatorToggle = function(a) {
                var b = this.minifiedBoxWidth,
                    d = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
                    c = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper");
                this.minifiedWidget.container.getElementById("tawkchat-minified-box");
                this.isIndicatorOn = a;
                c.className = a ? c.className + " indicator-on " : c.className.replace("indicator-on", "");
                this.minifiedBoxWidth = a ? b + 7 : this.defaultWidth;
                this.isMobileOptimizedWebsite() ? this.scaleContent(1) : this.renderMinifiedBox();
                d.style.visibility = "visible"
            };
            C.prototype.updateViewByStatus = function(a) {
                this.isMaximized ? (this.parent.updateViewByStatus.call(this, a), this.maximizedWidget && ("preChatForm" !== b.formHandler.currentForm && "offlineForm" !==
                    b.formHandler.currentForm) && this.maximizedWidget.toggleMenuContainer("online" === a || "away" === a)) : this.iframeContainer.elementReferrer && ("offline" === a && h.hideWidgetOnOffline ? this.hideWidget() : this.showWidget(), this.resizeHandler())
            };
            C.prototype.updateWidgetPosition = function(a) {
                var b = {},
                    d = {};
                a = a || this.minifiedBoxHeight;
                this.iframeContainer && (h.isCenterPositioned() ? (b.top = "50% !important", b.bottom = "auto !important", b.margin = this.isMinifiedRound ? -0.5 * a + "px 0 0 0 !important" : -0.5 * a - (this.defaultHeight -
                    37) / 2 + "px 0 0 0 !important") : (b.margin = "0 !important", h.isTopPositioned() ? (b.top = "0px !important", b.bottom = "auto !important", d.top = this.isMinifiedRound ? "20px !important" : "-10px !important") : (b.bottom = "0px !important", b.top = "auto !important", d.bottom = this.isMinifiedRound ? "14px !important" : "0px !important")), h.isRightPositioned() ? (b.right = "0px !important", b.left = "auto !important", d.right = this.isMinifiedRound ? "20px !important" : "15px !important") : (b.left = "0px !important", b.right = "auto !important", d.left =
                    this.isMinifiedRound ? "20px !important" : "15px !important"), this.iframeContainer.massRestyle(b), this.minifiedWidget.container.massRestyle(d))
            };
            C.prototype.appendMessage = function(a) {
                var b, d, c, e = {
                        "chat-message-row": v["chat-message-row"],
                        "chat-resend-link": v["chat-resend-link"],
                        "chat-message-owner-agent": v["chat-message-owner-agent"],
                        "chat-message-container": v["chat-message-container"],
                        "chat-notification-container": v["chat-notification-container"],
                        "chat-message-status-row": v["chat-message-status-row"],
                        "chat-divider": v["chat-divider"]
                    },
                    g = q.parseChatTime(a.time);
                "a" === a.senderType ? (b = (b = (c = A.agentProfiles[a.ownerId]) && c.pi ? u.agentImgUrl + "/" + A.agentProfiles[a.ownerId].pi : "") ? "url('" + b + "')" : "transparent", d = "explorer" === G && 9 > J ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "',sizingMethod='scale');" : "background-position:0 0;background-size:28px 28px;", e["chat-message-owner-agent"] = e["chat-message-owner-agent"].replace("__IMAGE_URL__", b).replace("__IE_IMAGE_SCALE__", c && c.pi ? d : "")) :
                    "s" === a.senderType && (e["chat-message-owner-agent"] = e["chat-message-owner-agent"].replace("__IMAGE_URL__", "").replace("__IE_IMAGE_SCALE__", ""));
                e["chat-message-status-row"] = a.isPending ? v["chat-message-pending-row"] : e["chat-message-status-row"].replace("__TIME__", g).replace("__TIME_CLASS__", "v" === a.senderType ? "visitor" : "agent");
                return this.parent.appendMessage.call(this, a, e)
            };
            C.prototype.appendAgentIsTypingElement = function(a) {
                this.parent.appendAgentIsTypingElement.call(this, a)
            };
            C.prototype.removeAgentTypingElement =
                function(a) {
                    this.parent.removeAgentTypingElement.call(this, a)
                };
            C.prototype.addOverflowScroll = function(a) {
                var f = 0,
                    d = this;
                b.eventHandler.listen(a, "touchstart", function(b) {
                    f = a.scrollTop + b.touches[0].pageY
                }, "mobiletouchstart" + a.id);
                b.eventHandler.listen(a, "touchmove", function(c) {
                    b.eventHandler.cancelEvent(c);
                    20 >= c.touches[0].pageY || 0 > f - c.touches[0].pageY || (a.scrollTop = f - c.touches[0].pageY, this.maximizedWidget.isScrollbarDown = d.ifScrollbarDown())
                }, "mobiletouchmove" + a.id)
            };
            C.prototype.addStartTime = function(a) {
                var f,
                    d = this.chatContainer.documentRef;
                d && (a = q.getDateFromUTC(a), a = b.languageParser.translate("days", a.getDay()) + ", " + b.languageParser.translate("months", a.getMonth()) + " " + a.getDate() + ", " + a.getFullYear(), f = v["mobile-first-message-time"], f = f.replace("__CONTENT__", a), messageContainer = new D("firstMessageTimeWrapper", null, {
                    className: "chatLineContainer"
                }, null, d.documentRef), messageContainer.template = f, messageContainer.buildView(), chatWrapper.insertBefore(messageContainer.elementReferrer, d.getElementById("chatWrapper").firstChild))
            };
            C.prototype.resetView = function() {
                var a, b;
                if (a = this.chatContainer) {
                    if (a = a.getElementById("chatWrapper")) b = a.lastChild, a.innerHTML = "", a.appendChild(b), this.showEmbeddedGreetings();
                    this.show()
                }
            };
            C.prototype.appendAgent = function() {
                var a = this.chatContainer,
                    f = a.getElementById("chatWrapper");
                a && (b.agents.agentsCount++, f.className = 1 >= b.agents.agentsCount ? "single-agent" : "multi-agent")
            };
            C.prototype.removeAgent = function(a) {
                this.chatContainer.elementReferrer && b.agents.agentsCount--
            };
            C.prototype.handleRestartChat =
                function() {
                    b.formHandler.closeForm();
                    this.maximizedWidget.chatStarted()
                };
            C.prototype.hideEmbeddedGreetings = function() {
                var a, b;
                a = this.maximizedWidget.container.getElementById("greetingsWrapper");
                b = this.maximizedWidget.container.getElementById("chatWrapper");
                a && b && (a.style.display = "none", b.style.display = "block")
            };
            C.prototype.showEmbeddedGreetings = function() {
                var a, b;
                a = this.maximizedWidget.container.getElementById("greetingsWrapper");
                b = this.maximizedWidget.container.getElementById("chatWrapper");
                a && b &&
                    (b.style.display = "none", a.style.display = "block")
            };
            C.prototype.toggleWidget = function() {
                this.isMaximized ? b.sessionHandler.notifyWindowState("min") : b.sessionHandler.notifyWindowState("max")
            };
            C.prototype.toggleVisibility = function() {
                this.scrollToBottom();
                (this.isVisibilityToggled = !this.isVisibilityToggled) ? this.hideWidget(): this.showWidget()
            };
            C.prototype.isWidgetHidden = function() {
                return !this.iframeContainer.isVisible
            };
            var va = function(a) {
                C.call(this, a)
            };
            va.prototype = new C;
            va.prototype.init = function() {
                this.renderBottomWidget();
                this.addResizeEvents();
                this.resizeHandler()
            };
            va.prototype.renderMinifiedBox = function() {
                var a = (1 / this.zoom.toFixed(2)).toFixed(2);
                this.scaleContent(0.2 > a ? 0.2 : a)
            };
            var ma = function(a) {
                C.call(this, a)
            };
            ma.prototype = new C;
            ma.prototype.init = function() {
                this.renderBottomWidget();
                this.addResizeEvents();
                this.resizeHandler()
            };
            ma.prototype.isLandscape = function() {
                return 0 !== e.orientation
            };
            ma.prototype.getZoom = function() {
                this.zoom = (this.isLandscape() ? screen.height : screen.width) / e.innerWidth
            };
            ma.prototype.renderMinifiedBox =
                function() {
                    var a = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(a, !1)
                };
            var wa = function(a) {
                C.call(this, a)
            };
            wa.prototype = new C;
            wa.prototype.init = function() {
                this.renderBottomWidget();
                this.addResizeEvents();
                this.resizeHandler()
            };
            wa.prototype.renderMinifiedBox = function() {
                var a = (1 / this.zoom.toFixed(2)).toFixed(2);
                this.scaleContent(a, !0)
            };
            var ga = function(a) {
                C.call(this, a);
                this.screenWidth = 0
            };
            ga.prototype = new C;
            ga.prototype.init = function() {
                this.renderBottomWidget();
                this.addResizeEvents(!0);
                this.resizeHandler()
            };
            ga.prototype.isLandscape = function() {
                return 0 !== e.orientation
            };
            ga.prototype.getZoom = function() {
                this.isLandscape() ? this.screenWidth = screen.height : this.screenWidth = screen.width;
                this.zoom = this.screenWidth / e.innerWidth
            };
            ga.prototype.renderMinifiedBox = function() {
                var a;
                a = this.isMobileOptimizedWebsite() ? (0.2 * this.screenWidth / this.minifiedBoxWidth).toFixed(2) : (1 / this.zoom.toFixed(2)).toFixed(2);
                this.scaleContent(a, !0)
            };
            var xa = function(a) {
                C.call(this, a)
            };
            xa.prototype = new C;
            xa.prototype.init = function() {
                this.renderBottomWidget();
                this.addResizeEvents();
                this.resizeHandler()
            };
            xa.prototype.renderMinifiedBox = function() {
                this.scaleContent()
            };
            var ya = function(a) {
                C.call(this, a)
            };
            ya.prototype = new C;
            ya.prototype.init = function() {
                this.renderBottomWidget();
                this.checkMetaContent();
                this.addResizeEvents();
                this.resizeHandler()
            };
            ya.prototype.renderMinifiedBox = function() {
                var a;
                a = this.isMobileOptimizedWebsite() ? 1 : 2;
                this.scaleContent(a, !0, !0)
            };
            var ha = function(a) {
                C.call(this, a)
            };
            ha.prototype = new C;
            ha.prototype.init = function() {
                var a;
                "ie" === this.browser &&
                    (a = document.createElement("meta"), a.httpEquiv = "X-UA-Compatible", a.setAttribute("content", "IE=edge"), document.getElementsByTagName("head")[0].appendChild(a));
                this.renderBottomWidget();
                this.addResizeEvents();
                this.resizeHandler()
            };
            ha.prototype.renderMinifiedBox = function() {
                var a = (1 / this.zoom.toFixed(2)).toFixed(2);
                this.scaleContent(0.2 > a ? 0.2 : a)
            };
            var za = function(a) {
                C.call(this, a)
            };
            za.prototype = new C;
            za.prototype.init = function() {
                this.renderBottomWidget();
                this.addResizeEvents();
                this.resizeHandler()
            };
            za.prototype.renderMinifiedBox =
                function() {
                    var a = (1 / this.zoom.toFixed(2)).toFixed(2);
                    this.scaleContent(0.2 > a ? 0.2 : a)
                };
            var ia = H.extend({
                init: function() {
                    var a, f, d, c, e = this;
                    this._super(this);
                    a = document.getElementsByTagName("head")[0];
                    f = document.createDocumentFragment();
                    d = q.createElement(document, "style", {
                        type: "text/css"
                    });
                    c = document.createTextNode(b.ResetStyle + "" + b.MaximizedMobileStyle + h.mobMaxStyle());
                    d.styleSheet ? d.styleSheet.cssText = c.nodeValue : d.appendChild(c);
                    f.appendChild(d);
                    a.appendChild(f);
                    this.clickEvent = "touchend";
                    this.iframeContainer =
                        new D(q.getRandomName(), "border: 0 none; padding: 0; margin: 0; z-index: 9999999; width: 100%; height: 100%; display: none; position : fixed; top :0; bottom : 0; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important;");
                    t = new da;
                    this.iframeContainer.addChildViews([t.container]);
                    this.iframeContainer.buildView();
                    this.chatContainer = t.container;
                    t.wrapper.addClass("isPopout");
                    A.rating.subscribe(function(a) {
                        e.changeRating(a)
                    });
                    u.pageStatus.subscribe(function(a) {
                        e.updateViewByStatus(a)
                    });
                    F.displayName.subscribe(function(a) {
                        e.changeVisitorName(a)
                    });
                    h.mobMaxStyle.subscribe(function() {
                        t.container.insertCssFile(h.mobMaxStyle());
                        t.wrapper.removeClass("white");
                        t.wrapper.removeClass("black");
                        t.wrapper.addClass(q.getContrast(h.headerTxtColor))
                    })
                },
                show: function() {
                    t.show();
                    this.updateViewByStatus(u.pageStatus());
                    this._super();
                    b.socketManager.sendToConnector("popupOnFocus", !0)
                },
                appendMessage: function(a) {
                    var b, d, c, e = {
                            "chat-message-row": v["chat-message-row"],
                            "chat-resend-link": v["chat-resend-link"],
                            "chat-message-owner-agent": v["chat-message-owner-agent"],
                            "chat-message-owner-visitor": v["chat-message-owner-visitor"],
                            "chat-message-container": v["chat-message-container"],
                            "chat-notification-container": v["chat-notification-container"],
                            "chat-message-status-row": v["chat-message-status-row"],
                            "chat-divider": v["chat-divider"]
                        },
                        g = q.parseChatTime(a.time);
                    "a" === a.senderType ? (b = (b = (c = A.agentProfiles[a.ownerId]) && c.pi ? u.agentImgUrl + "/" + A.agentProfiles[a.ownerId].pi : "") ? "url('" + b + "')" : "transparent", d = "explorer" ===
                        G && 9 > J ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "',sizingMethod='scale');" : "background-position:0 0;background-size:28px 28px;", e["chat-message-owner-agent"] = e["chat-message-owner-agent"].replace("__IMAGE_URL__", b).replace("__IE_IMAGE_SCALE__", c && c.pi ? d : "")) : "s" === a.senderType && (e["chat-message-owner-agent"] = e["chat-message-owner-agent"].replace("__IMAGE_URL__", "").replace("__IE_IMAGE_SCALE__", ""));
                    e["chat-message-status-row"] = a.isPending ? v["chat-message-pending-row"] :
                        e["chat-message-status-row"].replace("__TIME__", g).replace("__TIME_CLASS__", "v" === a.senderType ? "visitor" : "agent");
                    return this._super(a, e)
                },
                prepareResendLink: function(a) {
                    var f, d, c, e = this.chatContainer.getElementById(a);
                    e && e.childNodes.length && (c = e.parentNode.childNodes[0]) && (f = c.childNodes[0], d = q.rawDecode(e.childNodes[0].textContent || e.childNodes[0].innerText), f && d && this.chatContainer.attachUserEventListener(this.clickEvent, function(f) {
                        b.eventHandler.cancelEvent(f); - 1 !== c.className.indexOf("errorInMessage") &&
                            (c.className = "messageStatusContainer pending", b.chatHandler.sendMessageToServer(d, a))
                    }, "resendMessage-" + a, "resend" + a + "click"))
                },
                updateViewByStatus: function(a) {
                    this._super(a);
                    t && ("preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm) && (t.toggleMenuContainer("online" === a || "away" === a), h.isPopup && (a = m.getShortMessage(a), document.title = a ? k.profileName + " - " + a : k.profileName))
                },
                handleEndChat: function() {
                    t.chatEnded();
                    this.hideWidget()
                },
                handleRestartChat: function() {
                    t.chatStarted()
                },
                hideEmbeddedGreetings: function() {
                    var a, b;
                    t && t.container && (a = t.container.getElementById("greetingsWrapper"), b = t.container.getElementById("chatWrapper"), a && b && (a.style.display = "none", b.style.display = "block"))
                },
                showEmbeddedGreetings: function() {
                    var a;
                    t.container && (a = t.container.getElementById("greetingsOverlay"), chatWrapper = t.container.getElementById("chatTableWrapper"), a && chatWrapper && (chatWrapper.style.display = "none", a.style.display = "block"))
                },
                changeVisitorName: function(a) {
                    var b, d, c, e;
                    if (this.chatContainer &&
                        this.chatContainer.elementReferrer && (b = this.chatContainer.getElementById("chatWrapper")))
                        for (e = q.getElementsByClassName(b, "messageOwnerName visitor"), d = 0, c = e.length; d < c; d += 1) b = e[d], b.innerHTML = a
                },
                appendAgent: function() {
                    var a = this.chatContainer,
                        f = a.getElementById("chatWrapper");
                    a && (b.agents.agentsCount++, f.className = 1 >= b.agents.agentsCount ? "single-agent" : "multi-agent")
                },
                removeAgent: function(a) {
                    this.chatContainer.elementReferrer && b.agents.agentsCount--
                }
            });
            ia.prototype.begin = function() {
                var a = B;
                document.body.appendChild(this.iframeContainer.elementReferrer);
                if ("symbian" === a || "ie" === a || "opera" === a || "android2.3" === a) this.clickEvent = "click";
                t.buildView();
                this.chatContainer.documentRef.getElementById("popOut").style.display = "none";
                if (q.isTouchDevice() && ("android" === B || "android2" === B || "android2.3" === B)) {
                    var a = this.chatContainer.getElementById("chatContainer"),
                        f = this.chatContainer.getElementById("menuScrollable");
                    this.addOverflowScroll(a);
                    this.addOverflowScroll(f);
                    a.style.overflow = "hidden";
                    f.style.overflow = "hidden"
                }
                b.audioPlayer.initAudioPlayer()
            };
            ia.prototype.hideWidget =
                function() {
                    b.socketManager.sendToConnector("popupOnFocus", !1);
                    setTimeout(function() {
                        1 < e.history.length ? e.history.back() : e.close()
                    }, 200)
                };
            ia.prototype.showWidget = function() {
                this.scrollToBottom();
                this.iframeContainer.show()
            };
            ia.prototype.addStartTime = function(a) {
                var f, d = this.chatContainer.documentRef;
                d && (a = q.getDateFromUTC(a), a = b.languageParser.translate("days", a.getDay()) + ", " + b.languageParser.translate("months", a.getMonth()) + " " + a.getDate() + ", " + a.getFullYear(), f = v["mobile-first-message-time"], f =
                    f.replace("__CONTENT__", a), messageContainer = new D("firstMessageTimeWrapper", null, {
                        className: "chatLineContainer"
                    }, null, d.documentRef), messageContainer.template = f, messageContainer.buildView(), chatWrapper.insertBefore(messageContainer.elementReferrer, d.getElementById("chatWrapper").firstChild))
            };
            ia.prototype.resetView = function() {
                var a, b;
                if (a = this.chatContainer) {
                    if (a = a.getElementById("chatWrapper")) b = a.lastChild, a.innerHTML = "", a.appendChild(b), this.showEmbeddedGreetings();
                    this.show()
                }
            };
            ia.prototype.addOverflowScroll =
                function(a) {
                    var f = 0,
                        d = this;
                    b.eventHandler.listen(a, "touchstart", function(b) {
                        f = a.scrollTop + b.touches[0].pageY
                    }, "mobiletouchstart" + a.id);
                    b.eventHandler.listen(a, "touchmove", function(c) {
                        b.eventHandler.cancelEvent(c);
                        20 >= c.touches[0].pageY || 0 > f - c.touches[0].pageY || (a.scrollTop = f - c.touches[0].pageY, t.isScrollbarDown = d.ifScrollbarDown())
                    }, "mobiletouchmove" + a.id)
                };
            H = function() {
                function a() {
                    b && (c.away && x.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), c.active = !0, c.away = !1)
                }

                function f() {
                    b && (!x.connected && b.socketManager.isForcedDisconnect() ? b.main.criticalRefresh(u.serverVersion, !1, !0) : (c.hasFocus || (c.active = !0, c.hasFocus = !0, x.connected && b.socketManager.sendToConnector("popupOnFocus", !0)), c.away && x.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), c.away = !1))
                }

                function d() {
                    b && (c.hasFocus = !1, x.connected && b.socketManager.sendToConnector("popupOnFocus", !1))
                }
                var c = this,
                    g = !1;
                this.onActivityHandler = a;
                this.popupOnFocusHandler = f;
                this.popupOnBlurHandler =
                    d;
                this.reconnectOnActivity = function() {
                    b && !g && (g = !0, b.main.criticalRefresh(u.serverVersion))
                };
                this.away = this.active = this.hasFocus = !1;
                this.interval = this.awayTimeout = this.inactivityTimeout = null;
                b.eventHandler.listen(document, "mousemove", a, "acmousemove");
                b.eventHandler.listen(document, "click", a, "acclick");
                b.eventHandler.listen(document, "keydown", a, "ackeydown");
                this.initActivityReset = function() {
                    c.resetTimeout();
                    c.interval = setInterval(function() {
                        c.active && (c.resetTimeout(), c.active = !1)
                    }, 1E4);
                    h.isPopup &&
                        (document.onfocusin ? (b.eventHandler.listen(document, "focusin", f, "acfocus"), b.eventHandler.listen(document, "focusout", d, "acblur")) : (b.eventHandler.listen(e, "focus", f, "acfocus"), b.eventHandler.listen(e, "blur", d, "acblur")), b.eventHandler.listen(document, "click", f, "acphclick"), b.eventHandler.listen(document, "keydown", f, "acphkeydown"))
                }
            };
            H.prototype.resetTimeout = function() {
                var a = this;
                clearTimeout(this.inactivityTimeout);
                clearTimeout(this.awayTimeout);
                this.awayTimeout = setTimeout(function() {
                    !a.away && b &&
                        (a.away = !0, b && (b.socketManager && x.connected) && b.socketManager.sendToConnector("notifySocketStatusUpdate", "away"))
                }, 6E5);
                b && !b.socketManager.isForcedDisconnect() && (this.inactivityTimeout = setTimeout(function() {
                    a.inactivityTimeoutHandler()
                }, 36E5))
            };
            H.prototype.inactivityTimeoutHandler = function() {
                b && (h.isPopup ? x.connected && b.socketManager.sendToConnector("visitorConnectionCount", function(a) {
                    a = a ? parseInt(a, 10) : 0;
                    if (1 < a) return e.close();
                    b.socketManager.disconnectConnector()
                }) : (b.socketManager.disconnectConnector(),
                    h.isEmbedded ? b.formHandler.openForm("inactivityOverlay") : u.chatWindowState("min"), document.onfocusin ? b.eventHandler.listen(document, "focusin", this.reconnectOnActivity, "acitfocus") : b.eventHandler.listen(e, "focus", this.reconnectOnActivity, "acitfocus"), b.eventHandler.listen(document, "mousemove", this.reconnectOnActivity, "acitmousemove"), b.eventHandler.listen(document, "click", this.reconnectOnActivity, "acitclick"), b.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown")))
            };
            H.prototype.cleanUp =
                function() {
                    clearInterval(this.interval);
                    clearTimeout(this.inactivityTimeout);
                    clearTimeout(this.awayTimeout)
                };
            O = function() {
                var a = this;
                this.originalPageStatus = this.agentCountSubscription = this.setupTimeout = null;
                this.utcOffset = 0;
                b.eventEmitter.on("scheduleUpdate", function(b) {
                    h.widgetId === b.wdgt && (h.schedule = null !== b.ws ? b.ws.sch : null, h.scheduleTimezone = {}, null !== b.wstz && (h.scheduleTimezone = {
                        utc: b.wstz.utc,
                        tzo: b.wstz.offset
                    }), a.setup())
                })
            };
            O.prototype.setup = function() {
                clearTimeout(this.setupTimeout);
                null ===
                    this.originalPageStatus && (this.originalPageStatus = u.pageStatus());
                h.schedule ? (this.utcOffset = -1 * ((new Date).getTime() - h.scheduleTimezone.utc), this.calculate()) : u.pageStatus(this.originalPageStatus)
            };
            O.prototype.calculate = function() {
                var a, b, d = this;
                h.schedule && (this.clearTimer(), a = new Date, localOffset = -6E4 * a.getTimezoneOffset(), b = h.scheduleTimezone.tzo - localOffset, a = new Date(a.getTime() + this.utcOffset + b), b = a.getDay(), todayStartValue = h.schedule[b].start, todayEndValue = h.schedule[b].end, tomorrow = 6 === b ?
                    0 : b + 1, tomorrowStartValue = h.schedule[tomorrow].start, since = 36E5 * a.getHours() + 6E4 * a.getMinutes(), 0 === todayStartValue && 0 === todayEndValue ? (this.goOffline(), this.setupTimeout = setTimeout(function() {
                        d.calculate()
                    }, 864E5 - since + tomorrowStartValue)) : since < todayStartValue ? (this.goOffline(), this.setupTimeout = setTimeout(function() {
                        d.calculate()
                    }, todayStartValue - since)) : since >= todayEndValue ? (this.goOffline(), this.setupTimeout = setTimeout(function() {
                        d.calculate()
                    }, 864E5 - since + tomorrowStartValue)) : (this.goOnline(),
                        this.setupTimeout = setTimeout(function() {
                            d.calculate()
                        }, todayEndValue - since)))
            };
            O.prototype.goOnline = function() {
                "offline" !== this.originalPageStatus && (u.pageStatus(this.originalPageStatus), null !== this.agentCountSubscription && (b.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null))
            };
            O.prototype.goOffline = function() {
                0 !== b.agents.totalAgents() ? this.agentCountSubscription = b.agents.totalAgents.subscribe(function(a) {
                    0 === a && u.pageStatus("offline")
                }) : u.pageStatus("offline")
            };
            O.prototype.clearTimer = function() {
                clearTimeout(this.setupTimeout);
                this.setupTimeout = null
            };
            R = function() {
                this.registerTime = 0;
                this.registerStart = null;
                this.maxRetrycount = 10;
                this.retryCount = 0;
                this.registerData = this.registerDelayTimeout = this.connectionCookieInterval = this.requestCancelTimeout = this.previousRegisterCall = null;
                this.registerStarted = !1;
                this.retryDelay = null;
                this.retryInitialDelay = 30;
                this.retryMultiplier = 1.5;
                this.minRandom = 0.5;
                this.maxRandom = 1.5;
                this.maxDelay = 120;
                this.retryRegisterTimeout = null
            };
            R.prototype.register = function() {
                this.registerStarted = !0;
                this.clearTimers();
                this.prepareData()
            };
            R.prototype.prepareData = function() {
                var a, f, d, c = "",
                    e = "";
                if (b) {
                    a = W.getSessionInformation();
                    f = u.sessionKey || void 0;
                    a.length && (e = a[0]);
                    d = (new Date).getTimezoneOffset();
                    if (-900 > d || 900 < d) d = 0;
                    this.registerData ? (this.registerData.k = f, this.registerData.d = e) : (c = b.browserData.getReferredSearchEngine(), a = "undefined" === typeof $_Tawk_WidgetId ? "default" : $_Tawk_WidgetId, this.registerData = {
                        a: P.pageId || "",
                        k: f,
                        w: a,
                        d: e,
                        mb: B ?
                            1 : 0,
                        m: d,
                        s: c,
                        q: "",
                        r: document.referrer
                    });
                    b.main.maximize && (this.registerData.h = "max");
                    this.registerData.wv = h.widgetVersion;
                    h.isPopup && (u.transferKey && u.sessionKey) && (this.registerData.tk = u.transferKey);
                    b.main.previousSessionKey = this.registerData.k;
                    this.getUUID()
                }
            };
            R.prototype.getUUID = function() {
                var a, b, d, c = !1,
                    g = Infinity,
                    h = e.location.hostname;
                "www." === h.substring(0, 4) && (h = h.replace("www.", ""));
                a = W.getStoredUUID();
                for (var k = 0, m = a.length; k < m; k++) {
                    var p, q, s, t;
                    t = W.parseSessionInformation(a[k]);
                    if (4 === t.length)
                        if (p =
                            t[0], q = t[1], s = t[2], t = t[3], "e" === p) {
                            if (h === q) {
                                b = s;
                                d = t;
                                break
                            }
                        } else "p" === p && (p = h.match(q)) && (h.substr(p.index) === q && p.index < g) && (g = p.index, b = s, d = t, c = !0)
                }
                this.registerData && (this.registerData.u = b, this.registerData.uv = d, c && (this.registerData.uw = !0));
                this.startRegister()
            };
            R.prototype.abort = function() {
                null !== this.previousRegisterCall && (pa.abort(this.previousRegisterCall), this.previousRegisterCall = null)
            };
            R.prototype.setupRegisterTimeout = function() {
                var a = this;
                clearTimeout(this.requestCancelTimeout);
                this.requestCancelTimeout =
                    setTimeout(function() {
                        a.abort();
                        a.retryRegister()
                    }, 9E4)
            };
            R.prototype.startRegister = function() {
                var a = W.getHTTPCookie("TawkConnectionTime"),
                    a = parseInt(a.length ? a[0] : null, 10);
                !a || 1E3 < (new Date).getTime() - (new Date(a)).getTime() ? (W.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0), this.connectionCookieInterval = setInterval(function() {
                    W.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0)
                }, 100), this.doRegister()) : this.delayRegister()
            };
            R.prototype.delayRegister = function() {
                var a = this;
                clearTimeout(this.registerDelayTimeout);
                this.registerDelayTimeout = setTimeout(function() {
                    a.register()
                }, 1E3)
            };
            R.prototype.doRegister = function() {
                var a = u.visitorAppServer + "/register/",
                    f = this;
                this.registerStart = (new Date).getTime();
                this.setupRegisterTimeout();
                a += this.registerStart;
                this.previousRegisterCall = !pa.hasCORS || "symbian" === B || "android" === B && 4 === J ? pa.jsonp(a, this.registerData) : pa.xhrRequest(a, this.registerData, function(a, c) {
                    if (a || !c) return f.clearTimers(), f.retryRegister();
                    b && (c = q.trim(c), b.main.begin($_TAWK_JSON.parse(c)))
                })
            };
            R.prototype.retryRegister =
                function() {
                    var a, f = this;
                    null === this.retryRegisterTimeout && (this.retryCount > this.maxRetrycount ? (this.clearTimers(), b && b.main.hideWidget()) : (this.retryCount++, a = this.getRetryWaitDelay(), this.retryRegisterTimeout = setTimeout(function() {
                        f.register()
                    }, a)))
                };
            R.prototype.resetRetryCount = function() {
                this.retryCount = 0;
                this.retryDelay = 10
            };
            R.prototype.getRetryWaitDelay = function() {
                var a, b = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
                null === this.retryDelay ? this.retryDelay = this.retryInitialDelay :
                    (a = this.retryDelay * this.retryMultiplier, this.retryDelay = this.retryDelay > this.maxDelay || a > this.maxDelay ? this.maxDelay : a);
                return 1E3 * Math.round(this.retryDelay * b)
            };
            R.prototype.clearTimers = function() {
                this.abort();
                clearTimeout(this.requestCancelTimeout);
                clearTimeout(this.registerDelayTimeout);
                clearTimeout(this.retryRegisterTimeout);
                clearInterval(this.connectionCookieInterval);
                W.setHTTPCookie("TawkConnectionTime", 0, !0);
                this.connectionCookieInterval = this.requestCancelTimeout = this.registerDelayTimeout = this.retryRegisterTimeout =
                    null
            };
            E = function() {};
            E.prototype.processSettings = function(a) {
                var f, d, c, e = "",
                    g = d = "",
                    k = "";
                if (!(a.wv < h.widgetVersion)) {
                    h.widgetVersion = a.wv;
                    h.chatPosition(a.pos);
                    B ? h.mobileWidget(a.mw || "round") : h.desktopWidget(a.dw || "full");
                    h.maximizedDimensions({
                        width: parseInt(a.w, 10) || 320,
                        height: parseInt(a.h, 10) || 400
                    });
                    h.isDesktopRectangle() ? (f = parseInt(a.minw, 10) || 320, c = parseInt(a.minh, 10) || 40) : (f = 61, c = 66);
                    h.minimizedDimensions({
                        width: f,
                        height: c,
                        position: a.pos
                    });
                    h.chatBubble(a.bbl);
                    h.headerBgColor = a.thm.hbg || "#7fb06f";
                    h.headerTxtColor = a.thm.htx || "#ffffff";
                    h.agentTextBgColor = a.thm.aBblBg || q.shadeColor(h.headerBgColor, -0.1);
                    h.agentTextColor = a.thm.aBblTx || "#ffffff";
                    h.visitorTextBgColor = a.thm.vBblBg || "#e5e5e5";
                    h.visitorTextColor = a.thm.vBblTx || "#333333";
                    "undefined" !== typeof a.thm.topc ? h.topCorner = a.thm.topc : h.isTopPositioned() ? h.topCorner = 0 : h.topCorner = 8;
                    "undefined" !== typeof a.thm.btmc ? h.bottomCorner = a.thm.btmc : h.isTopPositioned() ? h.bottomCorner = 8 : h.bottomCorner = 0;
                    if (h.isEmbedded || h.isPopup) h.topCorner = 0, h.bottomCorner =
                        0;
                    h.onClickAction = a.woc;
                    h.hideWidgetOnLoad = a.hwol;
                    h.hideWidgetOnOffline = a.hwof;
                    h.hideWidget = !!a.dsw;
                    h.showAgentBar = !a.hab;
                    h.showWaitTime = !a.hwt;
                    h.locale = a.lc;
                    h.onlineGreeting = a.onlineGreeting;
                    h.awayGreeting = a.awayGreeting;
                    h.schedule = a.ws;
                    h.soundOn(!a.dws);
                    0 <= q.rtlLangTab.indexOf(h.locale) ? h.isRTL(!0) : h.isRTL(!1);
                    this.processPrechatForm(a);
                    this.processOfflineForm(a, a.grt);
                    b && (a = ".theme-background-color{background-color: " + h.headerBgColor + ";}", f = ".theme-text-color{color: " + h.headerTxtColor + ";}", b.MinifiedStyle &&
                        (c = h.topCorner + "px " + h.topCorner + "px " + h.bottomCorner + "px " + h.bottomCorner + "px !important;", d = d + a + f, d += ".border-corner{border-radius : " + c + "-moz-border-radius : " + c + "-webkit-border-radius : " + c + "};", d += ".bubble-text-color{color:" + (h.chatBubble() ? h.chatBubble().fgc : "#ffffff") + ";}", h.minStyle(d)), b.MaximizedStyle && (c = h.topCorner + "px " + h.topCorner + "px 0px 0px !important;", d = ".border-corner{border-radius : " + c + "-moz-border-radius : " + c + "-webkit-border-radius : " + c + "};", e = e + a + f, e += "button.theme-background-color:hover{background-color: " +
                            q.shadeColor(h.headerBgColor, -0.3) + ";}", e += ".agentChatContainer .message{background-color: " + h.agentTextBgColor + " !important; color : " + h.agentTextColor + " !important;}", e += ".visitorChatContainer .message{background-color: " + h.visitorTextBgColor + " !important; color : " + h.visitorTextColor + " !important;}", e += d, h.maxStyle(e)), b.MinifiedMobileStyle && (k = k + a + f, h.mobMinStyle(k)), b.MaximizedMobileStyle && (g = g + a + f, g += ".theme-background-color .button:hover, button.approveButton:active{background-color: " + q.shadeColor(h.headerBgColor, -0.3) + ";}", g += "#topBarContainer{border-color: " + q.shadeColor(h.headerBgColor, -0.3) + ";}", g += ".agentChatContainer .message{background-color: " + h.agentTextBgColor + " !important; color : " + h.agentTextColor + " !important;}", g += ".visitorChatContainer .message{background-color: " + h.visitorTextBgColor + " !important; color : " + h.visitorTextColor + " !important;}", h.mobMaxStyle(g)))
                }
            };
            E.prototype.processPrechatForm = function(a) {
                h.showPreChatForm = null !== a.prechatForm;
                h.showPreChatForm && (h.prechatOptions = a.prechatForm)
            };
            E.prototype.processOfflineForm = function(a) {
                a = a.offlineForm ? a.offlineForm : {
                    text: b.languageParser.translate("form", "OfflineFormMessage"),
                    shortMessage: b.languageParser.translate("status", "offline"),
                    fields: [{
                        label: b.languageParser.translate("form", "name"),
                        isRequired: !0,
                        type: "name"
                    }, {
                        label: b.languageParser.translate("form", "email"),
                        isRequired: !0,
                        type: "email"
                    }, {
                        label: b.languageParser.translate("form", "message"),
                        isRequired: !0,
                        type: "message"
                    }]
                };
                h.offlineOptions = a
            };
            E.prototype.getPrechatFields = function() {
                return h.prechatOptions.fields
            };
            E.prototype.getOfflineFields = function() {
                return h.offlineOptions.fields
            };
            E.prototype.getShortMessage = function(a) {
                var b = null;
                "online" === a && h.onlineGreeting ? b = h.onlineGreeting.shortMessage : "away" === a && h.awayGreeting ? b = h.awayGreeting.shortMessage : "offline" === a && h.offlineOptions && (b = h.offlineOptions.shortMessage);
                return b
            };
            E.prototype.getLongMessage = function(a) {
                var b = null;
                "online" === a ? h.onlineGreeting && (b = h.onlineGreeting.longMessage) : "away" === a ? h.awayGreeting && (b = h.awayGreeting.longMessage) : h.offlineOptions &&
                    (b = h.offlineOptions.text);
                return q.transformGreetings(b)
            };
            m = new E;
            E = function() {
                var a = this;
                F.name.subscribe(function(a) {
                    F.displayName(q.parseVisitorName(a))
                });
                b.eventEmitter.on("localeChanged", function() {
                    F.displayName(q.parseVisitorName(F.name()))
                });
                b.eventEmitter.on("visitorDataUpdate", function(b) {
                    a.updateVisitorInformation(b)
                });
                b.eventEmitter.on("requestEmailTranscript", function(a, c) {
                    a.chatEndVersion = A.chatEndVersion;
                    b.chatHandler.hasChatEnded ? b.socketManager.sendToConnector("notifyEndChatTranscript",
                        a, c) : b.socketManager.sendToConnector("notifyEmailTranscript", a, c)
                })
            };
            E.prototype.updateVisitorUUID = function(a) {
                var b = $_TAWK_JSON.parse(a.uuids);
                F.uuid = a.uuid;
                F.uuidVer = a.uver || 0;
                b && (Object.keys(b.e).forEach(function(a) {
                    F.uuids.push({
                        isExact: !0,
                        domain: a,
                        uuid: b.e[a]
                    })
                }), Object.keys(b.p).forEach(function(a) {
                    F.uuids.push({
                        isExact: !1,
                        domain: a,
                        uuid: b.p[a]
                    })
                }));
                W.storeUUID()
            };
            E.prototype.updateVisitorInformation = function(a) {
                a.n && q.isString(a.n) && F.name(a.n);
                a.te && q.isString(a.te) && (F.transcriptEmail = a.te);
                a.e && q.isString(a.e) && F.email(a.e);
                a.vid && (F.visitorId = a.vid);
                a.dpt && q.isString(a.dpt) && (A.chatDepartment = a.dpt)
            };
            E.prototype.setNameFromForm = function(a) {
                b.visitorHandler.setNameValue(a);
                k.onVisitorNameChanged(a.name)
            };
            E.prototype.getNameValue = function() {
                return F.name() === F.displayName() ? F.name() : ""
            };
            E.prototype.setNameValue = function(a) {
                F.name(q.rawEncode(a.name))
            };
            E.prototype.getTranscriptEmailValue = function() {
                return F.transcriptEmail
            };
            E.prototype.getEmailValue = function() {
                return F.email() || F.transcriptEmail
            };
            E.prototype.setEmailValue = function(a) {
                F.email(a.email)
            };
            E.prototype.setTranscriptValue = function(a) {
                a.name && F.name(q.rawEncode(a.name));
                F.transcriptEmail = a.transcriptEmail
            };
            Q = function() {
                var a = this;
                b.eventEmitter.on("chatBubbleClosed", function() {
                    u.chatBubbleClosed(!0)
                });
                b.eventEmitter.on("windowStateUpdated", function(a) {
                    u.chatWindowState(a.cw)
                });
                b.eventEmitter.on("pageStatusUpdated", function(a) {
                    var c;
                    a && (c = a.ast) && (q.isString(c) && q.isArray(a.dptst)) && a.asver > u.pageStatusVersion && (b.scheduler.originalPageStatus =
                        a.ast, u.pageStatusVersion = a.asver, u.departments = a.dptst, u.pageStatus(a.ast), b.scheduler.calculate())
                });
                b.eventEmitter.on("submitPrechatForm", function(b, c) {
                    a.formatPrechatData(b, c)
                });
                b.eventEmitter.on("submitOfflineForm", function(b, c) {
                    a.formatOfflineData(b, c)
                });
                u.pageStatus.subscribe(function(a) {
                    k.onStatusChange(a)
                })
            };
            Q.prototype.closeBubble = function() {
                u.chatBubbleClosed(!0);
                b.socketManager.sendToConnector("notifyChatBubbleClosed")
            };
            Q.prototype.getDeparmentOptions = function() {
                var a, f, c, e = [],
                    g = u.departments;
                a = 0;
                for (f = g.length; a < f; a++) c = g[a], e.push({
                    text: q.rawDecode(c.n) + " (" + b.languageParser.translate("status", c.st) + ")",
                    value: c.did,
                    selected: A.chatDepartment === c.did
                });
                return e
            };
            Q.prototype.getDeparmentName = function(a) {
                var b, c, e = u.departments;
                b = 0;
                for (c = e.length; b < c; b++)
                    if (e[b].did === a) return q.rawDecode(e[b].n);
                return a
            };
            Q.prototype.formatFormData = function(a, b, c) {
                var e, g, h, k = {
                    questions: []
                };
                e = 0;
                for (g = b.length; e < g; e++) {
                    h = b[e];
                    if ("name" === h.type && (k.name = a[h.id], c)) continue;
                    if ("email" === h.type && (k.email =
                            a[h.id], c)) continue;
                    "department" === h.type && (a[h.id] && "0" != a[h.id] || (a[h.id] = ""), k.department = a[h.id], a[h.id] = this.getDeparmentName(a[h.id]));
                    k.department || (k.department = "");
                    if ("message" === h.type && (k.message = a[h.id], c)) continue;
                    a[h.id] && 0 !== a[h.id].length && (q.isArray(a[h.id]) ? k.questions.push({
                        label: h.label,
                        answer: a[h.id].join(", ")
                    }) : k.questions.push({
                        label: h.label,
                        answer: a[h.id]
                    }))
                }
                return k
            };
            Q.prototype.formatPrechatData = function(a, c) {
                var d = this,
                    e = this.formatFormData(a, m.getPrechatFields());
                b.socketManager.sendToConnector("notifyPrechat",
                    e,
                    function(a) {
                        if (a) return c(a, e);
                        k.onPrechatSubmit(e.questions);
                        d.handlePrechatSave(e, c)
                    })
            };
            Q.prototype.handlePrechatSave = function(a, c) {
                var d, e, g = "";
                a.name && b.visitorHandler.setNameValue(a);
                a.email && b.visitorHandler.setEmailValue(a);
                u.prechatFormSubmitted = !0;
                if (0 === a.questions.length) return c(null, a);
                if (0 < a.questions.length)
                    for (d = 0, e = a.questions.length; d < e; d++) g += q.rawDecode(a.questions[d].label) + " : " + a.questions[d].answer, d !== e - 1 && (g += "\r\n");
                b.chatHandler.sendMessageToServer(g, null, function(d) {
                    d.error ||
                        (b.chatHandler.prepareMessage({
                            ut: "v",
                            t: "c",
                            m: q.rawEncode(g),
                            co: new Date,
                            uid: F.visitorId
                        }, !1, !1, !0), b.viewHandler.addWaitTime());
                    c(d.error, a)
                })
            };
            Q.prototype.formatOfflineData = function(a, c) {
                var d = this.formatFormData(a, m.getOfflineFields(), !0);
                d.questions.unshift({
                    label: b.languageParser.translate("form", "SubmittedFrom"),
                    answer: e.location.href
                });
                b.socketManager.sendToConnector("notifyOfflineMessage", d, function(a) {
                    if (a) return c(a, d);
                    k.onOfflineSubmit(d);
                    c(null, d)
                })
            };
            Q.prototype.notifyWindowState = function(a) {
                u.chatWindowState(a);
                b.socketManager.sendToConnector("notifyWindowState", a)
            };
            Q.prototype.addEvent = function(a, c, d) {
                var e;
                "function" === typeof c && (d = c, c = null);
                d = d || function() {};
                e = this.secureWrapper({});
                e.name = a;
                e.data = c;
                b.socketManager.sendToConnector("addEvent", e, d)
            };
            Q.prototype.setAttributes = function(a, c, d) {
                d = d || function() {};
                if (c && (a.name || a.email)) {
                    if (!a.name || !a.email || !a.hash) return d("UNAUTHORIZED_API_CALL");
                    k.visitor = {
                        name: a.name,
                        email: a.email,
                        hash: a.hash
                    }
                } else a = this.secureWrapper(a);
                b.socketManager.sendToConnector("setAttributes",
                    a,
                    function(c) {
                        c || (a.name && b.visitorHandler.setNameValue(a), a.email && b.visitorHandler.setEmailValue(a));
                        d(c)
                    })
            };
            Q.prototype.addTags = function(a, c) {
                var d;
                c = c || function() {};
                d = this.secureWrapper({});
                d.tags = a;
                b.socketManager.sendToConnector("addTags", d, c)
            };
            Q.prototype.removeTags = function(a, c) {
                var d;
                c = c || function() {};
                d = this.secureWrapper({});
                d.tags = a;
                b.socketManager.sendToConnector("removeTags", d, c)
            };
            Q.prototype.secureWrapper = function(a) {
                "undefined" === a && (a = {});
                k && (k.visitor && "undefined" !== typeof k.visitor.hash &&
                    null !== k.visitor.hash && "undefined" !== typeof k.visitor.email && null !== k.visitor.email) && (a.email = k.visitor.email, a.hash = k.visitor.hash);
                return a
            };
            Q.prototype.setForeignKey = function(a, c) {
                var d;
                c = c || function() {};
                d = this.secureWrapper({});
                d.key = a;
                b.socketManager.sendToConnector("saveForeignKey", d, c)
            };
            Q.prototype.setConversionId = function(a, c) {
                var d;
                c = c || function() {};
                d = this.secureWrapper({});
                d.key = a;
                b.socketManager.sendToConnector("saveConversion", d, c)
            };
            Q.prototype.setVisitorAttributes = function() {
                var a = {};
                k && k.visitor && (k.visitor.name && (a.name = k.visitor.name), k.visitor.email && (a.email = k.visitor.email), this.setAttributes(a, !1))
            };
            var N = function() {
                var a = this;
                this.agentHasMessaged = this.visitorHasMessaged = !1;
                this.messageBuffer = [];
                this.messages = {};
                this.agentsTyping = [];
                this.agentProfilesTyping = [];
                this.previousTextTime = this.previousText = this.lastMessageOwner = null;
                this.hasChatEnded = !1;
                this.hasChatStarted = w.observable(!1);
                this.hasBeenMaximizedOnce = !1;
                b.eventEmitter.on("syncConversation", function(b) {
                    a.conversationUpdate(b)
                });
                b.eventEmitter.on("incomingMessage", function(b) {
                    a.handleMessageFromServer(b)
                });
                b.eventEmitter.on("agentIsTyping", function(b) {
                    a.handleAgentTyping(b.rsc)
                });
                b.eventEmitter.on("agentStopedTyping", function(b) {
                    a.handleAgentStoppedTyping(b.rsc)
                });
                b.eventEmitter.on("newChatRating", function(b) {
                    parseInt(b.rt, 10);
                    a.changeRating(b.rsc, !0)
                })
            };
            N.prototype.parseHistory = function() {
                var a, c, d, e = d = 0;
                this.noRedraw = !0;
                A.chatEndVersion = 1;
                a = 0;
                for (c = A.chatHistory.length; a < c; a++) "CHAT_ENDED" === A.chatHistory[a].m && (d = a + 1,
                    A.chatEndVersion++);
                a = d;
                for (c = A.chatHistory.length; a < c; a++)
                    if (d = A.chatHistory[a], !d.md || d.md && !d.md.ao) "v" !== d.ut || (this.visitorHasMessaged || "c" !== d.t) || (e = (new Date).getTime() - q.getMilliseconds(d.co)), this.prepareMessage(d, !0, !1, !1);
                this.noRedraw = !1;
                this.visitorHasMessaged && (!this.agentHasMessaged && h.showWaitTime) && (u.waitTime = u.waitTime < e ? 6E4 : u.waitTime - e, b.viewHandler.addWaitTime());
                this.hasChatStarted(this.visitorHasMessaged || this.agentHasMessaged)
            };
            N.prototype.handleIndicator = function() {
                b.viewHandler.indicator.show();
                B && (b.viewHandler.hasChatStarted = !0)
            };
            N.prototype.handleMessageFromServer = function(a) {
                var c = null;
                if (a.md && a.md.ao) return A.chatVersion = a.cver;
                if ("offline" === u.pageStatus())
                    if ("a" === a.ut) u.pageStatus("online");
                    else return;
                if (!A.chatSynced) return A.chatBuffer.push(a);
                this.hasChatEnded && this.startNewChat();
                "v" === a.ut && "c" === a.t && b.viewHandler.addWaitTime();
                h.isPopup || ("c" !== a.t || b.viewHandler.isMaximized || "v" === a.ut || h.isEmbedded) || ("max" !== h.onClickAction || this.agentHasMessaged || B || this.hasBeenMaximizedOnce ?
                    h.hideWidgetOnLoad || (b.viewHandler.indicator.show(), B && (b.viewHandler.hasChatStarted = !0)) : (b.sessionHandler.notifyWindowState("max"), this.hasBeenMaximizedOnce = !0));
                A.chatVersion = a.cver;
                "s" === a.ut || ("c" !== a.t || this.hasChatStarted()) || (this.hasChatStarted(!0), k.onChatStarted());
                if ("c" === a.t)
                    if ("a" === a.ut)
                        if (a.md && a.md.file) k.onFileUpload("https://tawkto.link/" + a.md.file.name);
                        else k.onChatMessageAgent(a.m);
                else {
                    if ("s" === a.ut) k.onChatMessageSystem(a.m)
                } else if ("n" === a.t)
                    if ("AGENT_JOIN_CONVERSATION" ===
                        a.m) a.md && (a.md.pi && a.md.pi.length) && (c = "https://s3.amazonaws.com/talk-pi/" + a.md.pi), k.onAgentJoinChat({
                        name: a.n,
                        position: a.md.pst,
                        image: c,
                        id: a.uid
                    });
                    else if ("AGENT_LEFT_CONVERSATION" === a.m) k.onAgentLeaveChat({
                    name: a.n,
                    id: a.uid
                });
                this.prepareMessage(a, !1);
                b.scheduler.calculate();
                h.showPreChatForm && ("preChatForm" === b.formHandler.currentForm && b.formHandler.closeForm(), h.showPreChatForm = !1)
            };
            N.prototype.prepareMessage = function(a, c, d, e) {
                var g, h, k, m, p = !0;
                "n" === a.t && "v" === a.ut ? "VISITOR_RATING" === a.m && this.changeRating(a.md.rt, !0) : ("v" === a.ut ? (g = F.displayName(), h = a.uid) : (g = a.n, "a" === a.ut && (h = A.profiles[a.md.rsc])), "n" === a.t && (p = b.agents.updateAgentPresence(a.m, a.md, a.n, a.md.rsc, !d), k = b.languageParser.translate("chat", a.m, {
                    n: "<b>" + a.n + "</b>"
                })), B && (h && A.agentProfiles[h]) && (m = A.agentProfiles[h].pi), p && (k || (k = this.parseText(a.m)), void 0 === c && (c = !0), a.messageId = b.viewHandler.appendMessage({
                        message: k,
                        name: g,
                        type: a.t,
                        time: a.co,
                        data: a.md,
                        isPending: !1,
                        senderType: a.ut,
                        ownerId: h,
                        dontPlaySound: c,
                        profileImg: m,
                        reDisplay: e
                    }), e || A.chatOrder++,
                    this.messages[A.chatOrder] = a))
            };
            N.prototype.parseText = function(a) {
                if (a) return a = a.replace(q.regLineBreaks, q.br), a = this.createUrl(a.split(/\s/), " ")
            };
            N.prototype.createUrl = function(a, c) {
                function d(a) {
                    return b.chatHandler.parseUrl(a)
                }

                function e(a) {
                    return b.chatHandler.parseEmail(a)
                }
                var g, h, k;
                h = 0;
                for (k = a.length; h < k; h++) - 1 !== a[h].indexOf(q.br) ? (g = a[h].split(q.regBr), a[h] = this.createUrl(g, q.br)) : a[h].match(q.regEmailMatch) ? a[h] = a[h].replace(q.regEmailMatch, e) : (a[h] = a[h].replace(q.regMatchUrl, d), a[h] = a[h].replace(q.regMatchIp,
                    d));
                return a.join(c)
            };
            N.prototype.parseUrl = function(a) {
                var b, c = "";
                a.match(q.regEmailMatch) && (c = "mailto:");
                if ("mailto:" === c) return b = a.match(q.regEmailMatch)[0], -1 !== b.indexOf("mailto") && (c = ""), a.replace(q.regEmailMatch, '<a href="' + (c + b) + '" title="' + (c + b) + '" style="word-wrap:break-word; white-space:normal;>' + b + "</a> ");
                if (-1 === a.toLowerCase().indexOf("http") || 0 < a.toLowerCase().indexOf("http")) c = "http://";
                return '<a target="_blank" href="' + (c + a) + '" title="' + (c + a) + '" style="word-wrap:break-word; white-space:normal;">' +
                    a + "</a> "
            };
            N.prototype.parseEmail = function(a) {
                var b = ""; - 1 === a.indexOf("mailto") && (b = "mailto:");
                return '<a href="' + (b + a) + '" title="' + (b + a) + '">' + a + "</a> "
            };
            N.prototype.sendTextPreview = function(a) {
                var c, d, e = this;
                c = b.eventHandler.getTargetElement(a);
                if (13 === a.keyCode && !a.shiftKey) return b.eventHandler.cancelEvent(a), d = q.trim(c.value), c.value = "", this.sendMessage(d);
                this.keyDownTimeout || (this.keyDownTimeout = setTimeout(function() {
                    d = q.trim(c.value);
                    b.socketManager.sendToConnector("notifyMessagePreview", d);
                    clearTimeout(e.keyDownTimeout);
                    e.keyDownTimeout = 0
                }, 500))
            };
            N.prototype.sendMessage = function(a, c, d) {
                var e = (new Date).getTime();
                a = q.trim(a);
                clearTimeout(this.keyDownTimeout);
                this.keyDownTimeout = 0;
                if (!a) return d ? d() : !1;
                this.previousText && (this.previousTextTime && this.previousText === a && 500 > e - this.previousTextTime) && b.loggingHandler.logIncident("Double message occured", {
                    previousText: this.previousText,
                    currentText: a,
                    currentT: e,
                    previousT: this.previousTextTime
                });
                this.previousTextTime = e;
                this.previousText = a;
                c = !!c;
                c = b.viewHandler.appendMessage({
                    message: this.parseText(q.rawEncode(a)),
                    name: F.displayName(),
                    type: "c",
                    time: new Date,
                    isPending: !0,
                    senderType: "v",
                    ownerId: F.visitorId,
                    dontPlaySound: c
                });
                this.sendMessageToServer(a, c, d)
            };
            N.prototype.sendMessageToServer = function(a, c, d) {
                var e = this,
                    g;
                d = d || function(a) {
                    b.viewHandler.handleAcknowledgment(a)
                };
                b.socketManager.sendToConnector("sendChatMessage", a, function(b, h, m) {
                    b || (g = ++A.chatOrder, e.messages[g] = {
                            ut: "v",
                            t: "c",
                            m: q.rawEncode(a),
                            co: h,
                            messageId: c,
                            uid: F.visitorId
                        },
                        A.chatVersion = m, e.hasChatStarted() || "offline" === u.pageStatus() || (e.hasChatStarted(!0), k.onChatStarted()), k.onChatMessageVisitor(a));
                    d({
                        error: b,
                        messageId: c,
                        order: g
                    })
                })
            };
            N.prototype.conversationUpdate = function(a) {
                a = a || {};
                var c, d, e = a.cver || 0,
                    g = a.c || [];
                d = A.chatBuffer;
                A.chatSynced = !0;
                if (!(A.chatVersion >= e)) {
                    a = 0;
                    for (c = d.length; a < c; a++) d[a].cver > e && g.push(d[a]);
                    a = 0;
                    for (c = g.length; a < c; a++) d = g[a], d.md && d.md.ao || this.prepareMessage(d, !1);
                    this.visitorHasMessaged && (!this.agentHasMessaged && h.showWaitTime) && b.viewHandler.addWaitTime();
                    A.chatVersion = e;
                    this.isScrollbar = b.viewHandler.isChatScrollbar();
                    b.viewHandler.scrollToBottom()
                }
            };
            N.prototype.handleAgentTyping = function(a) {
                var c = A.profiles[a];
                c && (A.agentProfiles[c] && !this.agentsTyping[a]) && (this.agentsTyping[a] = !0, this.agentProfilesTyping[c] ? this.agentProfilesTyping[c]++ : (this.agentProfilesTyping[c] = 1, b.viewHandler.appendAgentIsTypingElement(c)))
            };
            N.prototype.handleAgentStoppedTyping = function(a) {
                var c = A.profiles[a];
                this.agentsTyping[a] && delete this.agentsTyping[a];
                !this.agentProfilesTyping[c] ||
                    0 < --this.agentProfilesTyping[c] || (delete this.agentProfilesTyping[c], b.viewHandler.removeAgentTypingElement(c))
            };
            N.prototype.changeRating = function(a, c) {
                A.rating() === a && (a = 0);
                A.rating(a);
                c || (b.socketManager.sendToConnector("setRating", a), k.onChatSatisfaction(A.rating()))
            };
            N.prototype.prepareMessagesForPrinting = function() {
                var a, c, d, e = Object.keys(this.messages).length,
                    g = "";
                if (!e) return g;
                g = h.isRTL() ? g + '<div style="direction:rtl">' : g + '<div style="direction:ltr">';
                a = q.getDateFromUTC(this.messages[1].co);
                a = {
                    dateString: b.languageParser.translate("days", a.getDay()) + ", " + b.languageParser.translate("months", a.getMonth()) + " " + a.getDate() + ", " + a.getFullYear(),
                    time: q.parseChatTime(this.messages[1].co)
                };
                g += b.languageParser.translate("transcript", "CONVERSATION_STARTED_ON") + " " + b.languageParser.translate("transcript", "transcriptStartedOn", a) + "<br />===================================================<br /><br />";
                for (a = 1; a < e + 1; a++) g += "[" + q.parseChatTime(this.messages[a].co) + "] ", "c" === this.messages[a].t ? ("v" ===
                    this.messages[a].ut ? (c = "<i>" + (F.name() === F.displayName() ? F.name() : b.languageParser.translate("transcript", "me")) + "</i>", d = this.messages[a].m) : (c = "<b>" + this.messages[a].n + "</b>", d = this.messages[a].m.replace(q.regOption, "*")), this.messages[a].md && this.messages[a].md.file && (d = "https://tawk.link/" + this.messages[a].md.file.name), g += c + ": " + this.parseText(d) + "<br />", this.messages[a].md && (this.messages[a].md.file && -1 !== ["jpeg", "png", "gif"].indexOf(this.messages[a].md.file.type) && 2E6 >= this.messages[a].md.file.size) &&
                    (g += '<img src="https://tawk.link/' + this.messages[a].md.file.name + '" style="max-width : 250px; max-height : 250px; display: block;" />')) : "n" === this.messages[a].t && (g += b.languageParser.translate("chat", this.messages[a].m, this.messages[a]) + "<br />");
                return g + "</div>"
            };
            N.prototype.toggleSound = function(a) {
                var c = !h.soundOn();
                void 0 !== a && (c = a);
                h.soundOn(c);
                void 0 === a && b.socketManager.sendToConnector("toggleSound", c)
            };
            N.prototype.clearChatMessages = function() {
                this.agentHasMessaged = this.visitorHasMessaged = !1;
                this.messageBuffer = [];
                this.messages = {};
                this.agentsTyping = [];
                this.agentProfilesTyping = [];
                this.lastMessageOwner = null;
                A.chatOrder = 0;
                A.chatSynced = !1;
                A.chatBuffer = []
            };
            N.prototype.startNewChat = function() {
                this.clearChatMessages();
                b.viewHandler.resetView();
                b.viewHandler.handleRestartChat();
                A.chatSynced = !0;
                B || ("max" === u.chatWindowState() ? b.viewHandler.maximizeWidget() : b.viewHandler.minimizeWidget());
                this.hasChatEnded = !1
            };
            N.prototype.endChat = function(a) {
                b.viewHandler.handleEndChat();
                b.agents.clearAgents();
                this.hasChatEnded = !0;
                this.hasChatStarted(!1);
                A.chatEndVersion = a;
                k.onChatEnded()
            };
            N.prototype.sendFileMessage = function(a) {
                var c = this,
                    d = {
                        fileName: a.filename,
                        name: a.name,
                        type: a.extension,
                        mimeType: a.mimeType,
                        size: a.size
                    };
                b.socketManager.sendToConnector("fileUploadMessage", d, function(e, g, h) {
                    e || (b.viewHandler.fileUploaded(a.handle), d.fileName = q.rawEncode(d.fileName), messageId = b.viewHandler.appendMessage({
                        message: "FILE",
                        name: F.displayName(),
                        type: "c",
                        time: g,
                        isPending: !1,
                        senderType: "v",
                        ownerId: F.visitorId,
                        dontPlaySound: !0,
                        data: {
                            file: d
                        }
                    }), chatOrder = ++A.chatOrder, c.messages[chatOrder] = {
                        ut: "v",
                        t: "c",
                        m: "FILE",
                        co: g,
                        messageId: messageId,
                        uid: F.visitorId,
                        md: {
                            file: d
                        }
                    }, A.chatVersion = h, k.onFileUpload("https://tawkto.link/" + d.name))
                })
            };
            N.prototype.isChatOngoing = function() {
                return !this.hasChatEnded && this.visitorHasMessaged && 0 < b.agents.totalAgents()
            };
            N.prototype.isVisitorEngaged = function() {
                return !this.hasChatEnded && this.visitorHasMessaged
            };
            N.prototype.triggerEndChat = function() {
                var a = this;
                b.socketManager.sendToConnector("endVisitorChat", {}, function(b, c) {
                    b || a.endChat(c.chatEndVersion)
                })
            };
            var ja = function() {
                this.agentsCount = 0;
                this.totalAgents = w.observable(0)
            };
            ja.prototype.updateAgentPresence = function(a, b, c, e, g) {
                if (!h.showAgentBar) return !0;
                if ("AGENT_JOIN_CONVERSATION" !== a && "AGENT_LEFT_CONVERSATION" !== a) return !1;
                switch (a) {
                    case "AGENT_JOIN_CONVERSATION":
                        return this.addAgentToList(b, c, e, g);
                    case "AGENT_LEFT_CONVERSATION":
                        return this.removeAgentFromList(b, e, g)
                }
            };
            ja.prototype.addAgentToList = function(a, c, d, e) {
                var g = A.agents[d];
                if (g)
                    if (g.seq.time <
                        a.seq.time || g.seq.time === a.seq.time && g.seq.inc < a.seq.inc) {
                        g.seq = a.seq;
                        if (g.pid === a.pid) return !1;
                        this.changeAgentProfile(g.pid, e);
                        g.pid = a.pid;
                        A.profiles[d] = a.pid
                    } else return !1;
                else A.agents[d] = a, A.profiles[d] = a.pid;
                if (!a.pid) return !1;
                this.totalAgents(this.totalAgents() + 1);
                if ("undefined" !== typeof A.agentProfiles[a.pid]) return A.agentProfiles[a.pid].pi = a.pi, A.agentProfiles[a.pid].count++, !1;
                c = {
                    pi: a.pi,
                    pst: a.pst || "",
                    pid: a.pid,
                    n: c,
                    count: 1
                };
                A.agentProfiles[a.pid] = c;
                e && b.viewHandler.appendAgent(c);
                return !0
            };
            ja.prototype.changeAgentProfile = function(a, c) {
                var d;
                d = A.agentProfiles[a];
                this.decrementProfileCount(a, c) && c && (d = {
                    message: b.languageParser.translate("chat", "AGENT_LEFT_CONVERSATION", {
                        n: "<b>" + d.n + "</b>"
                    }),
                    name: "",
                    type: "n",
                    time: new Date,
                    isPending: !1,
                    senderType: "a",
                    ownerId: "",
                    dontPlaySound: !0
                }, A.chatOrder++, b.chatHandler.messages[A.chatOrder] = d, b.viewHandler.appendMessage(d))
            };
            ja.prototype.removeAgentFromList = function(a, b, c) {
                var e = A.agents[b];
                if (!e) return A.agents[b] = a, !1;
                b = e.pid;
                if (e.seq.time < a.seq.time ||
                    e.seq.time === a.seq.time && e.seq.inc < a.seq.inc) e.seq = a.seq, e.pid = null;
                else return !1;
                this.totalAgents(this.totalAgents() - 1);
                return this.decrementProfileCount(b, c)
            };
            ja.prototype.decrementProfileCount = function(a, c) {
                var d = A.agentProfiles[a];
                if (d) return d.count--, 1 > d.count ? (delete A.agentProfiles[a], c && b.viewHandler.removeAgent(a), !0) : !1
            };
            ja.prototype.clearAgents = function() {
                this.agentsCount = 0;
                this.totalAgents(0);
                A.agentProfiles = {};
                A.agents = {};
                A.profiles = {};
                b.viewHandler.clearAgentFooter()
            };
            var ea = function() {
                var a =
                    this;
                this.stack = [];
                this.socketConnector = new ka;
                this.stackLock = !1;
                b.eventEmitter.on("socketReady", function() {
                    a.clearStack()
                })
            };
            ea.prototype.initConnector = function() {
                this.socketConnector.init()
            };
            ea.prototype.sendToConnector = function(a, b, d) {
                if (x.connected)
                    if (void 0 !== d || "function" === typeof b) this.safeCallback(a, b, d);
                    else try {
                        this.socketConnector.emit(a, b, d)
                    } catch (e) {
                        c.handleError("Unable to emit to socket connector in sendToConnector for command : " + a + " with data :" + $_TAWK_JSON.stringify(b), e.fileName,
                            e.lineNumber, e.stack)
                    } else this.addToStack(a, b, d)
            };
            ea.prototype.addToStack = function(a, b, c) {
                var e = this;
                if (this.stackLock) return setTimeout(function() {
                    e.addToStack(a, b, c)
                }, 100);
                this.stack.push({
                    command: a,
                    data: b,
                    callback: c
                })
            };
            ea.prototype.clearStack = function() {
                var a = this;
                this.stackLock = !0;
                this.stack.forEach(function(b) {
                    a.sendToConnector(b.command, b.data, b.callback)
                });
                this.stack = [];
                this.stackLock = !1
            };
            ea.prototype.safeCallback = function(a, b, d) {
                var e, g;
                "function" === typeof b && (d = b, b = null);
                e = setTimeout(function() {
                    d(!0);
                    throw Error("Socket server did not execute the callback for " + a + " with data : " + $_TAWK_JSON.stringify(b));
                }, 35E3);
                g = function() {
                    clearTimeout(e);
                    g = function() {};
                    d.apply(null, arguments)
                };
                try {
                    null === b ? this.socketConnector.emit(a, g) : this.socketConnector.emit(a, b, g)
                } catch (h) {
                    c.handleError("Unable to emit to socket connector in safeCallback for command : " + a + " with data :" + $_TAWK_JSON.stringify(b), h.fileName, h.lineNumber, h.stack)
                }
            };
            ea.prototype.disconnectConnector = function() {
                this.socketConnector.disconnectSocket()
            };
            ea.prototype.connectorListeningOn = function(a) {
                return 0 !== this.socketConnector.listeners(a).length
            };
            ea.prototype.isForcedDisconnect = function() {
                return this.socketConnector.forceDisconnected
            };
            var Y = function() {
                this.started = this.maximize = this.isDocumentReady = !1;
                this.previousSessionKey = null;
                this.waitingForLanguage = !1;
                this.startTime = x.startTime;
                this.versionReloadTimeout = null;
                this.dataIsReady = this.viewIsReady = !1
            };
            Y.prototype.load = function() {
                var a = this;
                P.pageId = $_Tawk_AccountKey;
                "undefined" !== typeof P.pageId &&
                    (m.processSettings(x.widgetSettings), this.init(), this.isDocumentReady || (b.eventHandler.listen(document, "DOMContentLoaded", function() {
                        a.init()
                    }, "domloaded"), b.eventHandler.listen(document, "readystatechange", function() {
                        ("complete" === document.readyState || "interactive" === document.readyState && document.body) && a.init()
                    }, "domstatechange"), b.eventHandler.listen(e, "load", function() {
                        a.init()
                    }, "windowload")), b.eventEmitter.on("removeWidget", function(b) {
                        a.removeWidget()
                    }))
            };
            Y.prototype.init = function(a) {
                if (!this.isDocumentReady &&
                    (void 0 !== a && (P.pageId = a), this.isDocumentReady = !0, a = q.parseQueryString(), !a.$_tawk_beacon && "operamini" !== B)) {
                    a.$_tawk_popout && (u.transferKey = a.$_tawk_tk, u.sessionKey = a.$_tawk_sk, h.isPopup = !0);
                    if (a = q.getReloadedScript()) a = q.parseQueryString(a.src), u.restarted = a.restarted, this.maximize = a.maximized;
                    q.parseApi();
                    k.embedded && (h.isEmbedded = !0, B = null);
                    if (!W.isCookieEnabled) return Ra.init();
                    B ? (h.isPopup ? b.viewHandler = new ia : this.initRenderer(B), b.formHandler = new S) : (b.formHandler = new S, b.viewHandler = new ua,
                        b.audioPlayer.initAudioPlayer());
                    b.viewHandler && (b.sessionHandler.setVisitorAttributes(), k.onBeforeLoad(), this.bootStrap())
                }
            };
            Y.prototype.bootStrap = function() {
                var a = this;
                this.dataIsReady = this.viewIsReady = !1;
                setTimeout(function() {
                    b.viewHandler.begin();
                    a.viewIsReady = !0;
                    a.setupDone()
                }, 0);
                setTimeout(function() {
                    g.register()
                }, 0)
            };
            Y.prototype.initRenderer = function(a) {
                switch (a) {
                    case "chrome":
                        b.viewHandler = new va(a);
                        break;
                    case "safari":
                        b.viewHandler = new ma(a);
                        break;
                    case "opera":
                        b.viewHandler = new wa(a);
                        break;
                    case "android":
                        b.viewHandler = new ga(a);
                        break;
                    case "android2.3":
                        b.viewHandler = new xa(a);
                        break;
                    case "android2":
                        b.viewHandler = new ha(a);
                        break;
                    case "firefox":
                        b.viewHandler = new ya(a);
                        break;
                    case "ie":
                        b.viewHandler = 10 > J ? new ha(a) : new za(a);
                        break;
                    case "blackberry":
                        b.viewHandler = new ha(a);
                        break;
                    case "nokia":
                        b.viewHandler = new ha(a);
                        break;
                    case "uc":
                        b.viewHandler = new ga(a)
                }
                b.viewHandler && b.viewHandler.init()
            };
            Y.prototype.begin = function(a) {
                var c = this;
                g.registerStarted = !1;
                g.clearTimers();
                g.registerTime = (new Date).getTime() -
                    g.registerStart;
                g.registerStart = null;
                a.error ? "USER_ERROR" === a.error ? this.hideWidget() : g.retryRegister() : a.cjsv > u.currentVersion ? (e.$_Tawk_VMRC = "undefined" !== typeof e.$_Tawk_VMRC ? e.$_Tawk_VMRC : 0, 10 > e.$_Tawk_VMRC && (this.versionReloadTimeout = setTimeout(function() {
                    c.criticalRefresh(a.cjsv, !0)
                }, 1E3 * e.$_Tawk_VMRC), e.$_Tawk_VMRC++)) : (e.$_Tawk_VMRC = 0, b.activityManager.initActivityReset(), this.started ? this.reinited(a) : (this.started = !0, this.extractRegisterData(a), this.dataIsReady = !0, this.setupDone()))
            };
            Y.prototype.extractRegisterData =
                function(a) {
                    a.wdgt && (a.wdgt.lc !== x.widgetSettings.lc && (this.waitingForLanguage = !0, q.insertScript("https://static-v.tawk.to/526/languages/" + a.wdgt.lc + ".js")), m.processSettings(a.wdgt));
                    "max" !== h.onClickAction || B || (this.maximize = "max" === a.cw, u.chatWindowState(a.cw));
                    u.criticalVersion = a.cjsv || 0;
                    u.visitorSocketServer = a.vss;
                    u.sessionKey = a.sk;
                    u.transferKey = a.tk;
                    u.transferedSession = !!a.ts;
                    u.serverVersion = a.jsv || 0;
                    b.visitorHandler.updateVisitorUUID(a);
                    b.visitorHandler.updateVisitorInformation(a);
                    h.soundOn(a.sdo);
                    h.whiteLabel(a.wl);
                    h.scheduleTimezone = a.wstz;
                    u.prechatFormSubmitted = !!a.pcfs;
                    u.departments = q.isArray(a.dptst) ? a.dptst.reverse() : [];
                    u.pageStatusVersion = a.asver || 0;
                    u.waitTime = void 0 !== a.ewt && 0 !== a.ewt ? 1E3 * a.ewt : 6E4;
                    u.pageStatus(a.ast || "offline");
                    u.chatBubbleClosed(!!a.bblc);
                    P.tawkId = a.twid;
                    P.pageName(a.pgn);
                    A.chatVersion = a.cver || 0;
                    A.chatDepartment = a.dpt || "any";
                    A.chatHistory = a.c || [];
                    A.rating(a.rt || 0)
                };
            Y.prototype.initBuildChat = function() {
                b.chatHandler.parseHistory();
                b.viewHandler.applyWhiteLabelSettings();
                this.showWidget();
                b.socketManager.initConnector();
                x.ready = !0;
                k.onLoad();
                delete x.init;
                (u.currentVersion < u.serverVersion || u.restarted) && q.insertBeaconIframe()
            };
            Y.prototype.reinited = function(a) {
                u.sessionKey !== a.sk ? (this.extractRegisterData(a), b.chatHandler.clearChatMessages(), b.viewHandler.resetView(), b.agents.clearAgents()) : (u.visitorSocketServer = a.vss, u.sessionKey = a.sk, u.transferKey = a.tk, u.transferedSession = !!a.ts, u.serverVersion = a.jsv || 0, b.visitorHandler.updateVisitorUUID(a));
                b.socketManager.initConnector()
            };
            Y.prototype.criticalRefresh = function(a, c, d) {
                var g = this,
                    k = (new Date).getTime(),
                    m = "https://embed.tawk.to/" + P.pageId + "/" + $_Tawk_WidgetId + "?refresh=true&";
                if (h.isPopup) return e.location.reload(!!c);
                this.dataIsReady = this.viewIsReady = !1;
                this.removeWidget();
                c && (m += "restarted=true&");
                d && (m += "maximized=true&");
                m += "v=" + a || u.serverVersion || u.currentVersion;
                delete x.downloaded;
                q.insertScript(m, "TawkScript-" + k);
                var p = setInterval(function() {
                        e.$_Tawk.startTime !== g.startTime && (b = null, clearInterval(p), clearTimeout(g.versionReloadTimeout))
                    },
                    200)
            };
            Y.prototype.removeWidget = function() {
                var a;
                b && (b.viewHandler && b.viewHandler.iframeContainer) && (a = document.getElementById(b.viewHandler.iframeContainer.elementId));
                g.clearTimers();
                b.eventHandler.clearEvents();
                b.activityManager.cleanUp();
                b.socketManager.disconnectConnector();
                b.eventEmitter.removeAllListeners();
                b.scheduler.clearTimer();
                clearTimeout(q.checkWhiteLabelRef);
                a && a.parentNode.removeChild(a)
            };
            Y.prototype.setupDone = function(a) {
                a && (b.languageParser.language = x.language, this.waitingForLanguage = !1);
                this.viewIsReady && (this.dataIsReady && !this.waitingForLanguage) && this.initBuildChat()
            };
            Y.prototype.showWidget = function() {
                b.scheduler.setup();
                !h.isPopup && h.hideWidgetOnLoad || b.viewHandler.show()
            };
            Y.prototype.hideWidget = function() {
                b && b.viewHandler && b.viewHandler.hideWidget()
            };
            x.languageUpdater = function() {
                if (b && b.main && b.main.waitingForLanguage) {
                    b.main.setupDone(!0);
                    try {
                        b.eventEmitter.emit("localeChanged")
                    } catch (a) {
                        c.handleError("Unable to emit locale changed", a.fileName, a.lineNumber, a.stack)
                    }
                }
            };
            var ra = function(a, b) {
                this.language = a;
                this.notFoundCallback = "function" === typeof b ? b : function() {}
            };
            ra.prototype.translate = function(a, b, c, e) {
                var g, h;
                g = [];
                var k = this.language || e;
                if (!k[a]) return this.notFoundCallback(Error("Missing context : {" + a + "}, {" + b + "}")), b;
                e = k[a][b];
                if (!e) return this.notFoundCallback(Error("Missing key : {" + a + "}, {" + b + "}")), b;
                b = e.pluralVars ? e.pluralVars.length : 0;
                h = e.vars ? e.vars.length : 0;
                if (0 < b) {
                    for (a = 0; a < b; a++) g.push(k.pluralFormFunction(c[e.pluralVars[a]]));
                    g = e.message[g.join("_")];
                    for (a = 0; a < b; a++) g = g.replace(RegExp("#" + e.pluralVars[a], "g"), this.escapeStringReplacePlacement(c[e.pluralVars[a]]))
                } else g = e.message;
                if (0 < h)
                    for (a = 0; a < h; a++) g = g.replace(RegExp("#" + e.vars[a], "g"), this.escapeStringReplacePlacement(c[e.vars[a]]));
                return g
            };
            ra.prototype.escapeStringReplacePlacement = function(a) {
                return "string" === typeof a ? a.replace(/\$/g, "$$$") : a
            };
            ra.prototype.hasTranslation = function(a, b, c) {
                c = c || this.language;
                return !!(c && c[a] && c[a][b])
            };
            "undefined" !== typeof module && (module.exports = ra);
            b.eventEmitter =
                new EventEmitter;
            b.eventEmitter.on("error", function(a) {
                c.handleError("EventEmitter on error", a.fileName, a.lineNumber, a.stack)
            });
            b.loggingHandler = new y;
            b.eventHandler = new aa;
            b.activityManager = new H;
            b.scheduler = new O;
            b.main = new Y;
            b.languageParser = new ra(x.language);
            b.socketManager = new ea;
            b.sessionHandler = new Q;
            b.chatHandler = new N;
            b.agents = new ja;
            b.visitorHandler = new E;
            b.audioPlayer = new L;
            g = new R;
            b.fileUploadHandler = new Ga;
            void 0 !== x.downloaded ? (b.eventHandler.clearEvents(), b.eventEmitter.removeAllListeners(),
                b = null) : (x.downloaded = !0, b.main.load())
        } catch (sa) {
            if (c) c.handleError(sa.message, "tawk.js", sa.lineNumber || sa.line, sa.stack);
            else throw Error("tawk : " + sa.message);
        }
    }).call(this, window.$_Tawk);

})(window);
