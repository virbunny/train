# 日本觀光列車｜旅印帖 v52 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v52-180.png`
- `tourist-train-rabbit-icon-v52-192.png`
- `tourist-train-rabbit-icon-v52-512.png`

## 透明桌面圖示處理
- 使用全新圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker cache 名稱已更新為 v52。
- 快取清單沒有沿用舊 icon 檔名。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。

## v52 更新
- 第一排按鍵「最新更新」改為「更新記錄」。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v52_update_record_label`。
- 已將 v51 key 加入 LEGACY_KEYS。
