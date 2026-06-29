# 日本觀光列車｜旅印帖 v60 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v60-180.png`
- `tourist-train-rabbit-icon-v60-192.png`
- `tourist-train-rabbit-icon-v60-512.png`
- `日本觀光列車_旅印帖_週報交接_v60.md`

## 透明桌面圖示處理
- 使用 v60 圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker 快取名稱已更新為 v60。
- 快取清單沒有沿用舊 icon 檔名。

## v60 更新
- 赤い星／青い星：補正式列車名稱，標註 2027 年起順次運行，仍不可標現役。
- 新增 500系新幹線：2027-01-13 定期運轉終了；2027年7月営業運転終了予定。
- 新增 ドクターイエロー T5：2027年1月検測運転終了予定。
- HIGH RAIL 1375：補 2026年8～9月 MIDNIGHT HIGH RAIL モニターツアー；不新增主卡。
- 確認上週必改項：富良野・美瑛ノロッコ号 2026-09-23 最後運轉、くしろ湿原ノロッコ号 2026 現行車輛最後年度、36ぷらす3 更新中；2026-09-03 再始動、GRAN 天空為現役主卡、Les Saveurs 志摩 2026-11-01 運行開始予定。
- 清單總數 175 → 177 筆。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v60_20260629_weekly_updates`。
- 已將 v59 key 加入 LEGACY_KEYS。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。
