# 日本觀光列車｜旅印帖 v61 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v61-180.png`
- `tourist-train-rabbit-icon-v61-192.png`
- `tourist-train-rabbit-icon-v61-512.png`
- `日本觀光列車_旅印帖_週報交接_v61.md`

## v61 更新
- はなあかり：補 2026-07-04 起滋賀／琵琶湖夏季運行；2026 夏：大阪～おごと温泉・大津。
- 伊予灘ものがたり：補 2026-07-11 預定達成累計乘車 25 萬人。
- 赤い星／青い星：再確認正式名稱與 2027 年起順次運行；仍不可標現役。
- 500系新幹線／ドクターイエロー T5：再確認引退時間線。
- 36ぷらす3、GRAN 天空、Les Saveurs 志摩、富良野・美瑛ノロッコ号、くしろ湿原ノロッコ号等必改項已保留。
- 清單總數維持 177 筆。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v61_20260706_weekly_updates`。
- 已將 v60 key 加入 LEGACY_KEYS。

## 透明桌面圖示處理
- 使用 v61 圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker 快取名稱已更新為 v61。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。
