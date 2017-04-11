class Page < ApplicationRecord
  has_one :csscode
  has_one :javascriptcode
  has_one :htmlcode
end
