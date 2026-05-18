# 日本觀光列車｜旅印帖 v53 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v53-180.png`
- `tourist-train-rabbit-icon-v53-192.png`
- `tourist-train-rabbit-icon-v53-512.png`

## 透明桌面圖示處理
- 使用全新圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker cache 名稱已更新為 v53。
- 快取清單沒有沿用舊 icon 檔名。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。

## v53 更新
- 依週報更新列車狀態與備註：くしろ湿原ノロッコ号、ハローキティ新幹線、GRAN 天空、はなあかり、Les Saveurs 志摩。
- 更新記錄補上本週週報更新。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v53_weekly_train_updates`。
- 已將 v52 key 加入 LEGACY_KEYS。
