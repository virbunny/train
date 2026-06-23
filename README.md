# 日本觀光列車｜旅印帖 v59 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v59-180.png`
- `tourist-train-rabbit-icon-v59-192.png`
- `tourist-train-rabbit-icon-v59-512.png`
- `日本觀光列車_旅印帖_週報交接_v59.md`

## 透明桌面圖示處理
- 使用全新圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker 快取名稱已更新為 v59。
- 快取清單沒有沿用舊 icon 檔名。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。

## v59 更新
- 36ぷらす3：改為「更新中；2026-09-03 再始動」。
- GRAN 天空：確認為現役主卡，路線難波～極樂橋。
- 天空（2200系）：新增／補為已結束紀錄，狀態為 2026-03-20 定期運行終了；2026-06-27 攝影會。
- 赤い星／青い星：補 2026-06-17～06-23 完成予想デザイン展；仍維持預定追蹤中。
- JR四國四大觀光列車：補 2026 年度下半期運轉日、料金改定、グループシート。
- 富良野・美瑛ノロッコ号：保留並補強 2026-09-23 最終運轉／ラストイヤー。
- くしろ湿原ノロッコ号：保留並補強 2026 現行車輛最後年度／ラストイヤー。
- 清單總數 174 → 175 筆。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v59_targeted_fixes`。
- 已將 v58 key 加入 LEGACY_KEYS。
