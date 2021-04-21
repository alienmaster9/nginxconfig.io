(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[306],{5306:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>V});const t={back:"Назад",next:"Дальше",enable:"включить",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"Логирование",reverseProxy:"Обратный прокси",reverseProxyLower:"обратный прокси",restrict:"Ограничить",path:"Путь"};var r=n(2256);const i={title:`${t.nginx}Config`,description:`Самый простой способ настроить производительный, безопасный и стабильный ${t.nginx} сервер.`,singleColumnMode:"Одноколоночный режим",splitColumnMode:"Режим разделения столбца",perWebsiteConfig:"Конфигурация для каждого сайта",addSite:"Добавить сайт",globalConfig:"Глобальная конфигурация",setup:"Настройка",configFiles:"Файлы конфигурации"},a={downloadConfig:"Скачать конфигурацию",copyBase64:"Копировать Base64"},s={backToTop:"Вернуться в начало",thisToolIs:"Этот инструмент",openSourceOnGitHub:"с открытым исходным кодом на GitHub",underThe:"под",mit:"MIT",license:"лицензией!",weWelcomeFeedbackAndContributions:"Мы приветсвуем обратную связь и поддержку.",originallyCreatedBy:"Начало проекта положил",balintSzekeres:"Bálint Szekeres",maintainedBy:"при поддержке",digitalOcean:"DigitalOcean"},l={enableEncryptedSslConnection:`${t.enable} зашифрованные ${t.ssl} соединения`,http2:`${t.http}/2`,enableHttp2Connections:`${t.enable} ${t.http}/2 соединения`,http3:`${t.http}/3`,enableHttp3Connections:`${t.enable} ${t.http}/3 соединения`,portReuse:"Reuseport",enableReuseOfPort:`${t.enable} reuseport to generate a listening socket per worker`,forceHttps:`Использовать только ${t.https}`,hsts:"HSTS",enableStrictTransportSecurity:`${t.enable} Strict Transport Security, требующая HTTPS соединения`,enableIncludeSubDomains:`${t.enable} includeSubDomains директиву, требующая HTTPS соединения для ВСЕХ поддоменов`,enablePreload:`${t.enable} preload директиву, указывающая браузерам всегда устанавливать только HTTPS-соединения`,certificationType:"Тип сертификации",customCertificate:"Другой сертификат",letsEncryptEmail:`${t.letsEncrypt} email`,http3Warning1:"HTTP/3 isn't a standard NGINX module, check the ",http3Warning2:"NGINX QUIC readme ",http3Warning3:" or the ",http3Warning4:"Cloudflare quiche project ",http3Warning5:" for how to build NGINX with HTTP/3!"},p={byDomain:"по домену",enableForThisDomain:`${t.enable} для этого домена`},c={phpIsDisabled:`${t.php} выключен.`,phpCannotBeEnabledWithReverseProxy:`${t.php} не может быть включен, пока включен обратный прокси.`,phpCannotBeEnabledWithPython:`${t.php} не может быть включен, пока включен ${t.python}.`,enablePhp:`${t.enable} ${t.php}`,wordPressRules:`${t.wordPress} правила`,enableWordPressRules:`${t.enable} ${t.wordPress}-специфичные правила`,drupalRules:`${t.drupal} правила`,enableDrupalRules:`${t.enable} ${t.drupal}-специфичные правила`,magentoRules:`${t.magento} правила`,enableMagentoRules:`${t.enable} ${t.magento}-специфичные правила`,joomlaRules:`${t.joomla} правила`,enableJoomlaRules:`${t.enable} ${t.joomla}-специфичные правила`,phpServer:`${t.php} сервер`,phpBackupServer:`${t.php} бекап сервер`,tcp:"TCP",hhvmSocket:"HHVM сокет",php5Socket:"5.x сокет",php70Socket:"7.0 сокет",php71Socket:"7.1 сокет",php72Socket:"7.2 сокет",php73Socket:"7.3 сокет",php74Socket:"7.4 сокет",php80Socket:"8.0 сокет",phpSocket:"PHP сокет",custom:"Другой",disabled:"Выключено"},d={presets:"Пресеты",itLooksLikeYouCustomisedTheConfig:"Похоже, вы уже настроили конфигурацию для этого домена. Выбор нового пресета может привести к сбросу или изменению некоторых настроек, которые Вы настроили ранее.",frontend:"Фронтэнд",nodeJs:"Node.js",singlePageApplication:"Одностраничное приложение"},g={pythonIsDisabled:`${t.python} выключен.`,pythonCannotBeEnabledWithReverseProxy:`${t.python} не может быть включен, пока включен обратный прокси.`,pythonCannotBeEnabledWithPhp:`${t.python} не может быть включен, пока включен ${t.php}.`,enablePython:`${t.enable} ${t.python}`,djangoRules:`${t.django} правила`,enableDjangoRules:`${t.enable} ${t.django}-специфичные правила`},u={reverseProxyIsDisabled:`${t.reverseProxy} выключено.`,reverseProxyCannotBeEnabledWithPhp:`${t.reverseProxy} не может быть включен, пока включен ${t.php}.`,reverseProxyCannotBeEnabledWithPython:`${t.reverseProxy} не может быть включен, пока включен ${t.python}.`,enableReverseProxy:`${t.enable} ${t.reverseProxyLower}`},b={fallbackRouting:"Fallback маршрутизация",fallbackRoutingPhpPath:`Путь к Fallback ${t.php}`,legacyPhpRouting:`Устаревшая маршрутизация ${t.php}`,enableLegacyRouting:`${t.enable} устаревшую маршрутизацию`,routing:"Маршрутизация"},h={domain:"Домен",documentRoot:"Корневая директория",oneOrMoreOtherDomainsAreAlsoNamed:"Один или несколько других доменов также названы",thisWillCauseIssuesWithConfigGeneration:"Это вызовет проблемы с генерацией конфигурации.",wwwSubdomain:"WWW поддомен",cdnSubdomain:"CDN поддомен",redirectSubdomains:"Перенаправлять поддомены",server:"Сервер",listen:"Слушать от адреса"},$={disableForThisDomain:"выключено для этого домена",responseCode:"Код ответа"},m="Onion",y={onion:m,onionLocation:`Расположение ${m}`,provideAnOnionLocationToSetOnionLocationHeader:`Укажите расположение ${m}, чтобы задать заголовок Onion-Location для Вашего сайта.`,letsVisitorsKnownOnionServicesIsAvailable:`Это позволит узнать посетителям, что у Вашего сайта есть ${m}-версия, доступная в браузере Tor.`,learnMoreAboutOnionServices:`Узнайте больше об ${m}`,onionLocationExpectedToEndWithOnion:`Адреса ${m} обычно оканчиваются на \`.onion\`.`},C={https:l,logging:p,php:c,presets:d,python:g,reverseProxy:u,routing:b,server:h,restrict:$,onion:y},f="Mozilla",S="IPv4",P="IPv6",v={sslProfile:`${t.ssl} Профиль`,httpsMustBeEnabledOnOneSite:`${t.https} должен быть включен хотя бы на одном сайте, чтобы сконфигурировать глобальные ${t.https} настройки.`,ocspDnsResolvers:"OCSP DNS Преобразователи",cloudflareResolver:"Cloudflare Преобразователь",googlePublicDns:"Публичные Google DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`Директория ${t.letsEncrypt}`,letsEncryptCertRoot:`Директория сертификата ${t.letsEncrypt}`,mozillaModern:`${f} Modern`,mozillaIntermediate:`${f} Intermediate`,mozillaOld:`${f} Old`,ipv4Only:`только ${S}`,ipv6Only:`только ${P}`,ipv4AndIpv6:`${S} & ${P}`},x={enableFileNotFoundErrorLogging:`${t.enable} логирование ошибок для файлов, которые не были найдены при запросе`,logformat:"log_format",enableCloudflare:"добавить Cloudflare хедеры запроса в дефолтный формат логов",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},T={nginxConfigDirectory:`Директория конфигурации ${t.nginx}`,mb:"MB"},k={gzipCompression:"Gzip сжатие",enableGzipCompression:`${t.enable} gzip сжатие`,brotliCompression:"Brotli сжатие",enableBrotliCompression:`${t.enable} brotli сжатие`,expirationForAssets:"Истечение срока для ассетов",expirationForMedia:"Истечение срока для медиа файлов",expirationForSvgs:"Истечение срока для SVG файлов",expirationForFonts:"Истечение срока для шрифтов",performance:"Производительность"},D={pythonServer:`${t.python} сервер`,pythonMustBeEnabledOnOneSite:`${t.python} должен быть включен как минимум на одном сайте, чтобы сконфигурировать глобальные настройки ${t.python}.`},O={reverseProxyMustBeEnabledOnOneSite:`${t.reverseProxy} должен быть включен как минимум на одном сайте, чтобы сконфигурировать глобальные настройки ${t.reverseProxyLower}.`,seconds:"секунд"},w={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`Во время использования ${t.wordPress}, <code class="slim">'unsafe-eval'</code> часто требуется в Content Security Policy, чтобы панель администратора работала исправно.`,security:"Безопасность"},I={modularizedStructure:"Модульная структура",enableModularizedConfigFiles:`${t.enable} модульную структуру для фйлов конфигурации`,symlinkVhost:"Symlink vhost",enableSymLinksFrom:`${t.enable} symlinks из`,to:"в",shareConfiguration:"Поделиться конфигурацией",resetConfiguration:"Сбросить конфигурацию",resetGlobalConfig:"Сбросить глобальную конфигурацию",resetAllDomains:"Сбросить все домены",removeAllDomains:"Удалить все домены",resetAllDomainsConfig:"Сбросить конфигурации всех доменов",resetDomainConfig:"Сбросить конфигурацию домена",removeDomain:"Удалить домен",yesImSure:"Да, я уверен",noCancel:"Нет, отменить",tools:"Инструменты",resetGlobalConfigBody:"Вы уверены, что хотите сбросить все параметры конфигурации в разделе глобальной конфигурации?",resetAllDomainsConfigBody:"Вы уверены, что хотите сбросить конфигурацию ВСЕХ доменов?",removeAllDomainsBody:"Вы действительно хотите удалить ВСЕ конфигурации домена?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"Вы действительно хотите сбросить все параметры конфигурации для",domain:"домена?",areYouSureYouWantToRemoveThe:"Вы уверены, что желаете удалить ",domainConfiguration:"конфигурацию домена?"},F="Docker",R="Dockerfile",E={docker:F,dockerfile:R,dockerCompose:`${F} Compose`,applyDockerTweaks:`Применить настройки ${F}`,applyDockerTweaksForNginx:`Примените настройки конфигурации для запуска ${t.nginx} с ${F}`,applyDockerTweaksExplainer:`Обновляет пользователя ${t.nginx} на <code class="slim">nginx</code> и pid на <code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`Добавить ${R}, чтобы запустить ${t.nginx} с ${F}`,includeDockerCompose:`Добавить docker-compose, чтобы запустить ${t.nginx} с docker-compose`},N={https:v,logging:x,nginx:T,performance:k,python:D,reverseProxy:O,security:w,tools:I,docker:E},B="Certbot",A={commentOutSslDirectivesInConfiguration:`Закомментируйте директивы, связанные с ${t.ssl} в конфигурации:`,reloadYourNginxServer:`Перезагрузите свой ${t.nginx} сервер:`,obtainSslCertificatesFromLetsEncrypt:`Получите ${t.ssl} сертификат ${t.letsEncrypt} используя ${B}:`,uncommentSslDirectivesInConfiguration:`Раскомментируйте директивы, связанные с ${t.ssl} в конфигурации:`,configureCertbotToReloadNginxOnCertificateRenewal:`Настройте ${B}, чтобы перезагрузить ${t.nginx}, когда сертификаты успешно обновятся:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${B} не нужно настраивать для вашей ${t.nginx} конфигурации.`,certbot:B},L={downloadTheGeneratedConfig:"<b>Скачать</b> сгенерированную конфигурацию:",andUploadItToYourServers:"и <b>загрузить</b> её на Ваш сервер",directory:"директория.",or:"или, ",copyBase64StringOfCompressedConfig:"Скопируйте Base64 c сжатой конфигурацией",pasteItInYourServersCommandLineAndExecute:", вставьте это в Вашу командную строку на сервере и запустите.",navigateToYourNginxConfigurationDirectoryOnYourServer:`Перейдите в <b>папку конфигурации</b> ${t.nginx} на Вашем сервере:`,createABackupOfYourCurrentNginxConfiguration:`Сделайте <b>резервную копию</b> Вашей нынешней ${t.nginx} конфигурации:`,extractTheNewCompressedConfigurationArchiveUsingTar:"<b>Извлеките</b> архив с новой конфигурацией с помощью использованием tar:",download:"Скачать"},W={letsGoLive:"Время запуска!",reloadNginxToLoadInYourNewConfiguration:`Перезагрузите ${t.nginx}, чтобы запустить его с новой конфигурацией:`,goLive:"Запустить!"},H={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"Сгенерируйте <b>ключи Диффи-Хеллмана</b>, запустив следующую команду на своем сервере:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`Создайте директорию хранения <b>ACME-challenge</b> (для <b>${t.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`Больше ничего не требуется, чтобы настроить ${t.ssl} в Вашей ${t.nginx} конфигурации.`,sslInit:`${t.ssl} init`},M={certbot:A,download:L,goLive:W,ssl:H},G={lookingForAPlaceToDeploy:"👋 Ищете место для развертывания новой конфигурации?",tryOutDigitalOceansDroplet:"Попробуйте LEMP Droplet от DigitalOcean с NGINX"},Y={wantToContributeChanges:"👋 Хотите запросить новые функции, внести изменения или перевести инструмент на новый язык?",getInvolvedOnGitHub:"Посмотреть на GitHub"},j={droplet:G,contribute:Y},z={app:i,setup:a,footer:s,domainSections:C,globalSections:N,setupSections:M,callouts:j},V={common:t,languages:r.default,templates:z}}}]);