module ActiveStorageHelper
  def blob_path(blob)
    rails_blob_path(blob) if blob.attached?
  end
end
