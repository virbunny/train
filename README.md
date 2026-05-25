# 日本觀光列車｜旅印帖 v54 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v54-180.png`
- `tourist-train-rabbit-icon-v54-192.png`
- `tourist-train-rabbit-icon-v54-512.png`

## 透明桌面圖示處理
- 使用全新圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker cache 名稱已更新為 v54。
- 快取清單沒有沿用舊 icon 檔名。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。

## v54 更新
- 依週報補強 THE ROYAL EXPRESS ～HOKKAIDO CRUISE TRAIN～：2026 為現行北海道運行最後年度，後續轉向「赤い星」。
- 補強くしろ湿原ノロッコ号：2026 現行二代目車輛ラストイヤー／運行終了予定。
- 確認ハローキティ新幹線 2026-05-17 運行終了。
- 確認GRAN 天空 2026-04-24 正式運行，路線難波～極樂橋。
- 補強Les Saveurs 志摩：餐廳觀光列車，區間名古屋～賢島，2026-11-01 DEBUT。
- 更新記錄補上本週週報更新。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v54_weekly_royal_express`。
- 已將 v53 key 加入 LEGACY_KEYS。
